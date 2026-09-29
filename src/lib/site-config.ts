// 포트폴리오 전체에서 쓰는 콘텐츠를 한 곳에 모아둔 파일이에요.
// 이름/이메일/깃허브 주소 등 TODO 표시된 값만 채워 넣으면 사이트 전체에 반영됩니다.

export const profile = {
  name: "정남영",
  tagline: "풀스택 개발을 공부하고 경험하는 개발자입니다.",
  intro:
    "프론트엔드와 백엔드를 직접 다뤄보며 어느 정도의 개발 경험을 쌓았습니다. 현재 취업을 준비하며 실무에서 쓸 수 있는 역량을 다지고 있습니다.",
  about:
    "프론트엔드는 Next.js와 TypeScript를 주로 사용하고, 백엔드는 JavaScript 기반 Express로 서버를 구성합니다. 아이디어를 실제로 동작하는 서비스까지 만들어보는 데 관심이 있습니다.",
  email: "skadud0113@naver.com",
  githubUrl: "https://github.com/dudska12",
  githubLabel: "github.com/dudska12",
} as const;

export const skills = [
  { name: "Next.js", note: "FE · 주력 프레임워크" },
  { name: "TypeScript", note: "FE · 주 언어" },
  { name: "JavaScript", note: "BE · 주 언어" },
  { name: "Express", note: "BE · 서버 프레임워크" },
  { name: "Node.js", note: "런타임" },
] as const;

export const bootcamp = {
  name: "클라우드 기반 풀스택 엔지니어 부트캠프",
  period: "2025.04 ~ 2025.11",
  projects: [
    {
      name: "VIEW MY STARTUP",
      description:
        "여러 스타트업 정보를 탐색하고, 관심 기업을 선택해 투자 현황과 비교 결과를 확인하는 기업 비교 서비스.",
      team: 4,
      role: [
        "나의 기업 비교 결과 페이지 구현",
        "기업 선택 데이터 처리 흐름 구현",
        "반응형 디자인 일부 구현 지원",
      ],
      stack: ["React", "Express", "PostgreSQL"],
      siteUrl: "https://melodious-yeot-da7d96.netlify.app/",
    },
    {
      name: "최애의 포토",
      description:
        "좋아하는 아이돌·스포츠 스타 등의 디지털 포토카드를 사고팔고 교환하는 개인용 포토카드 마켓플레이스.",
      team: 6,
      role: [
        "[FE] 마켓플레이스 공통·구매자·판매자 페이지 UI 구현",
        "[BE] 마켓플레이스 API(수정 · 내리기 · 상세조회) 구현",
      ],
      stack: ["Next.js", "React", "Node.js", "Express", "PostgreSQL"],
      siteUrl: "https://7-my-bias-photo-team1-fe-theta.vercel.app/",
    },
    {
      name: "무빙",
      description:
        "이사 소비자와 이사 전문가를 매칭하는 서비스. 견적 요청·실시간 채팅·리뷰로 신뢰할 수 있는 이사 전문가를 선택할 수 있습니다.",
      team: 6,
      role: [
        "[BE] 프로필 · 견적 · 리뷰 API, 견적 자동완료(node-cron), 트랜잭션 처리 등 핵심 로직 구현",
        "[FE] 받은 요청 검색 · 필터 · 채팅 UI 버그 다수 수정",
      ],
      stack: ["Next.js", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "AWS EC2"],
      siteUrl: "https://7-moving-team2-fe.vercel.app/",
    },
  ],
  firstProject: {
    name: "Match-your-ETF",
    description:
      "ETF 투자 정보를 비교하는 서비스. 코딩을 막 배우기 시작한 시점이라 퍼블리셔로 참여해 UI 구현만 담당했고, 동작 로직 구현에는 참여하지 않았습니다.",
    team: 5,
    period: "2025.02",
    award: "프로젝트 장려상 · TABA 7기",
    githubUrl: "https://github.com/Match-your-ETF",
  },
} as const;

export type ProjectSummary = {
  slug: string;
  name: string;
  tags: { label: string; tone: "accent" | "warn" | "ok" }[];
  summary: string;
  chips: string[];
  image?: string;
};

export const projects: ProjectSummary[] = [
  {
    slug: "daon",
    name: "다온 (Daon)",
    tags: [
      { label: "SIDE PROJECT", tone: "accent" },
      { label: "DESKTOP APP", tone: "accent" },
      { label: "LIVE", tone: "ok" },
    ],
    summary:
      "하루 할 일을 한 줄로 적으면 AI가 시간표를 짜주는 업무 비서. 웹·API·데스크톱 앱을 혼자 설계·개발하고, 인프라 비용 0원 구성으로 배포까지 운영하고 있습니다.",
    chips: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Electron", "Claude API"],
    image: "/projects/daon/plan.png",
  },
  {
    slug: "sonarbiz",
    name: "SONAR",
    tags: [
      { label: "TEAM PROJECT", tone: "accent" },
      { label: "LIVE", tone: "ok" },
    ],
    summary:
      "기업·조달 데이터 분석 플랫폼 SONAR의 프론트엔드 전담. 11개 탭으로 구성된 기업 상세 모달, 인증, 기업 비교·산업 분석 등 대부분의 화면을 설계·구현했습니다.",
    chips: ["Next.js", "TypeScript", "TanStack Query", "Zustand", "Tailwind CSS"],
    image: "/projects/sonarbiz/landing.png",
  },
  {
    slug: "chatsentry",
    name: "치지직 채팅 리포트",
    tags: [
      { label: "DESKTOP APP", tone: "accent" },
      { label: "배포 보류", tone: "warn" },
    ],
    summary:
      "라이브 방송 채팅을 실시간으로 감시하고, 캡처한 화면을 Claude Vision으로 판독하는 Electron 데스크톱 앱.",
    chips: ["TypeScript", "Electron", "WebSocket", "ffmpeg", "Claude Vision"],
    image: "/projects/chatsentry/chat-monitor.png",
  },
];

