import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, skills, projects } from "@/lib/site-config";

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
