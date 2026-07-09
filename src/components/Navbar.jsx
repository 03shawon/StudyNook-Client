'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold hover:text-blue-400 transition-colors">
            📚 <span>StudyNook</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link href="/rooms" className="hover:text-blue-400 transition-colors">Rooms</Link>
            
            <Link href="/add-room" className="hover:text-blue-400 transition-colors">Add Room</Link>
            <Link href="/my-listings" className="hover:text-blue-400 transition-colors">My Listings</Link>
            <Link href="/my-bookings" className="hover:text-blue-400 transition-colors">My Bookings</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="px-6 py-2 border border-gray-400 hover:border-white rounded-lg transition-all hover:bg-white hover:text-[#1a1a2e]"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-all"
            >
              Register
            </Link>
          </div>

          {/* Profile (Logged in State) - Replace the above auth section when user is logged in */}
          {/* 
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-3 cursor-pointer">
              <img 
                src="https://i.pravatar.cc/150" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <p className="text-sm font-medium">Anke Schreiber</p>
              </div>
            </div>
          </div>
          */}

          <button
            className="md:hidden text-3xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-gray-700 space-y-4">
            <Link href="/" className="block py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link href="/rooms" className="block py-2" onClick={() => setIsMenuOpen(false)}>Rooms</Link>
            <Link href="/add-room" className="block py-2" onClick={() => setIsMenuOpen(false)}>Add Room</Link>
            <Link href="/my-listings" className="block py-2" onClick={() => setIsMenuOpen(false)}>My Listings</Link>
            <Link href="/my-bookings" className="block py-2" onClick={() => setIsMenuOpen(false)}>My Bookings</Link>
            
            <div className="pt-4 border-t border-gray-700 flex flex-col gap-3">
              <Link href="/login" className="text-center py-3 border border-gray-400 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
              <Link href="/register" className="text-center py-3 bg-blue-600 rounded-lg" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;