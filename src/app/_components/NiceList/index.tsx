"use client";

import { useState } from "react";
import NiceListItem from "../Elements/NiceListItem";
import NiceModal from "./NiceModal";
/* import Modal from '../components/modal'; */

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },

  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },

  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },

  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export const NiceList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section id="niceList">
      <div className="container">
        {projects.map((project, index) => {
          return (
            <NiceListItem
              index={index}
              title={project.title}
              setModal={setModal}
              key={index}
            />
          );
        })}
      </div>
      <NiceModal modal={modal} projects={projects} />
    </section>
  );
};

export default NiceList;