export const daon = {
  appName: "다온 (Daon)",
  meta: "기획·디자인·FE·BE·배포 1인",
  year: "2026",
  status: "LIVE",
  author: profile.name,
  contact: profile.email,
  siteUrl: "https://daon-namyoung.vercel.app",
  siteLabel: "daon-namyoung.vercel.app",
  releasesUrl: "https://github.com/dudska12/daon-releases/releases/latest",
  releasesRepoLabel: "github.com/dudska12/daon-releases",
  heroTitleLines: ["하루를 말하면,"],
  heroTitleHighlight: "일정이",
  heroTitleSuffix: "됩니다",
  heroDesc:
    "\"오전엔 API 문서 마무리, 4시에 강남 미팅\"처럼 적으면 AI가 약속과 할 일을 나눠 빈 시간에 배치하는 업무 비서입니다. 웹 대시보드와 항상 떠 있는 데스크톱 독·위젯으로 진행률을 챙기고, 창 단위 캡처와 폴더 자동 정리까지 대신해주며, 미팅 출발 알림과 루틴 알림을 보내며, 퇴근할 때는 회사 워드 양식에 맞춰 업무 보고서까지 채워줍니다. 기획부터 배포·운영까지 혼자 진행한 프로젝트입니다.",
  stats: [
    { label: "앱 (웹 · API · 데스크톱)", value: "3개" },
    { label: "AI 도구 (Tool Use)", value: "7개" },
    { label: "API 모듈", value: "11개" },
    { label: "월 인프라 비용", value: "0원" },
  ],
  download: {
    version: "1.1.0",
    buildSize: "78 MB",
    notice:
      "코드 서명 인증서가 없어 처음 받을 때 브라우저와 Windows가 경고를 띄울 수 있습니다. 다운로드 목록에서 \"유지 → 그래도 계속\", 실행 시 \"추가 정보 → 실행\"을 눌러주세요. 설치 후에는 새 버전이 자동으로 업데이트됩니다.",
  },
  shots: [
    {
      id: "shot-plan",
      label: "AI 하루 계획",
      title: "plan",
      desc: "한 줄 입력을 약속(고정)과 할 일(유동)로 나눠 빈 시간에 배치합니다. 지난 시간·중복·겹침은 서버에서 한 번 더 걸러냅니다.",
      placeholder: "AI 하루 계획 화면 스크린샷",
      image: "/projects/daon/plan.png" as string | undefined,
    },
    {
      id: "shot-desktop",
      label: "데스크톱 독 · 위젯",
      title: "desktop",
      desc: "화면 옆에 항상 떠 있는 독에서 캘린더·할 일·포스트잇·캡처·폴더 정리를 바로 엽니다. 투명도와 방향은 사용자가 조절합니다.",
      placeholder: "데스크톱 독 · 위젯 스크린샷",
      image: "/projects/daon/desktop.png" as string | undefined,
    },
    {
      id: "shot-report",
      label: "보고서 빌더",
      title: "report",
      desc: "기본 양식 3종 외에, 회사에서 쓰던 워드 양식을 올리면 AI가 채울 자리를 찾아 서식 그대로 채워 줍니다. 양식 파일은 기기에만 저장됩니다.",
      placeholder: "보고서 빌더 화면 스크린샷",
      image: "/projects/daon/report.png" as string | undefined,
    },
    {
      id: "shot-routine",
      label: "루틴 알림",
      title: "routine",
      desc: "약 먹기·물 마시기처럼 반복되는 일을 정해진 시각이나 간격마다 알리고, 알림을 누르면 바로 체크됩니다.",
      placeholder: "루틴 알림 스크린샷",
      image: "/projects/daon/routine.png" as string | undefined,
    },
    {
      id: "shot-meeting",
      label: "미팅 · 공유",
      title: "meeting",
      desc: "미팅 장소까지 이동 시간을 계산해 출발 알림을 주고, 로그인 없이 볼 수 있는 읽기 전용 일정 링크를 만듭니다(개인 일정은 제외).",
      placeholder: "미팅 · 공유 화면 스크린샷",
      image: "/projects/daon/meeting.png" as string | undefined,
    },
  ],
  features: [
    {
      no: "01",
      title: "AI 하루 계획",
      desc: "자연어 입력을 Claude Tool Use로 JSON 제안만 받아 화면에 보여주고, 저장은 사용자가 확인한 뒤에만 합니다. 오전/오후, 지난 시간, 종료 시간 누락은 서버 규칙으로 한 번 더 보정합니다.",
    },
    {
      no: "02",
      title: "한 줄로 일정 변경",
      desc: "\"3시 미팅 5시로 바뀌었어\" → 겹치는 일정만 옮긴 새 시간표를 제안합니다.",
    },
    {
      no: "03",
      title: "지금 뭐 하지?",
      desc: "남은 시간, 마감, 진행률로 지금 할 일을 추천합니다. AI 호출 없이 서버 규칙으로 계산해 비용이 들지 않습니다.",
    },
    {
      no: "04",
      title: "알아듣기 어려운 입력 되묻기",
      desc: "의미 없는 입력은 미리 걸러내고, 애매한 입력은 AI가 추측하지 않고 되묻게 했습니다.",
    },
    {
      no: "05",
      title: "보고서 빌더",
      desc: "기본 양식은 서버에서 docx로 생성합니다. 회사 양식은 브라우저에서 docx(zip)의 XML을 직접 수정해 병합 셀, 표 행 늘리기, 기존 서식을 유지한 채 채웁니다.",
    },
    {
      no: "06",
      title: "루틴",
      desc: "\"정해진 시각\"과 \"N분 간격\" 두 가지 반복을 지원합니다. 데스크톱 알림에서 바로 체크할 수 있습니다.",
    },
    {
      no: "07",
      title: "데스크톱 독 · 위젯",
      desc: "캘린더, 할 일, 포스트잇, 창 단위 캡처, 규칙 기반 폴더 자동 정리, \"오늘 한눈에\" 브리핑을 제공합니다.",
    },
    {
      no: "08",
      title: "계정 · 보안",
      desc: "이메일(6자리 인증번호) / 구글 로그인, 14일 자동 로그인, 기기 관리, 회원 탈퇴, 가입 없는 체험 계정을 지원합니다.",
    },
    {
      no: "09",
      title: "꾸미기 동기화",
      desc: "색·배경·폰트·스티커·위젯 유리색을 계정에 저장해 모든 기기에서 같게 보입니다.",
    },
    {
      no: "10",
      title: "자동 업데이트 · 자동 실행",
      desc: "새 버전을 뒤에서 받아 두었다가 알림으로 알리고, 컴퓨터를 켜면 창 없이 독·위젯만 조용히 뜹니다.",
    },
  ],
  stack: [
    {
      name: "Next.js 16 · React 19",
      tag: "FRONTEND",
      desc: "웹 대시보드이자 데스크톱 메인 창. API 요청을 대신 전달하는 프록시 역할도 해서 도메인 없이도 로그인 쿠키가 막히지 않게 했습니다.",
    },
    {
      name: "Tailwind CSS 4",
      tag: "STYLE",
      desc: "사용자가 고른 색·배경을 CSS 변수 테마로 적용합니다.",
    },
    {
      name: "NestJS 10",
      tag: "BACKEND",
      desc: "인증, 일정, AI, 보고서, 루틴 등 11개 모듈. 모든 조회·수정을 계정 단위로 제한합니다.",
    },
    {
      name: "Prisma 5 · PostgreSQL",
      tag: "DATA",
      desc: "11개 모델. 배포 때 마이그레이션이 자동 적용됩니다.",
    },
    {
      name: "Claude API (Tool Use)",
      tag: "AI",
      desc: "7개 도구로 계획·변경·루틴·양식 매핑 등을 JSON으로만 받습니다. 기본은 Haiku, 계획 짜기만 Sonnet으로 나눠 비용을 줄였습니다.",
    },
    {
      name: "Electron 33",
      tag: "DESKTOP",
      desc: "독, 위젯, 알림, 캡처, 폴더 정리. electron-updater + GitHub Releases로 자동 업데이트합니다.",
    },
    {
      name: "자체 인증",
      tag: "AUTH",
      desc: "외부 인증 라이브러리 없이 scrypt 비밀번호, 15분 출입증 + 14일 httpOnly 갱신 쿠키, 구글 OAuth(PKCE), 데스크톱은 daon:// 딥링크로 로그인을 넘겨받습니다.",
    },
  ],
  flow: [
    "한 줄 입력",
    "Claude Tool Use(JSON 제안)",
    "서버 규칙으로 보정",
    "사용자 확인 후 저장",
    "웹 · 데스크톱 위젯 · 알림",
  ],
  deployDiagram: `사용자 브라우저 / 데스크톱 앱
        │
        ▼
  Vercel (웹, Next.js) ─── /api/* 전달 ───▶ Render (API, NestJS) ───▶ Neon (PostgreSQL)
        │                                        │
        └◀── /internal/mail 메일 발송 부탁 ──────┘
        │
        └──▶ 네이버 SMTP (가입 인증번호)

데스크톱 앱 ──▶ GitHub Releases (daon-releases)  새 버전 확인 · 자동 업데이트
외부 서비스: Anthropic(AI) · NAVER(지도)`,
  deployNotes: [
    { label: "웹", desc: "Vercel (Hobby, 무료) — GitHub에 push하면 자동 배포" },
    {
      label: "API",
      desc: "Render (Free, 싱가포르) — render.yaml 블루프린트로 빌드·마이그레이션·헬스체크까지 설정",
    },
    { label: "DB", desc: "Neon Postgres (Free, 싱가포르)" },
    {
      label: "메일",
      desc: "무료 서버의 메일 포트 차단을 피해, 웹 서버(Vercel)를 거쳐 네이버 SMTP로 발송. 두 서버가 나눠 가진 비밀값이 맞을 때만 보냅니다.",
    },
    {
      label: "데스크톱",
      desc: "electron-builder로 Windows 설치 파일 생성, 공개 저장소(daon-releases)의 Release에 올리면 설치된 앱이 알아서 업데이트",
    },
    {
      label: "운영 안전장치",
      desc: "필수 비밀값이 비었거나 약하면 서버가 켜지지 않음, 보안 헤더(HSTS·클릭재킹 방지), 500 에러 원인은 서버 로그에만, 개인정보처리방침·이용약관·회원 탈퇴 제공",
    },
  ],
  retro: [
    {
      problem: "도메인 없이 배포하니 15분마다 로그아웃",
      solution:
        "웹(vercel.app)과 API(onrender.com)가 서로 다른 사이트라 브라우저가 로그인 유지 쿠키를 보내지 않았습니다. → Next.js rewrites로 웹이 /api/*를 API 서버로 대신 전달하게 바꿔, 브라우저 입장에서 같은 사이트가 되게 했습니다. 쿠키 경로와 접속 IP 판별도 프록시 구조에 맞췄습니다.",
    },
    {
      problem: "무료 서버에서 인증 메일이 안 나감",
      solution:
        "Render 무료 플랜이 메일 포트(465/587)를 막고 있었습니다. → 막히지 않는 Vercel에 메일 중계 엔드포인트를 두고, 서버끼리 공유 비밀값으로 인증해 대신 보내게 했습니다. 외부 메일 라이브러리 없이 작은 SMTP 클라이언트를 직접 작성했습니다.",
    },
    {
      problem: "AI 비용과 정확도 사이의 균형",
      solution:
        "가장 싼 모델(Haiku)로 바꾸자 \"11시 미팅\"을 놓치는 등 계획 품질이 떨어졌습니다. → 기능별로 모델을 나눠 계획 짜기만 상위 모델을 쓰고, 나머지는 Haiku를 유지했습니다. AI가 종료 시간을 빼먹어 생기던 500 에러는 서버에서 제안을 한 번 더 검증해 막았습니다.",
    },
    {
      problem: "한 PC에서 여러 계정의 데이터가 섞임",
      solution:
        "서버 데이터는 계정별로 분리돼 있었지만, 데스크톱에 저장하던 포스트잇·폴더 규칙·꾸미기는 공용 파일이었습니다. → 로컬 저장소를 계정별 파일로 나누고, 로그인 기능 이전 데이터는 처음 로그인한 계정이 가져가도록 이전했습니다.",
    },
    {
      problem: "회사 워드 양식을 서식 그대로 채우기",
      solution:
        "양식마다 병합 셀, 반복되는 표 행, \"오전/오후\" 칸 구성이 제각각이었습니다. → 문서의 글자만 AI로 분석해 채울 위치를 찾고, 실제 채우기는 브라우저에서 docx XML을 직접 수정했습니다. 원본 파일은 서버로 보내지 않고 기기에만 저장합니다.",
    },
    {
      problem: "설치 파일에서 자동 업데이트 모듈이 빠지는 문제",
      solution:
        "pnpm 모노레포는 패키지를 링크로 연결해서 Electron 패키징 때 의존성이 누락될 수 있었습니다. → esbuild로 업데이트 모듈을 한 파일로 묶어 앱 코드와 함께 넣었습니다.",
    },
    {
      problem: "개발 방식",
      solution:
        "Claude를 페어 프로그래머로 활용해 구현 속도를 높였고, 기능 설계·UX 판단·직접 QA와 문제 재현·배포 운영 결정에 집중했습니다.",
    },
  ],
  cta: {
    desc: "하루를 말하면, 일정이 됩니다. 가입 없이 \"체험하기\"로 바로 써볼 수 있어요.",
    note: "무료 서버라 한동안 아무도 쓰지 않았다면 첫 접속이 조금 느릴 수 있습니다.",
  },
} as const;

