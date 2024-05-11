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
    <div className="cursor-pointer relative" onClick={open}>
      <div className="absolute z-10 left-0 right-0" onClick={close}>
        {alternate && alt}
      </div>
      {children}
    </div>
  );
}
