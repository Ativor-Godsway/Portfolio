import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI EdTech Platform",
    category: "Start Up • AI",
    description:
      "An AI-powered educational platform that generates topic-based questions, records student grades, and provides performance insights over time.",
    image: "/images/prep-ai.png",
    demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    link: "https://prep-ai-blond-alpha.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Full Stack • Commerce",
    description:
      "A full-stack e-commerce website with an admin panel to manage products, designed to deliver seamless shopping experiences.",
    image: "/images/ecommerce.png",
    demo: "https://www.youtube.com/embed/l482T0yNkeo",
    link: "https://world-of-vintages-client.vercel.app",
  },
  {
    id: 3,
    title: "Spotify Clone",
    category: "React • Layout",
    description:
      "A modern, responsive web application replicating Spotify’s design and functionality for browsing and playing music.",
    image: "/images/spotify.png",
    demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
    link: "https://spotify-livid-tau.vercel.app",
  },
  {
    id: 4,
    title: "Bank Landing Page",
    category: "UI • Frontend",
    description:
      "A responsive landing page for a banking platform, designed with clean UI and smooth interactions to showcase features effectively.",
    image: "/images/landing-page.png",
    demo: "https://www.youtube.com/embed/5qap5aO4i9A",
    link: "https://bank-landing-page-beige.vercel.app",
  },
];

const Projects = () => {
  const [openDemo, setOpenDemo] = useState(false);
  const [currentDemo, setCurrentDemo] = useState("");

  const handleDemoOpen = (url) => {
    setCurrentDemo(url);
    setOpenDemo(true);
  };

  const handleDemoClose = () => {
    setOpenDemo(false);
    setCurrentDemo("");
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white px-6 py-32 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-40 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px]" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-500/20 blur-[150px]" />

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-24 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          A collection of projects showcasing web and mobile applications I’ve
          built with React, React Native, and AI integrations.
        </p>
      </div>

      {/* Projects grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 relative z-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/5 backdrop-blur-xl 
            border border-white/10 rounded-3xl p-5
            shadow-[0_30px_80px_rgba(0,0,0,0.7)]
            transition-all duration-500
            hover:-translate-y-1 hover:bg-white/10"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 bg-gradient-to-tr
              from-indigo-500/10 via-purple-500/10 to-pink-500/10
              opacity-0 group-hover:opacity-100 transition duration-500 
              rounded-3xl blur-xl -z-10"
            />

            {/* Image  */}
            <div className="relative overflow-hidden rounded-2xl mb-6 ">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto  object-contain"
              />
              <div className="absolute inset-0 group-hover:bg-black/10 transition"></div>
            </div>

            {/* Content */}
            <div className="space-y-3">
              <span className="text-sm text-indigo-400 font-medium">
                {project.category}
              </span>
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              {/* <button
                onClick={() => handleDemoOpen(project.demo)}
                className="
                px-6 py-2 text-sm rounded-full
                bg-gradient-to-b from-[#ffffff22] to-[#ffffff05]
                backdrop-blur-md border border-white/10
                shadow-md
                transition-all duration-300
                hover:scale-105 hover:bg-white/10
                flex items-center justify-center
                "
              >
                View Demo
              </button> */}

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                px-6 py-2 text-sm rounded-full
                bg-gradient-to-r from-purple-500 to-pink-500
                text-black font-semibold
                hover:opacity-90 transition
                "
              >
                Visit Site →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Demo Modal */}
      {openDemo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6 transition-opacity duration-300"
          style={{ opacity: openDemo ? 1 : 0 }}
          onClick={handleDemoClose}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              className="w-full h-full"
              src={currentDemo}
              title="Project Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <button
              onClick={handleDemoClose}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
