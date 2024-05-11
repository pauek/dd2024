"use client";

import React, { useEffect, useState } from "react";

type PreProps = {
  children: string;
};
export default function Pre({ children }: PreProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 1000);
    }
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
    } catch (error) {
      console.error(`Could not copy to clipboard`);
    }
  };

  return (
    <pre className="relative pr-6 inline-block text-xs">
      {children}
      <div
        className={
          "absolute right-0.5 top-0 bottom-0 flex flex-col pt-[.25em] justify-start cursor-pointer " +
          (copied ? "text-green-600" : "text-orange-300")
        }
        onClick={copy}
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="2 4 18 20"
          >
            <path
              fill="currentColor"
              d="m10 16.4l-4-4L7.4 11l2.6 2.6L16.6 7L18 8.4z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M7 18V2h13v16zm-4 4V6h2v14h11v2z" />
          </svg>
        )}
      </div>
    </pre>
  );
}