export const sonarbiz = {
  appName: "SONAR",
  siteUrl: "https://www.sonarbiz.co/",
  siteLabel: "sonarbiz.co",
  role: "FE 전담 (팀 프로젝트)",
  status: "LIVE",
  author: profile.name,
  contact: profile.email,
  heroTitleLines: ["기업·조달 데이터를", "분석하는 플랫폼,"],
  heroTitleHighlight: "SONAR",
  heroTitleSuffix: "프론트엔드 전담",
  heroDesc:
    "기업 탐색, 기업 상세(11개 탭), 기업 비교, 산업 분석, 조달 탐색, 인증, 마이페이지, PDF 리포트까지 — 팀 프로젝트에서 프론트엔드 전 영역을 담당했습니다. Next.js App Router 기반으로 실서비스에 배포되어 운영 중입니다.",
  stats: [
    { label: "담당 영역", value: "14개" },
    { label: "기업 상세 탭", value: "11개" },
    { label: "해결한 이슈", value: "50+" },
  ],
  shots: [
    {
      id: "shot-landing",
      label: "랜딩 페이지",
      title: "landing",
      desc: "재무·고용·공시·조달 4차원 데이터를 한 곳에서 검색하는 랜딩 페이지. 히어로 회전 카드에 실시간 인기 검색 데이터를 연동했습니다.",
      placeholder: "랜딩 페이지 스크린샷",
      image: "/projects/sonarbiz/landing.png" as string | undefined,
    },
  ],
  scope: [
    {
      no: "01",
      title: "프로젝트 기반 세팅",
      desc: "초기 보일러플레이트, lib/ 기반 설정(config, api, queryKeys), Navbar/Footer 등 공통 레이아웃을 구성했습니다.",
    },
    {
      no: "02",
      title: "랜딩 페이지",
      desc: "히어로·통계·핵심기능·CTA 섹션을 반응형으로 구현하고, 실시간 인기 검색 데이터가 도는 히어로 회전 카드로 전면 리뉴얼했습니다.",
    },
    {
      no: "03",
      title: "인증 (Auth)",
      desc: "로그인/회원가입(2단계 이메일 인증)/비밀번호 찾기/구글 소셜 로그인을 API와 함께 구현했습니다. SSR 토큰 처리로 새로고침 플리커를 제거하고, 401 자동 토큰 갱신과 다수의 인증 버그를 해결했으며, 비로그인 사용자 접근 제어(로그인 게이트·블러)도 담당했습니다.",
    },
    {
      no: "04",
      title: "기업 탐색 (목록 · 필터 · 검색)",
      desc: "목록/필터/검색 페이지, 필터 칩 UI, 공통 페이지네이션을 구현하고 검색 자동완성을 Mock에서 실 API로 전환했습니다.",
    },
    {
      no: "05",
      title: "기업 상세 모달",
      desc: "개요·재무·인력(NPS)·조달·헬스·타임라인 등 11개 탭을 반응형으로 구현한, 가장 큰 작업 영역입니다. 800줄이 넘던 파일을 탭별 View 컴포넌트로 리팩터링했습니다.",
    },
    {
      no: "06",
      title: "기업 비교",
      desc: "슬롯별 연도 선택, 추이 그래프, 기업 추가 검색 모달을 구현하고 실데이터 연동 및 로딩/스켈레톤을 반복 개선했습니다.",
    },
    {
      no: "07",
      title: "산업 분석",
      desc: "포지셔닝맵(버블차트) 페이지를 실 API와 연동하고, 업종 선택 UI와 상세 모달 연동을 구현했습니다.",
    },
    {
      no: "08",
      title: "조달 탐색",
      desc: "발주기관/업종/예산 필터가 붙은 조달 탐색 페이지를 API와 연동했습니다.",
    },
    {
      no: "09",
      title: "마이페이지",
      desc: "사이드바 구조를 수평 탭바로 전면 리뉴얼하고, 대시보드/관심기업/알림/리포트/설정 탭을 구현했습니다.",
    },
    {
      no: "10",
      title: "PDF 리포트",
      desc: "@react-pdf/renderer 방식의 한계로 HTML/CSS + window.print() 방식으로 전환했습니다. 저장 PDF와 모달 PDF를 동기화하는 독립 라우트를 신설했습니다.",
    },
    {
      no: "11",
      title: "알림 / 실시간 검색",
      desc: "알림 드롭다운과 실시간 인기 검색어 UI를 API와 연동했습니다.",
    },
    {
      no: "12",
      title: "정적 페이지",
      desc: "소개, 멤버십, 이용약관, 개인정보처리방침, FAQ, 문의하기 페이지를 신규로 구현했습니다.",
    },
    {
      no: "13",
      title: "SEO / 성능",
      desc: "sitemap·robots·페이지별 metadata(OG 포함)를 설정하고, staleTime·prefetch로 로딩 성능을 개선했습니다.",
    },
    {
      no: "14",
      title: "인프라 / 공통",
      desc: "공통 Pagination, FilterFormBody, 디자인 토큰, 로컬 폰트 등 재사용 인프라를 구축하고 중복 코드를 정리했습니다.",
    },
  ],
  stack: [
    { name: "Next.js 16", tag: "FRAMEWORK", desc: "App Router 기반, Server/Client Component 분리 컨벤션을 따라 전체 페이지를 구성했습니다." },
    { name: "React 19", tag: "UI", desc: "전체 화면의 컴포넌트 트리를 구성하는 기본 UI 라이브러리." },
    { name: "TypeScript 5", tag: "LANGUAGE", desc: "전체 코드베이스를 타입 안전하게 구성." },
    { name: "TanStack Query 5", tag: "DATA", desc: "서버 상태 관리. lib/queryKeys.ts로 쿼리키를 중앙 관리하고 prefetch로 로딩 성능을 개선했습니다." },
    { name: "Zustand 5", tag: "STATE", desc: "auth · compare · industry 등 클라이언트 전역 상태를 ~Store 네이밍 컨벤션으로 관리." },
    { name: "Tailwind CSS 4", tag: "STYLE", desc: "globals.css의 @theme으로 디자인 토큰을 관리하고 전체 UI를 유틸리티 클래스로 구현." },
    { name: "AWS SDK (S3 / SSM)", tag: "INFRA", desc: "S3로 이미지·파일 CDN을, SSM Parameter Store로 프로덕션 환경변수를 자동 주입." },
    { name: "자체 UI 컴포넌트", tag: "UI", desc: "shadcn·MUI 등 외부 라이브러리 없이 components/ui를 직접 구축해 전체 화면을 구현했습니다." },
  ],
  retro: [
    "컨벤션 준수 — 팀 단위로 커진 코드베이스에서 일관된 폴더 구조·네이밍을 유지하는 것",
    "반응형 UI — 11개 탭짜리 모달을 포함한 복잡한 화면을 모바일까지 대응",
    "인증 버그 — refresh 무한 루프, 세션 임의 만료 등 재현이 까다로운 이슈들",
    "기업 상세 모달의 복잡도 — 11개 탭, 800줄 넘는 파일을 View 단위로 리팩터링",
    "Mock → 실 API 전환 — 필드 불일치로 인한 데이터 매핑 버그를 다수 수정",
  ],
} as const;

