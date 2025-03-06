"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradientText from "@/app/_components/Elements/GradientButton";
import Aurora from "@/app/_components/Elements/Aurora";
import "./index.scss";

export const Header = () => {
  const menu: { id: string; name: string; link: string }[] = [
    {
      id: "m-i-1",
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: "m-i-2",
      name: "Solutions",
      link: "/solutions",
    },
    {
      id: "m-i-3",
      name: "Contacts",
      link: "/contacts",
    },
  ];

  const currentRoute: string = usePathname();

  return (
    <>
      <div
        id="aurora"
        data-aos="fade-down"
        data-aos-duration="1600"
        data-aos-delay="3000"
      >
        <Aurora
          colorStops={["#0C959B", "#0A7075", "#0C959B", "#0A7075", "#0C959B"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <header className="container">
        <div
          id="logo"
          data-aos="fade-down"
          data-aos-duration="1600"
          data-aos-delay="800"
        >
          <Link href="/">
            <Image src="/logo.png" width={50} height={50} alt="DAVDSM Logo" />
          </Link>
        </div>
        <div id="menu">
          <ul>
            {menu.map((item: { id: string; link: string; name: string }) => (
              <li
                key={item.id}
                className={item.link === currentRoute ? "active" : ""}
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          id="special-button"
          data-aos="fade-down"
          data-aos-duration="1600"
          data-aos-delay="1100"
        >
          <GradientText
            colors={["#032F30", "#0C959B", "#032F30", "#0C959B", "#032F30"]}
            animationSpeed={3}
            showBorder={true}
            className="special-button"
          >
            <Link href="/portfolio">
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
                  d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0 1 12 12.75Zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 0 1-1.152 6.06M12 12.75c-2.883 0-5.647.508-8.208 1.44.125 2.104.52 4.136 1.153 6.06M12 12.75a2.25 2.25 0 0 0 2.248-2.354M12 12.75a2.25 2.25 0 0 1-2.248-2.354M12 8.25c.995 0 1.971-.08 2.922-.236.403-.066.74-.358.795-.762a3.778 3.778 0 0 0-.399-2.25M12 8.25c-.995 0-1.97-.08-2.922-.236-.402-.066-.74-.358-.795-.762a3.734 3.734 0 0 1 .4-2.253M12 8.25a2.25 2.25 0 0 0-2.248 2.146M12 8.25a2.25 2.25 0 0 1 2.248 2.146M8.683 5a6.032 6.032 0 0 1-1.155-1.002c.07-.63.27-1.222.574-1.747m.581 2.749A3.75 3.75 0 0 1 15.318 5m0 0c.427-.283.815-.62 1.155-.999a4.471 4.471 0 0 0-.575-1.752M4.921 6a24.048 24.048 0 0 0-.392 3.314c1.668.546 3.416.914 5.223 1.082M19.08 6c.205 1.08.337 2.187.392 3.314a23.882 23.882 0 0 1-5.223 1.082"
                />
              </svg>
              Get Started
            </Link>
          </GradientText>
        </div>
      </header>
    </>
  );
};

export default Header;
