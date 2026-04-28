import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold gradient-text">MediFlow</h1>

      <p>Theme Test</p>

      <ThemeToggle />
    </main>
  );
}
