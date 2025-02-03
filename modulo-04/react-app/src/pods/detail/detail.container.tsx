import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MemberDetail } from "./detail.vm";
import { Detail } from "./detail.component";
import { getMember } from "./api";
import { mapMemberDetailDtoToMemberDetail } from "./detail.mapper";

interface Props {
  id?: string;
}

export const DetailContainer: React.FC<Props> = ({ id }) => {
  const [member, setMember] = useState<MemberDetail>(null);

  useEffect(() => {
    getMember(id).then(mapMemberDetailDtoToMemberDetail).then(setMember);
  }, [id]);

  return (
    <>
      <Detail key={member?.id} member={member} />
      <Link to="/list">Navegar a Lista</Link>
    </>
  );
};
