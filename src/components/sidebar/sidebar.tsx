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
          "flex h-screen flex-col justify-between bg-card p-4 border-r border-border shadow-sm",
          className
        )}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <Link
              href="/"
              className="text-2xl font-medium text-gradient"
            >
              SolaMate
            </Link>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200",
                  item.current
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5 mr-3",
                  item.current ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )} />
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => setIsWalletOpen(true)}
              className="w-full flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-foreground"
            >
              <Wallet className="h-5 w-5 mr-3 text-muted-foreground group-hover:text-foreground" />
              Wallet
            </button>
          </nav>
        </div>

        <div className="mb-6 px-3">
          <UserButton />
        </div>
      </aside>
      <WalletModal
        isOpen={isWalletOpen}
        onClose={() => setIsWalletOpen(false)}
      />
    </>
  );
}