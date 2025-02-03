import React, { useEffect, useState } from "react";
import { ListContainer } from "@/pods/list";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { DetailContainer } from "@/pods/detail";

export const ListScene: React.FC = () => {
  const [selected, setSelected] = useState("");
  const handleSelectMember = (id: string) => {
    // navigate(routes.detail(id));
    setSelected(id);
  };

  return (
    <>
      <ListContainer onSelectMember={ handleSelectMember } />
      {/* {selected && (
        <div>
          <DetailContainer id={selected} />
        </div>
      )} */}
    </>
  );
};
