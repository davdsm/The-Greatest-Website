import { HTMLAttributes, ReactNode } from "react";

export interface SplitTextProps {
  text?: string;

  className?: string;

  delay?: number;

  animationFrom?: { opacity: number; transform: string };

  animationTo?: { opacity: number; transform: string };

  easing?: (t: number) => number;

  threshold?: number;

  rootMargin?: string;

  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";

  onLetterAnimationComplete?: () => void;
}

export interface AuroraProps {
  colorStops?: string[];
  amplitude?: number;
  blend?: number;
  time?: number;
  speed?: number;
}

export interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: "linear" | "ease-in" | "ease-out" | "ease-in-out";
  extraScale?: number;
  children?: React.ReactNode;
}

export interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

export interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}
