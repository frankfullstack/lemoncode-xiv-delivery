import React from "react";
import { LoginForm } from "./components/login-form.component";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader } from "@mui/material";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const Login: React.FC<Props> = ({ onSubmit }) => {
  return (
    <>
      <Card sx={{ minWidth: 350 }}>
        <CardHeader sx={{ textAlign: 'center' }} title='Welcome to Lemoncoder' />
        <CardContent>
          <LoginForm onSubmit={onSubmit} />
        </CardContent>
      </Card>
    </>
  );
};
