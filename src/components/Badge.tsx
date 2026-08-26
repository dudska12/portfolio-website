type Tone = "accent" | "warn" | "ok" | "muted";

const toneClasses: Record<Tone, string> = {
  accent: "text-accent border-accent/25",
  warn: "text-warn border-warn/30",
  ok: "text-ok border-ok/30",
  muted: "text-muted-strong border-line-strong",
};

export function Badge({
  children,
  tone = "muted",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <span
      className={`font-mono text-[10px] tracking-[0.12em] px-2.5 py-1 rounded-full border ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
