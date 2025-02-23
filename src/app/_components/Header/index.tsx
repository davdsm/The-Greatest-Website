import Image from "next/image";
import Link from "next/link";
import "./index.scss";

export const Header = () => {
  const menu: { name: string; link: string }[] = [
    {
      name: "Portfolio",
      link: "portfolio",
    },
    {
      name: "Solutions",
      link: "solutions",
    },
    {
      name: "Contacts",
      link: "contacts",
    },
  ];

  return (
    <header className="container">
      <div id="logo">
        <Link href="/">
          <Image src="/logo.png" width={50} height={50} alt="DAVDSM Logo" />
        </Link>
      </div>
      <div id="menu">
        <ul>
          {menu.map((item: { link: string; name: string }) => (
            <li>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <li></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
