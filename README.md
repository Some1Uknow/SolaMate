# SolaMate - Dating App for Solana Developers

SolaMate is a modern dating app designed specifically for Solana developers and enthusiasts, making it easy to find your crypto soulmate with on-chain swipes and matches.

## 1. Project Overview

SolaMate is a modern dating application built specifically for Solana developers and blockchain enthusiasts. The core concept is to create a platform where users can connect with like-minded individuals in the crypto space, with all interactions (swipes, matches) being recorded on the Solana blockchain.

## 2. Technology Stack

### Frontend
- **Framework**: Next.js 15 (with App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS with custom theme
- **Animation**: Framer Motion
- **UI Components**: Custom components built with Radix UI primitives
- **Typography**: Geist Sans and Geist Mono fonts

### Backend/Infrastructure
- **Authentication**: Civic Auth (Web3-based authentication)
- **Blockchain**: Solana for wallet integration and transactions
- **API Routes**: Next.js API routes for server-side operations

## 3. Authentication System (Civic Auth)

The authentication system is a core feature of SolaMate and is implemented using Civic Auth, a Web3-based authentication solution. Here's a detailed breakdown of how it works:

### 3.1. Integration Architecture

The authentication is set up as a middleware that secures all relevant routes in the application. The implementation is found in `src/middleware.ts`:

```typescript
import { authMiddleware } from "@civic/auth-web3/nextjs/middleware"

export default authMiddleware();

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|sitemap.xml|robots.txt|.*\\.jpg|.*\\.png|.*\\.svg|.*\\.gif).*)',
  ],
}
```

This middleware secures all routes except for static files and assets.

### 3.2. Auth Provider

The application wraps all components with the `CivicAuthProvider` in the root layout (`src/app/layout.tsx`):

```typescript
<CivicAuthProvider> {children}</CivicAuthProvider>
```

This provider makes authentication context available throughout the application.

### 3.3. API Routes for Auth

The API route for authentication is set up with a catch-all route in `src/app/api/[...civicauth]/route.ts`:

```typescript
import { handler } from "@civic/auth-web3/nextjs"

export const GET = handler()
```

This route handles the authentication callbacks and session management.

### 3.4. User Authentication Flow

1. **User Signs In**: The user initiates authentication via the `UserButton` component provided by Civic Auth.
2. **Wallet Connection**: Upon successful authentication, the user gets a Web3 identity which can interact with blockchain.
3. **Session Management**: The auth state is managed by the Civic Auth provider and accessible via the `useUser` hook.

### 3.5. Wallet Integration

The wallet functionality is a key aspect of the authentication system:

- **Wallet Creation**: If a user doesn't have a Solana wallet, one can be created through the `createWallet` function in `src/utils/wallet.ts`.
- **Wallet Status Check**: The `userHasWallet` utility function determines if a user already has a connected wallet.
- **Balance Management**: Users can view their Solana balance and its equivalent USD value through the `fetchSolanaBalance` and `fetchSolPrice` functions.

### 3.6. User Interface for Wallet Management

The wallet UI is implemented in `src/components/sidebar/wallet-modal.tsx`:

- **Wallet Status Display**: Shows the user's Solana wallet address if available.
- **Balance Display**: Shows the user's SOL balance and USD equivalent.
- **Create Wallet Flow**: Provides a simple interface for creating a new wallet if the user doesn't have one.
- **Refresh Mechanism**: Allows users to refresh their balance information.

## 4. Application Structure

### 4.1. Pages/Routes

The application follows Next.js App Router structure:

- **Home Page** (`src/app/page.tsx`): Landing page with marketing content
- **Profiles Page** (`src/app/profiles/page.tsx`): Browse potential matches
- **Matches Page** (`src/app/matches/page.tsx`): View successful matches
- **Chats Page** (`src/app/chats/page.tsx`): Communication with matches

### 4.2. Components

The components are organized by feature and functionality:

- **Layout Components**:
  - `Header`: Navigation for landing page
  - `Footer`: Site-wide footer
  - `Sidebar`: Navigation for authenticated pages
  
- **Marketing Components**:
  - `Hero`: Main landing section
  - `Features`: Product features display
  - `HowItWorks`: Process explanation
  - `Testimonials`: User feedback
  - `CTA`: Call-to-action section

- **Feature-specific Components**:
  - `ProfilesView`: Browse potential matches
  - `MatchesView`: View and manage matches
  - `ChatsView`: Messaging interface

- **UI Components**:
  - `Button`: Reusable button component with variants
  - `FeatureCard`: Card for highlighting features
  - `HeroIcon`: Icon component for hero section
  - `Logo`: Brand logo
  - `PoweredSolana`: Solana branding component

### 4.3. Utilities

- **`wallet.ts`**: Functions for wallet management (creation, balance fetching)
- **`cn.ts`**: Utility for Tailwind class name merging

## 5. Blockchain Integration

### 5.1. Wallet Management

The wallet functionality is integrated through Civic Auth's Web3 capabilities:

- **Wallet Creation**: Users can create a Solana wallet directly from the app
- **Balance Checking**: Real-time balance fetching from Solana blockchain
- **USD Conversion**: Integration with CoinGecko API to convert SOL to USD value

### 5.2. On-chain Interactions (Planned)

According to the project plan, several blockchain features are planned:

- **On-chain Swipes**: Recording user swipes on the Solana blockchain
- **Transaction Signatures**: Using transactions to verify genuine interest
- **NFT Minting**: Creating commemorative NFTs for successful matches

## 6. UI/UX Design

### 6.1. Design Language

- **Color Scheme**: Primarily using a peach and red gradient theme with dark mode UI
- **Typography**: Modern and clean with Geist Sans for standard text and Geist Mono for code/technical elements
- **Components**: Clean, accessible UI components with consistent styling

### 6.2. User Experience Flow

1. **Landing**: Users encounter marketing content explaining the app's purpose
2. **Authentication**: Web3 authentication via Civic Auth
3. **Wallet Setup**: Creating or connecting a Solana wallet
4. **Core Functionality**: Browsing profiles, matching, and chatting

## 7. Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 8. Development Status

The project is currently in development with the following roadmap items:

- [ ] Implement wallet connection (partially implemented)
- [ ] Build real-time chat functionality
- [ ] Create on-chain swiping mechanism
- [ ] Develop NFT minting for matches
- [ ] Launch mobile apps

## 9. Future Directions

The application has several potential areas for expansion:

1. **Mobile Applications**: Native mobile apps for iOS and Android
2. **Advanced Matching Algorithms**: Using blockchain activity to enhance matching
3. **DeFi Integration**: Adding financial features like token staking for premium features
4. **Community Features**: Forums, events, and group chats for Solana developers
5. **Expanded Blockchain Support**: Adding support for other blockchain networks

## 10. Security Considerations

The application employs several security measures:

- **Web3 Authentication**: Secure authentication via Civic Auth
- **Protected Routes**: Middleware to ensure only authenticated users can access certain pages
- **Secure Wallet Creation**: Proper handling of wallet creation and management
- **Error Handling**: Comprehensive error handling throughout the codebase
