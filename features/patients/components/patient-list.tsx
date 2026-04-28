import { patients } from "../data";

export function PatientsList() {
  return (
    <div className="glass rounded-lg overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-white/5">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Age</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Last Visit</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((p) => (
            <tr key={p.id} className="border-t border-white/10">
              <td className="p-3">{p.name}</td>
              <td className="p-3">{p.age}</td>
              <td className="p-3">{p.status}</td>
              <td className="p-3">{p.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
