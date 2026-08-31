-- Supabase SQL Editor에 그대로 붙여넣고 Run 하세요.
create table public.free_applications (
  id bigint generated always as identity primary key,
  name text not null,
  contact text not null,
  business text not null,
  vibe text,
  content text not null,
  reference_url text,
  is_public boolean not null default false,
  status text not null default '대기' check (status in ('대기', '제작중', '완료')),
  site_url text,
  screenshot_url text,
  submitted_at timestamptz not null default now()
);

-- RLS를 켜두고 정책을 하나도 만들지 않으면, anon/publishable 키로는
-- 이 테이블에 전혀 접근할 수 없습니다. secret key(서버 전용, RLS 우회)만 접근 가능해요.
alter table public.free_applications enable row level security;

-- "Automatically expose new tables"를 꺼둔 프로젝트에서는 이 GRANT가 없으면
-- service_role(secret key)조차 접근이 막힙니다 (RLS 우회와 별개의 테이블 권한).
grant select, insert, update, delete on public.free_applications to service_role;
