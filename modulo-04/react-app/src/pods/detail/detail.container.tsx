import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { MemberDetail } from "./detail.vm";
import { Detail } from "./detail.component";
import { getMember } from "./api";
import { mapMemberDetailDtoToMemberDetail } from "./detail.mapper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBack from "@mui/icons-material/ArrowBack";

interface Props {
  id?: string;
}

export const DetailContainer: React.FC<Props> = ({ id }) => {
  const [member, setMember] = useState<MemberDetail>(null);

  useEffect(() => {
    getMember(id).then(mapMemberDetailDtoToMemberDetail).then(setMember);
  }, [id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
        minHeight: "calc(100vh - 64px)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Detail key={member?.id} member={member} />
      <Button sx={{ my: 2 }} disableElevation variant="contained" color="primary" href="/list">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ArrowBack fontSize="small"/>
          <Typography variant="body1">Go Back</Typography>
        </Box>
      </Button>
    </Box>
  );
};
