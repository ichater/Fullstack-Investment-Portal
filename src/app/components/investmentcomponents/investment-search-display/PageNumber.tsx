import React from "react";

type Props = {
  pageNumber: number;
  onClick: (pageNumber: number) => void;
  activePage: boolean;
};

export default function PageNumber({
  pageNumber,
  onClick,
  activePage = true,
}: Props) {
  return (
    <button
      className={`page-number_select ${!!activePage && "page-number_selected"}`}
      onClick={() => onClick(pageNumber)}
    >
      {pageNumber}
    </button>
  );
}
