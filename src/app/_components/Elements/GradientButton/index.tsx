import React from "react";
import { GradientTextProps } from "@/app/_common/interfaces";
import "./index.scss";

export const GradientText = ({
  children,
  className = "",
  colors = ["#0C959B", "#6BA3BE", "#0C959B", "#6BA3BE", "#0C959B"], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}: GradientTextProps) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content" style={gradientStyle}>
        {children}
      </div>
    </div>
  );
};

export default GradientText;
