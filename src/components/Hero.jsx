import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0f172a]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/95 via-[#1a1a2e]/85 to-[#1a1a2e]/75"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm mb-6 border border-white/20">
          📚 Quiet Study Spaces
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
          Find Your Perfect<br />
          <span className="text-blue-400">Study Sanctuary</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Browse peaceful private study rooms in libraries and campuses. 
          Book instantly and focus deeply. List your own space and earn.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/rooms"
            className="group px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 flex items-center gap-3 shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95"
          >
            Explore Available Rooms
            <span className="group-hover:translate-x-2 transition-transform">→</span>
          </Link>

          <Link
            href="/add-room"
            className="px-8 py-4 border-2 border-white/70 hover:border-white hover:bg-white/10 text-white font-medium text-lg rounded-xl transition-all"
          >
            List Your Room
          </Link>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✔</span> Verified Rooms
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✔</span> Smart Booking System
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">✔</span> No Overbooking
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/60">
        <p className="text-xs tracking-widest mb-2">DISCOVER MORE</p>
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;