import React, { useEffect, useState } from "react";
import Alert from "@mui/material/Alert";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import { LoginForm } from "./components/login-form.component";

interface Props {
  onSubmit: (username: string, password: string) => void;
  error: string | null;
}

export const Login: React.FC<Props> = ({ onSubmit, error }) => {
  const [visibleError, setVisibleError] = useState<string | null>(error);

  useEffect(() => {
    if (error) {
      setVisibleError(error);
      const timer = setTimeout(() => {
        setVisibleError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <>
      <Card sx={{ minWidth: 350 }}>
        <CardHeader
          sx={{ textAlign: "center" }}
          title="Welcome to Lemoncoder"
        />
        <CardContent>
          <LoginForm onSubmit={onSubmit} />
          {visibleError && (
            <Alert
              sx={{ mt: 2 }}
              severity="error"
            >
              {error}
            </Alert>
          )}
        </CardContent>
      </Card>
    </>
  );
};
