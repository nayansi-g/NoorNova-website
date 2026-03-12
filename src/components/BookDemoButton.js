"use client";

import { useDemoModal } from "@/components/DemoModalProvider";

export default function BookDemoButton({ className = "", children = "Book Demo" }) {
  const { openDemoModal } = useDemoModal();

  return (
    <button type="button" onClick={openDemoModal} className={className}>
      {children}
    </button>
  );
}

