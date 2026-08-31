// 서버 전용 Supabase 클라이언트예요.
// SUPABASE_SECRET_KEY는 RLS를 무시하고 전체 접근 권한을 갖기 때문에,
// 이 파일은 Route Handler / Server Component 등 서버 코드에서만 import 하세요.
// (절대 "use client" 컴포넌트나 브라우저로 전달되는 코드에서 import하면 안 됩니다.)
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

if (!supabaseUrl || !supabaseSecretKey) {
  throw new Error(
    "SUPABASE_URL / SUPABASE_SECRET_KEY 환경변수가 없습니다. .env.local을 확인하세요."
  );
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseSecretKey, {
  auth: { persistSession: false },
});

export type FreeApplicationRow = {
  id: number;
  name: string;
  contact: string;
  business: string;
  vibe: string | null;
  content: string;
  reference_url: string | null;
  is_public: boolean;
  status: "대기" | "제작중" | "완료";
  site_url: string | null;
  screenshot_url: string | null;
  submitted_at: string;
};
