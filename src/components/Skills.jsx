import GsapSVG from "./GsapSVG";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-black py-32 px-6 overflow-hidden"
    >
      {/* Ambient Background */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500/20 blur-[160px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-indigo-500/20 blur-[160px]" />

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20 relative z-10">
        <h2 className="text-5xl md:text-6xl font-serif text-white mb-6">
          Skills & Expertise
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          A curated set of technologies and tools I use to build performant,
          scalable, and visually refined digital experiences.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              group relative rounded-3xl p-8
              bg-white/5 backdrop-blur-xl
              border border-white/10
              shadow-[0_30px_80px_rgba(0,0,0,0.6)]
              transition-all duration-500
              hover:-translate-y-2 hover:bg-white/10
            "
          >
            {/* Glow Effect */}
            <div
              className="
                absolute inset-0 rounded-3xl
                bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10
                opacity-0 group-hover:opacity-100
                transition duration-500 blur-xl -z-10
              "
            />

            {/* Icon */}
            {skill.icon && (
              <div
                className="
                  mb-8 w-20 h-20 mx-auto flex items-center justify-center
                  rounded-2xl
                  bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20
                  transition-transform duration-500
                  group-hover:scale-110
                "
              >
                {skill.icon === "GSAP" ? <GsapSVG /> : skill.icon}
              </div>
            )}

            {/* Title */}
            <h3 className="text-2xl font-semibold text-white text-center mb-4">
              {skill.name}
            </h3>

            {/* Description */}
            <p className="text-white/70 text-center leading-relaxed text-sm md:text-base">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
