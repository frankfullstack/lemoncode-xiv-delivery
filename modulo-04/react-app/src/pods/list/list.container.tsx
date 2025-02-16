import { useContext, useEffect, useState, useRef } from "react";
import { useTheme } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paginator from "@/core/components/pagination/Paginator";
import Typography from "@mui/material/Typography";
import { GithubModel, GithubContext, MembersContext, Search, useLocalStorage } from "@/core";
import { getMembers } from "./api";
import List from "./list.component";

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
  const { localStorageItem: organizationStorageItem, storeLocalStorageItem: storeOrganizationStorageItem } = useLocalStorage('organization');
  const [input, setInput] = useState<string>(organization);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [emptyStateVisible, setEmptyStateVisible] = useState<boolean>(false);
  const theme = useTheme();
  const listItemsRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  const handleSearch = () => {
    setFilter(input);
    storeOrganizationStorageItem(input);
    setCurrentPage(1);
    setEmptyStateVisible(false);
  };

  useEffect(() => {
    if(organizationStorageItem) {
      setOrganization(organizationStorageItem);
      handleSearch();
    }
  }, []);

  useEffect(() => {
    getMembers(filter, currentPage).then(
      ({ members: membersResponse, totalPages }) => {
        updateMembers(membersResponse);
        setTotalPages(totalPages);
        setEmptyStateVisible(true);
      }
    );
  }, [filter, currentPage]);

  const handleChangePage = (value: number) => {
    setCurrentPage(value);
    if(listItemsRef.current) {
      listItemsRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
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
            Search result for <strong>{filter}</strong>
          </Typography>
        </section>
        {membersFromGlobalContext.length > 0 && (
          <Box
            className="members-list-container"
          >
            <Box
              display="flex"
              flexDirection="column"
              ref={listItemsRef}
              sx={{
                maxHeight: "498px",
                overflowY: "auto",
                my: 2,
                "&::-webkit-scrollbar": {
                  width: "8px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.primary.dark,
                  borderRadius: "4px",
                },
                "&::-webkit-scrollbar-thumb:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: theme.palette.primary.light,
                },
              }}
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
        )}
        {emptyStateVisible && membersFromGlobalContext.length === 0 && (
          <Alert sx={{ mt: 2 }} severity="info" variant="outlined">
            No results were found for: {organization}
          </Alert>
        )}
      </Box>
    </Container>
  );
};
