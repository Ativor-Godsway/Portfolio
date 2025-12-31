import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import GsapSVG from "./GsapSVG";
import { skills } from "../data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const trackRef = useRef(null);
  const skillsWrapperRef = useRef(null);

  useLayoutEffect(() => {
    const trackWidth = trackRef.current.scrollWidth;
    const windowWidth = window.innerWidth;
    let context = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: skillsWrapperRef.current,
          pin: true,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          ease: "linear",
        },
      });

      tl.to(trackRef.current, {
        x: -(trackWidth - windowWidth) - 40,
      });
    }, skillsWrapperRef);
    return () => context.revert();
  }, []);

  return (
    <div
      id="skills"
      ref={skillsWrapperRef}
      className="bg-black skills-wrapper flex flex-col pt-20 overflow-hidden h-screen relative"
    >
      {/* Ambient Background Glows */}
      <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-indigo-500/20 blur-[150px]" />

      {/* Section Title */}
      <h2 className="mx-auto font-serif text-5xl md:text-6xl text-white mb-10 z-10 relative">
        Skills
      </h2>

      {/* Horizontal Track */}
      <div
        ref={trackRef}
        className="skills-track flex gap-6 flex-shrink-0 ml-5 relative z-10"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card flex-none p-6 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] 
        w-[300px] h-[50vh] bg-white/5 backdrop-blur-xl
        border border-white/10 flex flex-col items-center pt-20 hover:scale-105 transition-transform duration-300"
          >
            {/* Icon */}
            {skill.icon && (
              <div
                className="mb-6 w-24 h-24 flex items-center justify-center rounded-full
          bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/20
          shadow-lg group-hover:scale-110 transition-transform duration-500"
              >
                {skill.icon === "GSAP" ? <GsapSVG /> : skill.icon}
              </div>
            )}

            {/* Skill Name */}
            <h2 className="font-bold text-2xl md:text-3xl text-center text-white mb-4">
              {skill.name}
            </h2>

            {/* Skill Description */}
            <p className="text-center text-white/70 text-sm md:text-base leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}

        {/* Spacer for end of track */}
        <div className="w-[50vw] h-12" />
      </div>
    </div>
  );
}
