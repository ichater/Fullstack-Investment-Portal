import React, { useState } from "react";
import { TextField } from "@mui/material";
import { ACCESS } from "@prisma/client";
import { AdviserAddClientState } from "@/types";
import { Checkbox, FormControlLabel } from "@mui/material";

export default function AddClient() {
  const [addClient, setAddClient] = useState<AdviserAddClientState>({
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    access: ACCESS.READONLY,
    password: "",
  });

  const { firstName, lastName, email, bio, password } = addClient;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddClient((addClient) => ({
      ...addClient,
      [e.target.name]: e.target.value,
    }));
    console.log(addClient);
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddClient((addClient) => ({
      ...addClient,
      access: e.target.checked ? ACCESS.READWRITE : ACCESS.READONLY,
    }));
    console.log(addClient);
  };

  return (
    <div className="add-client-form_wrapper">
      <form className="add-client_form">
        <h2 className="add-client_form-title">New Client</h2>
        <div className="add-client-dual-input_wrapper">
          <TextField
            required
            label="first name"
            name="firstName"
            value={firstName}
            onChange={handleChange}
          />
          <TextField
            required
            label="last name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
          />
        </div>
        <div className="add-client-dual-input_wrapper">
          <TextField
            required
            label="email"
            value={email}
            name="email"
            onChange={handleChange}
          />
          <TextField
            required
            label="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
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

        <FormControlLabel
          control={<Checkbox onChange={handleCheckbox} />}
          label="Read-write access"
        />
        <div className="add-client-btn-wrapper">
          <button className="add-client_button" type="submit">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
