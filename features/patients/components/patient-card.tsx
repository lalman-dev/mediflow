import { Card } from "@/components/ui/card";

export function PatientCard({ patient }: any) {
  return (
    <Card className="relative overflow-hidden p-5 rounded-2xl glass transition duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-violet-500/20 to-pink-500/20 opacity-0 hover:opacity-100 transition" />
      <h3 className="font-semibold text-lg">{patient.name}</h3>
      <p className="text-sm text-white/60">
        Status: <span className="text-white">{patient.status}</span>
      </p>
      <p className="text-sm text-white/60">Last Visit: {patient.lastVisit}</p>
    </Card>
  );
}
