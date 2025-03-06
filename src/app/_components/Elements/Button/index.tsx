import Link from "next/link";
import { ButtonProps } from "@/app/_common/interfaces";
import "./index.scss";

export const Button: React.FC<ButtonProps> = ({
  href,
  shape,
  arrow = true,
  theme = "light",
  "data-aos": dataAos,
  "data-aos-duration": dataAosDuration,
  "data-aos-delay": dataAosDelay,
  children,
}) => {
  return (
    <Link href={href}>
      <button
        className={`button ${shape} ${theme}`}
        data-aos={dataAos}
        data-aos-duration={dataAosDuration}
        data-aos-delay={dataAosDelay}
      >
        <>
          {children}
          {arrow && (
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
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          )}
        </>
      </button>
    </Link>
  );
};

export default Button;
