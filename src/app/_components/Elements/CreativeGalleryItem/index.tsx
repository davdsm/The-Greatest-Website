import Image from "next/image";
import { MouseEventHandler } from "react";
import { motion, MotionValue } from "framer-motion";
import "./index.scss";

interface CreativeGalleryProps {
  project: string;
  mousePosition: { x: MotionValue<number>; y: MotionValue<number> };
}

export const CreativeGalleryItem = ({
  mousePosition,
  project,
}: CreativeGalleryProps) => {
  const { x, y } = mousePosition;

  return (
    <div className="gallery">
      <div className="imageContainer">
        <Image
          src={`/portfolio/${project}/background.png`}
          alt={project}
          fill
        />
      </div>
      <motion.div className="vignette" style={{ x, y }}>
        <Image src={`/portfolio/${project}/main.jpg`} alt="image" fill />
      </motion.div>
    </div>
  );
};

export default CreativeGalleryItem;
