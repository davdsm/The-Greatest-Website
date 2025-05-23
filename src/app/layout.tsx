"use client";

import { useEffect } from "react";
import { Outfit } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import Lenis from "lenis";
import AOS from "aos";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "@/app/_components/Layout/Header";
import ClickSpark from "@/app/_components/Elements/ClickSpark";
import "aos/dist/aos.css";
import "@/app/_common/globals.css";
const outfit = Outfit({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let lenis: Lenis;

  // Use requestAnimationFrame to continuously update the scroll
  const raf = (time: DOMHighResTimeStamp) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  useEffect(() => {
    AOS.init();
    lenis = new Lenis();
    requestAnimationFrame(raf);
  }, []);

  return (
    <html lang="en" className={outfit.className}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0, minimal-ui"
        />
        <title>DAVDSM - Building digital experiences.</title>
        <meta
          name="description"
          content="Building digital products, brands and experiences."
        />
        <meta
          itemProp="name"
          content="DAVDSM - Building digital experiences."
        />
        <meta
          itemProp="description"
          content="Building digital products, brands and experiences."
        />
        <meta itemProp="image" content="/banner.png" />
        <meta property="og:url" content="https://davdsm.pt/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="DAVDSM - Building digital experiences."
        />
        <meta
          property="og:description"
          content="Building digital products, brands and experiences."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="DAVDSM" />
      </head>
      <body>
        <ParallaxProvider>
          <AnimatedCursor
            innerSize={0}
            outerSize={30}
            innerScale={1}
            outerScale={1.3}
            outerAlpha={0}
            innerStyle={{
              backgroundColor: "white",
            }}
            outerStyle={{
              border: "1px solid white",
            }}
          />
          <ClickSpark
            sparkColor="#fff"
            sparkSize={10}
            sparkRadius={9}
            sparkCount={8}
            duration={400}
          >
            <>
              <Header />
              <main>{children}</main>
            </>
          </ClickSpark>
        </ParallaxProvider>
      </body>
    </html>
  );
}
