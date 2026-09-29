// GitHub 공개 저장소에서 특정 사용자의 커밋/PR 활동을 조회하는 헬퍼예요.
// 인증 없이도 동작하지만(공개 API, 시간당 60회 제한), 방문자가 많아질 걸 대비해
// .env.local에 GITHUB_TOKEN(공개 저장소 read 권한만 있는 개인 액세스 토큰)을
// 넣으면 시간당 5000회로 늘어나요.
import type { RepoRef } from "@/lib/project-repos";

const GITHUB_API = "https://api.github.com";

function githubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

type GithubCommitItem = {
  commit?: { message?: string; author?: { date?: string } };
  html_url?: string;
};

type GithubIssueItem = {
  title?: string;
  state?: string;
  pull_request?: { merged_at?: string | null };
  html_url?: string;
  created_at?: string;
};

type GithubSearchIssuesResponse = { items?: GithubIssueItem[] };

export type ContributionSummary = {
  repos: string[];
  commits: { repo: string; message: string; date: string; url: string }[];
  pullRequests: {
    repo: string;
    title: string;
    state: string;
    merged: boolean;
    url: string;
    createdAt: string;
  }[];
  truncated: boolean;
};

const MAX_ITEMS = 20;

// 프로젝트 하나가 FE/BE 등 여러 레포로 나뉜 경우를 대비해 배열을 받아서
// 전부 조회한 뒤 하나의 요약으로 합쳐요.
export async function getAuthorContributions(
  repos: RepoRef[],
  username: string
): Promise<ContributionSummary> {
  const perRepo = await Promise.all(
    repos.map(async ({ owner, repo }) => {
      const [commits, pullRequests] = await Promise.all([
        fetchCommits(owner, repo, username),
        fetchPullRequests(owner, repo, username),
      ]);
      const repoLabel = `${owner}/${repo}`;
      return {
        repoLabel,
        commits: commits.map((c) => ({ repo: repoLabel, ...c })),
        pullRequests: pullRequests.map((p) => ({ repo: repoLabel, ...p })),
      };
    })
  );

  const allCommits = perRepo.flatMap((r) => r.commits);
  const allPullRequests = perRepo.flatMap((r) => r.pullRequests);

  return {
    repos: perRepo.map((r) => r.repoLabel),
    commits: allCommits.slice(0, MAX_ITEMS),
    pullRequests: allPullRequests.slice(0, MAX_ITEMS),
    truncated: allCommits.length > MAX_ITEMS || allPullRequests.length > MAX_ITEMS,
  };
}

async function fetchCommits(owner: string, repo: string, username: string) {
  const url = `${GITHUB_API}/repos/${owner}/${repo}/commits?author=${encodeURIComponent(username)}&per_page=50`;
  const res = await fetch(url, { headers: githubHeaders() });
  if (!res.ok) {
    console.error("[github] commits fetch failed:", owner, repo, res.status, await res.text());
    return [];
  }
  const data = (await res.json()) as GithubCommitItem[];
  return data.map((c) => ({
    message: (c.commit?.message ?? "").split("\n")[0],
    date: c.commit?.author?.date ?? "",
    url: c.html_url ?? "",
  }));
}

async function fetchPullRequests(owner: string, repo: string, username: string) {
  const query = `repo:${owner}/${repo} type:pr author:${username}`;
  const url = `${GITHUB_API}/search/issues?q=${encodeURIComponent(query)}&per_page=50`;
  const res = await fetch(url, { headers: githubHeaders() });
  if (!res.ok) {
    console.error("[github] PR search failed:", owner, repo, res.status, await res.text());
    return [];
  }
  const data = (await res.json()) as GithubSearchIssuesResponse;
  return (data.items ?? []).map((pr) => ({
    title: pr.title ?? "",
    state: pr.state ?? "",
    merged: Boolean(pr.pull_request?.merged_at),
    url: pr.html_url ?? "",
    createdAt: pr.created_at ?? "",
  }));
}