export const chatSentry = {
  appName: "치지직 채팅 리포트",
  version: "0.9.2",
  buildSize: "88 MB",
  repoUrl: "https://github.com/dudska12/chzzk-chat-report",
  repoLabel: "github.com/dudska12/chzzk-chat-report",
  author: profile.name,
  contact: profile.email,
  heroTitleLines: ["라이브 방송 채팅을", "실시간으로 감시하고,"],
  heroTitleHighlight: "화면까지 읽는",
  heroTitleSuffix: "데스크톱 앱",
  heroDesc:
    "채팅 스트림을 WebSocket으로 수집해 규칙 기반으로 감시하고, ffmpeg으로 캡처한 방송 화면을 Claude Vision에 넘겨 상황을 판독합니다. 타임라인과 리포트로 방송 전체를 되짚어볼 수 있습니다.",
  shots: [
    {
      id: "shot-chat",
      label: "채팅 감시",
      title: "chat-monitor",
      desc: "WebSocket으로 수집한 채팅을 규칙·키워드 단위로 필터링하고, 감지된 항목을 실시간으로 큐에 쌓습니다.",
      placeholder: "채팅 감시 화면 스크린샷/GIF",
      image: "/projects/chatsentry/chat-monitor.png",
    },
    {
      id: "shot-timeline",
      label: "타임라인",
      title: "timeline",
      desc: "감지 이벤트를 방송 경과 시간에 매핑해, 어느 구간에서 무슨 일이 있었는지 한 눈에 되짚습니다.",
      placeholder: "타임라인 화면 스크린샷/GIF",
      image: "/projects/chatsentry/timeline.png" as string | undefined,
    },
    {
      id: "shot-report",
      label: "리포트",
      title: "report",
      desc: "방송 종료 후 감지 유형·빈도·구간을 집계한 요약 리포트를 생성합니다.",
      placeholder: "리포트 화면 스크린샷/GIF",
      image: undefined as string | undefined,
    },
    {
      id: "shot-vision",
      label: "AI 화면 분석",
      title: "vision-analysis",
      desc: "ffmpeg으로 캡처한 프레임을 Claude Vision에 넘겨 화면 상황을 텍스트로 판독합니다.",
      placeholder: "AI 화면 분석 스크린샷/GIF",
      image: "/projects/chatsentry/vision-analysis.png" as string | undefined,
    },
  ],
  stack: [
    {
      name: "TypeScript",
      tag: "LANGUAGE",
      desc: "전체 앱을 타입 안전하게 구성. 이벤트/메시지 스키마를 타입으로 고정해 런타임 오류를 줄였습니다.",
    },
    {
      name: "Electron",
      tag: "DESKTOP",
      desc: "메인 프로세스에서 캡처·수집을, 렌더러에서 감시 UI를 담당하는 구조로 분리.",
    },
    {
      name: "WebSocket",
      tag: "REALTIME",
      desc: "채팅 스트림을 실시간 구독하고 재연결·백프레셔를 직접 처리.",
    },
    {
      name: "ffmpeg",
      tag: "MEDIA",
      desc: "일정 간격으로 방송 화면 프레임을 캡처하고 리사이즈해 분석 입력으로 사용.",
    },
    {
      name: "Claude Vision API",
      tag: "AI",
      desc: "캡처된 프레임을 넘겨 화면 상황을 판독하고, 결과를 감지 이벤트로 정규화.",
    },
    {
      name: "SQLite / 로컬 저장",
      tag: "DATA",
      desc: "모든 감지 기록은 로컬에만 저장. 외부 서버로 전송하지 않습니다.",
    },
  ],
  flow: [
    "WebSocket 채팅 수집",
    "규칙 엔진 / 감시",
    "ffmpeg 프레임 캡처",
    "Claude Vision 판독",
    "타임라인 · 리포트",
  ],
  report: {
    broadcaster: "청묘",
    start: "2026-08-17 18:28",
    end: "2026-08-17 23:13",
    durationMin: 285,
    totalChats: 7907,
    viewers: 519,
    game: "메이플스토리",
    flowMin: { gaming: 235, talk: 19, rest: 29 },
    mood: {
      label: "화기애애",
      summary: "긍정적인 반응이 많았어요",
      narrative:
        "청묘는 이번 방송에서 메이플스토리를 플레이하면서 게임 진행 과정을 중심으로 약 4시간을 방송했다. 시청자들은 대체로 게임 플레이를 조용히 지켜보며 주요 장면에서만 웃음으로 반응했는데, 특히 스트리머의 의외의 행동이나 게임 내 재미있는 상황에서 일제히 웃음표현을 내보냈다. 채팅은 소수의 단골 시청자들이 주도적으로 이끌어갔으며, 이들이 지속적으로 댓글을 달면서 방송 분위기를 유지했고, 대다수의 시청자들은 한두 번 댓글을 남기거나 조용히 시청하는 선에 그쳤다. 전반적으로 긍정적이고 화목한 분위기 속에서 게임 콘텐츠에 집중하는 방송이었으며, 채팅창에서는 논쟁이나 부정적인 의견보다는 응원과 공감이 대부분을 차지했다.",
      sentiment: { positive: 27, neutral: 72, negative: 1 },
      laughRatio: 25.3,
    },
    highlights: [
      { time: "20:25", count: 112 },
      { time: "18:39", count: 104 },
      { time: "20:07", count: 92 },
      { time: "18:40", count: 91 },
      { time: "19:40", count: 91 },
    ],
    topChatters: [
      { rank: 1, name: "소피", count: 339 },
      { rank: 2, name: "캐롤", count: 297 },
      { rank: 3, name: "백종현", count: 230 },
      { rank: 4, name: "쯔엉묘", count: 213 },
      { rank: 5, name: "밍츄", count: 213 },
      { rank: 6, name: "빵구빵구", count: 208 },
      { rank: 7, name: "우주a", count: 203 },
      { rank: 8, name: "등좀주물러", count: 166 },
      { rank: 9, name: "왕바다리", count: 165 },
      { rank: 10, name: "차메밀", count: 151 },
    ],
    participation: { topShare: 28, oneTimeCount: 153, oneTimeShare: 29 },
    donation: {
      total: 356000,
      top: [
        { rank: 1, name: "태동2", amount: 150000 },
        { rank: 2, name: "Parkermann", amount: 102000 },
        { rank: 3, name: "쿄시아", amount: 12000 },
        { rank: 4, name: "빗소리들으며낮잠", amount: 10000 },
        { rank: 5, name: "섭이스", amount: 10000 },
      ],
      flow: { gaming: 187000, talk: 57000, rest: 112000 },
    },
    moments: [
      {
        title: "최고 채팅 폭발",
        time: "18:38",
        quotes: [
          { author: "귇딘", donor: false, text: "오늘 일당 다 번거같은데 슬슬 퇴근할까?" },
          { author: "gnl1234", donor: false, text: "어머니 손등 잡아드리는 거에서 눈물 나더라" },
          {
            author: "쿄시아",
            donor: true,
            text: "근데 어떻게 어머님이 보신 첫 영상이 수야님이랑 중땐님이 끼요오오옷!!! 메시끼 레츠기리ㅣㅣㅣㅣ잇!!! ㅋㅋㅋㅋ",
          },
        ],
      },
      {
        title: "최다 후원 구간",
        time: "19:22",
        quotes: [
          {
            author: "Parkermann",
            donor: true,
            text: "바빠서 10만 축하 못해줬는데 10만 축하 축하 청묘 화이팅! 돈통 벌레단들도 화이팅!",
          },
          { author: "묘닦개", donor: false, text: "캬" },
          { author: "전패의 입문자 9257", donor: false, text: "비지니스니까 밀렸지~" },
        ],
      },
    ],
    topWords: [
      { word: "ㄹㅇ", count: 74 },
      { word: "ㅇㅇ", count: 40 },
      { word: "ㅠㅠ", count: 36 },
      { word: "역시", count: 33 },
      { word: "청묘", count: 32 },
      { word: "아님", count: 29 },
      { word: "ㄱㄱ", count: 28 },
      { word: "사빠딸", count: 28 },
      { word: "아오", count: 25 },
      { word: "그건", count: 24 },
      { word: "ㅇㅈ", count: 24 },
      { word: "그럼", count: 22 },
      { word: "아봉", count: 22 },
      { word: "이걸", count: 21 },
      { word: "ㅁㅊ", count: 21 },
      { word: "청바", count: 21 },
      { word: "많이", count: 20 },
      { word: "바로", count: 19 },
      { word: "중땐이", count: 19 },
      { word: "뭐야", count: 18 },
    ],
  },
} as const;

