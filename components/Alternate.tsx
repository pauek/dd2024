"use client";

import React, { useState } from "react";

type AlternateProps = {
  children: React.ReactNode;
  alt: React.ReactNode;
};

export default function Alternate({ children, alt }: AlternateProps) {
  const [alternate, setAlternate] = useState(false);

  const open = () => setAlternate(true);

  const close: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setAlternate(false);
  };

  return (
    <div className="relative">
      <div
        className="absolute z-10 left-0 right-0 cursor-pointer"
        onClick={close}
      >
        {alternate && alt}
      </div>
      <div className="cursor-pointer w-fit" onClick={open}>
        {children}
      </div>
    </div>
  );
}
