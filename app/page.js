"use client";
import { useState } from "react";

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
      <div className="bg-gray-900 text-white py-10 text-2xl font-bold">
        📱 XLIFE DAPP - Live to Earn
      </div>

      {/* Wallet Connection Section */}
      <div className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">🔗 Connect Wallet</h2>
        <p>Securely connect your wallet to access the ecosystem.</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md"
          onClick={connectWallet}
        >
          {walletAddress ? "Connected" : "Connect Now"}
        </button>
        <p className="mt-2 text-sm text-gray-600">
          {walletAddress ? `Connected: ${walletAddress}` : "Wallet not connected"}
        </p>
      </div>

      {/* Presale Section */}
      <div className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">💰 Presale is Live!</h2>
        <p>Get in early! Secure your XLIFE tokens now.</p>
        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md">
          Buy Now
        </button>
      </div>

      {/* Roadmap Section */}
      <div className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">🛣️ Roadmap</h2>
        <p>2025 - 2028 Vision for XLIFE</p>
      </div>

      {/* FAQs Section */}
      <div className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">❓ FAQs</h2>
        <p>Common questions answered here.</p>
      </div>

      {/* Community Section */}
      <div className="bg-white w-4/5 mx-auto mt-6 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">📢 Join the Community</h2>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-md">
          Follow Us
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-6 py-4">
        📧 Contact & Footer Info
      </footer>
    </div>
  );
}
