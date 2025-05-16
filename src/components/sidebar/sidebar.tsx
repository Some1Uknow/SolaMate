"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { Users, Heart, MessageCircle, Wallet } from "lucide-react";
import WalletModal from "./wallet-modal";
import { UserButton } from "@civic/auth-web3/react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const navItems = [
    {
      name: "Profiles",
      href: "/profiles",
      icon: Users,
      current: pathname === "/profiles",
    },
    {
      name: "Matches",
      href: "/matches",
      icon: Heart,
      current: pathname === "/matches",
    },
    {
      name: "Chats",
      href: "/chats",
      icon: MessageCircle,
      current: pathname === "/chats",
    },
  ];
  return (
    <>
      <aside
        className={cn(
          "flex h-screen flex-col justify-between bg-gradient-to-b from-card via-card/98 to-card/95 p-5 border-r border-border shadow-sm backdrop-blur-sm relative overflow-hidden",
          className
        )}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-500/5 rounded-full blur-3xl -z-10"></div>
        <div className="space-y-8">
          <div className="flex items-center justify-center py-5">
            <Link href="/" className="flex flex-col items-center">
              <div className="relative">
                <span className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                  SolaMate
                </span>
                <span className="absolute -top-1 -right-3 h-5 w-5 rounded-full bg-gradient-to-br from-primary to-pink-500 opacity-60 blur-md"></span>
              </div>
              <span className="text-xs text-muted-foreground mt-1 font-medium">
                Find love on Solana
              </span>
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <div className="px-3 mb-1">
            <h3 className="text-xs uppercase tracking-wider text-muted-foreground/70 font-medium">
              Menu
            </h3>
          </div>
          <nav className="space-y-1.5">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                  item.current
                    ? "bg-gradient-to-r from-violet-500/20 via-primary/20 to-amber-500/20 text-primary shadow-md relative overflow-hidden"
                    : "text-muted-foreground hover:bg-gradient-to-r hover:from-muted/60 hover:to-muted/30 hover:text-foreground"
                )}
              >
                {" "}
                <item.icon
                  className={cn(
                    "h-5 w-5 mr-3",
                    item.current
                      ? "text-primary drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]"
                      : "text-muted-foreground group-hover:text-foreground"
                  )}
                />
                {item.name}
              </Link>
            ))}{" "}
            <button
              onClick={() => setIsWalletOpen(true)}
              className="w-full group flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-gradient-to-r hover:from-amber-500/15 hover:to-primary/15 hover:text-foreground hover:shadow-sm"
            >
              <Wallet className="h-5 w-5 mr-3 text-amber-500/70 group-hover:text-amber-500" />
              <span>Wallet</span>
            </button>
          </nav>
        </div>{" "}
        <div className="mb-10 mt-auto px-3 flex flex-col items-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>
          <div className="p-1 rounded-full bg-gradient-to-r from-violet-500/25 via-primary/25 to-amber-500/25 shadow-lg ring-1 ring-white/10">
            <UserButton />
          </div>
        </div>
      </aside>
      <WalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
      />
    </>
  );
}
