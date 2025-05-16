import Image from 'next/image'

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative">
      {/* Background gradient blob */}
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-peach-200 rounded-full opacity-40 blur-3xl pointer-events-none" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Success Stories</h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Real developers, real connections, real love stories. All on the Solana blockchain.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Testimonial 1 */}
          <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md">
            <div className="mb-4 text-peach-500">
              ★★★★★
            </div>
            <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
              "We matched after both building Solana NFT projects. Our first date was pair programming. Now we're married and run a successful Solana studio together!"
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-peach-400 to-red-500 flex items-center justify-center text-white font-semibold">
                AM
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">Alex & Maria</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Solana Developers</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md">
            <div className="mb-4 text-peach-500">
              ★★★★★
            </div>
            <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
              "I was skeptical about signing a transaction just to swipe right, but it actually filtered out people who weren't serious. Found my perfect match!"
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-peach-400 to-red-500 flex items-center justify-center text-white font-semibold">
                JS
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">Jake S.</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Smart Contract Developer</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md">
            <div className="mb-4 text-peach-500">
              ★★★★★
            </div>
            <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
              "The NFT we received when we matched is now our profile picture everywhere. It's not just a dating app, it's a community of like-minded devs."
            </blockquote>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-peach-400 to-red-500 flex items-center justify-center text-white font-semibold">
                RL
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">Rachel L.</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Blockchain Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
