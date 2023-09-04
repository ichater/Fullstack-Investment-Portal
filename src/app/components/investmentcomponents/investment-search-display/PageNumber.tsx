import React from "react";

type Props = {
  pageNumber: number;
  onClick: (pageNumber: number) => void;
};

export default function PageNumber({ pageNumber, onClick }: Props) {
  return (
    <button className="page-number_select" onClick={() => onClick(pageNumber)}>
      {pageNumber}
    </button>
  );
}
