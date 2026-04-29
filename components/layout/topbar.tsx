"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Topbar() {
  return (
    <div
      className="glass rounded-2xl px-5 py-4 flex justify-between items-center
bg-white/5 backdrop-blur-xl border border-white/10"
    >
      <div className="absolute inset-0 bg-linear-to-r from-violet-500/10 to-transparent rounded-2xl pointer-events-none" />
      <h2 className="text-lg font-semibold">Dashboard</h2>
      <ThemeToggle />
    </div>
  );
}
