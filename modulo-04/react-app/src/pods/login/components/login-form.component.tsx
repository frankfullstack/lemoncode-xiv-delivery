import React, { useState } from "react";
import { FormData } from "../login.vm";
import { Button, TextField, InputAdornment } from "@mui/material";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const handleInputChange = () => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onSubmit(formData.username, formData.password);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "enter") {
      e.preventDefault();
      onSubmit(formData.username, formData.password);
    }
  };

  return (
    <form style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
      <TextField
        label="Username"
        placeholder="Enter your username..."
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange()}
        helperText="Please enter your name"
        onKeyDown={handleKeyDown}
      />
      <TextField
        label="Password"
        placeholder="Enter your password..."
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{ cursor: 'pointer' }}
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </InputAdornment>
            ),
          },
        }}
        type={passwordVisible ? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleInputChange()}
        onKeyDown={handleKeyDown}
      />

      <Button
        variant="contained"
        color="primary"
        type="button"
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </form>
  );
};
