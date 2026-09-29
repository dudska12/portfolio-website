import { NextRequest } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "@/lib/chat-knowledge";
import { findProjectRepo } from "@/lib/project-repos";
import { getAuthorContributions } from "@/lib/github";

// 서버 전용 클라이언트예요. ANTHROPIC_API_KEY는 .env.local에만 있고
// 브라우저로는 절대 전달되지 않습니다 (route handler는 서버에서만 실행).
const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// 모델 이름은 console.anthropic.com / docs.claude.com 에서 최신값을 확인하세요.
const MODEL = "claude-sonnet-5";
const MAX_TOKENS = 700;
const MAX_MESSAGES = 20; // 대화가 너무 길어지면 비용이 커지니 히스토리 개수를 제한해요.
const MAX_MESSAGE_LENGTH = 2000; // 한 메시지당 글자수 제한 (악의적으로 긴 입력 방지)
const MAX_TOOL_ROUNDS = 4; // 도구 호출 루프가 무한히 도는 걸 막는 안전장치예요.

type ChatMessage = { role: "user" | "assistant"; content: string };

// 이 에이전트가 쓸 수 있는 유일한 도구예요.
// "등록된 프로젝트 이름"을 받으면, 실제 GitHub 저장소에 가서 정남영이 남긴
// 커밋/PR을 조회해와요. Claude는 이 설명을 보고 언제 이 도구를 써야 할지 스스로 판단해요.
const TOOLS: Anthropic.Tool[] = [
  {
    name: "get_project_contributions",
    description:
      "등록된 프로젝트의 실제 GitHub 저장소에서 정남영이 남긴 커밋과 PR 목록을 조회합니다. " +
      "'거기서 뭐 했어', '무슨 PR 남겼어', '커밋 보여줘', '실제로 참여한 내용 확인해줘' 처럼 " +
      "참고 자료에 없는 구체적인 기여 내역을 물어볼 때만 사용하세요.",
    input_schema: {
      type: "object",
      properties: {
        project: {
          type: "string",
          description: "방문자가 언급한 프로젝트 이름 그대로 (예: '최애의 포토')",
        },
      },
      required: ["project"],
    },
  },
];

async function executeTool(block: Anthropic.ToolUseBlock): Promise<string> {
  if (block.name !== "get_project_contributions") {
    return `알 수 없는 도구예요: ${block.name}`;
  }

  const input = block.input as { project?: unknown };
  const project = typeof input.project === "string" ? input.project : "";

  // SONAR는 회사(Codeit) 소속 팀 프로젝트라, 모델이 지시를 어기고 이 도구를 호출하더라도
  // 실제로 GitHub을 조회하지 않고 정책 안내 문구만 돌려주는 이중 안전장치예요.
  if (/sonar|소나/i.test(project)) {
    return "SONAR는 회사 팀 프로젝트라 실제 GitHub 커밋/PR 조회는 회사 보안 정책상 제공할 수 없어요. 방문자에게 그렇게 안내해주세요.";
  }

  const repoInfo = findProjectRepo(project);

  if (!repoInfo) {
    return `"${project}"라는 이름의 프로젝트는 GitHub 조회 목록에 등록되어 있지 않아요. 등록된 프로젝트가 아니라고 방문자에게 솔직히 안내해주세요.`;
  }

  try {
    const summary = await getAuthorContributions(repoInfo.repos, repoInfo.username);
    return JSON.stringify(summary);
  } catch (err) {
    console.error("[api/chat] github lookup failed:", err);
    return "GitHub 조회 중 오류가 발생했어요. 방문자에게 잠시 후 다시 시도해달라고 안내해주세요.";
  }
}

// 실제 "에이전트 루프"예요: Claude를 호출 → 도구를 쓰겠다고 하면 실행 →
// 결과를 다시 넘겨서 재호출 → 더 이상 도구가 필요 없다고 판단할 때까지 반복해요.
async function runAgentLoop(initialMessages: Anthropic.MessageParam[]): Promise<string> {
  const conversation: Anthropic.MessageParam[] = [...initialMessages];

  for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
    const response = await anthropic.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: SYSTEM_PROMPT,
      tools: TOOLS,
      messages: conversation,
    });

    if (response.stop_reason !== "tool_use") {
      return response.content
        .filter((block): block is Anthropic.TextBlock => block.type === "text")
        .map((block) => block.text)
        .join("\n")
        .trim();
    }

    // Claude가 도구를 호출하겠다고 응답한 내용을 대화 기록에 그대로 추가해요.
    conversation.push({ role: "assistant", content: response.content });

    const toolUseBlocks = response.content.filter(
      (block): block is Anthropic.ToolUseBlock => block.type === "tool_use"
    );

    const toolResults: Anthropic.ToolResultBlockParam[] = await Promise.all(
      toolUseBlocks.map(async (block) => ({
        type: "tool_result" as const,
        tool_use_id: block.id,
        content: await executeTool(block),
      }))
    );

    // 도구 실행 결과를 "user" 턴으로 돌려줘야 Claude가 다음 턴에 참고할 수 있어요.
    conversation.push({ role: "user", content: toolResults });
  }

  return "죄송해요, 조회에 시간이 너무 걸려서 답변을 완성하지 못했어요. 조금 더 구체적으로 다시 질문해 주시겠어요?";
}

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json(
      { error: "ANTHROPIC_API_KEY가 설정되지 않았어요. .env.local을 확인하세요." },
      { status: 500 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid json" }, { status: 400 });
  }

  const rawMessages = Array.isArray(body.messages) ? body.messages : [];
  if (rawMessages.length === 0) {
    return Response.json({ error: "messages required" }, { status: 400 });
  }
  if (rawMessages.length > MAX_MESSAGES) {
    return Response.json({ error: "대화가 너무 길어요. 새로고침 후 다시 시작해주세요." }, { status: 400 });
  }

  // 클라이언트가 보낸 값을 그대로 믿지 않고, role/content 형태와 길이를 한 번 더 검증해요.
  const messages: Anthropic.MessageParam[] = rawMessages
    .filter(
      (m): m is ChatMessage =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_LENGTH) }));

  if (messages.length === 0) {
    return Response.json({ error: "messages required" }, { status: 400 });
  }

  let finalText: string;
  try {
    finalText = await runAgentLoop(messages);
  } catch (err) {
    console.error("[api/chat] agent loop failed:", err);
    return Response.json({ error: "에이전트 호출에 실패했어요." }, { status: 502 });
  }

  // 도구 호출 루프 특성상 답이 나오기 전까진 스트리밍할 게 없어서,
  // 완성된 답을 한 번에 흘려보내요. (프런트는 스트림 리더를 그대로 써도 문제없어요.)
  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(finalText));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
