import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-admin";

const WEBHOOK_SECRET = process.env.FREE_FORM_WEBHOOK_SECRET;

type SubmitBody = {
  name?: string;
  contact?: string;
  business?: string;
  vibe?: string;
  content?: string;
  referenceUrl?: string;
  isPublic?: boolean;
};

// 구글 폼 제출 시 Apps Script 웹훅이 호출하는 엔드포인트예요.
export async function POST(request: Request) {
  const secret = request.headers.get("x-webhook-secret");
  if (!WEBHOOK_SECRET || secret !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  let body: SubmitBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const { name, contact, business, vibe, content, referenceUrl, isPublic } = body;

  if (!name || !contact || !business || !content) {
    return NextResponse.json({ error: "missing required fields" }, { status: 400 });
  }

  const { error: insertError } = await supabaseAdmin.from("free_applications").insert({
    name,
    contact,
    business,
    vibe: vibe || null,
    content,
    reference_url: referenceUrl || null,
    is_public: !!isPublic,
  });

  if (insertError) {
    console.error("[free-applications] insert failed:", insertError);
    return NextResponse.json({ error: "insert failed" }, { status: 500 });
  }

  const { count, error: countError } = await supabaseAdmin
    .from("free_applications")
    .select("*", { count: "exact", head: true });

  if (countError) {
    console.error("[free-applications] count failed:", countError);
  }

  // Apps Script가 이 값을 보고 5명 도달 시 폼을 잠급니다.
  return NextResponse.json({ ok: true, total: count ?? null });
}
