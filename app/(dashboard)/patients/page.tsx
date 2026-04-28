"use client";

import { PatientViewToggle } from "@/features/patients/components/view-toggle";
import { PatientGrid } from "@/features/patients/components/patient-grid";
import { PatientList } from "@/features/patients/components/patient-list";
import { usePatientStore } from "@/store/usePatientStore";
import { AnimatePresence } from "framer-motion";

export default function PatientsPage() {
  const { viewMode } = usePatientStore();

  return (
    <div className="space-y-6">
      <PatientViewToggle />
      <AnimatePresence mode="wait">
        {viewMode === "grid" ? (
          <PatientGrid key="grid" />
        ) : (
          <PatientList key="list" />
        )}
      </AnimatePresence>
    </div>
  );
}
