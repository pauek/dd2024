"use client";

import React, { useEffect, useState } from "react";

const storeGetStart = () => {
  const item = localStorage.getItem("startDate");
  return item ? new Date(item) : null;
};

const storeSetStart = (date: Date) =>
  localStorage.setItem("startDate", date.toString());

const storeClearStart = () => localStorage.removeItem("startDate");

export default function Clock() {
  const [start, setStart] = useState<Date | null>(null);
  const end = start ? new Date(start.getTime() + 1000 * 60 * 90) : null;
  const [now, setNow] = useState(new Date());

  let t = (Number(now) - Number(start)) / (Number(end) - Number(start));
  t = Math.max(0, Math.min(1, t));

  const started = start !== null;

  const go = () => {
    storeSetStart(new Date());
    setStart(new Date());
  };

  const clear = () => {
    storeClearStart();
    setStart(null);
  };

  const refresh = () => {
    const now = new Date();
    setNow(now);
  };

  useEffect(() => {
    setStart(storeGetStart());
    const interval = setInterval(refresh, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-row items-center gap-2 w-fit">
      {started || (
        <button className="border p-1 px-3 rounded" onClick={go}>
          Start
        </button>
      )}
      {started && (
        <progress
          value={t * 100}
          max={100}
          className={
            "w-[40em] " +
            "[&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-blue-600 " +
            "[&::-moz-progress-bar]:bg-blue-400"
          }
        />
      )}
      {started && (
        <button className="border p-1 px-3 rounded" onClick={clear}>
          Clear
        </button>
      )}
    </div>
  );
}
