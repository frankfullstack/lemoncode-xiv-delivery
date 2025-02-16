import React, {useContext, useState} from "react"
import {Login} from "./login.component"
import {CenteredLayout} from "@/layout"
import {ProfileContextModel, ProfileContext, useSessionStorage} from "@/core"
import lemoncodeLogo from "assets/lemoncode-logo-github.png"
import {login} from "./api"

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
