"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WalletButton from "./WalletButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo (Visible on Desktop, Hidden on Mobile) */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="hidden lg:block">
            <Image 
              src="/logo.png" 
              alt="XLIFE Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 object-contain"
              priority
            />
          </div>
          {/* Show XLIFE text on Mobile */}
          <span className="text-white font-bold text-lg lg:hidden">XLIFE DAPP</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`lg:flex space-x-6 text-white absolute lg:static top-16 left-0 w-full bg-gray-900 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ${
          menuOpen ? "block" : "hidden lg:flex"
        }`}>
          <li><Link href="/" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">About</Link></li>
          <li><Link href="/wallet" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">Wallet</Link></li>
          <li><Link href="/contact" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">Contact</Link></li>

          {/* Wallet Button - Mobile */}
          <li className="lg:hidden flex justify-center mt-4">
            <WalletButton />
          </li>
        </ul>

        {/* Wallet Button - Desktop */}
        <div className="hidden lg:block">
          <WalletButton />
        </div>

      </div>
    </nav>
  );
}
