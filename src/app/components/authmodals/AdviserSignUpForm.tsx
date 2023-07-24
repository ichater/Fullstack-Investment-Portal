import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SubmitButton from "../formcomponents/SubmitButton";
import { AdviserSignUpState } from "@/types";

export default function AdviserSignUpForm() {
  const [adviserSignUp, setAdviserSignUp] = useState<AdviserSignUpState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } =
    adviserSignUp;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAdviserSignUp((adviserSignUp) => ({
      ...adviserSignUp,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form className="auth-modal_form">
      {" "}
      <div className="adviser-signup-fullname_wrapper">
        <TextField
          required
          label="first name"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />{" "}
        <TextField
          required
          label="last name"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <TextField
        className="single-row_input"
        required
        label="email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <TextField
        className="single-row_input"
        required
        label="password"
        type="password"
        value={password}
        name="password"
        onChange={handleChange}
      />{" "}
      <TextField
        className="single-row_input"
        required
        label="confirm password"
        type="password"
        value={confirmPassword}
        name="confirmPassword"
        onChange={handleChange}
      />
      <SubmitButton text="Submit" />
    </form>
  );
}
