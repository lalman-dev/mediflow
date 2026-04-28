import { Card } from "@/components/ui/card";

export function PatientCard({ patient }: any) {
  return (
    <Card className="glass p-4 space-y-2 hover:scale-[1.02] transition">
      <h2 className="font-semibold">{patient.name}</h2>
      <p className="text-sm text-muted-foreground">Age: {patient.age}</p>
      <p className="text-sm">Status: {patient.status}</p>
    </Card>
  );
}
