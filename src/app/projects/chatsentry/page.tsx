"use client";

import { useState } from "react";
import Image from "next/image";
import { BackLink } from "@/components/BackLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { ChatSentryReport } from "@/components/ChatSentryReport";
import { chatSentry } from "@/lib/site-config";

export default function ChatSentryPage() {
  const [tab, setTab] = useState(0);
  const activeShot = chatSentry.shots[tab];

  return (
    <>
      <BackLink />

      <div className="max-w-[1080px] mx-auto px-8">
        <header className="flex items-center justify-between py-7 border-b border-line">
          <div className="flex items-center gap-3">
            <span className="w-[26px] h-[26px] border-[1.5px] border-accent rounded-md grid place-items-center">
              <span className="w-2 h-2 bg-accent rounded-sm animate-pulse-dot" />
            </span>
            <span className="font-mono text-sm tracking-[0.18em] uppercase">
              {chatSentry.appName}
            </span>
          </div>
          <nav className="flex gap-7 text-sm text-muted-strong">
            <a href="#screens" className="text-muted-strong hover:text-fg">
              동작 화면
            </a>
            <a href="#stack" className="text-muted-strong hover:text-fg">
              기술 스택
            </a>
            <a href="#source" className="text-muted-strong hover:text-fg">
              소스코드
            </a>
          </nav>
        </header>

        <section className="py-24 pb-[72px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-accent/28 rounded-full font-mono text-[11px] tracking-[0.12em] text-accent mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              PERSONAL PROJECT · 2026
            </div>
            <h1 className="m-0 mb-5.5 text-[38px] md:text-[62px] leading-[1.06] tracking-tight font-bold text-balance">
              {chatSentry.heroTitleLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <span className="text-accent">{chatSentry.heroTitleHighlight}</span>{" "}
              {chatSentry.heroTitleSuffix}
            </h1>
            <p className="m-0 mb-9 text-[17px] leading-[1.75] text-muted max-w-[46ch]">
              {chatSentry.heroDesc}
            </p>
            <div className="flex gap-3.5 items-center flex-wrap">
              <a
                href="#screens"
                className="inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-[10px] bg-accent text-accent-ink text-[15px] font-semibold"
              >
                동작 화면 보기 →
              </a>
              <a
                href="#stack"
                className="inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-[10px] border border-line-strong text-fg text-[15px] font-medium"
              >
                기술 스택
              </a>
            </div>
          </div>

          <div className="border border-line-strong/70 rounded-2xl bg-gradient-to-b from-bg-card-strong to-bg-card p-6.5 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4.5">
              <span className="font-mono text-[11px] tracking-[0.14em] text-muted-weak">
                DOWNLOAD
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-warn border border-warn/30 bg-warn/8 px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-warn" />
                PENDING
              </span>
            </div>
            <div className="text-xl font-semibold mb-2">{chatSentry.appName} for Windows</div>
            <div className="font-mono text-xs text-muted-weak mb-5.5">
              v{chatSentry.version} · Electron · x64 · {chatSentry.buildSize}
            </div>

            <button
              type="button"
              disabled
              className="w-full py-4 rounded-[10px] border border-dashed border-line-strong bg-white/3 text-muted-weak text-[15px] font-semibold cursor-not-allowed flex items-center justify-center gap-2.5"
            >
              <span className="text-[13px]">🔒</span> 다운로드 준비 중
            </button>

            <div className="mt-4.5 pt-4.5 border-t border-line text-[13px] leading-[1.7] text-muted-strong">
              현재 실행 파일은 <strong className="text-fg-soft font-semibold">배포하지 않습니다.</strong>{" "}
              플랫폼 이용약관상 별도 허가가 필요한 동작이 포함되어 있어, 승인 절차가 끝날 때까지
              바이너리 배포를 보류합니다.
            </div>
            <div className="mt-3 font-mono text-[11px] text-dim">
              STATUS: awaiting platform approval
            </div>
          </div>
        </section>

        <section id="screens" className="pt-10 pb-[88px]">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              01 / 실제 동작 화면
            </h2>
            <span className="text-[13px] text-muted-weak">스크린샷 · GIF</span>
          </div>

          <div className="flex gap-2 flex-wrap mb-5">
            {chatSentry.shots.map((shot, i) => (
              <button
                key={shot.id}
                type="button"
                onClick={() => setTab(i)}
                className={
                  tab === i
                    ? "px-4 py-2.5 rounded-full border border-accent bg-accent text-accent-ink text-sm font-semibold"
                    : "px-4 py-2.5 rounded-full border border-line-strong bg-transparent text-muted text-sm font-medium"
                }
              >
                {shot.label}
              </button>
            ))}
          </div>

          <div className="border border-line-strong/70 rounded-2xl overflow-hidden bg-bg-card">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg-card-strong">
              <span className="w-2.5 h-2.5 rounded-full bg-[#33383c]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#33383c]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#33383c]" />
              <span className="ml-3 font-mono text-[11px] text-muted-weak">
                {activeShot.title}
              </span>
            </div>
            {activeShot.id === "shot-report" ? (
              <div className="h-[340px] md:h-[520px] overflow-y-auto no-scrollbar bg-[#0a0c0d]">
                <ChatSentryReport report={chatSentry.report} />
              </div>
            ) : (
              <div className="relative h-[340px] md:h-[520px] bg-[#0a0c0d]">
                {activeShot.image ? (
                  <Image
                    src={activeShot.image}
                    alt={activeShot.label}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1080px) 1080px, 100vw"
                  />
                ) : (
                  <ImagePlaceholder label={activeShot.placeholder} />
                )}
              </div>
            )}
          </div>
          <p className="mt-4 text-sm leading-[1.7] text-muted-strong max-w-[60ch]">
            {activeShot.desc}
          </p>
        </section>

        <section id="stack" className="pb-[88px]">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              02 / 기술 스택 &amp; 구현
            </h2>
            <span className="text-[13px] text-muted-weak">what it&apos;s built with</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {chatSentry.stack.map((item) => (
              <div
                key={item.name}
                className="border border-line-strong/70 rounded-2xl p-6 bg-bg-card flex flex-col gap-2.5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm font-medium">{item.name}</span>
                  <span className="font-mono text-[10px] tracking-[0.1em] text-accent border border-accent/22 px-2 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <p className="m-0 text-sm leading-[1.7] text-muted-strong">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-3.5 border border-line-strong/70 rounded-2xl p-6.5 bg-bg-card">
            <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-4.5">
              DATA FLOW
            </div>
            <div className="flex items-center gap-3 flex-wrap font-mono text-xs">
              {chatSentry.flow.map((node, i) => (
                <span key={node}>
                  {i > 0 && <span className="text-dim mr-3">→</span>}
                  <span className="px-3.5 py-2 rounded-lg border border-line-strong bg-bg-card-strong text-fg-soft">
                    {node}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="source" className="pb-24">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              03 / 소스코드
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <a
              href={chatSentry.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="border border-line-strong rounded-2xl p-6.5 bg-bg-card flex flex-col gap-2.5 text-fg hover:border-accent/40 hover:bg-bg-card-strong"
            >
              <span className="font-mono text-[11px] tracking-[0.14em] text-muted-weak">
                GITHUB
              </span>
              <span className="text-lg font-semibold">{chatSentry.repoLabel} ↗</span>
              <span className="text-sm leading-[1.7] text-muted-strong">
                전체 구조와 구현을 코드로 확인할 수 있습니다. 빌드 방법은 README 참고.
              </span>
            </a>
            <div className="border border-line-strong/70 rounded-2xl p-6.5 bg-warn/4">
              <span className="font-mono text-[11px] tracking-[0.14em] text-warn">NOTICE</span>
              <p className="mt-2.5 mb-0 text-sm leading-[1.75] text-muted">
                이 저장소는{" "}
                <strong className="text-fg-soft font-semibold">
                  포트폴리오 목적의 코드 공개
                </strong>
                이며, 실행 파일 배포나 자동 수집 서비스 운영을 위한 것이 아닙니다. 직접 빌드해
                사용할 경우의 책임은 사용자에게 있습니다.
              </p>
            </div>
          </div>
        </section>

        <footer className="py-8 pb-16 border-t border-line flex justify-between items-center gap-5 flex-wrap">
          <span className="font-mono text-[11px] tracking-[0.12em] text-dim">
            {chatSentry.appName} · BUILT BY {chatSentry.author}
          </span>
          <span className="font-mono text-[11px] text-dim">{chatSentry.contact}</span>
        </footer>
      </div>
    </>
  );
}
