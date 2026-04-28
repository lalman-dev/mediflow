"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar() {
  return (
    <div className="flex justify-between items-center p-4 glass">
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <ThemeToggle />
    </div>
  );
}
