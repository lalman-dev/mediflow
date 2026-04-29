import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-125 h-125 bg-violet-600/20 blur-[120px] -top-25 -left-25" />
        <div className="absolute w-100 h-100 bg-pink-500/20 blur-[120px] -bottom-25 -right-25" />
      </div>
      <Sidebar />

      <main className="flex-1 p-6 relative overflow-hidden">
        {/* background glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute w-125 h-125 bg-violet-600/20 blur-[120px] -top-25 -left-25" />
          <div className="absolute w-100 h-100 bg-pink-500/20 blur-[120px] -bottom-25 -right-25" />
        </div>

        <Topbar />
        {children}
      </main>
    </div>
  );
}
