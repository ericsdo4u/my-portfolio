import { useRouter } from "next/router";

export default function About() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-12 text-center">
      <h1 className="text-5xl font-extrabold text-gray-500"> About Me</h1>
      <p className="text-xl text-gray-500 mt-6 leading-relaxed">
        Hi, I’m <span className="font-semibold text-blue-600">Donald</span>, a software engineer, data scientist, and AI enthusiast. Passionate about machine learning engineering, deep learning, and scalable software development.
      </p>

      <p className="text-gray-500 mt-6">
        My journey into tech was fueled by a drive to build intelligent solutions that automate workflows, enhance productivity, and solve real-world challenges.  
        Whether it's crafting AI-powered applications, analyzing complex datasets, or optimizing deep learning models, I thrive on creating impactful technology.
      </p>

      <h2 className="text-3xl font-semibold text-gray-500 mt-10">🔹 Technical Expertise</h2>
      <ul className="text-lg text-gray-500 mt-4 space-y-2 text-left max-w-2xl mx-auto">
        <li><strong>🔸 Full-Stack Development:</strong> Java, Python, JavaScript | Spring Boot, Django, React.js, Next.js React, Native</li>
        <li><strong>🔸 Machine Learning & Deep Learning:</strong> PyTorch, TensorFlow, Scikit-Learn | Model Development & Optimization</li>
        <li><strong>🔸 Data Science & AI Integration:</strong> Statistical Analysis, Data Processing, Predictive Modeling</li>
        <li><strong>🔸 Backend & Cloud Deployment:</strong> Docker, Render, Vercel, CI/CD Pipelines</li>
        <li><strong>🔸 Front-End Styling:</strong> Tailwind CSS for modern, responsive UI</li>
      </ul>

      <h2 className="text-3xl font-semibold text-gray-500 mt-10">🌟 What Sets Me Apart?</h2>
      <p className="text-gray-500 mt-4">
        My accounting foundation helps me approach software and AI challenges with a business-oriented mindset, ensuring that data-driven solutions align with financial and operational goals.  
        I thrive in collaborative environments, writing clean, maintainable code, and staying ahead in this fast-moving field.
      </p>

      <p className="text-xl text-gray-500 mt-8">
        I’m always open to collaborating, innovating, and exploring new opportunities. Let’s build something great together!
      </p>

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
