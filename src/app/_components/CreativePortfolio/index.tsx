"use client";

import { useSpring } from "framer-motion";
import CreativeGalleryItem from "../Elements/CreativeGalleryItem";

import "./index.scss";
export const CreativePortfolio = () => {
  const spring = {
    stiffness: 150,
    damping: 15,
    mass: 0.1,
  };

  const mousePosition = {
    x: useSpring(0, spring),
    y: useSpring(0, spring),
  };

  const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const targetX = clientX - (window.innerWidth / 2) * 0.25;
    const targetY = clientY - (window.innerWidth / 2) * 0.3;
    mousePosition.x.set(targetX);
    mousePosition.y.set(targetY);
  };

  const projects = [
    {
      name: "JA Creative Design",
      slug: "JA",
    },

    {
      name: "Boundy",
      slug: "Boundy",
    },

    {
      name: "Trama Arquitetos",
      slug: "Trama",
    },
  ];


  return (
    <div id="creativePortfolio" onMouseMove={mouseMove}>
      <main className="main">
        {projects.map(({ slug }, i) => {
          return (
            <CreativeGalleryItem
              mousePosition={mousePosition}
              project={slug}
              key={i}
            />
          );
        })}
      </main>
    </div>
  );
};
export default CreativePortfolio;
