import React, { useContext } from "react";
import { Login } from "./login.component";
import { ProfileContext } from "@/core";
import { CenteredLayout } from "@/layout";
import { login } from "./api";
import lemoncodeLogo from 'assets/lemoncode-logo-github.png';
import { useSessionStorage } from "@/core/hooks";
import { ProfileContextModel } from "@/core/providers/profile/profile.vm";

export const LoginContainer: React.FC = () => {
  const { setProfile } = useContext<ProfileContextModel>(ProfileContext);
  const { storeSessionItem } = useSessionStorage('session')

  const handleSubmit = (user: string, password: string) => {
    login(user, password).then((result) => {
      if (result && result.username) {
        setProfile(result?.username)
        storeSessionItem(result?.username);
      };
    });
  };

  return (
    <CenteredLayout>
      <img width={75} height={75} src={lemoncodeLogo}/>
      <Login onSubmit={handleSubmit} />
    </CenteredLayout>
  );
};
