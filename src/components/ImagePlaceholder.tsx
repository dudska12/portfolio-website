// image-slot을 대신하는 자리표시자입니다.
// public/ 폴더에 실제 스크린샷/GIF를 넣고 next/image의 <Image>로 교체하면 됩니다.
export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border border-dashed border-line-strong text-muted-weak text-sm">
      <span className="text-2xl">🖼️</span>
      <span>{label}</span>
    </div>
  );
}
