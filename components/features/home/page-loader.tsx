"use client";

import { useEffect, useState } from "react";

import { Loader } from "@/components/ui/loader";

export function PageLoader() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("fine-yard-loaded")) {
      return;
    }

    sessionStorage.setItem("fine-yard-loaded", "true");

    const showTimer = window.setTimeout(() => {
      setVisible(true);
    }, 0);

    const hideTimer = window.setTimeout(() => {
      setVisible(false);
    }, 1200);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500">
      <Loader label="Loading Fine Yard" />
    </div>
  );
}
