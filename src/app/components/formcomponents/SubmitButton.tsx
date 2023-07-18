"use client";
import React, { useState } from "react";

type Hover = {
  backgroundColor?: string;
  border?: string;
  fontSize?: number;
};

type Props = {
  text?: string;
  fontSize?: number;
  height?: number;
  width?: number;
  color?: string;
  backgroundColor?: string;
  onHover?: Hover;
  onClick?: () => any;
};

export default function SubmitButton({
  text = "submit",
  fontSize = 1.5,
  height = 4,
  width = 10,
  color = "#edf0f1",
  backgroundColor = "rgb(0, 128, 0)",
  onHover = {
    backgroundColor: "rgb(34, 177, 76)",
    border: "1px solid rgba(54, 172, 71, 0.2)",
    fontSize: 1.75,
  },
  onClick,
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    container: {
      height: `${height}rem`,
      width: `${width}rem`,
      color,
      backgroundColor: isHovered ? onHover.backgroundColor : backgroundColor,
      border: isHovered ? onHover.border : "none",
      fontSize: isHovered ? `${onHover.fontSize}rem` : `${fontSize}rem`,
    },
  };

  return (
    <button
      style={style.container}
      className="submit-btn"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
