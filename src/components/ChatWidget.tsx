"use client";

import { useEffect, useRef, useState } from "react";

type ChatMessage = { role: "user" | "assistant"; content: string };

const WELCOME: ChatMessage = {
  role: "assistant",
  content: "안녕하세요! 이력, 기술 스택, 참여 프로젝트에 대해 궁금한 점을 물어보세요.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, open]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isStreaming) return;

    setError(null);
    setInput("");

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages([...nextMessages, { role: "assistant", content: "" }]);
    setIsStreaming(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // 웰컴 메시지는 실제 대화가 아니라서 히스토리에서 제외해요.
          messages: nextMessages.slice(-19),
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error("응답을 받지 못했어요.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        assistantText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const next = [...prev];
          next[next.length - 1] = { role: "assistant", content: assistantText };
          return next;
        });
      }
    } catch (err) {
      console.error("[ChatWidget] failed:", err);
      setError("답변을 가져오지 못했어요. 잠시 후 다시 시도해주세요.");
      setMessages((prev) => prev.slice(0, -1));
    } finally {
      setIsStreaming(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "채팅 닫기" : "채팅 열기"}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-ink font-bold text-xl shadow-lg hover:bg-accent-soft transition-colors"
      >
        {open ? "×" : "💬"}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(360px,calc(100vw-2rem))] h-[min(520px,calc(100vh-8rem))] flex flex-col rounded-2xl border border-line-strong bg-bg-card shadow-2xl overflow-hidden">
          <div className="px-4 py-3 border-b border-line flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.12em] text-accent">
              PORTFOLIO ASSISTANT
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="채팅 닫기"
              className="text-muted-weak hover:text-fg text-lg leading-none"
            >
              ×
            </button>
          </div>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-[13px] leading-[1.6] break-words ${
                  m.role === "user"
                    ? "self-end bg-accent text-accent-ink"
                    : "self-start bg-bg-card-strong text-fg-soft"
                }`}
              >
                {m.content || (isStreaming && i === messages.length - 1 ? "…" : "")}
              </div>
            ))}
            {error && <div className="self-start text-xs text-warn">{error}</div>}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="border-t border-line p-3 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="궁금한 점을 물어보세요"
              disabled={isStreaming}
              className="flex-1 min-w-0 rounded-lg bg-bg border border-line-strong px-3 py-2 text-sm text-fg placeholder:text-muted-weak focus:outline-none focus:border-accent/60"
            />
            <button
              type="submit"
              disabled={isStreaming || !input.trim()}
              className="rounded-lg bg-accent text-accent-ink text-sm font-semibold px-3.5 py-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              전송
            </button>
          </form>
        </div>
      )}
    </>
  );
}
