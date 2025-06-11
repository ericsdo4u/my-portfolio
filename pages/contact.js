import { useRouter } from "next/router";

export default function Contact() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-12 text-center">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-400">📬 Get in Touch</h1>
      <p className="text-lg text-gray-400 mt-6">
        I'd love to connect! Whether it's collaboration, inquiries, or just a chat, feel free to reach out.
      </p>

      {/* Contact Links */}
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
        <a href="https://github.com/ericsdo4u" className="px-6 py-3 text-lg font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-all">
          🔗 GitHub
        </a>
        <a href="https://linkedin.com/in/donald-eric-9671b5141" className="px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all">
          💼 LinkedIn
        </a>
        <a href="mailto:ericsonericdon6@gmail.com" className="px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all">
          ✉️ Email Me
        </a>
      </div>

      {/* Back Button */}
      <div className="mt-10">
        <button 
          onClick={() => router.back()} 
          className="px-6 py-3 text-lg font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-all"
        >
          🔙 Go Back
        </button>
      </div>
    </div>
  );
}
