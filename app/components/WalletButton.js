"use client";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function WalletButton() {
  const [walletAddress, setWalletAddress] = useState(null);
  const [bnbBalance, setBnbBalance] = useState(null);
  const [xlifeBalance, setXlifeBalance] = useState(null);

  // XLIFE Token Contract Address (Updated)
  const xlifeTokenAddress = "0x06ae1c000458D646184676c35C8ccdbB000bb6c7";

  // ABI for XLIFE Token (Only balanceOf function)
  const xlifeTokenABI = [
    "function balanceOf(address owner) view returns (uint256)"
  ];

  // Function to check if MetaMask is installed and connected
  const checkMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_accounts", []);
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          getBalances(accounts[0], provider);
        }
      } catch (error) {
        console.error("Error checking MetaMask:", error);
      }
    }
  };

  // Function to fetch balances
  const getBalances = async (account, provider) => {
    try {
      // Get BNB Balance
      const balance = await provider.getBalance(account);
      setBnbBalance(ethers.formatEther(balance));

      // Get XLIFE Token Balance
      const contract = new ethers.Contract(xlifeTokenAddress, xlifeTokenABI, provider);
      const xlifeBalanceRaw = await contract.balanceOf(account);
      setXlifeBalance(ethers.formatUnits(xlifeBalanceRaw, 18));
    } catch (error) {
      console.error("Error fetching XLIFE balance:", error);
      setXlifeBalance("Error");
    }
  };

  // Function to connect wallet
  const connectWallet = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        setWalletAddress(accounts[0]);
        getBalances(accounts[0], provider);
      } catch (error) {
        console.error("Connection failed:", error);
      }
    } else {
      alert("MetaMask is not installed!");
    }
  };

  // Function to disconnect wallet
  const disconnectWallet = () => {
    setWalletAddress(null);
    setBnbBalance(null);
    setXlifeBalance(null);
  };

  // Check wallet connection on component mount
  useEffect(() => {
    checkMetaMask();
  }, []);

  return (
    <div className="flex flex-col items-center space-y-2">
      {walletAddress ? (
        <>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all"
            onClick={disconnectWallet}
          >
            Disconnect Wallet
          </button>
          <p className="text-white text-sm">BNB Balance: {bnbBalance ? `${bnbBalance} BNB` : "Loading..."}</p>
          <p className="text-white text-sm">XLIFE Balance: {xlifeBalance ? `${xlifeBalance} XLIFE` : "Loading..."}</p>
        </>
      ) : (
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
