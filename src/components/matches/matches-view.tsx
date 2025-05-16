import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { MessageCircle } from "lucide-react";

// Mock data - in a real app, this would come from an API
const mockMatches = [
  {
    id: 1,
    name: "Taylor",
    matchedDate: "Just now",
    imageUrl: "https://i.pravatar.cc/300?img=5",
    bio: "Solana developer exploring DeFi applications",
    commonInterests: ["Smart Contracts", "DeFi"],
  },
  {
    id: 2,
    name: "Casey",
    matchedDate: "2 hours ago",
    imageUrl: "https://i.pravatar.cc/300?img=7",
    bio: "NFT artist and collector. Love creating on-chain art.",
    commonInterests: ["NFTs", "Digital Art"],
  },
  {
    id: 3,
    name: "Riley",
    matchedDate: "1 day ago",
    imageUrl: "https://i.pravatar.cc/300?img=9",
    bio: "Building a DAO on Solana. Looking for like-minded people.",
    commonInterests: ["DAOs", "Governance"],
  },
  {
    id: 4,
    name: "Morgan",
    matchedDate: "3 days ago",
    imageUrl: "https://i.pravatar.cc/300?img=11",
    bio: "Full-stack developer with a focus on Solana ecosystem",
    commonInterests: ["Programming", "Full Stack"],
  },
];

export function MatchesView() {
  return (    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-card via-card to-background p-7 shadow-lg rounded-xl mb-6 border-l-4 border-peach-400 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-40 h-40 bg-peach-400/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-red-400/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-peach-200/30 to-red-200/30 rounded-full blur-md opacity-70"></div>
        <h1 className="text-3xl font-bold text-gradient">Your Matches</h1>
        <p className="text-muted-foreground mt-1.5">Start a conversation with your crypto soulmates</p>
      </div>
        <div className="flex-1 overflow-y-auto px-2 pb-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
          {mockMatches.map((match) => (
            <div 
              key={match.id}
              className="group bg-gradient-to-br from-card to-background/80 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-peach-200/30 hover:border-peach-400/40 transform hover:-translate-y-2"
            >              <div className="flex items-center gap-5 p-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-peach-400 to-red-400 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                  <div className="relative h-20 w-20 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg group-hover:scale-105 group-hover:rotate-2 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-peach-200/30 to-red-200/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <Image 
                      src={match.imageUrl} 
                      alt={match.name} 
                      fill 
                      className="object-cover"
                      unoptimized // Remove this in a real app
                    />
                  </div>
                </div>
                <div className="flex-1">                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold">{match.name}</h2>
                    <span className="text-xs bg-gradient-to-r from-peach-100/80 to-red-100/80 dark:from-peach-500/20 dark:to-red-500/20 text-peach-600 dark:text-peach-300 font-medium px-3 py-1.5 rounded-full shadow-sm">{match.matchedDate}</span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate mt-1.5">{match.bio}</p>
                </div>
              </div>                <div className="p-6 pt-4 bg-background/50 backdrop-blur-sm border-t border-peach-200/30 relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-peach-400/30 to-transparent"></div>
                <div className="mb-3.5">
                  <h3 className="text-sm font-medium flex items-center gap-2.5 mb-3">
                    <span className="inline-block w-1.5 h-4 bg-gradient-to-b from-peach-400 to-red-400 rounded-full"></span>
                    Common Interests
                  </h3>                  <div className="flex flex-wrap gap-2.5">
                    {match.commonInterests.map((interest) => (
                      <span 
                        key={interest} 
                        className="px-4 py-1.5 bg-gradient-to-r from-peach-50/80 to-red-50/80 dark:from-peach-500/10 dark:to-red-500/10 border border-peach-200/30 rounded-full text-xs font-medium shadow-sm group-hover:shadow group-hover:border-peach-300/40 transition-all duration-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                  <button 
                  className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-xl w-full",
                    "text-sm font-medium bg-gradient-to-r from-peach-400 to-red-500 text-white",
                    "h-11 px-5 py-2.5 mt-3 shadow-md shadow-red-400/20 hover:shadow-lg hover:shadow-red-400/30 transition-all duration-300 hover:-translate-y-0.5 border border-white/10",
                    "relative overflow-hidden group"
                  )}
                >
                  <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transform translate-y-full group-hover:translate-y-0 transition-all duration-300"></span>
                  <MessageCircle className="h-4 w-4 mr-2.5" />
                  Start Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
