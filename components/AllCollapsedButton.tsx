"use client";

import { useCollapsedState } from "./CollapsedState";

export default function AllCollapsedButton() {
  const collapsedState = useCollapsedState();
  return (
    <div className="flex flex-row gap-2 text-xs justify-end mb-4">
      <div
        className="bg-slate-400 rounded-full px-4 py-1 text-white"
        onClick={collapsedState.collapseAll}
      >
        <button>Collapse All </button>
      </div>
      <div
        className="bg-slate-400 rounded-full px-4 py-1 text-white"
        onClick={collapsedState.expandAll}
      >
        <button>Expand All </button>
      </div>
    </div>
  );
}
