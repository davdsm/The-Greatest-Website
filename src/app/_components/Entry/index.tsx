"use client";

import { useEffect, useState } from "react";
import SplitText from "@/app/_components/Elements/SplitText/intex";
import Button from "@/app/_components/Elements/Button";

import "./index.scss";
import { Parallax } from "react-scroll-parallax";

export const Entry = () => {
  const [isReady, setisReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setisReady(true);
    }, 4000);
  }, []);

  return (
    <div id="entry">
      <Parallax speed={-10} className="content">
        <SplitText
          text="Building digital products, brands and experiences."
          className=""
          delay={150}
          animationFrom={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-30px"
        />
        {isReady && (
          <div className="two-buttons">
            <Button
              data-aos="fade-up"
              data-aos-duration="1600"
              href="/about"
              shape="rect"
              theme="dark"
              arrow={false}
            >
              <>
                Portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"
                  />
                </svg>
              </>
            </Button>
            <Button
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="200"
              href="/work"
              shape="round"
              theme="light"
            >
              Products
            </Button>
          </div>
        )}
        {!isReady && <div></div>}
      </Parallax>
    </div>
  );
};
