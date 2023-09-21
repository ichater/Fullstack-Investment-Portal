import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import SubmitButton from "../formcomponents/SubmitButton";
import { AdviserSignUpState } from "@/types";
import { useAdviserAuthContext, useQueryString, useAdviserAuth } from "@/hooks";
import LoadingSpinner from "../loadingcomponents/LoadingSpinner";
import ModalError from "../errorcomponents/ModalError";

export default function AdviserSignUpForm({
  handleClose,
}: {
  handleClose: () => void;
}) {
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

  const { router } = useQueryString();

  const { handleAdviserSignUp } = useAdviserAuth();
  const { authState, setAuthState } = useAdviserAuthContext();

  useEffect(() => {
    setAuthState((state) => ({
      ...state,
      error: null,
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAdviserSignUp((adviserSignUp) => ({
      ...adviserSignUp,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleAdviserSignUp(adviserSignUp, handleClose);
    router.refresh();
  };

  if (!!authState.loading) {
    return (
      <form className="auth-modal_form">
        {" "}
        <LoadingSpinner />
      </form>
    );
  }

  return (
    <form className="auth-modal_form" onSubmit={handleSubmit}>
      {!!authState.error && <ModalError message={authState.error} />}{" "}
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
