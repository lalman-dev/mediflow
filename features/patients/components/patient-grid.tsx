import { patients } from "../data";
import { PatientCard } from "./patient-card";

export function PatientsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {patients.map((p) => (
        <PatientCard key={p.id} patient={p} />
      ))}
    </div>
  );
}
