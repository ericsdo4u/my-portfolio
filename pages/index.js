export default function Home() {
  return (
    <div className="max-w-4xl mx-auto p-12 text-center">
      <h1 className="text-5xl font-extrabold text-gray-500">
        Hi, I'm Donald
      </h1>
      <p className="text-xl text-gray-500 mt-6 leading-relaxed">
        A software engineer, data scientist, and AI enthusiast, specializing in machine learning engineering, deep learning, and scalable software solutions.
      </p>

      <p className="text-lg text-gray-500 mt-4">
        I thrive on building intelligent applications that automate workflows, enhance productivity, and solve real-world problems. From React.js front-end development to AI-powered backend systems, my expertise spans the full technology stack.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-500">💻 Full-Stack Development</h2>
          <p className="text-gray-500 mt-2">
            Java, Python, JavaScript | Spring Boot, Django, React.js, React Native
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-500">🤖 Machine Learning & AI</h2>
          <p className="text-gray-500 mt-2">
            PyTorch, TensorFlow, Scikit-Learn | Model Development & Optimization
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-500">☁️ Cloud & Deployment</h2>
          <p className="text-gray-500 mt-2">
            Docker, Render, Vercel, CI/CD Pipelines
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-500">🎨 Front-End Styling</h2>
          <p className="text-gray-500 mt-2">
            Tailwind CSS for modern, responsive UI designs
          </p>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
        <a href="/projects" className="px-6 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all">
           View My Projects
        </a>
        <a href="/about" className="px-6 py-3 text-lg font-medium text-white bg-gray-800 hover:bg-gray-900 rounded-lg transition-all">
           Learn More About Me
        </a>
        <a href="/contact" className="px-6 py-3 text-lg font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all">
           Contact Me
        </a>
      </div>
    </div>
  );
}
