import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Clock, Check, CheckCheck } from "lucide-react";

// Mock data - in a real app, this would come from an API
const mockChats = [
  {
    id: 1,
    name: "Taylor",
    imageUrl: "https://i.pravatar.cc/300?img=5",
    lastMessage: "Would you like to join me for a hackathon this weekend?",
    timestamp: "Just now",
    unread: true,
    status: "sent",
  },
  {
    id: 2,
    name: "Casey",
    imageUrl: "https://i.pravatar.cc/300?img=7",
    lastMessage: "I just minted a new NFT collection, would love your feedback!",
    timestamp: "30m ago",
    unread: false,
    status: "read",
  },
  {
    id: 3,
    name: "Riley",
    imageUrl: "https://i.pravatar.cc/300?img=9",
    lastMessage: "What do you think about the new Solana upgrade?",
    timestamp: "2h ago",
    unread: false,
    status: "read",
  },
  {
    id: 4,
    name: "Morgan",
    imageUrl: "https://i.pravatar.cc/300?img=11",
    lastMessage: "Check out this new DeFi protocol I've been working on",
    timestamp: "Yesterday",
    unread: false,
    status: "read",
  },
  {
    id: 5,
    name: "Jordan",
    imageUrl: "https://i.pravatar.cc/300?img=2",
    lastMessage: "Are you going to the Solana Conference next month?",
    timestamp: "2 days ago",
    unread: false,
    status: "delivered",
  },
];

export function ChatsView() {
  return (
    <div className="h-full flex flex-col bg-[#0D0D0D]">
      <div className="bg-[#121212] p-6 mb-4 border-b border-[#333333]">
        <h1 className="text-2xl font-semibold text-[#E0E0E0]">Your Chats</h1>
        <p className="text-sm text-[#A0A0A0] mt-1">Connect with your matches</p>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4">
        <div className="divide-y divide-[#333333] overflow-hidden bg-[#121212] rounded-lg border border-[#333333] shadow-md">
          {mockChats.map((chat) => (
            <div 
              key={chat.id}
              className={cn(
                "flex items-center gap-4 p-4 hover:bg-[#1A1A1A] transition-colors duration-200 cursor-pointer",
                chat.unread && "bg-gradient-to-r from-[#1A1A1A] to-[#121212]"
              )}
            >
              <div className="relative flex-shrink-0">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-[#1A1A1A] border border-[#333333]">
                  <Image 
                    src={chat.imageUrl} 
                    alt={chat.name} 
                    fill 
                    className="object-cover"
                    unoptimized // Remove this in a real app
                  />
                </div>
                {chat.unread && (
                  <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-[#FF1E56] border-2 border-[#121212] shadow-[0_0_5px_rgba(255,30,86,0.5)]"></span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-sm font-medium text-[#E0E0E0]">{chat.name}</h2>
                  <span className="text-xs text-[#A0A0A0]">
                    {chat.timestamp}
                  </span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <p className={cn(
                    "text-xs truncate flex-1",
                    chat.unread ? "text-[#E0E0E0] font-medium" : "text-[#A0A0A0]"
                  )}>
                    {chat.lastMessage}
                  </p>
                  <span className="flex-shrink-0 ml-2">
                    {chat.status === "sent" && (
                      <Clock className="h-3 w-3 text-[#A0A0A0]" />
                    )}
                    {chat.status === "delivered" && (
                      <Check className="h-3 w-3 text-[#A0A0A0]" />
                    )}
                    {chat.status === "read" && (
                      <CheckCheck className="h-3 w-3 text-[#FF1E56]" />
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-[#333333] mt-auto bg-[#121212]">
        <button 
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md w-full
            bg-[#FF1E56] text-white font-medium
            h-10 px-4 py-2 text-sm hover:bg-[#FF3A6B] transition-colors shadow-[0_0_15px_rgba(255,30,86,0.3)]"
        >
          <span className="flex items-center">
            <span className="mr-2 text-lg">+</span>
            New Message
          </span>
        </button>
      </div>
    </div>
  );
}
