"use client";

import { patients } from "../data";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

export function PatientGrid() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200 }}
      layout
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {patients.map((patient) => (
        <motion.div
          key={patient.id}
          layout
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Card className="glass p-4 space-y-2">
            <h3 className="font-semibold">{patient.name}</h3>

            <p className="text-sm opacity-70">Status: {patient.status}</p>

            <p className="text-sm opacity-70">
              Last Visit: {patient.lastVisit}
            </p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
