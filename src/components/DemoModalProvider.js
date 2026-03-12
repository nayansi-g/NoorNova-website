"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import DemoModal from "@/components/DemoModal";

const DemoModalContext = createContext(null);

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDemoModal = useCallback(() => setIsOpen(true), []);
  const closeDemoModal = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openDemoModal, closeDemoModal }),
    [isOpen, openDemoModal, closeDemoModal],
  );

  return (
    <DemoModalContext.Provider value={value}>
      {children}
      <DemoModal open={isOpen} onClose={closeDemoModal} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used inside <DemoModalProvider />");
  }
  return ctx;
}

