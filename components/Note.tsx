import React from "react";

type NoteProps = {
  children: React.ReactNode;
};
export default function Note({ children }: NoteProps) {
  return <p className="text-xs opacity-60 italic">{children}</p>;
}
