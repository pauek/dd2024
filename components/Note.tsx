import React from "react";

type NoteProps = {
  className?: string;
  children?: React.ReactNode;
};
export default function Note({ children, className }: NoteProps) {
  return <p className={(className || "") + " text-xs opacity-60 italic"}>{children}</p>;
}
