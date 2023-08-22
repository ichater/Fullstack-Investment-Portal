import Toggle from "@/app/components/formcomponents/Toggle";
import { ClientInfoEditState } from "@/types";
import { ACCESS } from "@prisma/client";
import React, { useEffect, useState } from "react";

interface Props extends ClientInfoEditState {
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  setEditFormState: React.Dispatch<React.SetStateAction<ClientInfoEditState>>;
}

export default function ClientInformationEdit({
  email,
  bio,
  access,
  handleChange,
  setEditFormState,
}: Props) {
  const [toggleState, setToggleState] = useState<boolean>(
    access === "READONLY"
  );

  useEffect(() => {
    setEditFormState((state) => ({
      ...state,
      access: toggleState ? "READONLY" : "READWRITE",
    }));
  }, [toggleState, setEditFormState]);

  return (
    <>
      {" "}
      <div>
        <label>Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />{" "}
      </div>
      <Toggle
        optionOne={ACCESS.READONLY}
        optionTwo={ACCESS.READWRITE}
        toggleState={toggleState}
        setToggleState={setToggleState}
      />
      <h3>About</h3>
      <textarea
        className="adviser-bio-edit"
        id="bio"
        name="bio"
        rows={5}
        cols={80}
        value={bio}
        onChange={handleChange}
      />
    </>
  );
}
