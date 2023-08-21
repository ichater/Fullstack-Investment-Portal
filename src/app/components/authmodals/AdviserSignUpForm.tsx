import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SubmitButton from "../formcomponents/SubmitButton";
import { AdviserSignUpState } from "@/types";
import { adviserAuth } from "@/hooks/adviserAuth";

export default function AdviserSignUpForm() {
  const [adviserSignUp, setAdviserSignUp] = useState<AdviserSignUpState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    city: "",
    company: "",
    phone: "",
  });

  const {
    firstName,
    lastName,
    email,
    bio,
    city,
    company,
    phone,
    password,
    confirmPassword,
  } = adviserSignUp;

  const { handleAdviserSignUp } = adviserAuth();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAdviserSignUp((adviserSignUp) => ({
      ...adviserSignUp,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => handleAdviserSignUp(adviserSignUp);

  return (
    <form className="auth-modal_form" onSubmit={handleSubmit}>
      {" "}
      <div className="adviser-signup-dual-input_wrapper">
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
      <div className="adviser-signup-dual-input_wrapper">
        <TextField
          required
          label="city"
          name="city"
          value={city}
          onChange={handleChange}
        />{" "}
        <TextField
          required
          label="phone"
          name="phone"
          value={phone}
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
        label="company"
        value={company}
        name="company"
        onChange={handleChange}
      />
      <label className="bio-input_label">
        bio (optional) :
        <textarea
          className="single-row_textarea"
          id="bio"
          name="bio"
          rows={5}
          value={bio}
          onChange={handleChange}
        />
      </label>
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
      <SubmitButton
        disabled={
          !firstName ||
          !lastName ||
          !email ||
          !city ||
          !company ||
          !phone ||
          !password ||
          !confirmPassword
        }
        text="Submit"
      />
    </form>
  );
}
