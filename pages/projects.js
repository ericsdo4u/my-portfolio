import { useRouter } from "next/router";

export default function Projects() {
  const router = useRouter();

  const projects = [
    {
      title: "EmergHelp Frontend",
      description: "Built using React.js, and Tailwind CSS",
      github: "https://github.com/ericsdo4u/emerghelp.com",
      demo: "https://emerghelp-com.vercel.app/",
    },
     {
      title: "EmergHelp Backend",
      description: "Built using Java Spring Boot, postgres and Deployed with Docker and Render",
      github: "https://github.com/ericsdo4u/emerghelp",
      demo: "https://emerghelp-latest.onrender.com",
    },
    {
      title: "E-Commerce Frontend",
      description: "Built using Next.js, Redux, and Tailwind CSS",
      github: "https://github.com/yourusername/ecommerce-frontend",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Java Spring Boot Backend",
      description: "Deployed with Docker and Render",
      github: "https://github.com/yourusername/spring-boot-backend",
      demo: "https://spring-backend-demo.render.com",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-12">
      <h1 className="text-4xl font-extrabold text-gray-400 text-center">🚀 My Projects</h1>
      <p className="text-lg text-gray-500 text-center mt-4">
        Showcasing my expertise in modern web development
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg transition-transform hover:scale-105">
            <h2 className="text-xl font-semibold text-gray-400">{project.title}</h2>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-4">
              <a href={project.github} className="text-blue-500 font-medium hover:underline">🔗 GitHub</a> | 
              <a href={project.demo} className="text-green-500 font-medium hover:underline"> 🚀 Live Demo</a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
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
