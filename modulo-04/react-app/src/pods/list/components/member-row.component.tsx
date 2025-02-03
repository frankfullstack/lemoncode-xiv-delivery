import { routes } from "@/router";
import React from "react";
import { Link } from "react-router-dom";
import { MemberEntity } from "../list.vm";

interface Props {
  member: MemberEntity;
  onSelect: () => void,
}

export const MemberRow: React.FC<Props> = ({ member, onSelect }) => {
  return (
    <>
      <>
        <img src={member.avatar_url} />
        <span>{member.id}</span>
        <div onClick={ onSelect }>{member.login}</div>
        {/* <Link to={routes.detail(member.login)}>{member.login}</Link> // Reemplazamos para hacer la tubería hast el scene */}
      </>
    </>
  );
};
