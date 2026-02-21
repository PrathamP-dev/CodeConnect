import React from "react";

export function CCIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="512" height="350" y="81" rx="80" fill="currentColor" />
      <text
        x="256"
        y="275"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="220"
        fontWeight="800"
        fontFamily="system-ui, -apple-system, sans-serif"
      >
        CC
      </text>
    </svg>
  );
}
