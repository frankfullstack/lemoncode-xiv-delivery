import React, { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ProfileContextModel } from "./profile.vm";
import { useSessionStorage } from "@/core/hooks";
import { useNavigate } from "react-router-dom";

export const ProfileContext = createContext<ProfileContextModel | null>(null);

interface Props {
  components: {
    Login: React.ReactNode
  }
}

export const ProfileProvider: React.FC<PropsWithChildren<Props>> = ({ components: { Login }, children }) => {
  const [username, setUsername] = useState<string>("");
    
  const { sessionItem } = useSessionStorage('session');

  const navigate = useNavigate();
  
  useEffect(() => {
    if(!sessionItem) navigate('/login');
    setUsername(sessionItem);
  }, [sessionItem]);

  return (
    <ProfileContext.Provider value={{ username: username ?? sessionItem, setProfile: setUsername }}>
      { (username) ? <> { children } </> : Login /** Cortamos el render para interceptar si no está logado */}
    </ProfileContext.Provider>
  );
};
