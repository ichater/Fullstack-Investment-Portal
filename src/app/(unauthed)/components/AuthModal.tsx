"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClientAdviserToggle from "./authmodals/ClientAdviserToggle";

type Props = {
  isLogIn: boolean;
};

const style = {
  position: "absolute" as "absolute",
  top: "20%",
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

export type ToggleState = "client" | "adviser";

export default function AuthModal({ isLogIn }: Props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [toggleState, setToggleState] = useState<ToggleState>("adviser");

  return (
    <>
      {" "}
      <li onClick={handleOpen}>{isLogIn ? "Log In" : "Sign Up"}</li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isLogIn ? "Log in as:" : "Sign up as"}{" "}
            {toggleState.charAt(0).toLocaleUpperCase() + toggleState.slice(1)}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Logs of details here
          </Typography>
          <ClientAdviserToggle
            toggleState={toggleState}
            setToggleState={setToggleState}
          />
        </Box>
      </Modal>
    </>
  );
}
