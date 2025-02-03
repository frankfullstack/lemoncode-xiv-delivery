import React, { useContext, useState } from "react";
import { FormData } from "../login.vm";
import { Button, InputAdornment, TextField } from "@mui/material";

interface Props {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleInputChange = () => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // e.stopPropagation();
    onSubmit(formData.username, formData.password);
  };

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
      <TextField
        label="Username"
        placeholder="Enter your username..."
        type="text"
        name="username"
        value={formData.username}
        onChange={handleInputChange()}
        helperText="Please enter your name"
      />
      <TextField
        label="Password"
        placeholder="Enter your password..."
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange()}
      />

      <Button variant="contained" color="primary" type="button" onClick={handleSubmit}>
        Sign In
      </Button>
    </form>
  );
};
