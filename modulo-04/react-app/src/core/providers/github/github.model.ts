export interface GithubModel {
  organization: string;
  setOrganization: (organization: string) => void;
  filter: string;
  setFilter: (filter: string) => void;
  currentPage: number;
  setCurrentPage: (currentPage: number) => void;
}