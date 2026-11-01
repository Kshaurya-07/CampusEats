import React from "react";
import "./footer-wordmark.css";

export const FooterWordmark: React.FC = () => {
  return (
    <div className="footer-wordmark-wrapper w-full overflow-hidden select-none pointer-events-none">
      <svg
        viewBox="0 0 1440 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="footer-wordmark-svg w-full h-auto block"
        preserveAspectRatio="xMidYMid meet"
        aria-label="CAMPUSEATS"
        role="img"
      >
        <defs>
          {/* Main Brand Linear Gradient */}
          <linearGradient id="wordmark-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff9500" />
            <stop offset="40%" stopColor="#E05A0C" />
            <stop offset="70%" stopColor="#ff9500" />
            <stop offset="100%" stopColor="#ffefd9" />
          </linearGradient>

          {/* Diagonal Stripe Pattern for Mask */}
          <pattern
            id="wordmark-stripe-pattern"
            width="8"
            height="8"
            patternTransform="rotate(45 0 0)"
            patternUnits="userSpaceOnUse"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="8"
              stroke="#ffffff"
              strokeWidth="4"
              strokeLinecap="square"
            />
          </pattern>

          {/* SVG Stripe Mask */}
          <mask id="wordmark-stripe-mask" x="0" y="0" width="100%" height="100%">
            <text
              x="50%"
              y="52%"
              className="footer-wordmark-text"
              fill="url(#wordmark-stripe-pattern)"
            >
              CAMPUSEATS
            </text>
          </mask>
        </defs>

        {/* Ambient subtle glow text */}
        <text
          x="50%"
          y="52%"
          className="footer-wordmark-text"
          fill="none"
          stroke="rgba(255, 149, 0, 0.18)"
          strokeWidth="3"
        >
          CAMPUSEATS
        </text>

        {/* Subtle cream outline for crisp contrast on dark background */}
        <text
          x="50%"
          y="52%"
          className="footer-wordmark-text"
          fill="none"
          stroke="rgba(255, 239, 217, 0.15)"
          strokeWidth="1.2"
        >
          CAMPUSEATS
        </text>

        {/* Primary Striped Gradient Text via SVG Mask */}
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#wordmark-gradient)"
          mask="url(#wordmark-stripe-mask)"
        />
      </svg>
    </div>
  );
};

export default FooterWordmark;
