import React from "react";

import { Code2, Lightbulb, Palette, Rocket, Sparkles } from "lucide-react";
import { FaMobile } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-32 px-6 overflow-hidden"
    >
      {/* Floating background accents */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-indigo-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 -right-40 w-[600px] h-[600px] bg-purple-500/20 blur-[160px] rounded-full"></div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* LEFT — TEXT CONTENT */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              Ativor Godsway
            </span>
            <br />I build digital experiences with purpose & precision
          </h2>

          <p className="text-white/70 leading-relaxed text-lg">
            I’m a design-driven full-stack developer passionate about creating
            products that are not only visually striking, but technically
            powerful. My work lives at the intersection of creativity and
            engineering.
          </p>

          <p className="text-white/60 leading-relaxed">
            From concept to production, I focus on clean systems, scalable code,
            and memorable interfaces. I don’t just build websites — I build
            digital identities.
          </p>

          {/* MINI FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
            <div className="flex gap-4">
              <Code2 className="text-indigo-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold">Full Stack</h4>
                <p className="text-sm text-white/60">
                  MERN, APIs, Databases, Auth
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Lightbulb className="text-yellow-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold">AI Integration</h4>
                <p className="text-sm text-white/60">
                  Automation, Smart Features
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Rocket className="text-pink-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold">Startup Mindset</h4>
                <p className="text-sm text-white/60">
                  Fast builds, smart scaling
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <FaMobile className="text-yellow-400 w-6 h-6" />
              <div>
                <h4 className="font-semibold">Mobile App Development</h4>
                <p className="text-sm text-white/60">
                  React Native & Cross-Platform Apps
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — IMAGE + GLASS PANEL */}
        <div className="relative flex justify-center">
          {/* Glow behind image */}
          <div
            className="
            absolute w-[450px] h-[450px]
            bg-gradient-to-tr
            from-indigo-500/30
            via-purple-500/30
            to-pink-500/30
            blur-[120px]
            -z-10 rounded-full
          "
          ></div>

          {/* Glass container */}
          <div
            className="
            relative
            bg-white/5
            backdrop-blur-xl
            border border-white/10
            p-4
            rounded-3xl
            shadow-[0_40px_80px_rgba(0,0,0,0.8)]
          "
          >
            <img
              src="/images/backdrop.png"
              alt="About visual"
              className="
                w-full max-w-md
                rounded-2xl
                animate-float
                object-cover
              "
            />
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="relative z-10 mt-24 max-w-6xl mx-auto">
        <div
          className="
          grid grid-cols-2 md:grid-cols-4
          gap-6 text-center
          bg-white/5
          border border-white/10
          backdrop-blur-xl
          rounded-2xl
          p-8
        "
        >
          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Ideas +
            </h3>
            <p className="text-white/60 text-sm">Innovation Driven</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MERN
            </h3>
            <p className="text-white/60 text-sm">Stack Focus</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
              Design+
            </h3>
            <p className="text-white/60 text-sm">Code + UI</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">
              100%
            </h3>
            <p className="text-white/60 text-sm">Passion</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
