// 포트폴리오 전체에서 쓰는 콘텐츠를 한 곳에 모아둔 파일이에요.
// 이름/이메일/깃허브 주소 등 TODO 표시된 값만 채워 넣으면 사이트 전체에 반영됩니다.

export const profile = {
  name: "YOUR NAME", // TODO: 이름 또는 닉네임
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
  repoUrl: "https://github.com/", // TODO: 실제 저장소 주소
  repoLabel: "github.com/username/chatsentry", // TODO
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
  formUrl: "https://forms.gle/", // TODO: 실제 구글폼 주소
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
  steps: [
    { no: "01", title: "구글폼으로 신청", desc: "하는 일, 원하는 느낌, 넣고 싶은 내용만 적어주세요. 전문 용어는 몰라도 됩니다." },
    { no: "02", title: "순번 배정", desc: "신청 순서대로 대기열에 올라갑니다. 아래 표에서 내 순번을 확인할 수 있습니다." },
    { no: "03", title: "간단한 상담", desc: "차례가 오면 연락드려서 필요한 내용(사진, 글, 연락처)을 함께 정리합니다." },
    { no: "04", title: "제작", desc: "보통 1~2주. 중간에 시안을 보여드리고 수정 의견을 받습니다." },
    { no: "05", title: "도메인·호스팅 연결 후 오픈", desc: "결제는 직접 하시고, 연결 작업과 설명은 제가 도와드립니다. 이후 간단한 수정 방법도 알려드립니다." },
  ],
  queue: [
    { no: "01", who: "○○ 공방", kind: "소개 · 작품 갤러리", status: "완료", link: "sample-1.kr" },
    { no: "02", who: "○○ 필라테스", kind: "소개 · 예약 문의", status: "완료", link: "sample-2.kr" },
    { no: "03", who: "○○ 카페", kind: "메뉴 · 오시는 길", status: "제작중", link: "" },
    { no: "04", who: "○○ 스터디", kind: "모집 페이지", status: "대기", link: "" },
    { no: "05", who: "신청 가능", kind: "—", status: "대기", link: "" },
  ] as { no: string; who: string; kind: string; status: "완료" | "제작중" | "대기"; link: string }[],
  faq: [
    { q: "정말 공짜인가요? 나중에 비용을 청구하나요?", a: "제작비는 청구하지 않습니다. 다만 도메인·호스팅은 외부 업체에 내는 실비라 신청자분이 직접 결제해야 합니다." },
    { q: "컴퓨터를 잘 몰라도 신청할 수 있나요?", a: "네. 신청서에 하시는 일만 적어주시면 필요한 것은 제가 물어보며 정리합니다." },
    { q: "얼마나 기다려야 하나요?", a: "한 번에 한 팀씩 진행하기 때문에 앞 순번 수에 따라 달라집니다. 대기열 표를 참고해주세요." },
    { q: "나중에 내용을 직접 수정할 수 있나요?", a: "간단한 글·사진 교체는 직접 하실 수 있게 만들고, 방법도 알려드립니다." },
    { q: "쇼핑몰이나 예약 기능도 되나요?", a: "규모에 따라 다릅니다. 신청서에 적어주시면 가능 여부를 먼저 알려드립니다." },
  ],
} as const;
