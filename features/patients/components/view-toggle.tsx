"use client";

import { usePatientStore } from "@/store/usePatientStore";
import { LayoutGrid, List } from "lucide-react";

export function PatientViewToggle() {
  const { viewMode, setViewMode } = usePatientStore();

  return (
    <div className="flex justify-end gap-2">
      <button
        onClick={() => setViewMode("grid")}
        className={`p-2 rounded-lg glass ${
          viewMode === "grid" ? "bg-white/10" : ""
        }`}
      >
        <LayoutGrid size={18} />
      </button>

      <button
        onClick={() => setViewMode("list")}
        className={`p-2 rounded-lg glass ${
          viewMode === "list" ? "bg-white/10" : ""
        }`}
      >
        <List size={18} />
      </button>
    </div>
  );
}
