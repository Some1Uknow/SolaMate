import Image from 'next/image'
import { Button } from './ui/button'
import { HeroIcon } from './ui/hero-icon'

export function Hero() {
  return (
    <section className="relative pt-24 pb-10 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute -top-24 right-0 w-[450px] h-[450px] bg-gradient-to-br from-peach-200 to-peach-100 rounded-full opacity-50 blur-3xl pointer-events-none animate-soft-float" />
      <div className="absolute top-20 -left-24 w-[400px] h-[400px] bg-gradient-to-br from-red-200 to-red-100 rounded-full opacity-50 blur-3xl pointer-events-none animate-soft-float animation-delay-1000" />
      <div className="absolute bottom-40 right-1/4 w-[200px] h-[200px] bg-gradient-to-br from-peach-100 to-red-100 rounded-full opacity-30 blur-2xl pointer-events-none animate-pulse" />
      
      <div className="container px-6 md:px-8 mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center pt-10 md:pt-14 pb-10">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:py-8 space-y-7 lg:w-1/2">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                Find Your <span className="text-gradient">Perfect Match</span> in the Solana Ecosystem
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-[600px] leading-relaxed">
                Connect your wallet, swipe on-chain, and find your crypto soulmate. Love is just a transaction away.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="xl" variant="romantic" rounded="md" className="shadow-lg shadow-red-400/20 font-medium">
                Start Swiping
              </Button>
              <Button size="xl" variant="outline" rounded="md" className="border-peach-200 hover:border-peach-400">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-muted-foreground pt-4 bg-gradient-to-r from-peach-50/50 to-red-50/50 dark:from-peach-900/20 dark:to-red-900/20 p-3 pl-4 rounded-xl border border-peach-200/30">
              <HeroIcon src="/check-circle.svg" alt="Verified" width={22} height={22} />
              <span>Trusted by over 10,000 Solana developers</span>
            </div>
          </div>
            <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative w-[320px] h-[560px] md:w-[340px] md:h-[600px] bg-white rounded-3xl shadow-xl shadow-peach-400/15 overflow-hidden border-8 border-white">
              {/* Mock dating app interface */}
              <div className="bg-gradient-to-r from-peach-400 to-red-500 h-18 flex items-center justify-center">
                <HeroIcon src="/heart.svg" alt="SolaMate" width={34} height={34} />
                <h3 className="text-white font-bold text-xl ml-2.5">SolaMate</h3>
              </div>
              
              <div className="p-3 h-[calc(100%-4rem)] flex flex-col">
                <div className="relative rounded-xl overflow-hidden h-[320px] md:h-[350px] shadow-md">
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto rounded-full bg-peach-100 flex items-center justify-center">
                        <Image src="/wallet.svg" alt="Connect Wallet" width={40} height={40} />
                      </div>
                      <h3 className="font-semibold text-gray-800 mt-4">Connect your wallet</h3>
                      <p className="text-sm text-gray-600 mt-1">to start swiping</p>
                    </div>
                  </div>
                </div>
                  <div className="flex justify-between mt-5 px-10">
                  <button className="w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-200" aria-label="Dislike profile">
                    <Image src="/heart-outline.svg" alt="Dislike" width={28} height={28} />
                  </button>
                  <button className="w-14 h-14 rounded-full bg-gradient-to-r from-peach-400 to-red-500 shadow-lg shadow-red-400/30 flex items-center justify-center" aria-label="Like profile">
                    <Image src="/heart.svg" alt="Like" width={28} height={28} className="invert" />
                  </button>
                </div>
              </div>
            </div>
              {/* Floating elements */}
            <HeroIcon 
              src="/heart.svg" 
              alt="Heart" 
              className="absolute -left-6 top-20"
              width={45}
              height={45}
              effect="float"
            />
            <HeroIcon 
              src="/signature.svg" 
              alt="Signature" 
              className="absolute right-6 top-12"
              width={45}
              height={45}
              effect="float"
            />
            <HeroIcon 
              src="/transaction.svg" 
              alt="Transaction" 
              className="absolute -left-8 bottom-24"
              width={45}
              height={45}
              effect="float"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
