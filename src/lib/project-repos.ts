// 에이전트가 "GitHub에 직접 가서 조사"할 수 있는 프로젝트 목록이에요.
// 여기 등록된 프로젝트만 실제 커밋/PR 조회가 가능하고, 등록 안 된 프로젝트를
// 물어보면 에이전트가 조회 불가하다고 솔직하게 답하게 됩니다.
// 새 프로젝트를 추가하려면 이 배열에 한 줄 더 추가하면 돼요.
export type RepoRef = { owner: string; repo: string };

export type ProjectRepo = {
  /** 방문자가 부를 만한 이름들. 대소문자/띄어쓰기 무시하고 매칭해요. */
  aliases: string[];
  /** FE/BE 저장소가 나뉜 팀 프로젝트는 여러 개를 등록해요. */
  repos: RepoRef[];
  /** 이 레포들에서 커밋/PR을 조회할 GitHub 아이디 */
  username: string;
};

export const PROJECT_REPOS: ProjectRepo[] = [
  {
    aliases: ["최애의 포토", "최애의포토", "mybiasphoto", "포토카드", "포토카드 마켓플레이스"],
    repos: [{ owner: "MyBiasPhoto", repo: "7-MyBiasPhoto-team1-FE" }],
    username: "dudska12",
  },
  {
    aliases: ["무빙", "moving"],
    repos: [
      { owner: "MovingProject", repo: "7-Moving-team2-FE" },
      { owner: "MovingProject", repo: "7-Moving-team2-BE" },
    ],
    username: "dudska12",
  },
  {
    aliases: ["view my startup", "뷰마이스타트업", "기업 비교", "기업비교", "viewmystartup"],
    repos: [
      { owner: "Codeit-team-2", repo: "7-viewmystartup-team2-FE" },
      { owner: "Codeit-team-2", repo: "7-viewmystartup-team2-BE" },
    ],
    username: "dudska12",
  },
  {
    aliases: ["치지직 채팅 리포트", "치지직채팅리포트", "chzzk", "chatsentry", "채팅 리포트", "채팅리포트"],
    repos: [{ owner: "dudska12", repo: "chzzk-chat-report" }],
    username: "dudska12",
  },
];

function normalize(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, "");
}

export function findProjectRepo(query: string): ProjectRepo | undefined {
  const normalized = normalize(query);
  if (!normalized) return undefined;
  return PROJECT_REPOS.find((p) =>
    p.aliases.some((alias) => {
      const normalizedAlias = normalize(alias);
      return normalizedAlias === normalized || normalized.includes(normalizedAlias) || normalizedAlias.includes(normalized);
    })
  );
}
