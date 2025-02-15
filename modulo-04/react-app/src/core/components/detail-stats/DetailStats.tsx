import { Box, Typography } from "@mui/material";

interface DetailStatsProps {
  title: string;
  value: string | number;
  emptyValue?: string;
}

export const DetailStats: React.FC<DetailStatsProps> = ({ title, value, emptyValue = 'N/A' }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h4" fontWeight="bold">
        { value ?? emptyValue }
      </Typography>
    </Box>
  );
};
