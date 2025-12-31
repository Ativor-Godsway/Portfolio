import { useRef } from "react";
import { motion } from "framer-motion";

// Particle component
const Particle = ({ style }) => (
  <div
    className="absolute rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-pink-500 opacity-20 animate-pulse"
    style={style}
  />
);

const Contact = () => {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-black text-white px-2 md:px-6 py-32 overflow-hidden flex items-center justify-center"
    >
      {/* Ambient background glows */}
      <div className="absolute -top-40 -left-32 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px] animate-pulse-slow" />

      {/* Floating particles */}
      <Particle
        style={{ top: "10%", left: "15%", width: "20px", height: "20px" }}
      />
      <Particle
        style={{ top: "25%", right: "10%", width: "15px", height: "15px" }}
      />
      <Particle
        style={{ bottom: "15%", left: "20%", width: "25px", height: "25px" }}
      />
      <Particle
        style={{ bottom: "20%", right: "25%", width: "18px", height: "18px" }}
      />

      {/* Form Card */}
      <motion.div
        ref={formRef}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_80px_rgba(255,255,255,0.2)] transition-shadow duration-500"
      >
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Get in Touch
        </h2>
        <p className="text-white/70 text-center mb-10">
          Have a project in mind or just want to say hi? Fill out the form and
          I’ll get back to you!
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 backdrop-blur-md border-2 border-transparent focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500 rounded-xl px-4 py-3 text-white placeholder-white/50 transition-all duration-300"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white/10 backdrop-blur-md border-2 border-transparent focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500 rounded-xl px-4 py-3 text-white placeholder-white/50 transition-all duration-300"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="bg-white/10 backdrop-blur-md border-2 border-transparent focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500 rounded-xl px-4 py-3 text-white placeholder-white/50 transition-all duration-300"
            required
          ></textarea>

          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,255,255,0.1)] transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
