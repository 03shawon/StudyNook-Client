import Link from "next/link";
import { Button } from "@heroui/react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#07111f] text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500 flex items-center justify-center font-bold text-xl text-white">
                S
              </div>

              <h2 className="text-2xl font-bold">
                Study<span className="text-emerald-400">Nook</span>
              </h2>
            </Link>

            <p className="text-gray-300 leading-7 text-sm">
              Find and book quiet, private study rooms for focused learning,
              group discussions, and productive library sessions.
            </p>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Useful Links</h3>

            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/" className="hover:text-emerald-400 duration-200">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/rooms"
                  className="hover:text-emerald-400 duration-200"
                >
                  Rooms
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 duration-200"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>

            <div className="space-y-3 text-gray-300 text-sm">
              <p>
                Email:{" "}
                <a
                  href="mailto:support@studynook.com"
                  className="hover:text-emerald-400 duration-200"
                >
                  support@studynook.com
                </a>
              </p>

              <p>
                Phone:{" "}
                <a
                  href="tel:+8801700000000"
                  className="hover:text-emerald-400 duration-200"
                >
                  +880 1700-000000
                </a>
              </p>

              <p>Location: Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Follow Us</h3>

            <p className="text-gray-300 text-sm mb-5 leading-7">
              Stay connected with StudyNook for room updates, booking tips, and
              study-friendly spaces.
            </p>

            <div className="flex items-center gap-3">
              <Button
                as="a"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                isIconOnly
                radius="full"
                className="bg-white/10 text-white hover:bg-emerald-500"
              >
                <FaFacebookF />
              </Button>

              <Button
                as="a"
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                isIconOnly
                radius="full"
                className="bg-white/10 text-white hover:bg-emerald-500"
              >
                <FaXTwitter />
              </Button>

              <Button
                as="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                isIconOnly
                radius="full"
                className="bg-white/10 text-white hover:bg-emerald-500"
              >
                <FaLinkedinIn />
              </Button>

              <Button
                as="a"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                isIconOnly
                radius="full"
                className="bg-white/10 text-white hover:bg-emerald-500"
              >
                <FaInstagram />
              </Button>
            </div>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-white/10" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>© 2026 StudyNook. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-emerald-400">
              Privacy Policy
            </Link>

            <Link href="/terms" className="hover:text-emerald-400">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
