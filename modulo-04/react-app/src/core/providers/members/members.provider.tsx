import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { MemberEntity, MembersContextModel } from "./";

const MEMBERS_URL = "https://api.github.com/orgs/lemoncode/members?page=1";

export const MembersContext = createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  const [members, setMembers] = useState<MemberEntity[]>([]);

  const config = githubToken ? {headers: {
    Authorization: `Bearer ${githubToken}`,
  }} : {};

  useEffect(() => {
    fetch(MEMBERS_URL, config)
      .then((resp) => resp.json())
      .then(setMembers);
  }, []);

  const handleUpdateMembers = (members: MemberEntity[]) => {
    setMembers(members);
  }

  return (
    <MembersContext.Provider value={{ members, updateMembers: handleUpdateMembers }}>
      {children}
    </MembersContext.Provider>
  );
};
