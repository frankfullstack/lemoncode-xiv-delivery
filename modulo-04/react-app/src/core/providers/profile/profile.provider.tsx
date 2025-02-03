import React, { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ProfileContextModel } from "./profile.vm";
import { useSessionStorage } from "@/core/hooks";

export const ProfileContext = createContext<ProfileContextModel>(null);

interface Props {
  components: {
    Login: React.ReactNode
  }
}

export const ProfileProvider: React.FC<PropsWithChildren<Props>> = ({ components: { Login }, children }) => {
  const [username, setUsername] = useState<string>("");
    
  const { sessionItem } = useSessionStorage('session');
  
  useEffect(() => {
    setUsername(sessionItem);
  }, [sessionItem]);

  return (
    <ProfileContext.Provider value={{ username: username ?? sessionItem, setProfile: setUsername }}>
      { (username) ? <> { children } </> : Login /** Cortamos el render para interceptar si no está logado */}
    </ProfileContext.Provider>
  );
};
