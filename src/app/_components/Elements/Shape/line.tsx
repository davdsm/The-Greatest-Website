import * as React from "react";

interface LineComponentProps extends React.SVGProps<SVGSVGElement> {}

export const LineComponent = (props: LineComponentProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 800 400"
    preserveAspectRatio="none"
    {...props}
  >
    <defs>
      <linearGradient id="tubeTopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: "#ff6347",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#ff69b4",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#dda0dd",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="tubeBottomGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: "#e5533d",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#e559a4",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#c590cd",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
      <linearGradient id="tubeSideGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop
          offset="0%"
          style={{
            stopColor: "#ff8367",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="50%"
          style={{
            stopColor: "#ff89d4",
            stopOpacity: 1,
          }}
        />
        <stop
          offset="100%"
          style={{
            stopColor: "#f0c0ed",
            stopOpacity: 1,
          }}
        />
      </linearGradient>
    </defs>
    <path
      d="M50,210 C90,150 120,270 160,210 S220,120 260,210 S300,300 340,210 S400,150 440,210 S480,240 520,210 S580,180 620,210 S660,270 700,210 S740,150 780,210"
      fill="none"
      stroke="#00000020"
      strokeWidth={42}
      strokeLinecap="round"
      strokeDasharray={1000}
      strokeDashoffset={1000}
    >
      <animate
        attributeName="stroke-dashoffset"
        from={1000}
        to={0}
        dur="3s"
        repeatCount={1}
        fill="freeze"
      />
    </path>
    <path
      d="M50,205 C90,145 120,265 160,205 S220,115 260,205 S300,295 340,205 S400,145 440,205 S480,235 520,205 S580,175 620,205 S660,265 700,205 S740,145 780,205"
      fill="none"
      stroke="url(#tubeBottomGradient)"
      strokeWidth={40}
      strokeLinecap="round"
      strokeDasharray={1000}
      strokeDashoffset={1000}
    >
      <animate
        attributeName="stroke-dashoffset"
        from={1000}
        to={0}
        dur="3s"
        repeatCount={1}
        fill="freeze"
      />
    </path>
    <path
      d="M50,200 C90,140 120,260 160,200 S220,110 260,200 S300,290 340,200 S400,140 440,200 S480,230 520,200 S580,170 620,200 S660,260 700,200 S740,140 780,200"
      fill="none"
      stroke="url(#tubeTopGradient)"
      strokeWidth={40}
      strokeLinecap="round"
      strokeDasharray={1000}
      strokeDashoffset={1000}
    >
      <animate
        attributeName="stroke-dashoffset"
        from={1000}
        to={0}
        dur="3s"
        repeatCount={1}
        fill="freeze"
      />
    </path>
    <path
      d="M50,195 C90,135 120,255 160,195 S220,105 260,195 S300,285 340,195 S400,135 440,195 S480,225 520,195 S580,165 620,195 S660,255 700,195 S740,135 780,195"
      fill="none"
      stroke="url(#tubeSideGradient)"
      strokeWidth={20}
      strokeLinecap="round"
      strokeDasharray={1000}
      strokeDashoffset={1000}
    >
      <animate
        attributeName="stroke-dashoffset"
        from={1000}
        to={0}
        dur="3s"
        repeatCount={1}
        fill="freeze"
      />
    </path>
  </svg>
);
export default LineComponent;
