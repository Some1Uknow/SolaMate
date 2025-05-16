import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CivicAuthProvider } from "@civic/auth-web3/nextjs";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SolaMate - Dating for Solana Developers",
  description:
    "Find your crypto soulmate with onchain swipes and connect your wallet to match with fellow Solana developers.",
  keywords: [
    "solana",
    "dating app",
    "blockchain",
    "crypto dating",
    "developer dating",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <CivicAuthProvider> {children}</CivicAuthProvider>
      </body>
    </html>
  );
}