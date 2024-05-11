import React from "react";
import Alternate from "./Alternate";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-4 relative">
      <h1 className="pr-[3em] text-4xl">
        <div className="text-sm font-normal">
          by{" "}
          <Link href="https://pauek.dev" className="text-blue-600 ">
            @pauek
          </Link>
        </div>
        <Alternate
          alt={
            <span className="text-yellow-400 bg-black px-2 rounded">
              NextJS Real F*#kin&apos; Fast 😈 MMWAHAHA!1! 🤘🏻🤘🏻
            </span>
          }
        >
          Taking web development to the NextJS level
        </Alternate>
      </h1>

      <div className="italic py-1">
        ... also known as:{" "}
        <Link href="https://norvig.com/21-days.html">
          Learn Web Development in one hour!
        </Link>
      </div>

      <div className="text-xl text-gray-600 mt-1">
        Data Days, <span className="font-light">May 2024</span>
      </div>
    </header>
  );
}
