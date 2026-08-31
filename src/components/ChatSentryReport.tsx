import { chatSentry } from "@/lib/site-config";

type Report = typeof chatSentry.report;

const toneBar = "h-2 rounded-full overflow-hidden flex bg-[#141718] border border-line";

export function ChatSentryReport({ report }: { report: Report }) {
  return (
    <div className="p-5 md:p-7 flex flex-col gap-8">
      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-2">
          방송 리포트 · {report.broadcaster}
        </div>
        <div className="text-sm text-muted-strong">
          {report.start} → {report.end} · {report.durationMin}분 방송
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4.5">
          <div className="border border-line-strong/70 rounded-xl px-4 py-3.5 bg-bg-card-strong">
            <div className="font-mono text-xl font-bold">{report.totalChats.toLocaleString()}</div>
            <div className="text-xs text-muted-weak mt-1">총 채팅 수</div>
          </div>
          <div className="border border-line-strong/70 rounded-xl px-4 py-3.5 bg-bg-card-strong">
            <div className="font-mono text-xl font-bold">{report.viewers.toLocaleString()}명</div>
            <div className="text-xs text-muted-weak mt-1">참여 시청자</div>
          </div>
          <div className="border border-line-strong/70 rounded-xl px-4 py-3.5 bg-bg-card-strong">
            <div className="font-mono text-xl font-bold text-accent">{report.game}</div>
            <div className="text-xs text-muted-weak mt-1">
              게임중 {report.flowMin.gaming}분 · 대화중 {report.flowMin.talk}분 · 휴식중{" "}
              {report.flowMin.rest}분
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <span className="font-mono text-[10px] tracking-[0.12em] text-ok border border-ok/30 px-2.5 py-1 rounded-full">
            분위기 · {report.mood.label}
          </span>
          <span className="text-sm text-muted-strong">{report.mood.summary}</span>
        </div>
        <p className="m-0 text-sm leading-[1.8] text-muted-strong border-l-2 border-line-strong pl-4 break-keep">
          {report.mood.narrative}
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className={`${toneBar} flex-1`}>
            <div className="bg-ok" style={{ width: `${report.mood.sentiment.positive}%` }} />
            <div className="bg-[#3a3f42]" style={{ width: `${report.mood.sentiment.neutral}%` }} />
            <div className="bg-warn" style={{ width: `${report.mood.sentiment.negative}%` }} />
          </div>
          <span className="font-mono text-[11px] text-muted-weak whitespace-nowrap">
            긍정 {report.mood.sentiment.positive}% · 중립 {report.mood.sentiment.neutral}% · 부정{" "}
            {report.mood.sentiment.negative}%
          </span>
        </div>
        <div className="text-xs text-muted-weak mt-2">
          웃음 표현 비율 {report.mood.laughRatio}% · 하이라이트 구간 {report.highlights.length}곳 감지됨
        </div>
      </div>

      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-3 uppercase">
          하이라이트 구간
        </div>
        <div className="flex flex-wrap gap-2">
          {report.highlights.map((h) => (
            <span
              key={h.time}
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-line-strong bg-bg-card-strong text-fg-soft"
            >
              {h.time} · {h.count}개
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-3 uppercase">
            채팅왕 TOP 10
          </div>
          <div className="border border-line-strong/70 rounded-xl overflow-hidden">
            {report.topChatters.map((c) => (
              <div
                key={c.rank}
                className="flex items-center justify-between px-4 py-2.5 border-b border-line/70 last:border-b-0 bg-bg-card text-sm"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-dim w-4">{c.rank}</span>
                  <span className="text-fg-soft">{c.name}</span>
                </span>
                <span className="font-mono text-xs text-muted-weak">{c.count}개</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-weak mt-2.5 leading-[1.7]">
            TOP 10이 전체 채팅의 {report.participation.topShare}%를 차지 · 참여자 중{" "}
            {report.participation.oneTimeCount}명({report.participation.oneTimeShare}%)은 단 한 번만
            채팅
          </div>
        </div>

        <div>
          <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-3 uppercase">
            후원 TOP 5 · 총 {report.donation.total.toLocaleString()}원
          </div>
          <div className="border border-line-strong/70 rounded-xl overflow-hidden">
            {report.donation.top.map((d) => (
              <div
                key={d.rank}
                className="flex items-center justify-between px-4 py-2.5 border-b border-line/70 last:border-b-0 bg-bg-card text-sm"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-dim w-4">{d.rank}</span>
                  <span className="text-fg-soft">{d.name}</span>
                </span>
                <span className="font-mono text-xs text-accent">{d.amount.toLocaleString()}원</span>
              </div>
            ))}
          </div>
          <div className="text-xs text-muted-weak mt-2.5 leading-[1.7]">
            게임중 {report.donation.flow.gaming.toLocaleString()}원 · 대화중{" "}
            {report.donation.flow.talk.toLocaleString()}원 · 휴식중{" "}
            {report.donation.flow.rest.toLocaleString()}원
          </div>
        </div>
      </div>

      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-3 uppercase">
          그 순간 채팅
        </div>
        <div className="flex flex-col gap-3">
          {report.moments.map((m) => (
            <div key={m.title} className="border border-line-strong/60 rounded-xl px-5 py-4.5 bg-bg-card">
              <div className="text-sm font-semibold mb-2.5">
                {m.title} <span className="text-muted-weak font-normal">({m.time} 경)</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {m.quotes.map((q, i) => (
                  <div key={i} className="text-[13px] leading-[1.7] text-muted-strong break-keep">
                    {q.donor && <span className="mr-1">💰</span>}
                    <span className="text-fg-soft font-medium">{q.author}</span>: {q.text}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-muted-weak mb-3 uppercase">
          자주 나온 단어 TOP 20
        </div>
        <div className="flex flex-wrap gap-2">
          {report.topWords.map((w) => (
            <span
              key={w.word}
              className="font-mono text-xs px-3 py-1.5 rounded-full border border-line-strong bg-bg-card-strong text-fg-soft"
            >
              {w.word} <span className="text-dim">{w.count}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
