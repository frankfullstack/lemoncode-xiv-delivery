import React from "react";
import { MemberDetail } from "./detail.vm";

interface Props {
  member: MemberDetail;
}

export const Detail: React.FC<Props> = ({ member }) => {
  return member ? (
    <>
      <img src={member.avatarUrl} style={{  maxHeight: '150px', maxWidth: '150px' }}/>
      <p>id: {member.id}</p>
      <p>login: {member.login}</p>
      <p>name: {member.name}</p>
      <p>company: {member.company}</p>
      <p>bio: {member.bio}</p>
      <br />
    </>
  ) : (
    <>Loading member</>
  );
};
