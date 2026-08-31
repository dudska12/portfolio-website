import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, skills, projects, bootcamp } from "@/lib/site-config";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="max-w-[1080px] mx-auto px-8">
        <section className="pt-[120px] pb-[100px] border-b border-line">
          <div className="font-mono text-[11px] tracking-[0.16em] text-accent mb-6.5">
            PORTFOLIO · 2026
          </div>
          <h1 className="m-0 mb-6.5 text-5xl md:text-[68px] leading-[1.05] tracking-tight font-bold text-balance break-keep">
            {profile.tagline}
          </h1>
          <p className="m-0 text-lg leading-[1.75] text-muted max-w-[52ch] break-keep">
            {profile.intro}
          </p>
        </section>

        <section id="free" className="py-16 pb-10">
          <Link
            href="/free"
            className="border border-line-strong/60 rounded-[18px] px-10 py-8 flex flex-col md:flex-row md:items-center justify-between gap-7 bg-bg-card hover:border-accent/45 hover:bg-bg-card-strong transition-colors"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3.5 flex-wrap">
                <span className="font-mono text-[10px] tracking-[0.12em] text-accent border border-accent/25 px-2.5 py-1 rounded-full">
                  SIDE PROJECT
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-ok border border-ok/30 px-2.5 py-1 rounded-full">
                  신청 접수중
                </span>
              </div>
              <h3 className="m-0 mb-2.5 text-[28px] tracking-tight font-bold">
                무료 홈페이지 제작
              </h3>
              <p className="m-0 text-[15px] leading-[1.7] text-muted-strong max-w-[60ch]">
                신청하신 순서대로 홈페이지를 무료로 만들어 드립니다. 완성된 사이트는 순번과
                함께 공개됩니다.
              </p>
            </div>
            <span className="text-sm font-semibold text-accent whitespace-nowrap">
              자세히 →
            </span>
          </Link>
        </section>

        <section id="work" className="pt-6 pb-24">
          <div className="flex flex-col gap-4">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        <section id="bootcamp" className="pb-24 border-t border-line">
          <div className="pt-11 mb-7.5">
            <div className="flex items-baseline justify-between gap-6">
              <h2 className="m-0 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
                Bootcamp
              </h2>
              <span className="font-mono text-xs text-dim">{bootcamp.period}</span>
            </div>
            <p className="m-0 mt-2.5 text-base text-muted break-keep">
              {bootcamp.name}에서 진행한 팀 프로젝트 {bootcamp.projects.length}개.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5">
            {bootcamp.projects.map((p) => (
              <a
                key={p.name}
                href={p.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-line-strong/60 rounded-2xl p-6.5 bg-bg-card hover:border-accent/40 hover:bg-bg-card-strong transition-colors flex flex-col gap-4"
              >
                <div>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted-strong border border-line-strong px-2.5 py-1 rounded-full">
                    TEAM · {p.team}명
                  </span>
                  <h3 className="m-0 mt-3 mb-2 text-lg font-bold tracking-tight">{p.name}</h3>
                  <p className="m-0 text-[13px] leading-[1.7] text-muted-strong break-keep">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  {p.role.map((r) => (
                    <div key={r} className="text-xs leading-[1.6] text-muted-weak break-keep">
                      · {r}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] text-muted border border-line-strong rounded-md px-2 py-1"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-accent">사이트 보기 →</span>
              </a>
            ))}
          </div>

          <div className="mt-3.5 border border-line-strong/50 rounded-xl px-6 py-5 bg-bg-card/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-2.5">
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted-weak border border-line-strong px-2.5 py-1 rounded-full">
                  첫 프로젝트 · TEAM · {bootcamp.firstProject.team}명
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-warn border border-warn/30 px-2.5 py-1 rounded-full">
                  🏆 {bootcamp.firstProject.award}
                </span>
              </div>
              <div className="text-base font-semibold mb-1.5">
                {bootcamp.firstProject.name}{" "}
                <span className="text-muted-weak font-normal text-sm">
                  ({bootcamp.firstProject.period})
                </span>
              </div>
              <p className="m-0 text-[13px] leading-[1.7] text-muted-strong break-keep max-w-[62ch]">
                {bootcamp.firstProject.description}
              </p>
            </div>
            <a
              href={bootcamp.firstProject.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-accent whitespace-nowrap shrink-0"
            >
              GitHub 보기 →
            </a>
          </div>
        </section>

        <section id="about" className="pb-24 border-t border-line">
          <div className="pt-11 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
            <h2 className="m-0 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
              About
            </h2>
            <div>
              <p className="m-0 mb-7 text-[17px] leading-[1.8] text-fg-soft">{profile.about}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((s) => (
                  <div
                    key={s.name}
                    className="border border-line-strong/70 rounded-[10px] px-4 py-3.5 bg-bg-card"
                  >
                    <div className="font-mono text-[13px]">{s.name}</div>
                    <div className="text-xs text-muted-weak mt-1.5">{s.note}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="pb-[120px] border-t border-line">
          <div className="pt-11 grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12">
            <h2 className="m-0 font-mono text-sm tracking-[0.16em] text-muted-weak uppercase">
              Contact
            </h2>
            <div className="flex flex-col gap-3 max-w-[520px]">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center justify-between border border-line-strong/70 rounded-xl px-6 py-5 text-fg hover:border-accent/40"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted-weak">
                  EMAIL
                </span>
                <span className="text-[15px]">{profile.email} ↗</span>
              </a>
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between border border-line-strong/70 rounded-xl px-6 py-5 text-fg hover:border-accent/40"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted-weak">
                  GITHUB
                </span>
                <span className="text-[15px]">{profile.githubLabel} ↗</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
