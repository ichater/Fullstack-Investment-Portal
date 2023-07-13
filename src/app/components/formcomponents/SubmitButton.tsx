import React from "react";

type Props = {
  text?: string;
  fontSize?: number;
  height?: number;
  width?: number;
};

export default function SubmitButton({
  text = "submit",
  fontSize = 1.5,
  height = 4,
  width = 10,
}: Props) {
  const style = {
    height: `${height}rem`,
    width: `${width}rem`,
    fontSize: `${fontSize}rem`,
  };

  return (
    <button style={style} className="submit-btn">
      {text}
    </button>
  );
}
