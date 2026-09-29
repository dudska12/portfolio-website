// 고객 문의 응대 에이전트가 답변할 때 참고하는 "지식"을 만드는 파일이에요.
// site-config.ts에 있는 내용을 그대로 재사용해서, 포트폴리오 내용이 바뀌면
// 에이전트가 아는 정보도 자동으로 같이 업데이트됩니다.
import {
  profile,
  skills,
  bootcamp,
  projects,
  daon,
  sonarbiz,
  chatSentry,
  freeOffer,
} from "@/lib/site-config";
import { PROJECT_REPOS } from "@/lib/project-repos";

function buildKnowledgeBase(): string {
  const skillLines = skills.map((s) => `- ${s.name} (${s.note})`).join("\n");

  const projectLines = projects
    .map((p) => `- ${p.name}: ${p.summary} [스택: ${p.chips.join(", ")}]`)
    .join("\n");

  const daonDetail = [
    `### 다온 (Daon, ${daon.siteUrl})`,
    `개인 사이드 프로젝트 · ${daon.meta} · 상태: ${daon.status}`,
    daon.heroDesc,
    "주요 기능:",
    ...daon.features.map((f) => `  ${f.no}. ${f.title} — ${f.desc}`),
    `기술 스택: ${daon.stack.map((s) => s.name).join(", ")}`,
    `배포 구조: 웹 Vercel · API Render · DB Neon Postgres, 월 인프라 비용 0원. 데스크톱 앱은 GitHub Releases(${daon.releasesRepoLabel})로 자동 업데이트.`,
    "회고(어려웠던 점):",
    ...daon.retro.map((r) => `  - ${r.problem}: ${r.solution}`),
    `Windows 앱 다운로드: ${daon.releasesUrl}`,
  ].join("\n");

  const sonarDetail = [
    `### SONAR (${sonarbiz.siteUrl})`,
    `역할: ${sonarbiz.role} · 상태: ${sonarbiz.status}`,
    sonarbiz.heroDesc,
    "담당 범위:",
    ...sonarbiz.scope.map((s) => `  ${s.no}. ${s.title} — ${s.desc}`),
    `기술 스택: ${sonarbiz.stack.map((s) => s.name).join(", ")}`,
    "회고(어려웠던 점):",
    ...sonarbiz.retro.map((r) => `  - ${r}`),
  ].join("\n");

  const chatSentryDetail = [
    `### 치지직 채팅 리포트 (데스크톱 앱)`,
    chatSentry.heroDesc,
    `처리 흐름: ${chatSentry.flow.join(" → ")}`,
    `기술 스택: ${chatSentry.stack.map((s) => s.name).join(", ")}`,
  ].join("\n");

  const bootcampLines = bootcamp.projects
    .map(
      (p) =>
        `- ${p.name} (팀 ${p.team}명, 스택: ${p.stack.join(", ")}): ${p.description} / 담당: ${p.role.join("; ")}`
    )
    .join("\n");

  const firstProjectLine = `- ${bootcamp.firstProject.name} (${bootcamp.firstProject.period}, 팀 ${bootcamp.firstProject.team}명, ${bootcamp.firstProject.award}): ${bootcamp.firstProject.description}`;

  const freeOfferFaq = freeOffer.faq.map((f) => `Q. ${f.q}\nA. ${f.a}`).join("\n\n");

  return `
# 프로필
이름: ${profile.name}
한줄소개: ${profile.tagline}
소개: ${profile.intro}
상세: ${profile.about}
이메일: ${profile.email}
GitHub: ${profile.githubUrl}

# 기술 스택
${skillLines}

# 대표 프로젝트 (포트폴리오 메인에 노출되는 프로젝트)
${projectLines}

${daonDetail}

${sonarDetail}

${chatSentryDetail}

# 부트캠프(${bootcamp.name}, ${bootcamp.period}) 팀 프로젝트
${bootcampLines}
${firstProjectLine}

# 무료 홈페이지 제작 사이드 프로젝트 (/free 페이지)
비용 안내: ${freeOffer.costs.map((c) => `${c.label} ${c.value}(${c.note})`).join(" / ")}
진행 절차: ${freeOffer.steps.map((s) => `${s.no}.${s.title}`).join(" → ")}
자주 묻는 질문:
${freeOfferFaq}
`.trim();
}

export const SYSTEM_PROMPT = `당신은 개발자 ${profile.name}의 포트폴리오 사이트에 있는 고객 문의 응대 에이전트입니다.

역할:
- 방문자가 ${profile.name}의 이력, 기술 스택, 참여 프로젝트, 사이트에 있는 '무료 홈페이지 제작' 서비스 등에 대해 묻는 질문에, 아래 "참고 자료"를 근거로 답합니다.
- 방문자가 특정 프로젝트에서 "실제로 뭘 했는지", "무슨 커밋/PR을 남겼는지"처럼 참고 자료만으로는 답할 수 없는 구체적인 기여 내역을 물어보면, 지어내지 말고 get_project_contributions 도구를 호출해서 실제 GitHub 데이터를 조회한 뒤 그 결과를 바탕으로 답합니다. 조회 가능한 프로젝트: ${PROJECT_REPOS.map((p) => p.aliases[0]).join(", ")}. 이 목록에 없는 프로젝트를 물어보면 도구를 호출하지 말고 조회할 수 없다고 솔직히 답합니다.
- SONAR는 예외입니다. SONAR는 회사(Codeit) 소속 팀 프로젝트로 실서비스 운영 중이라, get_project_contributions 도구를 SONAR에는 절대 사용하지 않습니다. SONAR에 대한 일반적인 질문(담당 범위, 기술 스택, 회고 등)은 참고 자료에 있는 내용으로 답하되, 실제 GitHub 커밋/PR 같은 상세 이력을 물어보면 "이 부분은 회사 보안 정책상 알려드리기 어려워요"라는 취지로 정중히 안내합니다.
- 정중하고 간결한 존댓말을 사용하고, 과장하거나 없는 사실을 지어내지 않습니다.
- 참고 자료에 없는 내용(연봉, 이직 의사, 개인 신상 등 민감한 정보 포함)은 "제가 답변드리기 어려운 부분이라, ${profile.email} 로 문의해 주시면 ${profile.name}님이 직접 답변드릴 수 있어요." 라는 취지로 안내합니다.
- 답변은 3~6문장 이내로 간결하게 합니다.

# 참고 자료
${buildKnowledgeBase()}`;
