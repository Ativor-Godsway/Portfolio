// Hero text includes:
// Your name
// Your role
// Your main message
// 2 buttons:
// View Projects
// Download CV

import Background from "./Background";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative min-h-screen w-screen bg-black overflow-hidden"
    >
      <Background />

      {/* Accent glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-indigo-500/30 via-purple-500/20 to-pink-500/20 blur-[120px] rounded-full animate-pulse"></div>
      </div>

      <div className="relative z-40 w-full min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl space-y-6">
          <h1
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
          </h1>

          <p
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
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          <a href="#projects">
            <button
              className="
                relative overflow-hidden
                px-10 py-4
                rounded-full
                text-sm font-semibold tracking-wide

                bg-white text-black

                shadow-[0_10px_30px_rgba(255,255,255,0.25)]

                transition-all duration-300 ease-out
                hover:scale-105
                hover:-translate-y-1
                hover:bg-neutral-100
                hover:shadow-[0_15px_60px_rgba(255,255,255,0.45)]
                active:scale-95
              "
            >
              View Projects
            </button>
          </a>

          <a href="#contact">
            <button
              className="
                relative overflow-hidden
                px-10 py-4
                rounded-full
                text-sm font-semibold tracking-wide text-white

                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500

                shadow-[0_10px_40px_rgba(0,0,0,0.6)]

                transition-all duration-300 ease-out
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-[0_15px_60px_rgba(168,85,247,0.6)]
                active:scale-95
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
              ></span>
              Contact Me
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
