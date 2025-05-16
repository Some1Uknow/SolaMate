import Link from 'next/link'
import { Logo } from './ui/logo'

export function Footer() {
  return (    <footer className="border-t border-peach-200/30 dark:border-peach-900/20 py-14 md:py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-20 w-80 h-80 bg-peach-400/10 rounded-full blur-3xl pointer-events-none opacity-70"></div>
      <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-red-400/10 rounded-full blur-3xl pointer-events-none opacity-70"></div>
      
      <div className="container px-6 md:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo withTagline={true} className="mb-5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              The first dating app built specifically for Solana developers and enthusiasts.
            </p>
          </div>
          
          <div>            <h3 className="font-semibold mb-4 text-gradient">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-sm text-foreground/80 hover:text-peach-500 dark:hover:text-peach-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} SolaMate. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-peach-500 dark:text-gray-400 dark:hover:text-peach-400">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-peach-500 dark:text-gray-400 dark:hover:text-peach-400">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-peach-500 dark:text-gray-400 dark:hover:text-peach-400">
              <span className="sr-only">Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M8.1 12a.88.88 0 1 0 1.76 0 .88.88 0 0 0-1.76 0Z"></path>
                <path d="M14.98 12a.88.88 0 1 0 0-1.76.88.88 0 0 0 0 1.76Z"></path>
                <path d="M14.9 9.52a4.18 4.18 0 0 0-2.6-1.05c-.13 0-.39.09-.65.09-.26 0-.51-.09-.64-.09a4.2 4.2 0 0 0-2.62 1.05 8.4 8.4 0 0 0-1.46 5.42c0 .17.08.52.08.69 0 .17.09.34.12.51.09.34.2.67.34 1 .15.29.32.56.51.81.2.25.42.48.67.67.25.2.51.35.79.48.29.12.59.22.9.27H11c.3-.05.61-.15.9-.27.28-.13.54-.29.79-.48.25-.2.47-.42.67-.67.19-.25.36-.52.51-.81.14-.32.25-.65.34-1 .03-.17.09-.34.12-.51 0-.17.08-.52.08-.69 0-1.8-.5-4.65-1.51-5.42z"></path>
                <path d="M18.51 7.45c-.23-.13-.48-.23-.73-.3-.22-.06-.45-.1-.68-.12-.18-.02-.36-.03-.54-.03-.56 0-1.11.1-1.63.29l.12 1.75c.31-.07.63-.11.95-.1"></path>
                <path d="M19.11 17.29c-.94.9-2.94 1.55-5.65 1.56a11.8 11.8 0 0 1-5.64-1.56 23.3 23.3 0 0 1-4.93-3.7 21.5 21.5 0 0 1-2-3.8c.4-.2.63-.4 1.13-.42.7-.3 1.8.37 2.5.86 0 0 .48-.88-.38-1.36a2.57 2.57 0 0 0-1.8-.23A1.9 1.9 0 0 0 1 8.73c-.13.45-.2.9-.22 1.37 0 2.87.87 5.73 2.5 8.34l.16.25a20.43 20.43 0 0 0 6.94 5.55c2.02.87 3.64 1.2 4.05 1.2.41 0 2.03-.33 4.05-1.2a20.43 20.43 0 0 0 6.94-5.55l.16-.25a16.33 16.33 0 0 0 2.5-8.34c-.02-.47-.1-.92-.22-1.37a1.9 1.9 0 0 0-1.34-.84 2.57 2.57 0 0 0-1.8.23c-.86.48-.38 1.36-.38 1.36.7-.5 1.8-.89 2.5-.86.5.02.72.22 1.13.42a21.5 21.5 0 0 1-2 3.8 23.3 23.3 0 0 1-4.93 3.7h.07Z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
