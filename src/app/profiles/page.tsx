import { Sidebar } from "@/components/sidebar/sidebar";
import { ProfilesView } from "@/components/profiles/profiles-view";

export default function ProfilesPage() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-72 flex-shrink-0" />
      <main className="flex-1 p-7 overflow-y-auto">
        <ProfilesView />
      </main>
    </div>
  );
}
