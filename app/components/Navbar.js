import Image from "next/image";
import Link from "next/link";
import WalletButton from "./WalletButton";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="XLIFE Logo" width={50} height={50} />
        </Link>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white">
          <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link href="/wallet" className="hover:text-gray-300">Wallet</Link></li>
          <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Wallet Button */}
        <WalletButton />
      </div>
    </nav>
  );
}
