"use client";

import { useState } from "react";
import Image from "next/image";
import { BackLink } from "@/components/BackLink";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { daon } from "@/lib/site-config";

export default function DaonPage() {
  const [tab, setTab] = useState(0);
  const activeShot = daon.shots[tab];

  return (
    <>
      <BackLink />

      <div className="max-w-[1080px] mx-auto px-4 sm:px-8">
        <header className="flex items-center justify-between gap-3 py-7 border-b border-line">
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <span className="w-[26px] h-[26px] border-[1.5px] border-accent rounded-md grid place-items-center shrink-0">
              <span className="w-2 h-2 bg-accent rounded-sm animate-pulse-dot" />
            </span>
            <span className="font-mono text-xs sm:text-sm tracking-[0.18em] uppercase whitespace-nowrap">
              {daon.appName}
            </span>
          </div>
          <nav className="flex gap-4 sm:gap-7 text-xs sm:text-sm text-muted-strong overflow-x-auto no-scrollbar">
            <a href="#screens" className="text-muted-strong hover:text-fg whitespace-nowrap">
              동작 화면
            </a>
            <a href="#deploy" className="text-muted-strong hover:text-fg whitespace-nowrap">
              배포 구조
            </a>
            <a href="#stack" className="text-muted-strong hover:text-fg whitespace-nowrap">
              기술 스택
            </a>
          </nav>
        </header>

        <section className="py-24 pb-[72px] grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-14 items-start">
          <div>
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-accent/28 rounded-full font-mono text-[11px] tracking-[0.12em] text-accent mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-dot" />
              PERSONAL PROJECT · {daon.meta} · {daon.year}
            </div>
            <h1 className="m-0 mb-5.5 text-[38px] md:text-[62px] leading-[1.06] tracking-tight font-bold text-balance break-keep">
              {daon.heroTitleLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              <span className="text-accent">{daon.heroTitleHighlight}</span> {daon.heroTitleSuffix}
            </h1>
            <p className="m-0 mb-9 text-[17px] leading-[1.75] text-muted max-w-[46ch] break-keep">
              {daon.heroDesc}
            </p>
            <div className="flex gap-3.5 items-center flex-wrap">
              <a
                href={daon.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-[10px] bg-accent text-accent-ink text-[15px] font-semibold"
              >
                웹에서 바로 써보기 →
              </a>
              <a
                href="#screens"
                className="inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-[10px] border border-line-strong text-fg text-[15px] font-medium"
              >
                동작 화면 보기
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-line-strong/70 rounded-2xl bg-gradient-to-b from-bg-card-strong to-bg-card p-6.5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4.5">
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted-weak">STATUS</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-ok border border-ok/30 bg-ok/8 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-ok animate-pulse-dot" />
                  {daon.status}
                </span>
              </div>
              <div className="text-xl font-semibold mb-2">{daon.appName}</div>
              <div className="font-mono text-xs text-muted-weak mb-5.5">
                {daon.meta} · Next.js · NestJS
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {daon.stats.map((s) => (
                  <div
                    key={s.label}
                    className="border border-line-strong/70 rounded-xl px-3 py-3.5 bg-bg-card text-center"
                  >
                    <div className="font-mono text-lg font-bold text-accent">{s.value}</div>
                    <div className="text-[11px] text-muted-weak mt-1 leading-[1.4]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border border-line-strong/70 rounded-2xl bg-gradient-to-b from-bg-card-strong to-bg-card p-6.5 relative overflow-hidden">
              <div className="flex items-center justify-between mb-4.5">
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted-weak">DOWNLOAD</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.1em] text-ok border border-ok/30 bg-ok/8 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-ok" />
                  AVAILABLE
                </span>
              </div>
              <div className="text-xl font-semibold mb-2">{daon.appName} for Windows</div>
              <div className="font-mono text-xs text-muted-weak mb-5.5">
                v{daon.download.version} · Electron · x64 · {daon.download.buildSize}
              </div>

              <a
                href={daon.releasesUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 rounded-[10px] bg-accent text-accent-ink text-[15px] font-semibold flex items-center justify-center gap-2.5"
              >
                ⬇ 다운로드
              </a>

              <div className="mt-4.5 pt-4.5 border-t border-line text-[13px] leading-[1.7] text-muted-strong break-keep">
                {daon.download.notice}
              </div>
            </div>
          </div>
        </section>

        <section id="screens" className="pt-10 pb-[88px]">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              01 / 실제 화면
            </h2>
            <span className="text-[13px] text-muted-weak">스크린샷 · GIF</span>
          </div>

          <div className="flex gap-2 flex-wrap mb-5">
            {daon.shots.map((shot, i) => (
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
              <span className="ml-3 font-mono text-[11px] text-muted-weak">{activeShot.title}</span>
            </div>
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
          </div>
          <p className="mt-4 text-sm leading-[1.7] text-muted-strong max-w-[60ch] break-keep">
            {activeShot.desc}
          </p>
        </section>

        <section className="pb-[88px]">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              02 / 주요 기능
            </h2>
            <span className="text-[13px] text-muted-weak">what it does</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {daon.features.map((f) => (
              <div
                key={f.no}
                className="grid grid-cols-[52px_1fr] md:grid-cols-[64px_1fr] gap-5 md:gap-6 items-start border border-line-strong/60 rounded-2xl px-5 md:px-6.5 py-5.5"
              >
                <div className="font-mono text-2xl md:text-[26px] font-bold text-[#33383c] leading-none">
                  {f.no}
                </div>
                <div>
                  <div className="text-base md:text-[17px] font-semibold mb-1.5">{f.title}</div>
                  <div className="text-sm leading-[1.75] text-muted-strong break-keep">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="stack" className="pb-[88px]">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              03 / 기술 스택
            </h2>
            <span className="text-[13px] text-muted-weak">what it&apos;s built with</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {daon.stack.map((item) => (
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
                <p className="m-0 text-sm leading-[1.7] text-muted-strong break-keep">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-3.5 border border-line-strong/70 rounded-2xl p-6.5 bg-bg-card">
            <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-4.5">
              DATA FLOW
            </div>
            <div className="flex items-center gap-3 flex-wrap font-mono text-xs">
              {daon.flow.map((node, i) => (
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

        <section id="deploy" className="pb-[88px]">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              04 / 배포 구조
            </h2>
            <span className="text-[13px] text-muted-weak">월 인프라 비용 0원</span>
          </div>

          <div className="border border-line-strong/70 rounded-2xl overflow-hidden bg-bg-card mb-3.5">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line bg-bg-card-strong">
              <span className="w-2.5 h-2.5 rounded-full bg-[#33383c]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#33383c]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#33383c]" />
              <span className="ml-3 font-mono text-[11px] text-muted-weak">architecture</span>
            </div>
            <pre className="m-0 px-5 py-6 overflow-x-auto text-[12px] md:text-[13px] leading-[1.7] text-fg-soft bg-[#0a0c0d] font-mono whitespace-pre">
              {daon.deployDiagram}
            </pre>
          </div>

          <div className="flex flex-col gap-2.5">
            {daon.deployNotes.map((n) => (
              <div
                key={n.label}
                className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-6 items-start border border-line-strong/60 rounded-2xl px-5 md:px-6.5 py-5"
              >
                <div className="font-mono text-[11px] tracking-[0.12em] text-accent uppercase">
                  {n.label}
                </div>
                <div className="text-sm leading-[1.75] text-muted-strong break-keep">{n.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-[88px]">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              05 / 회고 · 어려웠던 점
            </h2>
          </div>
          <div className="flex flex-col gap-2.5">
            {daon.retro.map((r) => (
              <div
                key={r.problem}
                className="border border-line-strong/60 rounded-2xl px-6.5 py-5.5"
              >
                <div className="font-mono text-[11px] tracking-[0.12em] text-warn mb-2.5">
                  PROBLEM · {r.problem}
                </div>
                <div className="text-sm leading-[1.75] text-muted-strong break-keep">{r.solution}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="site" className="pb-24">
          <div className="flex items-baseline justify-between gap-6 mb-6.5 border-t border-line pt-10">
            <h2 className="m-0 text-[15px] font-mono tracking-[0.16em] text-muted-weak uppercase">
              06 / 사이트
            </h2>
          </div>
          <div className="border border-line-strong rounded-2xl p-8 bg-bg-card flex flex-col gap-6">
            <div>
              <span className="font-mono text-[11px] tracking-[0.14em] text-muted-weak">
                LIVE SERVICE
              </span>
              <div className="text-xl font-semibold mt-2">{daon.appName}</div>
              <p className="mt-2.5 mb-0 text-sm leading-[1.7] text-muted-strong max-w-[60ch] break-keep">
                {daon.cta.desc}
              </p>
            </div>
            <div className="flex gap-3.5 items-center flex-wrap">
              <a
                href={daon.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-[10px] bg-accent text-accent-ink text-[15px] font-semibold"
              >
                웹에서 써보기 →
              </a>
              <a
                href={daon.releasesUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-5.5 py-3.5 rounded-[10px] border border-line-strong text-fg text-[15px] font-medium"
              >
                Windows 앱 받기 →
              </a>
            </div>
            <p className="m-0 text-xs text-muted-weak break-keep">{daon.cta.note}</p>
          </div>
        </section>

        <footer className="py-8 pb-16 border-t border-line flex justify-between items-center gap-5 flex-wrap">
          <span className="font-mono text-[11px] tracking-[0.12em] text-dim">
            {daon.appName} · BUILT BY {daon.author}
          </span>
          <span className="font-mono text-[11px] text-dim">{daon.contact}</span>
        </footer>
      </div>
    </>
  );
}
