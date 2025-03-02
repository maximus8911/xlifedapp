import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Include Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-3xl font-bold mb-4">📌 About Us</h1>
        <p className="text-lg text-center max-w-2xl">
          XLIFE DAPP is a decentralized application that helps users earn digital currency through their daily activities.
        </p>
      </div>
    </div>
  );
}
