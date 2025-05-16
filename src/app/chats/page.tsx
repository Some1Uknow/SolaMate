import { Sidebar } from "@/components/sidebar/sidebar";
import { ChatsView } from "@/components/chats/chats-view";

export default function ChatsPage() {
  return (
    <div className="flex h-screen">
      <Sidebar className="w-72 flex-shrink-0" />
      <main className="flex-1 p-7 overflow-y-auto">
        <ChatsView />
      </main>
    </div>
  );
}
