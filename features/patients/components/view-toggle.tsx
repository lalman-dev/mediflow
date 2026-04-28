"use client";

import { usePatientStore } from "@/store/usePatientStore";
import { Button } from "@/components/ui/button";

export function ViewToggle() {
  const { viewMode, setViewMode } = usePatientStore();

  return (
    <div className="flex gap-2">
      <Button
        variant={viewMode === "grid" ? "default" : "outline"}
        onClick={() => setViewMode("grid")}
      >
        Grid
      </Button>

      <Button
        variant={viewMode === "list" ? "default" : "outline"}
        onClick={() => setViewMode("list")}
      >
        List
      </Button>
    </div>
  );
}
