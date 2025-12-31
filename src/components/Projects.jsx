import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI EdTech Platform",
    category: "Start Up • AI",
    description:
      "An AI-powered educational platform that generates topic-based questions, records student grades, and provides performance insights over time.",
    image: "/images/prep-ai.png",
    link: "https://prep-ai-blond-alpha.vercel.app",
  },
  {
    id: 2,
    title: "E-commerce Website",
    category: "Full Stack • Commerce",
    description:
      "A full-stack e-commerce website with an admin panel to manage products, designed to deliver seamless shopping experiences.",
    image: "/images/ecommerce.png",
    link: "https://world-of-vintages-client.vercel.app",
  },
  {
    id: 3,
    title: "Spotify Clone",
    category: "React • Layout",
    description:
      "A modern, responsive web application replicating Spotify’s design and functionality for browsing and playing music.",
    image: "/images/spotify.png",
    link: "https://spotify-livid-tau.vercel.app",
  },
  {
    id: 4,
    title: "Bank Landing Page",
    category: "UI • Frontend",
    description:
      "A responsive landing page for a banking platform, designed with clean UI and smooth interactions to showcase features effectively.",
    image: "/images/landing-page.png",
    link: "https://bank-landing-page-beige.vercel.app",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white px-6 py-32 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -left-40 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px]" />
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-500/20 blur-[150px]" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto text-center mb-24 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Projects</h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          A collection of projects showcasing web and mobile applications I’ve
          built with React, React Native, and AI integrations.
        </p>
      </motion.div>

      {/* Projects grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 relative z-10"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="group relative bg-white/5 backdrop-blur-xl 
              border border-white/10 rounded-3xl p-5
              shadow-[0_30px_80px_rgba(0,0,0,0.7)]
              transition-all duration-500 hover:bg-white/10"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 bg-gradient-to-tr
              from-indigo-500/10 via-purple-500/10 to-pink-500/10
              opacity-0 group-hover:opacity-100 transition duration-500 
              rounded-3xl blur-xl -z-10"
            />

            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl mb-6">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-contain"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
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

            {/* Button */}
            <div className="mt-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center
                  px-6 py-2 text-sm rounded-full
                  bg-gradient-to-r from-purple-500 to-pink-500
                  text-black font-semibold
                  hover:opacity-90 transition
                "
              >
                Visit Site →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
