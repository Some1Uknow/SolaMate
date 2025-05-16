import React from "react";
import Image from "next/image";
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
  return (
    <div className="h-full flex flex-col bg-[#0D0D0D]">
      <div className="bg-[#121212] p-6 mb-4 border-b border-[#333333]">
        <h1 className="text-2xl font-semibold text-[#E0E0E0]">Your Matches</h1>
        <p className="text-sm text-[#A0A0A0] mt-1">Start a conversation with your crypto soulmates</p>
      </div>
      
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {mockMatches.map((match) => (
            <div 
              key={match.id}
              className="bg-[#121212] rounded-lg overflow-hidden border border-[#333333] hover:shadow-lg hover:shadow-[#FF1E56]/10 transition-all duration-200"
            >
              <div className="flex items-center gap-4 p-4">
                <div className="relative flex-shrink-0">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden bg-[#1A1A1A] border-2 border-[#333333]">
                    <Image 
                      src={match.imageUrl} 
                      alt={match.name} 
                      fill 
                      className="object-cover"
                      unoptimized // Remove this in a real app
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-[#E0E0E0]">{match.name}</h2>
                    <span className="text-xs text-[#A0A0A0]">{match.matchedDate}</span>
                  </div>
                  <p className="text-xs text-[#A0A0A0] truncate mt-1">{match.bio}</p>
                </div>
              </div>
              
              <div className="p-4 pt-3 bg-[#1A1A1A] border-t border-[#333333]">
                <div className="mb-3">
                  <h3 className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider mb-2">
                    Common Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {match.commonInterests.map((interest) => (
                      <span 
                        key={interest} 
                        className="px-2 py-1 bg-[#121212] rounded-md text-xs font-medium text-[#A0A0A0] border border-[#333333]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md w-full
                    bg-[#FF1E56] text-white font-medium
                    h-9 px-4 py-2 text-xs hover:bg-[#FF3A6B] transition-colors shadow-[0_0_10px_rgba(255,30,86,0.3)]"
                >
                  <MessageCircle className="h-3.5 w-3.5 mr-2" />
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
