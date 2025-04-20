import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/waitlist/join`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to join waitlist");
      }

      toast.success(
        "Welcome to the SolaMate family! 💝 We'll notify you when we launch!"
      );
      setIsModalOpen(false);
      setEmail("");
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf0e6] to-[#ffe4e1] text-[#800000] flex justify-center items-center relative overflow-hidden animate-gradient">
      <div className="absolute w-full h-full">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute text-${
              Math.random() > 0.5 ? "5" : "3"
            }xl text-[#800000] opacity-${
              Math.random() > 0.5 ? "20" : "30"
            } animate-float-${(i % 3) + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              filter: "blur(1px)",
            }}
          >
            ♥
          </div>
        ))}
      </div>
      <div className="absolute w-full h-full bg-[url('/solana-pattern.png')] opacity-5 animate-slide"></div>
      <main className="text-center z-10 p-8 rounded-2xl backdrop-blur-sm bg-white/10">
        <h1 className="font-['Space_Grotesk'] text-7xl mb-4 bg-gradient-to-r from-[#800000] to-[#ff4444] text-transparent bg-clip-text animate-shimmer drop-shadow-glow">
          SolaMate
        </h1>
        <p className="font-['JetBrains_Mono'] text-2xl mb-12 animate-fadeIn">
          Where Solana devs find their soulmates
        </p>
        <div className="space-y-4 mb-12 text-lg font-['Outfit']">
          <p className="animate-slideUp" style={{ animationDelay: "0.2s" }}>
            Finding love is hard.
          </p>
          <p className="animate-slideUp" style={{ animationDelay: "0.4s" }}>
            Finding love as a Solana dev? Almost impossible.
          </p>
          <p className="animate-slideUp" style={{ animationDelay: "0.6s" }}>
            Swap left, swap right... maybe mint a soulmate 🫠
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-[#800000] to-[#ff4444] text-[#faf0e6] px-12 py-5 rounded-full text-xl font-bold hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-[#800000]/20 animate-pulse"
        >
          Join the Waitlist
        </button>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-scaleUp">
            <h2 className="text-2xl font-['Space_Grotesk'] mb-4 bg-gradient-to-r from-[#800000] to-[#ff4444] text-transparent bg-clip-text">
              Join Our Love Chain ❤️
            </h2>
            <p className="text-gray-600 mb-6 font-['Outfit']">
              Be the first to know when we launch and find your perfect match in
              the Solana ecosystem!
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-[#800000]/20 focus:outline-none focus:border-[#800000] font-['JetBrains_Mono']"
              />
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-[#800000] to-[#ff4444] text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-[#800000]/20 hover:bg-[#800000]/5 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      <Toaster position="bottom-center" />
      <Analytics />
    </div>
  );
}

export default App;
