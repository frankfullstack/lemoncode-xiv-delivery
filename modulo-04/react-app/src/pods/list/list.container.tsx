import React, { useContext, useState } from "react";
import { MembersContext } from "@/core/providers";
import { List } from "./list.component";
import { Search } from "@/core";
import { GithubContext } from "@/core/providers/github/github.provider";
import { GithubModel } from "@/core/providers/github/github.model";

interface Props {
  onSelectMember: (id: string) => void;
}

export const ListContainer: React.FC<Props> = ({ onSelectMember }) => {
  const {
    organization,
    setOrganization,
    filter,
    setFilter,
    currentPage,
    setCurrentPage,
  } = useContext<GithubModel>(GithubContext);
  const [input, setInput] = useState<string>(organization);
  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSearch = () => {
    setFilter(input);
    setOrganization(input);
    setCurrentPage(1);
  };

  const { members } = useContext(MembersContext);
  return (
    <>
      <Search
        placeholder="Search by organization on Github"
        inputValue={input}
        sx={{ maxWidth: '450px' }}
        onInputChange={handleInputChange}
        onSearch={handleSearch}
        />
      {/* { JSON.stringify({ organization, filter, currentPage})} */}

      <List members={members} />
      {/* <Link to="/detail">Navegar a detalle</Link> */}
    </>
  );
};
