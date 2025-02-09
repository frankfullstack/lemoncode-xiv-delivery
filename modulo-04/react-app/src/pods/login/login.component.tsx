import React from "react";
import { LoginForm } from "./components/login-form.component";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Alert from "@mui/material/Alert";

interface Props {
  onSubmit: (username: string, password: string) => void;
  error: string | null;
}

export const Login: React.FC<Props> = ({ onSubmit, error }) => {
  return (
    <>
      <Card sx={{ minWidth: 350 }}>
        <CardHeader
          sx={{ textAlign: "center" }}
          title="Welcome to Lemoncoder"
        />
        <CardContent>
          <LoginForm onSubmit={onSubmit} />
          {error && <Alert sx={{ mt: 2 }} severity="error">{error}</Alert>}
        </CardContent>
      </Card>
    </>
  );
};
