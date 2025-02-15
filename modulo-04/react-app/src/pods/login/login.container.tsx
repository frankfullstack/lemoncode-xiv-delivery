import React, {useContext, useState} from "react"
import {Login} from "./login.component"
import {ProfileContext, useSessionStorage} from "@/core"
import {CenteredLayout} from "@/layout"
import {login} from "./api"
import lemoncodeLogo from "assets/lemoncode-logo-github.png"
import {ProfileContextModel} from "@/core/providers/profile/profile.vm"

export const LoginContainer: React.FC = () => {
  const { setProfile } = useContext<ProfileContextModel>(ProfileContext);
  const { storeSessionItem } = useSessionStorage("session");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (user: string, password: string) => {
    login(user, password).then((result) => {
      if (result && result.username) {
        setProfile(result?.username ?? '');
        storeSessionItem(result?.username ?? '');
        setError(null);
      } else {
        setError("Invalid credentials");
      }
    });
  };

  return (
    <CenteredLayout>
      <img width={75} height={75} src={lemoncodeLogo} />
      <Login onSubmit={handleSubmit} error={error} />
    </CenteredLayout>
  );
};
