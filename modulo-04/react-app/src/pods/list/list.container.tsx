import React, { useContext, useEffect, useState } from "react";
import { MembersContext } from "@/core/providers";
import { List } from "./list.component";
import { Link } from "react-router-dom";

interface Props {
  onSelectMember: (id: string) => void;
}

export const ListContainer: React.FC<Props> = ({ onSelectMember }) => {
  const { members } = useContext(MembersContext);
  return (
    <>
      <List members={ members} />
      {/* <Link to="/detail">Navegar a detalle</Link> */}
    </>
  );
};
