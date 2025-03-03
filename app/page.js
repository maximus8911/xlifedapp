"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask not detected. Please install it.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen text-center">
      {/* Hero Section */}
      <motion.div 
        className="bg-gray-900 text-white py-10 text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📱 XLIFE DAPP - Live to Earn
      </motion.div>

      {/* Wallet Connection Section */}
      <motion.div 
        className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-bold">🔗 Connect Wallet</h2>
        <p>Securely connect your wallet to access the ecosystem.</p>
        <motion.button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={connectWallet}
        >
          {walletAddress ? "Connected" : "Connect Now"}
        </motion.button>
        <p className="mt-2 text-sm text-gray-600">
          {walletAddress ? `Connected: ${walletAddress}` : "Wallet not connected"}
        </p>
      </motion.div>

      {/* Presale Section */}
      <motion.div 
        className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-xl font-bold">💰 Presale is Live!</h2>
        <p>Get in early! Secure your XLIFE tokens now.</p>
        <motion.button 
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Buy Now
        </motion.button>
      </motion.div>

      {/* Roadmap Section */}
      <motion.div 
        className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="text-xl font-bold">🛣️ Roadmap</h2>
        <p>2025 - 2028 Vision for XLIFE</p>
      </motion.div>

      {/* FAQs Section */}
      <motion.div 
        className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-xl font-bold">❓ FAQs</h2>
        <p>Common questions answered here.</p>
      </motion.div>

      {/* Community Section */}
      <motion.div 
        className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h2 className="text-xl font-bold">📢 Join the Community</h2>
        <motion.button 
          className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Follow Us
        </motion.button>
      </motion.div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-6 py-4">
        📧 Contact & Footer Info
      </footer>
    </div>
  );
}
