"use client";

import React from "react";
import "./index.scss";

interface NiceListItemProps {
  index: number;
  title: string;
  setModal: (modal: { active: boolean; index: number }) => void;
}

export const NiceListItem = ({ index, title, setModal }: NiceListItemProps) => {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className="project"
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
};

export default NiceListItem;
