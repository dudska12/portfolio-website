import Link from "next/link";
import { profile } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-20 bg-bg/86 backdrop-blur-md border-b border-line">
      <div className="max-w-[1080px] mx-auto px-8 h-[68px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="w-[26px] h-[26px] border-[1.5px] border-accent rounded-md grid place-items-center">
            <span className="w-2 h-2 bg-accent rounded-sm animate-pulse-dot" />
          </span>
          <span className="font-mono text-[13px] tracking-[0.18em] uppercase">
            {profile.name}
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#work" className="text-muted-strong hover:text-fg">
            Work
          </Link>
          <Link href="/free" className="text-accent">
            무료 홈페이지
          </Link>
          <Link href="/#about" className="text-muted-strong hover:text-fg">
            About
          </Link>
          <Link href="/#contact" className="text-muted-strong hover:text-fg">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
