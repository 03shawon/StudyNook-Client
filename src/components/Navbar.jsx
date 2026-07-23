"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { Avatar, Button } from "@heroui/react";
import { authClient, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Add Room", path: "/add-room" },
    { name: "My Listings", path: "/my-listings" },
    { name: "My Bookings", path: "/my-bookings" },
  ];

  const { data: session, isPending } = useSession();
  const user = session?.user;
  // console.log(user)
  console.log(user?.name, user?.image, 'from seess')

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="bg-[#1a1a2e] text-white sticky top-0 z-50 shadow-lg border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-bold tracking-tight hover:text-blue-400 transition-colors"
          >
            📚 <span className="hidden sm:block">StudyNook</span>
          </Link>

          <div className="hidden lg:flex items-center gap-6 font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className="hover:text-blue-400 transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2 text-sm border border-gray-500 rounded-lg hover:bg-white hover:text-[#1a1a2e] transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2 text-sm bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Button
                  onClick={handleSignOut}
                  size="md"
                  color="danger"
                  variant="danger"
                  className="font-semibold rounded-lg"
                >
                  Log Out
                </Button>
              </>
            )}
          </div>

          <button
            className="lg:hidden text-2xl p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-[#16162a] border-b border-gray-700 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="block py-2 hover:text-blue-400 border-b border-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="text-center py-2 border border-gray-500 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="text-center py-2 bg-blue-600 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Avatar>
                  <Avatar.Image alt={user?.name} src={user?.image} />
                  <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Button
                  onClick={handleSignOut}
                  fullWidth
                  color="danger"
                  variant="danger"
                  className={"rounded-lg"}
                >
                  Log Out
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
