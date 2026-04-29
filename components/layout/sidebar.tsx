"use client";

import Link from "next/link";
import { LayoutDashboard, Users, BarChart3 } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 h-screen p-5 glass border-r border-white/10">
      <h1 className="text-xl font-bold bg-linear-to-r from-violet-500 to-pink-500 bg-clip-text text-transparent">
        MediFlow
      </h1>

      <nav className="space-y-3">
        <Link href="/dashboard" className="flex items-center gap-2">
          <LayoutDashboard size={18} /> Dashboard
        </Link>

        <Link href="/analytics" className="flex items-center gap-2">
          <BarChart3 size={18} /> Analytics
        </Link>

        <Link href="/patients" className="flex items-center gap-2">
          <Users size={18} /> Patients
        </Link>
      </nav>
    </aside>
  );
}
