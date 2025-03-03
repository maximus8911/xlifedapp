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

        {/* Logo on Left */}
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/Logo.png" 
            alt="XLIFE Logo" 
            width={40} 
            height={40} 
            className="w-12 h-12 object-contain"
            priority
          />
          <span className="text-white font-bold text-lg hidden lg:block">XLIFE DAPP</span>
        </Link>

        {/* Navigation Links - Center */}
        <ul className="hidden lg:flex space-x-6 text-white text-lg">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/wallet" className="hover:text-gray-300">Wallet</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Right Side - Wallet Button & Social Icons */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <button className="text-white text-lg hover:text-gray-300">🌍</button>

          {/* Social Media Icons */}
          <a href="https://discord.com" target="_blank" className="text-white hover:text-gray-300">💬</a>
          <a href="https://twitter.com" target="_blank" className="text-white hover:text-gray-300">🐦</a>
          <a href="https://t.me" target="_blank" className="text-white hover:text-gray-300">📢</a>

          {/* Wallet Button */}
          <WalletButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
}
