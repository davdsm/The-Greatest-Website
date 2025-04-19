import { useInView } from "react-intersection-observer";
import { CustomValueType, motion } from "framer-motion";
import "./index.scss";
import { useState } from "react";

interface MaskTextProps {
  phrases: string[];
  size?: string;
  delay?: number;
  align?: string;
}

export const MaskText = ({ phrases, size, delay = 0, align = "left" }: MaskTextProps) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  const animation = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 2,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  setTimeout(() => {
    setIsReady(true);
  }, delay);

  return (
    <div className="maskText">
      {isReady && (
        <div ref={ref}>
          {phrases.map((phrase, index) => {
            return (
              <div key={index} className="lineMask">
                <motion.p
                  custom={index}
                  variants={animation}
                  initial="initial"
                  animate={inView ? "enter" : ""}
                  style={{ fontSize: size, textAlign: align as unknown as CustomValueType }} // Adjust font size as needed
                >
                  {phrase}
                </motion.p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
