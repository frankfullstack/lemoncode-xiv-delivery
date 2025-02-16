import React from "react";
import { routes } from "@/router";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import ListMUI from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import { MemberEntity } from "./list.vm";

interface Props {
  members: MemberEntity[];
  onSelect?: (id: string) => void;
}

const List: React.FC<Props> = ({ members, onSelect }) => {
  const navigate = useNavigate();

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

export default List;