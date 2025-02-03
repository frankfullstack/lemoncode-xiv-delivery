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
  const [members, setMembers] = useState<MemberEntity[]>([]);

  useEffect(() => {
    fetch(MEMBERS_URL, {
      headers: {
        Authorization: 'Bearer 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',
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
