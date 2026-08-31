import { BackLink } from "@/components/BackLink";
import { profile, freeOffer } from "@/lib/site-config";
import { supabaseAdmin } from "@/lib/supabase-admin";

// Supabase에서 매 요청마다 최신 신청 데이터를 읽어와야 해서, 이 페이지는
// 정적 캐싱하지 않고 항상 새로 렌더링하도록 강제함.
export const dynamic = "force-dynamic";

const statusClasses: Record<string, string> = {
  완료: "text-accent border-accent/30 bg-accent/10",
  제작중: "text-ok border-ok/30 bg-ok/10",
  대기: "text-muted-strong border-line-strong bg-white/4",
};

type QueueRow = {
  no: string;
  who: string;
  kind: string;
  status: "완료" | "제작중" | "대기";
  link: string;
};

async function getQueue(): Promise<QueueRow[]> {
  const { data, error } = await supabaseAdmin
    .from("free_applications")
    .select("name, business, is_public, status, site_url")
    .order("submitted_at", { ascending: true });

  if (error) {
    // 아직 테이블을 안 만들었거나 연결에 실패한 경우, 페이지가 죽지 않고 빈 상태로 보이게 함.
    console.error("[free page] queue fetch failed:", error.message);
    return [];
  }

  return (data ?? []).map((row, i) => ({
    no: String(i + 1).padStart(2, "0"),
    who: row.is_public ? row.name : "비공개",
    kind: row.business,
    status: row.status as QueueRow["status"],
    link: row.is_public ? row.site_url ?? "" : "",
  }));
}

