import React, { useState } from "react";
import { ListContainer } from "@/pods/list";

export const ListScene: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState("");
  
  const handleSelectMember = (id: string) => {
    setSelected(id);
  };

  return (
    <>
      <ListContainer onSelectMember={ handleSelectMember } />
    </>
  );
};
