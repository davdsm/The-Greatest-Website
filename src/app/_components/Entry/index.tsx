"use client"

import Link from "next/link";
import SplitText from "@/app/_components/Elements/SplitText/intex";
import "./index.scss";

export const Entry = () => {
  return (
    <div id="entry">
      <SplitText
        text="Building digital products, brands and experiences."
        className=""
        delay={150}
        animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
        animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={() =>
          console.log("Letter animation complete.")
        }
      />
    </div>
  );
};
