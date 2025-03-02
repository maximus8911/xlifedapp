import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Include Navbar */}
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-4">Welcome to XLIFE DAPP! 🚀</h1>
        <p className="text-lg">Live your life and earn rewards in a decentralized way.</p>
      </div>
    </div>
  );
}
