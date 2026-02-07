/*
  FOOTER COMPONENT
  - Displayed at the bottom of the site
  - Shows copyright and social links
*/
import {FaFacebook, FaLinkedin, FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-20 bg-white" >
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 test-sm">

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © 2026 My Portfolio | All Rights Reserved
        </p>

        {/* Social links */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-3">
            <a href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--color-secondary)] transition-colors"
            >
              <FaFacebook size={15} />
            </a>

            <a href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--color-secondary)]transition-colors"
            >
              <FaLinkedin size={15} />
            </a>

            <a href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[var(--color-secondary)] transition-colors"
            >
              <FaInstagram size={15} />
            </a>

          </div>
          <span className="text-sm text-gray-500">Connect with me</span>
        </div>

        {/* Optional small tagline */}
        <p className="mt-4 text-sm text-gray-500">
          Design and Built with Passion
        </p>

      </div>
    </footer>
  );
}
