"use client";

import { patients } from "../data";

export function PatientList() {
  return (
    <div className="glass rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-white/10">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th>Status</th>
            <th>Last Visit</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-t border-white/10">
              <td className="p-3">{patient.name}</td>
              <td>{patient.status}</td>
              <td>{patient.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
