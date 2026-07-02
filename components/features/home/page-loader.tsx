"use client";

import { useEffect, useState } from "react";

import { Loader } from "@/components/ui/loader";

function shouldShowLoader() {
  if (typeof window === "undefined") {
    return false;
  }

  return !sessionStorage.getItem("fine-yard-loaded");
}

export function PageLoader() {
  const [visible, setVisible] = useState(shouldShowLoader);

  useEffect(() => {
    if (!visible) {
      return;
    }

    sessionStorage.setItem("fine-yard-loaded", "true");

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500">
      <Loader label="Loading Fine Yard" />
    </div>
  );
}
