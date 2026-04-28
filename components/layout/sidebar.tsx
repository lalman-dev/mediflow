"use client";

import Link from "next/link";
import { LayoutDashboard, Users, BarChart3 } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-64 h-screen p-4 hidden md:flex flex-col glass">
      <h1 className="text-xl font-bold gradient-text mb-8">MediFlow</h1>

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
