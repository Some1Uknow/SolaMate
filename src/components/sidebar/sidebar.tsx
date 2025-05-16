"use client";

import React, { useState, useEffect } from "react";
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

  // Effect for the glow hover effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll(".glow-effect").forEach((item: Element) => {
        const rect = item.getBoundingClientRect();

        (item as HTMLElement).style.setProperty(
          "--x",
          `${((e.clientX - rect.left) / rect.width) * 100}%`
        );
        (item as HTMLElement).style.setProperty(
          "--y",
          `${((e.clientY - rect.top) / rect.height) * 100}%`
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
      {" "}
      <aside
        className={cn(
          "flex h-screen flex-col justify-between bg-gradient-to-b from-card/95 via-card/90 to-background/95 p-5 border-r border-r-peach-200/30 shadow-[5px_0_30px_-10px_rgba(255,163,135,0.35)] backdrop-blur-sm",
          className
        )}
      >
        <div className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <Link
              href="/"
              className="text-3xl font-bold text-gradient relative group"
            >
              <span className="relative z-10">SolaMate</span>
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-red-400 to-peach-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left shadow-sm"></span>
            </Link>
          </div>

          <nav className="space-y-3">
            {" "}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center rounded-xl px-5 py-3.5 text-sm font-medium transition-all duration-300 relative overflow-hidden glow-effect",
                  item.current
                    ? "bg-gradient-to-r from-peach-400 to-red-500 text-white shadow-md shadow-red-400/20 animate-[pulse-glow_3s_infinite]"
                    : "hover:bg-accent/20 hover:pl-6 hover:shadow-sm"
                )}
              >
                <span
                  className={cn(
                    "absolute inset-0 w-1 bg-secondary opacity-0 transition-all duration-300",
                    !item.current && "group-hover:opacity-100"
                  )}
                ></span>{" "}
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 rounded-full mr-3.5 transition-all duration-300",
                    item.current
                      ? "bg-white/20 text-white shadow-inner"
                      : "bg-gradient-to-br from-peach-50/80 to-red-50/80 dark:from-peach-600/10 dark:to-red-600/10 text-peach-600 dark:text-peach-300 border border-peach-200/30 group-hover:bg-peach-100/50 group-hover:rotate-6"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                </div>
                {item.name}
              </Link>
            ))}{" "}
            <button
              onClick={() => setIsWalletOpen(true)}
              className="group w-full flex items-center rounded-xl px-5 py-3.5 text-sm font-medium transition-all duration-300 hover:bg-accent/20 hover:pl-6 hover:shadow-sm relative overflow-hidden glow-effect"
            >
              <span className="absolute inset-0 w-1.5 bg-gradient-to-b from-peach-400 to-red-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full mr-3.5 bg-gradient-to-br from-peach-100/50 to-red-100/50 dark:from-peach-600/10 dark:to-red-600/10 border border-peach-200/30 text-peach-600 dark:text-peach-300 group-hover:rotate-6 group-hover:shadow-sm transition-all duration-300">
                <Wallet className="h-5 w-5" />
              </div>
              Wallet
            </button>
          </nav>
        </div>

        <div className="mb-10">
          {" "}
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
