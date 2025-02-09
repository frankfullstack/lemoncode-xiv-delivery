import { MemberEntity } from "@/core";
import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import ListMUI from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Badge, useTheme } from "@mui/material";
import { routes } from "@/router";
import { useNavigate } from "react-router-dom";
import { MemberWithFollowers } from "./list.vm";

interface Props {
  members: MemberWithFollowers[];
  onSelect?: (id: string) => void;
}

export const List: React.FC<Props> = ({ members, onSelect }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <ListMUI>
      {members.map((m) => (
        <React.Fragment key={m.id}>
          <ListItem disableGutters disablePadding>
            <ListItemButton onClick={() => navigate(routes.detail(m.login))}>
              <ListItemAvatar>
                <Avatar
                  sx={{ width: "48px", height: "auto", mr: 2 }}
                  alt={m.login}
                  src={m.avatar_url}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<Typography variant="h6">{m.login}</Typography>}
                secondary={<Typography variant="body2">{"User type: "}{m.type}</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </ListMUI>
  );
};
