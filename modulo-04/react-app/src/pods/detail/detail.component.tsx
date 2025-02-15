import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import GithubIcon from "@mui/icons-material/GitHub";
import Typography from "@mui/material/Typography";
import { MemberDetail } from "./detail.vm";
import { DetailStats } from "@/core";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = ({ member }) => {
  const handleOpenProfile = () => {
    window.open(member.htmlUrl, "_blank", "noopener,noreferrer");
  };

  const formattedDate = (refDate: string) =>
    new Date(refDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return member ? (
    <Card sx={{ minWidth: 450 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: "primary.main" }}
            aria-label={`${member?.login}-avatar`}
          >
            {member?.login[0].toUpperCase()}
          </Avatar>
        }
        title={
          <Box>
            <Typography variant="h5">{member.name}</Typography>
          </Box>
        }
        subheader={
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body2">Member since: </Typography>
            <Typography variant="body2" fontWeight="bold">
              {formattedDate(member?.createdAt)}
            </Typography>
          </Box>
        }
      />
      <CardMedia
        sx={{ objectFit: "cover" }}
        component="img"
        height="350"
        image={member?.avatarUrl}
        alt={member?.login}
      />
      <CardContent>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            mt: 1,
          }}
        >
          <DetailStats title="Public Repos" value={member?.publicRepos} />
          <DetailStats title="Public Gists" value={member?.publicGists} />
          <DetailStats title="Following" value={member?.following} />
          <DetailStats title="Followers" value={member?.followers} />
        </Box>
        <CardActions>
          <Box
            sx={{
              my: 2,
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button 
            color="inherit"
            variant="text"
            startIcon={<GithubIcon />}
            onClick={handleOpenProfile}
            >
              Go to Github Profile
            </Button>
          </Box>
        </CardActions>
      </CardContent>
    </Card>
  ) : (
    <>Loading member</>
  );
};
