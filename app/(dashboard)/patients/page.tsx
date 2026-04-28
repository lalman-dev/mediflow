"use client";

import { PatientViewToggle } from "@/features/patients/components/view-toggle";
import { PatientsGrid } from "@/features/patients/components/patient-grid";
import { PatientsList } from "@/features/patients/components/patient-list";
import { usePatientStore } from "@/store/usePatientStore";

export default function PatientsPage() {
  const { viewMode } = usePatientStore();

  return (
    <div className="space-y-6">
      <PatientViewToggle />

      {viewMode === "grid" ? <PatientsGrid /> : <PatientsList />}
    </div>
  );
}
