import React, {
  createContext,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { MemberEntity, MembersContextModel } from "./members.vm";

const MEMBERS_URL = "https://api.github.com/orgs/lemoncode/members";

export const MembersContext = createContext<MembersContextModel>(null);

export const MembersProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const githubToken = import.meta.env.VITE_GITHUB_TOKEN;

  const [members, setMembers] = useState<MemberEntity[]>([]);

  useEffect(() => {
    fetch(MEMBERS_URL, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
      }
    })
      .then((resp) => resp.json())
      .then(setMembers);
  }, []);

  return (
    <MembersContext.Provider value={{ members }}>
      {children}
    </MembersContext.Provider>
  );
};
