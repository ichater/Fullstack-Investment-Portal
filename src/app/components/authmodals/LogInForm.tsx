import React, { useState, useEffect } from "react";
import { LoginState, SignInFormState } from "@/types";
import { TextField } from "@mui/material";
import SubmitButton from "../formcomponents/SubmitButton";
import { useQueryString } from "@/hooks/useQueryString";
import { useAdviserAuthContext, useAdviserAuth } from "@/hooks";
import LoadingSpinner from "../loadingcomponents/LoadingSpinner";
import ModalError from "../errorcomponents/ModalError";

type Props = {
  loginState: LoginState;
  handleClose: () => void;
};

export default function LogInForm({ loginState, handleClose }: Props) {
  const [signInFormState, setSignInFormState] = useState<SignInFormState>({
    email: "",
    password: "",
  });
  const { email, password } = signInFormState;

  const { handleAdviserSignIn } = useAdviserAuth();
  const { authState: adviserAuthState, setAuthState } = useAdviserAuthContext();

  const { router } = useQueryString();

  const isAdviser: boolean = loginState === "adviser";

  useEffect(() => {
    setAuthState((state) => ({
      ...state,
      error: null,
    }));
  }, []);

  useEffect(() => {
    setSignInFormState({
      email: "",
      password: "",
    });
  }, [loginState]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSignInFormState((signInFormState) => ({
      ...signInFormState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isAdviser) {
      await handleAdviserSignIn(signInFormState, handleClose);
      router.refresh();
    }
  };

  if (!!adviserAuthState.loading) {
    return (
      <form className="auth-modal_form">
        {" "}
        <LoadingSpinner />
      </form>
    );
  }

  return (
    <form className="auth-modal_form" onSubmit={handleSubmit}>
      {!!adviserAuthState.error && isAdviser && (
        <ModalError message={adviserAuthState.error} />
      )}{" "}
      <TextField
        className="single-row_input"
        required
        id="outlined-required"
        label="email"
        name="email"
        value={email}
        onChange={handleChange}
      />{" "}
      <TextField
        className="single-row_input"
        required
        id="outlined-required"
        type="password"
        label="password"
        name="password"
        value={password}
        onChange={handleChange}
      />{" "}
      <SubmitButton text="Submit" disabled={!email || !password} />
    </form>
  );
}
