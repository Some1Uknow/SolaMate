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
    const nextIndex = (currentIndex + newDirection + mockProfiles.length) % mockProfiles.length;
    setCurrentIndex([nextIndex, newDirection]);
  };

  const currentProfile = mockProfiles[currentIndex];
  
  return (    <div className="h-full flex flex-col">
      <div className="bg-gradient-to-r from-card via-card to-background p-6 shadow-lg rounded-xl mb-6 border-l-4 border-peach-400 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-peach-400/15 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-red-400/15 rounded-full blur-2xl pointer-events-none"></div>
        <h1 className="text-3xl font-bold text-gradient">Discover Profiles</h1>
        <p className="text-muted-foreground mt-1">Find your crypto soulmate</p>
      </div>
      
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false} custom={direction}>            <motion.div
              key={currentProfile.id}
              custom={direction}              initial={{ opacity: 0, x: direction > 0 ? 300 : -300, rotateZ: direction > 0 ? 5 : -5 }}
              animate={{ opacity: 1, x: 0, rotateZ: 0 }}
              exit={{ opacity: 0, x: direction < 0 ? 300 : -300, rotateZ: direction < 0 ? 5 : -5 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md w-full bg-gradient-to-br from-background to-card/90 rounded-3xl overflow-hidden shadow-xl shadow-peach-400/15 relative border border-peach-200/40"
            >
              {/* Decorative elements */}              <div className="absolute -top-20 -right-20 w-40 h-40 bg-peach-400/15 rounded-full blur-3xl pointer-events-none animate-soft-float"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-red-400/15 rounded-full blur-3xl pointer-events-none animate-soft-float animation-delay-1000"></div>
              <div className="absolute top-40 right-10 w-20 h-20 bg-gradient-to-br from-peach-200/30 to-red-200/30 rounded-full blur-xl opacity-70"></div>
              
              <div className="relative h-96 w-full">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 z-10"></div>
                <Image 
                  src={currentProfile.imageUrl} 
                  alt={currentProfile.name} 
                  fill 
                  className="object-cover"
                  unoptimized // Remove this in a real app
                />
                
                {/* Name badge overlay on image */}
                <div className="absolute bottom-4 left-4 z-20 bg-white/10 backdrop-blur-md p-2 pl-3 pr-6 rounded-xl border border-white/20 shadow-md">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-1">
                    {currentProfile.name} 
                    <span className="text-xl text-white/80">{currentProfile.age}</span>
                  </h2>
                </div>
              </div>
                <div className="p-7 space-y-6">
                <div className="relative">
                  <div className="absolute -top-12 right-0 w-[70px] h-[70px] rounded-2xl -rotate-6 bg-gradient-to-br from-peach-100/50 to-red-100/50 dark:from-peach-500/10 dark:to-red-500/10 border-2 border-peach-300/30 flex items-center justify-center shadow-md animate-heart-beat">
                    <Heart className="h-8 w-8 text-red-500" fill="#FF546A" fillOpacity="0.3" />
                  </div>
                  <div className="pr-16">
                    <p className="text-foreground/90 leading-relaxed">{currentProfile.bio}</p>
                  </div>
                </div>
                  <div className="pt-3">
                  <h3 className="font-medium mb-4 flex items-center">
                    <span className="inline-block w-1.5 h-5 bg-gradient-to-b from-peach-400 to-red-400 rounded-full mr-2.5"></span>
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {currentProfile.interests.map((interest: string) => (
                      <span 
                        key={interest} 
                        className="px-4 py-1.5 bg-gradient-to-r from-peach-50/80 to-red-50/80 dark:from-peach-500/10 dark:to-red-500/10 border border-peach-200/30 rounded-full text-sm font-medium text-foreground/90 shadow-sm hover:shadow hover:border-peach-300/40 transition-all duration-300"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
                <div className="flex justify-center gap-8 p-7 pt-4">
                <button 
                  className="flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-br from-red-50/70 to-red-100/70 dark:from-red-600/10 dark:to-red-700/10 border border-red-200/50 shadow-md hover:shadow-lg hover:shadow-red-400/20 hover:scale-110 transform transition-all duration-300 group"
                  aria-label="Dislike profile"
                >
                  <X className="h-8 w-8 text-red-500 group-hover:rotate-12 transition-transform duration-300" />
                </button>
                <button 
                  className="flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-br from-peach-50/70 to-peach-100/70 dark:from-peach-600/10 dark:to-peach-700/10 border border-peach-200/50 shadow-md hover:shadow-lg hover:shadow-peach-400/20 hover:scale-110 transform transition-all duration-300 group"
                  aria-label="Like profile"
                >
                  <Heart className="h-8 w-8 text-red-500 group-hover:scale-110 group-hover:animate-heart-beat transition-transform duration-300" />
                </button>
              </div>
                {/* Carousel Navigation */}              <div className="absolute top-[40%] left-0 right-0 -translate-y-1/2 flex justify-between px-4">
                <button 
                  onClick={() => paginate(-1)}
                  className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg hover:bg-white/30 transform hover:scale-110 hover:-translate-x-1 transition-all duration-300 group"
                  aria-label="Previous profile"
                >
                  <ChevronLeft className="h-7 w-7 group-hover:translate-x-[-2px] transition-transform duration-300" />
                </button>
                <button 
                  onClick={() => paginate(1)}
                  className="flex items-center justify-center w-14 h-14 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-lg hover:bg-white/30 transform hover:scale-110 hover:translate-x-1 transition-all duration-300 group"
                  aria-label="Next profile"
                >
                  <ChevronRight className="h-7 w-7 group-hover:translate-x-[2px] transition-transform duration-300" />
                </button>
              </div>
              
              {/* Carousel Indicators */}              <div className="absolute bottom-5 right-5 flex gap-2.5 bg-black/25 backdrop-blur-sm p-2.5 rounded-full border border-white/10 shadow-lg">
                {mockProfiles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
                    className={cn(
                      "transition-all duration-300 rounded-full",
                      index === currentIndex 
                        ? "w-8 h-3 bg-gradient-to-r from-peach-400 to-red-500 shadow-md shadow-red-400/30" 
                        : "w-3 h-3 bg-white/50 hover:bg-white/70"
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
