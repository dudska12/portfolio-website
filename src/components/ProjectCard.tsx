import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/Badge";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import type { ProjectSummary } from "@/lib/site-config";

export function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group grid grid-cols-1 md:grid-cols-2 items-stretch border border-line-strong/60 rounded-[18px] overflow-hidden bg-bg-card hover:border-accent/45 hover:bg-bg-card-strong transition-colors"
    >
      <div className="p-10 flex flex-col justify-between gap-7">
        <div>
          <div className="flex items-center gap-2.5 mb-4.5 flex-wrap">
            {project.tags.map((tag) => (
              <Badge key={tag.label} tone={tag.tone}>
                {tag.label}
              </Badge>
            ))}
          </div>
          <h3 className="m-0 mb-3.5 text-3xl md:text-[34px] leading-tight tracking-tight font-bold">
            {project.name}
          </h3>
          <p className="m-0 text-[15px] leading-[1.75] text-muted-strong">{project.summary}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className="flex gap-1.5 flex-wrap">
            {project.chips.map((chip) => (
              <span
                key={chip}
                className="font-mono text-[11px] text-muted border border-line-strong rounded-md px-2.5 py-1"
              >
                {chip}
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-accent whitespace-nowrap">자세히 →</span>
        </div>
      </div>
      <div className="relative min-h-[220px] border-t md:border-t-0 md:border-l border-line bg-[#0a0c0d] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        ) : (
          <ImagePlaceholder label="대표 스크린샷 드롭" />
        )}
      </div>
    </Link>
  );
}
