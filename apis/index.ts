import { useInfiniteQuery } from "react-query";
import axios from "axios";

export const github = axios.create({
  baseURL: "https://api.github.com",
});

export const getRepository = async ({
  pageParam = 1,
  q = "",
}: {
  pageParam: number;
  q?: string;
}) => {
  const pageSize = 30;
  const to = pageSize * pageParam - 1;

  let params = {
    q,
    page: pageParam,
    per_page: 30,
  };
  const { data } = await github.get("/search/repositories", { params });
  const totalCount = data.total_count;
  return {
    data: data,
    totalCount: totalCount || 0,
    isLast: !totalCount || totalCount === 0 ? true : totalCount <= to,
    totalPages: totalCount ? Math.ceil(totalCount / pageSize) : 0,
    pageParam,
  };
};

export function useRepositoryInfiniteList(
  { q = "", enabled = false }: { q?: string; enabled?: boolean } = {
    q: "",
    enabled: false,
  }
) {
  return useInfiniteQuery(
    [`search-repository`, q],
    ({ pageParam = 1 }) => getRepository({ pageParam, q }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.isLast ? undefined : lastPage.pageParam + 1;
      },
      enabled,
    }
  );
}

export const getRepositoryIssue = async ({
  pageParam = 1,
  owner = "",
  repo = "",
  open_issues_count = 0,
}: {
  pageParam: number;
  owner?: string;
  repo?: string;
  open_issues_count?: number;
}) => {
  const pageSize = 30;
  const to = pageSize * pageParam - 1;

  let params = {
    owner,
    repo,
    page: pageParam,
    per_page: 30,
  };
  const { data } = await github.get(`/repos/${owner}/${repo}/issues`, {
    params,
  });
  const totalCount = open_issues_count;
  return {
    data: data,
    totalCount: totalCount || 0,
    isLast: !totalCount || totalCount === 0 ? true : totalCount <= to,
    totalPages: totalCount ? Math.ceil(totalCount / pageSize) : 0,
    pageParam,
  };
};

export function useIssueInfiniteList(
  {
    owner = "",
    repo = "",
    open_issues_count = 0,
    enabled = false,
  }: {
    owner?: string;
    repo?: string;
    open_issues_count?: number;
    enabled?: boolean;
  } = {
    owner: "",
    repo: "",
    open_issues_count: 0,
    enabled: false,
  }
) {
  return useInfiniteQuery(
    [`search-issue`, owner, repo],
    ({ pageParam = 1 }) =>
      getRepositoryIssue({ pageParam, owner, open_issues_count, repo }),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.isLast ? undefined : lastPage.pageParam + 1;
      },
      enabled,
    }
  );
}
