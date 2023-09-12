import React, { useState, useEffect } from "react";
import { LoginState, SignInFormState } from "@/types";
import { TextField } from "@mui/material";
import SubmitButton from "../formcomponents/SubmitButton";
import { useAdviserAuth } from "@/hooks/useAdviserAuth";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

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
    if (loginState === "adviser") {
      console.log("logging in as aviser");
      await handleAdviserSignIn(signInFormState);
      router.refresh();
    }
    handleClose();
  };

  return (
    <form className="auth-modal_form" onSubmit={handleSubmit}>
      {" "}
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
