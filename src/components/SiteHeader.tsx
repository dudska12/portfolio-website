import Link from "next/link";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-20 bg-bg/86 backdrop-blur-md border-b border-line">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-8 h-[68px] flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <span className="w-[26px] h-[26px] border-[1.5px] border-accent rounded-md grid place-items-center shrink-0">
            <span className="w-2 h-2 bg-accent rounded-sm animate-pulse-dot" />
          </span>
          <span className="font-mono text-[13px] tracking-[0.18em] uppercase whitespace-nowrap">
            PORTFOLIO
          </span>
        </Link>
        <nav className="flex items-center gap-3.5 sm:gap-6 text-xs sm:text-sm overflow-x-auto no-scrollbar">
          <Link href="/#work" className="text-muted-strong hover:text-fg whitespace-nowrap">
            Work
          </Link>
          <Link href="/free" className="text-accent whitespace-nowrap">
            무료 홈페이지
          </Link>
          <Link href="/#about" className="text-muted-strong hover:text-fg whitespace-nowrap">
            About
          </Link>
          <Link href="/#contact" className="text-muted-strong hover:text-fg whitespace-nowrap">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
