"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Loader2, X } from "lucide-react";
import { userHasWallet } from "@civic/auth-web3";
import { useUser } from "@civic/auth-web3/react";
import Image from "next/image";
import {
  createWallet,
  fetchSolanaBalance,
  fetchSolPrice,
} from "@/utils/wallet";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [isCreatingWallet, setIsCreatingWallet] = useState(false);
  const [solanaBalance, setSolanaBalance] = useState<string | null>(null);
  const [usdBalance, setUsdBalance] = useState<string | null>(null);
  const userContext = useUser();
  // Function to create a wallet if user doesn't have one
  const handleCreateWallet = async () => {
    if (!userContext || userHasWallet(userContext)) return;

    try {
      setIsCreatingWallet(true);
      await createWallet(userContext);
      // Refresh user context after wallet creation
      setIsCreatingWallet(false);
    } catch (error) {
      console.error("Error creating wallet:", error);
      setIsCreatingWallet(false);
    }
  }; // Function to fetch Solana balance
  const fetchBalance = async () => {
    if (!userContext || !userHasWallet(userContext)) return;

    try {
      const solBalance = await fetchSolanaBalance(userContext);
      setSolanaBalance(solBalance);

      // Fetch SOL price if we have a balance
      fetchSolPriceAndUpdateState(solBalance);
    } catch (error) {
      console.error("Error fetching balance:", error);
      setSolanaBalance("Error");
    }
  };
  // Function to fetch SOL price in USD and update state
  const fetchSolPriceAndUpdateState = async (solBalance: string) => {
    try {
      const { usdBalance } = await fetchSolPrice(solBalance);
      setUsdBalance(usdBalance);
    } catch (error) {
      console.error("Error fetching SOL price:", error);
      setUsdBalance("--");
    }
  };

  // Effect to fetch balance when modal opens or wallet status changes
  useEffect(() => {
    if (isOpen && userContext && userHasWallet(userContext)) {
      fetchBalance();
    }
  }, [isOpen, userContext, fetchBalance]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        {" "}
        <Dialog.Overlay className="fixed inset-0 bg-black/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border-0 bg-gradient-to-br from-[#1E1E2F] via-[#2A2A3F] to-[#1E1E2F] p-0 shadow-2xl shadow-[#00FFA3]/20 duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-2xl overflow-hidden backdrop-blur-md">
          {/* Decorative background elements */}{" "}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00FFA3]/20 rounded-full blur-3xl pointer-events-none animate-soft-float"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#DC1FFF]/20 rounded-full blur-3xl pointer-events-none animate-soft-float animation-delay-1000"></div>
          <div className="absolute top-40 left-20 w-20 h-20 bg-gradient-to-br from-[#03E1FF]/20 to-[#DC1FFF]/20 rounded-full blur-xl opacity-70"></div>
          {/* Top gradient bar */}
          <div className="h-3 w-full bg-gradient-to-r from-[#00FFA3] via-[#03E1FF] to-[#DC1FFF] shadow-md"></div>
          <div className="p-6">
            <div className="flex flex-col space-y-1.5 text-center relative mb-6">
              {" "}
              <Dialog.Title className="text-3xl font-bold text-gradient">
                Your Wallet
              </Dialog.Title>
              <Dialog.Description className="text-sm text-center text-muted-foreground mt-1.5">
                {userContext && userHasWallet(userContext)
                  ? "View your Solana wallet address and balance"
                  : "Create your Solana wallet to get started"}
              </Dialog.Description>
            </div>

            {userContext ? (
              userHasWallet(userContext) ? (
                // User has a wallet - show wallet info
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    {" "}
                    <h3 className="font-medium flex items-center gap-2.5 mb-1">
                      <span className="inline-block w-1.5 h-5 bg-gradient-to-b from-peach-400 to-red-400 rounded-full"></span>
                      Wallet Address
                    </h3>{" "}
                    <div className="flex items-center gap-4 p-4 bg-background/60 rounded-xl border border-peach-200/30 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-black to-black/90 flex items-center justify-center shadow-lg shadow-purple-400/20 rotate-3 relative overflow-hidden">
                        <Image
                          src="/solana.png"
                          alt="Solana"
                          width={32}
                          height={32}
                          className="object-contain"
                        />
                      </div>{" "}
                      <p className="text-sm font-mono truncate flex-1 px-2 py-1 bg-background/80 rounded-lg">
                        {userContext.solana.wallet.publicKey?.toString() ||
                          "No public key found"}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {" "}
                    <h3 className="font-medium flex items-center gap-2.5 mb-1">
                      <span className="inline-block w-1.5 h-5 bg-gradient-to-b from-red-400 to-peach-400 rounded-full"></span>
                      Solana Balance
                    </h3>
                    <div className="relative bg-gradient-to-br from-peach-200/40 to-red-200/40 dark:from-peach-500/15 dark:to-red-500/15 rounded-xl p-[1.5px] overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent">
                      {" "}
                      <div className="flex items-center gap-4 p-4 bg-background/80 rounded-xl">
                        <div className="w-14 h-14 rounded-xl bg-black flex items-center justify-center shadow-lg shadow-purple-400/20 rotate-3 hover:rotate-6 transition-transform duration-300 overflow-hidden">
                          <Image
                            src="/solana.png"
                            alt="SOL Token"
                            width={40}
                            height={40}
                            className="object-contain"
                          />
                        </div>{" "}
                        <div>
                          {solanaBalance === null ? (
                            <div className="flex items-center space-x-2">
                              <Loader2 className="h-4 w-4 animate-spin" />
                              <p className="text-sm">Loading balance...</p>
                            </div>
                          ) : (
                            <>
                              <p className="text-2xl font-bold text-gradient">
                                {solanaBalance}{" "}
                                <span className="text-lg font-medium">SOL</span>
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                ≈ ${usdBalance || "--"} USD
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // User doesn't have a wallet - show create wallet UI
                <div className="flex flex-col items-center justify-center py-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden bg-black flex items-center justify-center shadow-lg shadow-purple-400/20 mb-6">
                    <Image
                      src="/public/solana-logo.png"
                      alt="Solana Logo"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    No Wallet Found
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-6 max-w-md">
                    You don&apos;t have a Solana wallet yet. Create one to start
                    using crypto features in this application.
                  </p>{" "}
                  <button
                    onClick={handleCreateWallet}
                    disabled={isCreatingWallet}
                    className="px-6 py-3 bg-gradient-to-r from-peach-400 to-red-500 text-white font-medium rounded-xl shadow-lg shadow-red-400/20 hover:shadow-xl hover:shadow-red-400/30 transition-all duration-300 flex items-center gap-2"
                  >
                    {isCreatingWallet ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Creating Wallet...
                      </>
                    ) : (
                      "Create Wallet"
                    )}
                  </button>
                </div>
              )
            ) : (
              // Loading state - user context not yet loaded
              <div className="flex flex-col items-center justify-center py-10">
                <Loader2 className="h-8 w-8 animate-spin text-peach-400 mb-4" />
                <p className="text-sm text-muted-foreground">
                  Loading wallet information...
                </p>
              </div>
            )}

            <div className="flex mt-8 items-center justify-between">
              <button
                onClick={onClose}
                className="flex items-center gap-2 font-medium text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
                Close
              </button>

              {userContext && userHasWallet(userContext) && (
                <button
                  onClick={fetchBalance}
                  className="flex items-center gap-2 font-medium text-sm text-peach-500 hover:text-peach-600 transition-colors"
                >
                  <Loader2 className="h-4 w-4" />
                  Refresh Balance
                </button>
              )}
            </div>
          </div>
          <Dialog.Close className="absolute right-4 top-4 rounded-full opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent/80 data-[state=open]:text-muted-foreground w-8 h-8 flex items-center justify-center">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
