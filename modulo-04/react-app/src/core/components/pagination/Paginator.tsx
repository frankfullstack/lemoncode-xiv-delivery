import Pagination from "@mui/material/Pagination";

interface PaginatorProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Paginator: React.FC<PaginatorProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePageChange: (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => void = (event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Pagination
      sx={{
        "& .MuiPaginationItem-root": {
          color: "text.primary",
          "&:hover": {
            backgroundColor: "primary.dark",
            color: "primary.contrastText",
          },
        },
        "& .Mui-selected": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        },
        "& .MuiPaginationItem-root.Mui-selected": {
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        },
      }}
      showFirstButton
      showLastButton
      count={totalPages}
      page={currentPage}
      onChange={handlePageChange}
    ></Pagination>
  );
};
