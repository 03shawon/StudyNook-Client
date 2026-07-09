import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a2e] text-gray-300 pt-12 pb-8 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4 hover:text-blue-400 transition-colors">
              📚 StudyNook
            </Link>
            <p className="text-sm leading-relaxed">
              Your trusted platform to discover, book, and list quiet private study rooms in libraries and campuses.
            </p>
            <p className="text-xs mt-4 text-gray-400">
              Making focused study time easier for students everywhere.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/rooms" className="hover:text-white transition-colors">Browse Rooms</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/my-listings" className="hover:text-white transition-colors">My Listings</Link>
              </li>
              <li>
                <Link href="/my-bookings" className="hover:text-white transition-colors">My Bookings</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">✉️</span>
                <a href="mailto:support@studynook.com" className="hover:text-white transition-colors">
                  support@studynook.com
                </a>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-400 mt-1">📞</span>
                <a href="tel:+8801712345678" className="hover:text-white transition-colors">
                  +880 1712-345678
                </a>
              </p>
              <p className="text-sm mt-4">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-5 text-3xl mb-6">
              <a href="#" className="hover:text-blue-400 transition-colors" aria-label="Facebook" target="_blank">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="X (Twitter)" target="_blank">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors" aria-label="LinkedIn" target="_blank">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-pink-500 transition-colors" aria-label="Instagram" target="_blank">
                <FaInstagram />
              </a>
            </div>

            <div>
              <p className="text-sm mb-2 text-gray-400">Stay updated with new rooms</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-3 text-sm focus:outline-none focus:border-blue-500 w-full placeholder:text-gray-500"
                />
                <button 
                  className="bg-blue-600 hover:bg-blue-700 px-6 rounded-r-lg font-medium text-sm transition-all active:scale-95"
                >
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} StudyNook. All Rights Reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
          </div>

          <p className="mt-4 md:mt-0">Made with ❤️ for focused minds</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;