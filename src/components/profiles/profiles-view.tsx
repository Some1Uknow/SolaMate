"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Mock data - in a real app, this would come from an API
const mockProfiles = [
  {
    id: 1,
    name: "Alex",
    age: 28,
    bio: "Solana developer by day, NFT collector by night. Looking for someone to build the future with.",
    imageUrl: "https://i.pravatar.cc/300?img=1",
    interests: ["DeFi", "NFTs", "Smart Contracts"],
  },
  {
    id: 2,
    name: "Jordan",
    age: 26,
    bio: "Building open-source projects on Solana. Love hiking and trying new coffee shops.",
    imageUrl: "https://i.pravatar.cc/300?img=2",
    interests: ["Open Source", "Hiking", "Coffee"],
  },
  {
    id: 3,
    name: "Sam",
    age: 31,
    bio: "Full-stack dev with a passion for blockchain. Currently working on a Solana marketplace.",
    imageUrl: "https://i.pravatar.cc/300?img=3",
    interests: ["Marketplaces", "Full Stack", "UX Design"],
  },
];

export function ProfilesView() {
  const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    const nextIndex =
      (currentIndex + newDirection + mockProfiles.length) % mockProfiles.length;
    setCurrentIndex([nextIndex, newDirection]);
  };

  const currentProfile = mockProfiles[currentIndex];

  return (
    <div className="h-full flex flex-col bg-[#0D0D0D]">
      <div className="bg-[#121212] p-6 mb-4 border-b border-[#333333]">
        <h1 className="text-2xl font-semibold text-[#E0E0E0]">Discover Profiles</h1>
        <p className="text-sm text-[#A0A0A0] mt-1">Find your crypto soulmate</p>
      </div>

      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={currentProfile.id}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 300 : -300,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: direction < 0 ? 300 : -300,
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md w-full bg-[#121212] rounded-lg overflow-hidden shadow-lg shadow-black/30 border border-[#333333]"
            >
              <div className="relative h-80 w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#121212]/90 z-10"></div>
                <Image
                  src={currentProfile.imageUrl}
                  alt={currentProfile.name}
                  fill
                  className="object-cover"
                  unoptimized // Remove this in a real app
                />

                {/* Name badge overlay on image */}
                <div className="absolute bottom-4 left-4 z-20 bg-[#121212]/80 backdrop-blur-md p-2 pl-3 pr-4 rounded-md shadow-md">
                  <h2 className="text-lg font-medium text-[#E0E0E0] flex items-center gap-1">
                    {currentProfile.name}
                    <span className="text-base text-[#A0A0A0]">
                      {currentProfile.age}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="p-5 space-y-5">
                <p className="text-[#E0E0E0]/90 text-sm leading-relaxed">
                  {currentProfile.bio}
                </p>
                
                <div>
                  <h3 className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider mb-3">
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentProfile.interests.map((interest: string) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-[#1A1A1A] rounded-full text-xs font-medium text-[#A0A0A0]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center gap-4 p-5 pt-2 border-t border-[#333333]">
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1A1A1A] hover:bg-[#252525] transition-colors shadow-md"
                  aria-label="Dislike profile"
                  onClick={() => paginate(1)}
                >
                  <X className="h-5 w-5 text-[#A0A0A0]" />
                </button>
                <button
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF1E56] hover:bg-[#FF3A6B] transition-colors shadow-[0_0_15px_rgba(255,30,86,0.4)]"
                  aria-label="Like profile"
                  onClick={() => paginate(1)}
                >
                  <Heart className="h-5 w-5 text-white" />
                </button>
              </div>
              
              {/* Carousel Navigation */}
              <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
                <button
                  onClick={() => paginate(-1)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#121212]/80 backdrop-blur-sm text-[#E0E0E0] shadow-md pointer-events-auto hover:bg-[#121212] transition-colors"
                  aria-label="Previous profile"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-[#121212]/80 backdrop-blur-sm text-[#E0E0E0] shadow-md pointer-events-auto hover:bg-[#121212] transition-colors"
                  aria-label="Next profile"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              {/* Carousel Indicators */}
              <div className="absolute bottom-3 right-1/2 translate-x-1/2 flex gap-1.5 p-1.5 rounded-full bg-[#0D0D0D]/50 backdrop-blur-sm">
                {mockProfiles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      setCurrentIndex([index, index > currentIndex ? 1 : -1])
                    }
                    className={cn(
                      "transition-all duration-200 rounded-full",
                      index === currentIndex
                        ? "w-6 h-2 bg-[#FF1E56] shadow-[0_0_8px_rgba(255,30,86,0.5)]"
                        : "w-2 h-2 bg-[#333333] hover:bg-[#505050]"
                    )}
                    aria-label={`Go to profile ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
