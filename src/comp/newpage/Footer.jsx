import Link from "next/link";
import { Youtube, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#505050] text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          {/* Navigation Links */}
          <div className="mb-8 md:mb-0">
            <nav className="flex flex-wrap gap-6">
              <Link
                href="#"
                className="text-sm uppercase border-b-2 border-[#EA993F] pb-1 hover:text-orange-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-sm uppercase hover:text-orange-300 transition-colors"
              >
                Services
              </Link>
              <Link
                href="#"
                className="text-sm uppercase hover:text-orange-300 transition-colors"
              >
                Insights
              </Link>
              <Link
                href="#"
                className="text-sm uppercase hover:text-orange-300 transition-colors"
              >
                Industries
              </Link>
              <Link
                href="#"
                className="text-sm uppercase hover:text-orange-300 transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#"
                className="text-sm uppercase hover:text-orange-300 transition-colors"
              >
                Careers
              </Link>
              <Link
                href="#"
                className="text-sm uppercase hover:text-orange-300 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="flex flex-col md:flex-row justify-between items-center pt-6 pt-6 mt-10">
              {/* Social Icons */}
              <div className="flex gap-4 mb-4 md:mb-0">
                <Link
                  href="#"
                  className="text-gray-400 bg-[#fff] p-2 rounded-full hover:text-white transition-colors"
                >
                  <Youtube size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 bg-[#fff] p-2 rounded-full hover:text-white transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 bg-[#fff] p-2 rounded-full hover:text-white transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </div>

              {/* Copyright */}
              <div className="text-xs text-gray-400">
                <span>© 2025 Nahteava |</span>
                <Link href="#" className="hover:text-white ml-1 mr-1">
                  Terms & Conditions
                </Link>{" "}
                |
                <Link href="#" className="hover:text-white ml-1">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="w-full md:w-1/3">
            <div className="mb-4">
              <h3 className="uppercase text-sm mb-2">Insights Signup</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email (Required)"
                  className="px-3 py-2 bg-[#fff] text-[#000] flex-grow focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button className="bg-transparent ml-4 text-white border border-[#EA993F] px-4 py-2 hover:bg-[#EA993F] transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="privacy-consent" className="mt-1" />
              <label
                htmlFor="privacy-consent"
                className="text-xs text-gray-400"
              >
                I have read the Privacy Policy and agree to its terms.
              </label>
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="privacy-consent" className="mt-1" />
              <label
                htmlFor="privacy-consent"
                className="text-xs text-gray-400"
              >
                YES, I would like to receive regular updates on thought
                leadership, industry insights and upcoming events from Nahteava.
                I can opt-out anytime using the unsubscribe link.
              </label>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
      </div>
    </footer>
  );
}
