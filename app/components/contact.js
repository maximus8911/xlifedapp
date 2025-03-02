import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Include Navbar */}
      <Navbar />

      {/* Page Content */}
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-3xl font-bold mb-4">📩 Contact Us</h1>
        <p className="text-lg">For any inquiries, feel free to reach out via email.</p>
      </div>
    </div>
  );
}