export default async function FreeWebsitePage() {
  const queue = await getQueue();
  const waitingCount = queue.filter((q) => q.status === "대기").length;
  const isFull = queue.length >= freeOffer.maxApplicants;

  return (
    <>
      <BackLink />

      <div className="max-w-[1080px] mx-auto px-8">
        <section className="pt-16 pb-16">
          <div
            className={`inline-flex items-center gap-2.5 px-3 py-1.5 border rounded-full font-mono text-[11px] tracking-[0.12em] mb-6.5 break-keep ${
              isFull ? "border-line-strong text-muted-strong" : "border-ok/30 text-ok"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                isFull ? "bg-muted-weak" : "bg-ok animate-pulse-dot"
              }`}
            />
            {isFull
              ? "선착순 마감 · 다음 모집 소식은 추후 안내드려요"
              : queue.length > 0
                ? `지금 신청 접수중 · 대기 ${waitingCount}팀`
                : "지금 신청 접수중 · 선착순 모집"}
          </div>
          <h1 className="m-0 mb-6 text-4xl md:text-[60px] leading-[1.08] tracking-tight font-bold text-balance break-keep">
            홈페이지 <span className="text-accent">무료로</span>
            <br />
            만들어 드립니다.
          </h1>
          <p className="m-0 mb-8.5 text-lg leading-[1.8] text-muted max-w-[54ch] break-keep">
            가게, 개인 작업, 작은 팀 — 홈페이지가 필요한데 어디서부터 시작해야 할지 모르겠다면
            신청만 해주세요. 신청하신 순서대로 한 팀씩 직접 만들어 드립니다.{" "}
            <strong className="text-fg font-semibold">제작비는 0원입니다.</strong>
          </p>
          <div className="flex gap-3.5 items-center flex-wrap">
            {isFull ? (
              <span className="inline-flex items-center gap-2.5 px-6 py-4 rounded-[10px] border border-dashed border-line-strong text-muted-weak text-base font-semibold cursor-not-allowed">
                🔒 선착순 마감되었습니다
              </span>
            ) : (
              <a
                href={freeOffer.formUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-[10px] bg-accent text-accent-ink text-base font-semibold"
              >
                구글폼으로 신청하기 →
              </a>
            )}
            <a
              href="#queue"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-[10px] border border-line-strong text-fg text-base font-medium"
            >
              지금까지 만든 사이트
            </a>
          </div>
        </section>

        <section className="pb-18">
          <div className="border border-warn/35 rounded-2xl bg-warn/5 p-8">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="font-mono text-[11px] tracking-[0.14em] text-warn">
                꼭 읽어주세요
              </span>
            </div>
            <h2 className="m-0 mb-3.5 text-2xl font-bold tracking-tight break-keep">
              제작은 무료지만, 도메인·호스팅 비용은 신청자 부담입니다.
            </h2>
            <p className="m-0 mb-5.5 text-[15px] leading-[1.8] text-fg-soft max-w-[70ch] break-keep">
              홈페이지를 인터넷에 띄워두려면 <strong className="text-fg font-semibold">주소(도메인)</strong>과{" "}
              <strong className="text-fg font-semibold">파일을 올려둘 공간(호스팅)</strong>이
              필요합니다. 이 두 가지는 외부 업체에 매년/매월 내는 실비라서 제가 대신 낼 수
              없습니다. 제가 무료로 해드리는 건{" "}
              <strong className="text-fg font-semibold">기획·디자인·제작 작업</strong>입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {freeOffer.costs.map((c) => (
                <div key={c.label} className="border border-line-strong/70 rounded-xl p-4.5 bg-bg-card">
                  <div className="text-[13px] text-muted-strong mb-2">{c.label}</div>
                  <div
                    className={`font-mono text-xl font-bold ${
                      c.tone === "accent" ? "text-accent" : "text-fg"
                    }`}
                  >
                    {c.value}
                  </div>
                  <div className="text-xs text-muted-weak mt-2 leading-[1.6] break-keep">{c.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-20 border-t border-line">
          <div className="pt-11 mb-3">
            <h2 className="m-0 mb-2.5 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
              처음이신가요?
            </h2>
            <p className="m-0 text-base text-muted break-keep">용어 세 개만 알면 충분합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-6.5">
            {freeOffer.basics.map((b) => (
              <div key={b.en} className="border border-line-strong/70 rounded-2xl p-6.5 bg-bg-card">
                <div className="font-mono text-[11px] tracking-[0.14em] text-accent mb-3.5">
                  {b.en}
                </div>
                <div className="text-xl font-bold mb-3">{b.ko}</div>
                <p className="m-0 mb-3.5 text-sm leading-[1.75] text-muted break-keep">{b.desc}</p>
                <div className="text-[13px] leading-[1.7] text-muted-weak border-t border-line pt-3.5 break-keep">
                  비유하면 — {b.metaphor}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20 border-t border-line">
          <div className="pt-11 mb-3">
            <h2 className="m-0 mb-2.5 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
              호스팅, 무료로도 될까요?
            </h2>
            <p className="m-0 text-base text-muted break-keep">{freeOffer.hosting.intro}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-6.5">
            {freeOffer.hosting.options.map((o) => (
              <div
                key={o.title}
                className={`border rounded-2xl p-6.5 bg-bg-card ${
                  o.tone === "accent" ? "border-accent/30" : "border-warn/30"
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-3.5">
                  <span
                    className={`font-mono text-[11px] tracking-[0.12em] px-2.5 py-1 rounded-full border ${
                      o.tone === "accent"
                        ? "text-accent border-accent/30"
                        : "text-warn border-warn/30"
                    }`}
                  >
                    {o.title}
                  </span>
                  <span
                    className={`font-mono text-sm font-bold ${
                      o.tone === "accent" ? "text-accent" : "text-warn"
                    }`}
                  >
                    {o.cost}
                  </span>
                </div>
                <div className="text-base font-semibold mb-2.5 break-keep">{o.forWho}</div>
                <p className="m-0 mb-3.5 text-sm leading-[1.75] text-muted break-keep">
                  {o.detail}
                </p>
                <div className="text-[13px] leading-[1.7] text-muted-weak border-t border-line pt-3.5 break-keep">
                  {o.note}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-20 border-t border-line">
          <h2 className="m-0 mb-7.5 pt-11 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
            진행 방식
          </h2>
          <div className="flex flex-col gap-2.5">
            {freeOffer.steps.map((s) => (
              <div
                key={s.no}
                className="grid grid-cols-[52px_1fr] md:grid-cols-[64px_1fr] gap-5 md:gap-6 items-start border border-line-strong/60 rounded-2xl px-5 md:px-6.5 py-5.5"
              >
                <div className="font-mono text-2xl md:text-[26px] font-bold text-[#33383c] leading-none">
                  {s.no}
                </div>
                <div>
                  <div className="text-base md:text-[17px] font-semibold mb-1.5">{s.title}</div>
                  <div className="text-sm leading-[1.75] text-muted-strong break-keep">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="queue" className="pb-20 border-t border-line">
          <div className="pt-11 flex items-baseline justify-between gap-5 mb-6">
            <h2 className="m-0 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
              신청 순서 &amp; 결과물
            </h2>
            <span className="text-[13px] text-muted-weak break-keep">신청 순서대로 진행됩니다</span>
          </div>
          {queue.length > 0 ? (
            <div className="border border-line-strong/70 rounded-2xl overflow-hidden overflow-x-auto">
              <div className="min-w-[560px]">
                <div className="grid grid-cols-[56px_1.1fr_1fr_100px_110px] md:grid-cols-[72px_1.1fr_1fr_120px_130px] gap-4 px-5 md:px-5.5 py-3.5 bg-bg-card-strong border-b border-line font-mono text-[11px] tracking-[0.12em] text-muted-weak">
                  <span>NO.</span>
                  <span>신청자</span>
                  <span>종류</span>
                  <span>상태</span>
                  <span>링크</span>
                </div>
                {queue.map((q) => (
                  <div
                    key={q.no}
                    className="grid grid-cols-[56px_1.1fr_1fr_100px_110px] md:grid-cols-[72px_1.1fr_1fr_120px_130px] gap-4 px-5 md:px-5.5 py-4.5 border-b border-line/70 last:border-b-0 bg-bg-card items-center text-sm"
                  >
                    <span className="font-mono text-muted-weak">{q.no}</span>
                    <span className="text-fg break-keep">{q.who}</span>
                    <span className="text-muted-strong break-keep">{q.kind}</span>
                    <span>
                      <span
                        className={`font-mono text-[11px] tracking-[0.08em] px-2.5 py-1 rounded-full border ${statusClasses[q.status]}`}
                      >
                        {q.status}
                      </span>
                    </span>
                    <span
                      className={`font-mono text-[13px] ${q.link ? "text-accent" : "text-dim-strong"}`}
                    >
                      {q.link || "—"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="border border-dashed border-line-strong rounded-2xl px-6 py-12 text-center">
              <p className="m-0 text-[15px] text-muted-strong break-keep">아직 신청자가 없습니다.</p>
              <p className="m-0 mt-1.5 text-sm text-muted-weak break-keep">
                첫 번째로 신청해주시는 분의 사이트가 여기 가장 먼저 올라갑니다.
              </p>
            </div>
          )}
          <p className="mt-3.5 text-[13px] leading-[1.7] text-muted-weak break-keep">
            공개 여부는 신청자 동의 후에만 표시합니다. 비공개를 원하시면 신청서에 적어주세요.
          </p>
        </section>

        <section className="pb-20 border-t border-line">
          <h2 className="m-0 mb-6.5 pt-11 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
            자주 묻는 질문
          </h2>
          <div className="flex flex-col gap-2.5">
            {freeOffer.faq.map((f) => (
              <div key={f.q} className="border border-line-strong/60 rounded-xl px-6.5 py-5.5">
                <div className="text-base font-semibold mb-2.5 break-keep">Q. {f.q}</div>
                <div className="text-sm leading-[1.8] text-muted-strong break-keep">{f.a}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="pb-[120px]">
          <div
            className={`border rounded-2xl p-12 text-center ${
              isFull
                ? "border-line-strong bg-bg-card"
                : "border-accent/30 bg-gradient-to-b from-accent/6 to-transparent"
            }`}
          >
            {isFull ? (
              <>
                <h2 className="m-0 mb-3.5 text-[34px] font-bold tracking-tight break-keep">
                  이번 선착순 {freeOffer.maxApplicants}팀은 마감되었습니다.
                </h2>
                <p className="m-0 mb-7 text-base leading-[1.75] text-muted break-keep">
                  다음 모집 소식은 이 페이지에 먼저 올라옵니다. 궁금한 점은 이메일로 문의해주세요.
                </p>
                <div className="text-[13px] text-muted-weak">문의 · {profile.email}</div>
              </>
            ) : (
              <>
                <h2 className="m-0 mb-3.5 text-[34px] font-bold tracking-tight break-keep">
                  신청은 3분이면 끝납니다.
                </h2>
                <p className="m-0 mb-7 text-base leading-[1.75] text-muted break-keep">
                  어떤 홈페이지가 필요한지 모르셔도 괜찮습니다. 하고 있는 일만 적어주시면 나머지는
                  같이 정리해요.
                </p>
                <a
                  href={freeOffer.formUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-7.5 py-4 rounded-[10px] bg-accent text-accent-ink text-base font-semibold"
                >
                  구글폼으로 신청하기 →
                </a>
                <div className="mt-4.5 text-[13px] text-muted-weak">문의 · {profile.email}</div>
              </>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
