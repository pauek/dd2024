"use client";

import React, { useState } from "react";
import { useCollapsedState } from "./CollapsedState";

type SectionProps = {
  id: number;
  header: React.ReactNode;
  children?: React.ReactNode;
};

export default function Section({ id, header, children }: SectionProps) {
  const collapsedState = useCollapsedState();
  const collapsed = collapsedState.state[id];
  return (
    <section className={"border bg-white shadow rounded-md p-2"}>
      <h2
        className={"cursor-pointer hover:bg-slate-50 " + (collapsed ? "mb-0" : "")}
        onClick={() => collapsedState.toggle(id)}
      >
        <div
          className={
            "inline-flex aspect-square w-7 text-lg flex-row mr-1 " +
            "justify-center items-center bg-slate-400 text-white rounded-full"
          }
        >
          <span className="text-[0.9rem]">{id}</span>
        </div>{" "}
        {header}
      </h2>
      {collapsed || children}
    </section>
  );
}
