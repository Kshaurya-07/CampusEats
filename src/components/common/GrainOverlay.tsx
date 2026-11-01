"use client";

import React from "react";

export const GrainOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.14] select-none"
      style={{
        backgroundImage: "url('/images/smwA9OJpA5ZFq5RdyTx5WEjIu2Y.png')",
        backgroundRepeat: "repeat",
        backgroundPosition: "center top",
        backgroundSize: "720px auto",
      }}
      aria-hidden="true"
    />
  );
};
