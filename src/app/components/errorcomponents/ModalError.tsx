import React from "react";

type Props = {
  title?: string;
  message: string;
};

export default function ModalError({ title = "Error", message }: Props) {
  return (
    <div className="error-text">
      <h2>{title}:</h2>
      <p>{message}</p>
    </div>
  );
}
