import { useState } from "react";
import { ArrowDown, Lightbulb, Briefcase, Users, X } from "lucide-react";

const Blog = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section
      id="blog"
      className="relative min-h-screen bg-black text-white px-6 py-32 overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-48 -left-32 w-[600px] h-[600px] bg-purple-500/20 blur-[150px]" />
      <div className="absolute bottom-0 -right-32 w-[600px] h-[600px] bg-indigo-500/20 blur-[150px]" />

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* INTRO */}
        <div className="mb-32 text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            My journey isn’t ordinary.
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            It’s a story of curiosity, pressure, vision, and late nights —
            powered by creativity, code, and God.
          </p>

          <ArrowDown className="mx-auto mt-10 animate-bounce text-white/40" />
        </div>

        {/* JOURNEY TIMELINE */}
        <div className="relative border-l border-white/10 pl-12 space-y-24">
          {/* 1 */}
          <div className="relative">
            <div className="absolute -left-[54px] top-2 w-7 h-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500" />
            <Lightbulb className="text-yellow-400 mt-1 size-10 md:size-12" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">The Spark</h3>
              <p className="text-white/70 leading-relaxed">
                I grew up curious about how things work. Challenges didn’t stop
                me; they pushed me to explore, create, and solve problems.
                Design and technology became more than tools — they became my
                way to build freedom.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="relative">
            <div className="absolute -left-[54px] top-2 w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500" />
            <Briefcase className="text-indigo-400 mt-1 size-10 md:size-12" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Self-Taught Coding
              </h3>
              <p className="text-white/70 leading-relaxed">
                When I touched code, something clicked. HTML and CSS felt like
                magic. React and JavaScript felt like control. Every project
                became my arena to push limits — not to impress, but to express.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="relative">
            <div className="absolute -left-[54px] top-2 w-7 h-7 rounded-full bg-gradient-to-tr from-pink-500 to-purple-500" />
            <Users className="text-pink-400 mt-1 size-10 md:size-12" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Professional Experience
              </h3>
              <p className="text-white/70 leading-relaxed">
                I landed a role helping build an educational startup focused on
                supporting students with dyslexia. It was my first professional
                experience where I applied my coding skills to make a tangible
                impact.
              </p>
            </div>
          </div>
        </div>

        {/* RECOMMENDATION */}
        <div className="mt-32 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Recommendation</h2>

          <p className="max-w-3xl mx-auto text-white/80 text-xl md:text-2xl leading-relaxed italic font-semibold">
            “Godsway consistently demonstrated strong discipline,
            responsibility, and technical capability. Despite working remotely,
            he was always punctual, reliable, and highly responsive. He
            frequently exceeded expectations by taking initiative beyond his
            assigned scope of work and maintaining a strong sense of ownership
            over his tasks.”
          </p>

          <p className="mt-4 text-white/60 text-lg font-bold">
            — Francis Amegbor (СТО at Koryis)
          </p>

          <div className="pt-10 flex justify-center">
            <button
              onClick={() => setOpenModal(true)}
              className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-black font-semibold hover:opacity-90 transition"
            >
              View Recommendation
            </button>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-6"
          onClick={() => setOpenModal(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-black rounded-2xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9)] 
            transform transition-all scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              <X size={28} />
            </button>

            {/* Recommendation Image */}
            <iframe
              src="/file/recommendation.pdf"
              className="w-full h-[600px] rounded-xl border"
              title="PDF Preview"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
