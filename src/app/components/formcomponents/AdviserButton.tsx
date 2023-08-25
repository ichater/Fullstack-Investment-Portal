"use client";
import React, { useState } from "react";

type Props = {
  text: string;
  onClick?: () => any;
  borderRadius?: string;
  height?: number;
  width?: number;
  fontSize?: string;
  color?: string;
  transition?: string;
  padding?: string;
  onHover?: {
    color?: string;
    fontSize?: string;
  };
};

export default function AdviserButton({
  text,
  onClick,
  borderRadius = "25px",
  height = 4,
  width = 10,
  fontSize = "1.25rem",
  color = "rgb(205, 227, 207)",
  transition = "2s",
  padding = "0",
  onHover = {
    color: "#fff",
    fontSize: "1.25rem",
  },
}: Props) {
  const [isHovered, setIsHovered] = useState(false);

  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius,
    height: `${height}rem`,
    width: `${width}rem`,
    padding,
    transition,
    color: isHovered ? onHover.color : color,
    fontSize: isHovered ? onHover.fontSize : fontSize,
  };

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={style}
      className="advisor-btn"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
