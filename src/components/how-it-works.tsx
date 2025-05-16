import Image from 'next/image'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-transparent to-peach-50 dark:to-gray-900/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How SolaMate Works</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Finding your perfect match on the Solana blockchain is easier than you think.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-peach-300 to-red-300" />
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-peach-500 to-red-500 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg shadow-red-500/20 z-10">
              1
            </div>
            <h3 className="text-xl font-semibold mb-3">Connect Your Wallet</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Link your Solana wallet to create a profile and verify your on-chain presence.
            </p>
            <div className="mt-6 h-36 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md p-4 flex items-center justify-center">
                <Image src="/wallet.svg" alt="Wallet" width={40} height={40} />
              </div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-peach-500 to-red-500 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg shadow-red-500/20 z-10">
              2
            </div>
            <h3 className="text-xl font-semibold mb-3">Sign to Swipe</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Browse profiles and swipe right on those you like, signing a transaction to confirm.
            </p>
            <div className="mt-6 h-36 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md p-4 flex items-center justify-center">
                <Image src="/signature.svg" alt="Signature" width={40} height={40} />
              </div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-peach-500 to-red-500 flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg shadow-red-500/20 z-10">
              3
            </div>
            <h3 className="text-xl font-semibold mb-3">Match & Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              When both parties swipe right, a match is minted as an NFT and you can start chatting.
            </p>
            <div className="mt-6 h-36 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-white shadow-md p-4 flex items-center justify-center">
                <Image src="/heart.svg" alt="Heart" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
