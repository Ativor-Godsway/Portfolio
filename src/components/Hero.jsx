import Background from "./Background";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-screen bg-black overflow-hidden"
    >
      <Background />

      {/* Accent glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-[120px] rounded-full"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-40 w-full min-h-screen flex flex-col items-center justify-center px-6 text-center"
      >
        <div className="max-w-4xl space-y-6">
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="
              text-4xl md:text-6xl lg:text-7xl 
              font-bold tracking-tight
              leading-tight text-white
            "
          >
            DESIGN that reveals.
            <br />
            <span
              className="
                bg-gradient-to-r
                from-indigo-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              Code that scales.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="
              max-w-2xl mx-auto
              text-base md:text-lg
              text-white/70
              leading-relaxed
            "
          >
            I’m a design-driven full stack developer building bold, scalable web
            experiences that help brands, startups, and creators grow with
            confidence.
          </motion.p>
        </div>

        {/* CTA BUTTONS */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-6 mt-10"
        >
          <a href="#projects">
            <motion.button
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative overflow-hidden
                px-10 py-4
                rounded-full
                text-sm font-semibold tracking-wide
                bg-white text-black
                shadow-[0_10px_30px_rgba(255,255,255,0.25)]
              "
            >
              View Projects
            </motion.button>
          </a>

          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative overflow-hidden
                px-10 py-4
                rounded-full
                text-sm font-semibold tracking-wide text-white
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                shadow-[0_10px_40px_rgba(0,0,0,0.6)]
                group
              "
            >
              {/* Shine */}
              <span
                className="
                  absolute top-0 left-[-100%] h-full w-full
                  bg-gradient-to-r from-transparent via-white/40 to-transparent
                  transition-all duration-700
                  group-hover:left-[100%]
                "
              />
              Contact Me
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
