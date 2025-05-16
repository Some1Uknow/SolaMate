import { Connection } from "@solana/web3.js";
import { userHasWallet } from "@civic/auth-web3";
import type { Web3UserContextType } from "@civic/auth-web3";

/**
 * Creates a wallet for a user if they don't have one
 * @param userContext The user context from Civic Auth
 * @returns A promise that resolves when the wallet is created
 */
export const createWallet = async (
  userContext: Web3UserContextType
): Promise<void> => {
  if (userHasWallet(userContext)) {
    // User already has a wallet
    return;
  }

  try {
    await userContext.createWallet();
  } catch (error) {
    console.error("Error creating wallet:", error);
    throw error;
  }
};

/**
 * Fetches the Solana balance for a wallet
 * @param userContext The user context from Civic Auth
 * @returns The Solana balance as a string
 */
export const fetchSolanaBalance = async (
  userContext: Web3UserContextType
): Promise<string> => {
  if (!userHasWallet(userContext)) {
    throw new Error("User does not have a wallet");
  }

  const SOLANA_RPC_URL = process.env.NEXT_PUBLIC_SOLANA_RPC_URL;
  if (!SOLANA_RPC_URL) {
    console.error("SOLANA_RPC_URL is not defined");
    throw new Error("SOLANA_RPC_URL is not defined");
  }

  try {
    const connection = new Connection(SOLANA_RPC_URL);
    const publicKey = userContext.solana.wallet.publicKey;

    if (!publicKey) {
      console.error("Public key is null");
      throw new Error("Public key is null");
    }

    const balance = await connection.getBalance(publicKey);

    // Convert lamports to SOL (1 SOL = 1,000,000,000 lamports)
    return (balance / 1_000_000_000).toFixed(4);
  } catch (error) {
    console.error("Error fetching balance:", error);
    throw error;
  }
};

/**
 * Fetches the current SOL price in USD
 * @param solBalance The Solana balance as a string
 * @returns An object containing the SOL price and USD value
 */
export const fetchSolPrice = async (
  solBalance: string
): Promise<{ solPrice: number; usdBalance: string }> => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
    );
    const data = await response.json();

    if (data && data.solana && data.solana.usd) {
      const solPrice = data.solana.usd;
      const usdValue = (parseFloat(solBalance) * solPrice).toFixed(2);
      return { solPrice, usdBalance: usdValue };
    }
    throw new Error("Unable to fetch SOL price");
  } catch (error) {
    console.error("Error fetching SOL price:", error);
    throw error;
  }
};
