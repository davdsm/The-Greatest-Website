"use client";

import { useState } from "react";
import NiceListItem from "../Elements/NiceListItem";
import NiceModal from "./NiceModal";
import "./index.scss";

const projects = [
  {
    title: "Singula",
    src: "/portfolio/singula/main.png",
    color: "#000000",
    category: "Digital Experiences",
  },

  {
    title: "Aquitex",
    src: "/portfolio/aquitex/main.png",
    color: "#8C8C8C",
    category: "Digital Experiences",
  },

  {
    title: "Salazar Concept",
    src: "/portfolio/salazar/main.png",
    color: "#EFE8D3",
    category: "Digital Experiences",
  },

  {
    title: "Toca dos Amigos",
    src: "/portfolio/toca/main.png",
    color: "#706D63",
    category: "Digital Experiences",
  },
];

export const NiceList = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  console.log("modal", modal);
  

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
