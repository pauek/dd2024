import React from "react";

type SectionProps = {
  header: React.ReactNode;
  children: React.ReactNode;
};

export default function Section({ header, children }: SectionProps) {
  return (
    <section className="border bg-white shadow p-3 rounded-md pt-1.5">
      <h2>{header}</h2>
      {children}
    </section>
  );
}
