import React, { useContext, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  GithubModel,
  GithubContext,
  MembersContext,
  Search,
  Paginator,
} from "@/core";
import { getMembers } from "./api";
import { List } from "./list.component";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";

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
  const [totalPages, setTotalPages] = React.useState<number>(1);
  const theme = useTheme();

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSearch = () => {
    setFilter(input);
    setOrganization(input);
    setCurrentPage(1);
  };

  useEffect(() => {
    getMembers(filter, currentPage).then(
      ({ members: membersResponse, totalPages }) => {
        updateMembers(membersResponse);
        setTotalPages(totalPages);
      }
    );
  }, [filter, currentPage]);

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
  };

  const { members: membersFromGlobalContext, updateMembers } =
    useContext(MembersContext);
  return (
    <Container maxWidth={"md"}>
      <Box sx={{ width: "100%" }}>
        <Search
          placeholder="Search by organization on Github"
          inputValue={input}
          sx={{ maxWidth: "100%", flex: 1 }}
          onInputChange={handleInputChange}
          onSearch={handleSearch}
        />

        <section className="search-organization-info">
          <Typography sx={{ pt: 2 }} variant="h5">
            Search result for <strong>{organization}</strong>
          </Typography>
        </section>
        <Box
          sx={{
            maxHeight: "498px",
            overflowY: "scroll",
            my: 2,
            "&:hover::-webkit-scrollbar": {
              width: "8px",
            },
            "&:hover::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.primary.dark,
              borderRadius: "4px",
            },
            "&:hover::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
            "&:hover::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.primary.light,
            },
          }}
          display="flex"
          flexDirection="column"
        >
          <List members={membersFromGlobalContext} />
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Paginator
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handleChangePage}
          />
        </Box>
      </Box>
    </Container>
  );
};
