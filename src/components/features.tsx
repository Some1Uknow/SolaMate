import Image from 'next/image'
import { FeatureCard } from './ui/feature-card'

export function Features() {
  return (
    <section id="features" className="py-20 relative">
      {/* Background elements */}
      <div className="absolute top-40 right-10 opacity-10">
        <div className="w-64 h-64 rounded-full border-4 border-dashed border-peach-300 animate-spin-slow" 
             style={{ animationDuration: '30s' }} />
      </div>
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Unique Features</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            SolaMate combines the best of Web3 with modern dating to create a unique experience for Solana developers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <FeatureCard
            title="Wallet Connect"
            description="Link your Solana wallet to create a verified profile and showcase your on-chain credentials."
            icon={<Image src="/wallet.svg" alt="Wallet" width={24} height={24} className="invert" />}
          />
          
          <FeatureCard
            title="On-chain Swipes"
            description="Every swipe is recorded on the Solana blockchain, ensuring transparency and immutability."
            icon={<Image src="/heart.svg" alt="Heart" width={24} height={24} className="invert" />}
          />
          
          <FeatureCard
            title="TX Signature to Like"
            description="Show genuine interest by signing a transaction when you like someone. No more casual swiping!"
            icon={<Image src="/signature.svg" alt="Signature" width={24} height={24} className="invert" />}
          />
          
          <FeatureCard
            title="Match Minting"
            description="When you match with someone, an NFT is minted to commemorate your connection."
            icon={<Image src="/transaction.svg" alt="Transaction" width={24} height={24} className="invert" />}
          />
        </div>
      </div>
    </section>
  )
}
