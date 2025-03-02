import Image from "next/image";
import WalletButton from "./WalletButton";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <Image src="/logo.png" alt="XLIFE Logo" width={50} height={50} />
        </a>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/wallet" className="hover:text-gray-300">Wallet</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>

        {/* Wallet Button */}
        <WalletButton />
      </div>
    </nav>
  );
}
