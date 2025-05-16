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
  return (    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-card via-card to-background p-7 shadow-lg rounded-xl mb-6 border-l-4 border-red-400 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-peach-400/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-red-400/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-6 right-8 w-16 h-16 bg-gradient-to-br from-red-200/30 to-peach-200/30 rounded-full blur-md opacity-70"></div>
        <h1 className="text-3xl font-bold text-gradient">Your Chats</h1>
        <p className="text-muted-foreground mt-1.5">Connect with your matches</p>
      </div>
      
      <div className="flex-1 overflow-y-auto px-2">        <div className="bg-card/60 backdrop-blur-sm rounded-2xl shadow-lg divide-y divide-peach-200/20 border border-peach-200/30 overflow-hidden">
          {mockChats.map((chat) => (
            <div 
              key={chat.id}
              className={cn(
                "flex items-center gap-5 p-6 hover:bg-peach-50/40 dark:hover:bg-peach-900/20 transition-all duration-300 cursor-pointer relative overflow-hidden group",
                chat.unread && "bg-peach-50/70 dark:bg-peach-900/20"
              )}
            >
              {chat.unread && (
                <div className="absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-peach-400 to-red-400"></div>
              )}
              {chat.unread && (
                <div className="absolute inset-0 bg-gradient-to-r from-peach-100/30 dark:from-peach-700/20 to-transparent pointer-events-none"></div>
              )}              <div className="relative group-hover:scale-105 transition-transform duration-300">
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-md">
                  <div className="absolute inset-0 bg-gradient-to-br from-peach-400/20 to-red-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image 
                    src={chat.imageUrl} 
                    alt={chat.name} 
                    fill 
                    className="object-cover"
                    unoptimized // Remove this in a real app
                  />
                </div>
                {chat.unread && (
                  <span className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-gradient-to-br from-peach-400 to-red-400 shadow-md shadow-red-400/30 border-2 border-white/20 animate-pulse"></span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold">{chat.name}</h2>                  <span className={cn(
                    "text-xs px-3 py-1.5 rounded-full",
                    chat.unread 
                      ? "bg-gradient-to-r from-peach-100/50 to-red-100/50 dark:from-peach-500/20 dark:to-red-500/20 text-peach-600 dark:text-peach-300 font-medium shadow-sm"
                      : "bg-muted/50 text-muted-foreground"
                  )}>
                    {chat.timestamp}
                  </span>
                </div>                <div className="flex items-center gap-1 mt-1.5">
                  <p className={cn(
                    "text-sm truncate flex-1 leading-relaxed",
                    chat.unread ? "text-foreground font-medium" : "text-muted-foreground"
                  )}>
                    {chat.lastMessage}
                  </p>
                  <span className="flex-shrink-0 ml-2">
                    {chat.status === "sent" && (
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    )}
                    {chat.status === "delivered" && (
                      <Check className="h-4 w-4 text-peach-500" />
                    )}
                    {chat.status === "read" && (
                      <CheckCheck className="h-4 w-4 text-red-500" />
                    )}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="p-6 mt-4">        <button 
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-xl w-full",
            "bg-gradient-to-r from-peach-400 to-red-500 text-white font-medium",
            "h-12 px-6 py-2 shadow-lg shadow-red-400/20 hover:shadow-xl hover:shadow-red-400/30 transition-all duration-300 hover:-translate-y-1",
            "relative overflow-hidden group border border-white/10"
          )}
        >
          <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-peach-300/10 to-red-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative flex items-center">
            <span className="mr-2.5 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center shadow-inner">+</span>
            New Message
          </span>
        </button>
      </div>
    </div>
  );
}
