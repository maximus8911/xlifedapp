import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import WalletButton from "./WalletButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="XLIFE Logo" width={40} height={40} className="mr-2" />
          <span className="text-white font-bold">XLIFE</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`lg:flex space-x-6 text-white ${menuOpen ? "block absolute top-16 left-0 w-full bg-gray-800 p-4" : "hidden lg:flex"}`}>
          <li><Link href="/" className="block py-2 px-4 hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="block py-2 px-4 hover:text-gray-300">About</Link></li>
          <li><Link href="/wallet" className="block py-2 px-4 hover:text-gray-300">Wallet</Link></li>
          <li><Link href="/contact" className="block py-2 px-4 hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Wallet Button */}
        <div className="hidden lg:block">
          <WalletButton />
        </div>
      </div>

      {/* Mobile Wallet Button */}
      {menuOpen && (
        <div className="lg:hidden flex justify-center mt-2">
          <WalletButton />
        </div>
      )}
    </nav>
  );
}
