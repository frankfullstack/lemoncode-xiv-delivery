import { createContext, PropsWithChildren, useState } from "react";

import { GithubModel } from "./";

export const GithubContext = createContext<GithubModel>({
  organization: "lemoncode",
  filter: "",
  currentPage: 1,
  setOrganization: () => {},
  setCurrentPage: () => {},
  setFilter: () => {}
});

export const GithubProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [organization, setOrganization] =
    useState<GithubModel["organization"]>("lemoncode");
  const [filter, setFilter] = useState<GithubModel["filter"]>("lemoncode");
  const [currentPage, setCurrentPage] = useState<GithubModel["currentPage"]>(1);

  return (
    <GithubContext.Provider
      value={{
        organization,
        setOrganization,
        filter,
        setFilter,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
