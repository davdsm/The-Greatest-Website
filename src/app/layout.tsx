"use client";

import { Outfit } from "next/font/google";
import AOS from "aos";
import Header from "@/app/_components/Header";
import ClickSpark from "@/app/_components/Elements/ClickSpark";
import "@/app/_common/globals.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

const outfit = Outfit({ subsets: ["latin"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init();
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
        <ClickSpark
          sparkColor="#fff"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <>
            <Header />
            <main>{children}</main>
            <h1>Footer</h1>
          </>
        </ClickSpark>
      </body>
    </html>
  );
}
