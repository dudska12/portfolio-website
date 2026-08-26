import Link from "next/link";

export function BackLink({ href = "/", label = "Work" }: { href?: string; label?: string }) {
  return (
    <div className="max-w-[1080px] mx-auto px-8 pt-6">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm text-muted-strong px-3.5 py-2 border border-line-strong rounded-full hover:text-fg hover:border-line-strong"
      >
        ← {label}
      </Link>
    </div>
  );
}
