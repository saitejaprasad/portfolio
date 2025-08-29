export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Responsive React + Tailwind site with custom domain and routing.",
      tech: ["React", "Tailwind", "Vite"],
      link: "https://github.com/yourusername/portfolio-site",
    },
    {
      title: "Chat App(MERN Stack)",
      description:
        "Developed a real time chat application with user Authentication, one to one messaging via RESTful API endpoints and online user filter, integrated socket.io updates and used MongoDB, Express, REACT, Node",
      tech: ["Node.js", "Express", "MongoDB", "React", "Tailwindcss"],
      link: "https://mern-chatapp-8ij5.onrender.com/",
    },
    {
      title: "Pick hacks 2025 stock adventure game App",
      description:
        "Developed a trading game investing on stocks deployed in streamlit integrated with a realtime stock data maintaining portfolio investments data",
      tech: ["JavaScript", "Sql", "Streamlit"],
      link: "https://trading-titans.streamlit.app",
    },
    {
      title: "Zombie Shooting Game",
      description:
        "Designed and developed a game for shooting zombies. Implemented a bullet and zombie death counter to track game progress.",
      tech: ["JavaScript", "html"],
      link: "https://github.com/saitejaprasad/zomieGunshots",
    },
  ];

  return (
    <section className="p-8 bg-gray-900 text-white min-h-screen">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4 text-gray-300">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-blue-700 text-white text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              🔗 GitHub Repo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// // Projects.jsx
// export default function Projects() {
//   return (
//     <section className="p-8 bg-gray-900 text-white min-h-screen">
//       <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
//           <h3 className="text-2xl font-semibold mb-2">Portfolio Site</h3>
//           <p className="mb-2">
//             Built with React, Tailwind, and Vite. Fully responsive and deployed
//             with a custom domain.
//           </p>
//           <a
//             href="https://github.com/yourusername/portfolio-site"
//             className="text-blue-400 hover:underline"
//           >
//             GitHub Repo
//           </a>
//         </div>
//         <div className="bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
//           <h3 className="text-2xl font-semibold mb-2">Node.js API</h3>
//           <p className="mb-2">
//             RESTful API built with Express and MongoDB. Includes JWT
//             authentication and CRUD operations.
//           </p>
//           <a
//             href="https://github.com/yourusername/node-api"
//             className="text-blue-400 hover:underline"
//           >
//             GitHub Repo
//           </a>
//         </div>
//         {/* Add more project cards as you build */}
//       </div>
//     </section>
//   );
// }
