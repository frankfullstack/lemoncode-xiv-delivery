import { Box, Typography } from "@mui/material";
import { Property } from "csstype";

interface DetailStatsProps {
  title: string;
  value: string | number;
  flexDirection?: Property.FlexDirection | undefined;
  emptyValue?: string;
}

export const DetailStats: React.FC<DetailStatsProps> = ({
  title,
  value,
  emptyValue = "N/A",
  flexDirection = "column",
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection,
        alignItems: "center",
        gap: 1,
      }}
    >
      <Typography variant="body1">{title}</Typography>
      <Typography variant="h4" fontWeight="bold">
        {value ?? emptyValue}
      </Typography>
    </Box>
  );
};
