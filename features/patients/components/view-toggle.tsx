"use client";

import { usePatientStore } from "@/store/usePatientStore";
import { LayoutGrid, List } from "lucide-react";

export function PatientViewToggle() {
  const { viewMode, setViewMode } = usePatientStore();

  return (
    <div className="flex justify-end gap-2 mt-5">
      <button
        onClick={() => setViewMode("grid")}
        className={`p-2 rounded-xl glass transition ${
          viewMode === "grid"
            ? "bg-linear-to-r from-violet-600 to-pink-500 text-white"
            : "opacity-60"
        }`}
      >
        <LayoutGrid size={18} />
      </button>

      <button
        onClick={() => setViewMode("list")}
        className={`p-2 rounded-xl glass transition ${
          viewMode === "list" ? "bg-white/10" : ""
        }`}
      >
        <List size={18} />
      </button>
    </div>
  );
}
