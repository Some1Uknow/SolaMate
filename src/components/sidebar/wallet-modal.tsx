"use client";

import React, { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Loader2, X, RefreshCw } from "lucide-react";
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
  };

  // Function to fetch Solana balance
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
  }, [isOpen, userContext]);

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-[#0D0D0D]/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] border border-[#333333] bg-[#121212] p-6 shadow-lg shadow-[#FF1E56]/10 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-lg">
          <div className="flex flex-col space-y-1.5 mb-6">
            <Dialog.Title className="text-lg font-medium text-[#E0E0E0]">
              Your Wallet
            </Dialog.Title>
            <Dialog.Description className="text-sm text-[#A0A0A0]">
              {userContext && userHasWallet(userContext)
                ? "View your Solana wallet address and balance"
                : "Create your Solana wallet to get started"}
            </Dialog.Description>
          </div>

          {userContext ? (
            userHasWallet(userContext) ? (
              // User has a wallet - show wallet info
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider">
                    Wallet Address
                  </h3>
                  <div className="flex items-center gap-3 p-3 bg-[#1A1A1A] rounded-md border border-[#333333]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#121212] overflow-hidden">
                      <Image
                        src="/solana.png"
                        alt="Solana"
                        width={32}
                        height={32}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-xs font-mono truncate flex-1 text-[#A0A0A0] bg-[#0D0D0D]/50 px-2 py-1 rounded">
                      {userContext.solana.wallet.publicKey?.toString() ||
                        "No public key found"}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-medium text-[#A0A0A0] uppercase tracking-wider">
                    Solana Balance
                  </h3>
                  <div className="flex items-center gap-3 p-3 bg-[#1A1A1A] rounded-md border border-[#333333]">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#121212] overflow-hidden">
                      <Image
                        src="/solana.png"
                        alt="SOL Token"
                        width={32}
                        height={32}
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      {solanaBalance === null ? (
                        <div className="flex items-center space-x-2">
                          <Loader2 className="h-3 w-3 animate-spin text-[#A0A0A0]" />
                          <p className="text-sm text-[#A0A0A0]">Loading balance...</p>
                        </div>
                      ) : (
                        <>
                          <p className="text-base font-medium text-[#E0E0E0]">
                            {solanaBalance}{" "}
                            <span className="text-sm text-[#A0A0A0]">
                              SOL
                            </span>
                          </p>
                          <p className="text-xs text-[#A0A0A0]">
                            ≈ ${usdBalance || "--"} USD
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // User doesn't have a wallet - show create wallet UI
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-4 overflow-hidden">
                  <Image
                    src="/solana.png"
                    alt="Solana Logo"
                    width={48}
                    height={48}
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-base font-medium mb-2 text-[#E0E0E0]">No Wallet Found</h3>
                <p className="text-sm text-[#A0A0A0] text-center mb-4 max-w-sm">
                  You don&apos;t have a Solana wallet yet. Create one to start
                  using crypto features in this application.
                </p>
                <button
                  onClick={handleCreateWallet}
                  disabled={isCreatingWallet}
                  className="px-4 py-2 bg-[#FF1E56] text-white text-sm font-medium rounded-md hover:bg-[#FF1E56]/90 transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(255,30,86,0.3)]"
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
            <div className="flex flex-col items-center justify-center py-6">
              <Loader2 className="h-5 w-5 animate-spin text-[#FF1E56] mb-2" />
              <p className="text-sm text-[#A0A0A0]">
                Loading wallet information...
              </p>
            </div>
          )}

          <div className="flex mt-6 items-center justify-between">
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 border border-[#333333] bg-[#121212] hover:bg-[#1A1A1A] transition-colors text-[#E0E0E0]"
            >
              Close
            </button>

            {userContext && userHasWallet(userContext) && (
              <button
                onClick={fetchBalance}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-9 px-4 py-2 bg-[#FF1E56]/10 text-[#FF1E56] hover:bg-[#FF1E56]/20 transition-colors"
              >
                <RefreshCw className="h-3.5 w-3.5 mr-2" />
                Refresh
              </button>
            )}
          </div>

          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[#121212] hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#FF1E56] focus:ring-offset-2 disabled:pointer-events-none text-[#E0E0E0]">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
