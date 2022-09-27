export interface SearchOptions {
  q: string;
  sort?: string;
  page?: number;
  per_page?: number;
  target?: string;
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count?: number;
  open_issues_count?: number;
  owner: {
    avatar_url: string;
    login: string;
  };
}
export interface Issue {
  id: number;
  url: string;
  title: string;
  html_url: string;
}

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