export const freeOffer = {
  formUrl: "https://forms.gle/CKsyZB5nmkK1MSwSA",
  // Apps Script 웹훅의 MAX_APPLICANTS와 반드시 같은 값으로 맞춰야 합니다.
  maxApplicants: 5,
  costs: [
    { label: "제작비", value: "0원", tone: "accent", note: "기획 · 디자인 · 개발 전부 무료" },
    { label: "도메인 (주소)", value: "연 2만원 내외", tone: "default", note: ".com / .kr 등, 업체 결제는 직접" },
    { label: "호스팅 (공간)", value: "월 0~1만원", tone: "default", note: "간단한 사이트는 무료 호스팅도 가능" },
  ],
  basics: [
    {
      en: "DOMAIN",
      ko: "도메인",
      desc: "사람들이 주소창에 입력하는 내 홈페이지 주소예요. 예: mycafe.com",
      metaphor: "가게 주소이자 간판 이름입니다. 매년 사용료를 냅니다.",
    },
    {
      en: "HOSTING",
      ko: "호스팅",
      desc: "홈페이지 파일을 24시간 켜진 컴퓨터에 올려두는 서비스예요.",
      metaphor: "가게를 차릴 임대 공간입니다. 매달(또는 매년) 임대료를 냅니다.",
    },
    {
      en: "WEBSITE",
      ko: "홈페이지",
      desc: "실제로 보이는 화면과 내용. 제가 만들어 드리는 부분이 여기입니다.",
      metaphor: "인테리어와 진열입니다. 이건 제가 무료로 해드립니다.",
    },
  ],
  hosting: {
    intro: "사이트 종류에 따라 호스팅 비용이 0원일 수도, 약간 들 수도 있어요. 어느 쪽이든 신청서 내용만 보면 제가 먼저 판단해서 알려드립니다.",
    options: [
      {
        title: "무료로 충분해요",
        tone: "accent",
        cost: "0원",
        forWho: "소개 페이지, 포트폴리오, 메뉴판처럼 정보 전달 위주의 사이트",
        detail: "Vercel · Netlify 같은 무료 호스팅으로 충분합니다. 방문자가 많지 않고 예약·결제 같은 기능이 없다면 대부분 이쪽이에요.",
        note: "단, 도메인(mycafe.com 같은 주소)은 무료 호스팅을 써도 연 1~2만원 정도는 별도로 필요해요.",
      },
      {
        title: "유료가 필요해요",
        tone: "warn",
        cost: "월 몇천원 ~ 1만원대",
        forWho: "예약·주문·결제, 회원가입, 방문자가 아주 많은 사이트",
        detail: "무료 호스팅의 용량·기능 제한을 넘어서는 경우예요. 규모에 따라 비용 차이가 커서, 필요 여부는 상담 때 정확히 안내드립니다.",
        note: "이 경우에도 비싼 상용 솔루션 대신, 필요한 만큼만 쓰는 합리적인 선택지로 안내해드려요.",
      },
    ],
  },
  steps: [
    { no: "01", title: "구글폼으로 신청", desc: "하는 일, 원하는 느낌, 넣고 싶은 내용만 적어주세요. 전문 용어는 몰라도 됩니다." },
    { no: "02", title: "순번 배정", desc: "신청 순서대로 대기열에 올라갑니다. 아래 표에서 내 순번을 확인할 수 있습니다." },
    { no: "03", title: "간단한 상담", desc: "차례가 오면 연락드려서 필요한 내용(사진, 글, 연락처)을 함께 정리합니다." },
    { no: "04", title: "제작", desc: "보통 1~2주. 중간에 시안을 보여드리고 수정 의견을 받습니다." },
    { no: "05", title: "도메인·호스팅 연결 후 오픈", desc: "결제는 직접 하시고, 연결 작업과 설명은 제가 도와드립니다. 이후 간단한 수정 방법도 알려드립니다." },
  ],
  faq: [
    { q: "정말 공짜인가요? 나중에 비용을 청구하나요?", a: "제작비는 청구하지 않습니다. 다만 도메인·호스팅은 외부 업체에 내는 실비라 신청자분이 직접 결제해야 합니다." },
    { q: "컴퓨터를 잘 몰라도 신청할 수 있나요?", a: "네. 신청서에 하시는 일만 적어주시면 필요한 것은 제가 물어보며 정리합니다." },
    { q: "얼마나 기다려야 하나요?", a: "한 번에 한 팀씩 진행하기 때문에 앞 순번 수에 따라 달라집니다." },
    { q: "나중에 내용을 직접 수정할 수 있나요?", a: "간단한 수정은 이메일로 바꿀 내용을 보내주시면 제가 직접 수정해드립니다." },
    { q: "쇼핑몰이나 예약 기능도 되나요?", a: "규모에 따라 다릅니다. 신청서에 적어주시면 가능 여부를 먼저 알려드립니다." },
  ],
} as const;
