"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import WalletButton from "./WalletButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bnbBalance, setBnbBalance] = useState(null);
  const [xlifeBalance, setXlifeBalance] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);

  // Function to get balance from WalletButton
  const updateBalances = useCallback((bnb, xlife, address) => {
    setBnbBalance(bnb);
    setXlifeBalance(xlife);
    setWalletAddress(address);
  }, []);

  return (
    <nav className="bg-gray-900 p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Balance Display (Centered) */}
        <div className="text-white text-xs lg:text-sm text-center absolute left-1/2 transform -translate-x-1/2">
          {walletAddress ? (
            <>
              <p>BNB: {bnbBalance ? `${bnbBalance} BNB` : "Loading..."}</p>
              <p>XLIFE: {xlifeBalance ? `${xlifeBalance} XLIFE` : "Loading..."}</p>
            </>
          ) : (
            <p>Connect Wallet</p>
          )}
        </div>

        {/* Logo / Project Name */}
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

      </div>

      {/* Navigation Links */}
      <ul className={`lg:flex space-x-6 text-white absolute lg:static top-16 left-0 w-full bg-gray-900 lg:bg-transparent p-4 lg:p-0 transition-all duration-300 ${
        menuOpen ? "block" : "hidden lg:flex text-center"
      }`}>
        <li><Link href="/" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">Home</Link></li>
        <li><Link href="/about" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">About</Link></li>
        <li><Link href="/wallet" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">Wallet</Link></li>
        <li><Link href="/contact" className="block py-2 px-4 text-sm lg:text-base hover:text-gray-300">Contact</Link></li>
      </ul>

      {/* Wallet Button - Desktop */}
      <div className="hidden lg:flex justify-center mt-2">
        <WalletButton updateBalances={updateBalances} />
      </div>

      {/* Wallet Button - Mobile (Centered at the Bottom) */}
      {menuOpen && (
        <div className="lg:hidden flex justify-center mt-4">
          <WalletButton updateBalances={updateBalances} />
        </div>
      )}
    </nav>
  );
}
