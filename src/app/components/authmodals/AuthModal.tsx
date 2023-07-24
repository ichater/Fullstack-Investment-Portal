"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClientAdviserToggle from "./ClientAdviserToggle";
import AdviserSignUpForm from "./AdviserSignUpForm";
import LogInForm from "./LogInForm";
import { LoginState } from "@/types";

type Props = {
  isLogIn: boolean;
};

export default function AuthModal({ isLogIn }: Props) {
  const [open, setOpen] = useState(false);
  const [loginState, setLoginState] = useState<LoginState>("adviser");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute" as "absolute",
    top: isLogIn ? "30%" : "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  return (
    <>
      {" "}
      <li onClick={handleOpen}>{isLogIn ? "Log In" : "Sign Up"}</li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="auth-modal-main_background"
      >
        <Box sx={style}>
          <h2 className="auth-modal_header">
            {isLogIn ? "Log in as:" : "Sign up as"}{" "}
            {loginState.charAt(0).toLocaleUpperCase() + loginState.slice(1)}
          </h2>

          {!isLogIn && <AdviserSignUpForm />}

          {isLogIn && (
            <div className="login-form_wrapper">
              <LogInForm loginState={loginState} />
              <ClientAdviserToggle
                loginState={loginState}
                setLoginState={setLoginState}
              />
            </div>
          )}
        </Box>
      </Modal>
    </>
  );
}
