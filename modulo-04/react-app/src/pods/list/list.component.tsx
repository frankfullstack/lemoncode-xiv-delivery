import { MemberEntity } from "@/core";
import React from "react";
import ListMUI from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { ListItemButton } from "@mui/material";
import { routes } from "@/router";
import { useNavigate } from "react-router-dom";

interface Props {
  members: MemberEntity[];
  onSelect?: (id: string) => void;
}

export const List: React.FC<Props> = ({ members, onSelect }) => {
  const navigate = useNavigate();
  return (
    // <div className="list-user-list-container">
    //   <span className="list-header">Avatar</span>
    //   <span className="list-header">Id</span>
    //   <span className="list-header">Name</span>
    //   { members ? members.map((member) => (
    //     <MemberRow key={member.id} member={ member } onSelect={ () => onSelect(member.login) }/>
    //   )) : <h1>Loading members ...</h1>}
    // </div>
    <ListMUI>
      {members.map((m) => (
        <React.Fragment key={m.id}>
          <ListItem disablePadding>
            <ListItemButton
              role={undefined}
              onClick={() => navigate(routes.detail(m.login))}
            >
              <ListItemAvatar>
                <Avatar alt={m.login} src={m.avatar_url} />
              </ListItemAvatar>
              <ListItemText
                primary={m.login}
                secondary={<Typography>{m.id}</Typography>}
              />
            </ListItemButton>
          </ListItem>
          <Divider variant="inset" component="li" />
        </React.Fragment>
      ))}
    </ListMUI>
  );
};
