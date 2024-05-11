"use client";

import { createContext, useContext, useState } from "react";

type CollapsedState = {
  state: boolean[];
  toggle: (n: number) => void;
  expandAll: () => void;
  collapseAll: () => void;
};

export const Context = createContext<CollapsedState>({
  state: [],
  toggle: (n) => {},
  expandAll: () => {},
  collapseAll: () => {},
});

export const CollapsedStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, setState] = useState<boolean[]>(
    Array.from({ length: 100 }).map((_) => true)
  );

  const toggle = (n: number) =>
    setState((prev) => {
      const next = [...prev];
      next[n] = !next[n];
      return next;
    });

  const expandAll = () => setState((prev) => prev.map((_) => false));
  const collapseAll = () => setState((prev) => prev.map((_) => true));

  return (
    <Context.Provider value={{ state, toggle, expandAll, collapseAll }}>
      {children}
    </Context.Provider>
  );
};

export const useCollapsedState = () => {
  return useContext(Context);
};
