import { Button } from './ui/button'

export function CTA() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-peach-500 to-red-500 py-14 px-6 text-center shadow-2xl">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
          
          <div className="relative max-w-2xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to find your perfect match?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">
              Join thousands of Solana developers who have already found their crypto soulmate. Connect your wallet and start swiping today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-white text-red-500 hover:bg-white/90" rounded="full">
                Connect Wallet
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10" rounded="full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
