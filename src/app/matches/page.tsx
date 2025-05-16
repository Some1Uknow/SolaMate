import { Sidebar } from "@/components/sidebar/sidebar";
import { MatchesView } from "@/components/matches/matches-view";

export default function MatchesPage() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-72 flex-shrink-0" />
      <main className="flex-1 p-7 overflow-y-auto">
        <MatchesView />
      </main>
    </div>
  );
}
