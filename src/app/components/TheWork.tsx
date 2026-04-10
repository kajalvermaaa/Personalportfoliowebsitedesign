import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function TheWork() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: "mmt",
      title: "MMT Refund Redesign",
      image: "/mmt.png",
      notes: [
        { text: "refund unclear", style: { top: "20%", left: "-10%" } },
        { text: "too many steps", style: { bottom: "25%", right: "-10%" } },
      ],
      details: {
        problem:
          "Users couldn’t track refunds. No clarity, no timeline, high frustration.",
        thinking:
          "Mapped the entire journey → identified gaps in visibility → simplified flow into a single clear tracking system.",
        outcome:
          "Reduced confusion and made refund status instantly understandable.",
      },
    },
    {
      id: "portfolio",
      title: "Portfolio Website",
      image: "/portfolio.png",
      notes: [
        { text: "end-to-end build", style: { top: "15%", right: "-10%" } },
        { text: "design + dev", style: { bottom: "20%", left: "-10%" } },
      ],
      details: {
        problem:
          "Client needed a strong digital presence but had no structured portfolio.",
        thinking:
          "Defined structure → created UX flow → built and deployed entire system.",
        outcome:
          "Delivered a complete working product with clear storytelling.",
      },
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-24">
          <h2 className="text-6xl text-[#6B1B2E] mb-6">
            Selected Work
          </h2>
          <p className="text-lg text-[#6B5B4F] max-w-xl">
            I focus on solving product problems — not just making things look good.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="grid md:grid-cols-2 gap-20">

          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              onClick={() => setActiveProject(project)}
              className="relative bg-[#FDFBF7] p-6 shadow-xl rotate-[-1deg] cursor-pointer"
            >
              {/* Paper clip */}
              <div className="absolute -top-6 left-6 text-4xl rotate-12">
                📎
              </div>

              {/* LIVE LINK */}
              <p className="text-xs text-[#C97B63] mb-4 uppercase">
                click to view thinking →
              </p>

              {/* IMAGE */}
              <div className="flex justify-center mb-6">
                <img
                  src={project.image}
                  className="w-[220px]"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-2xl text-center text-[#2D1B1B] mb-6">
                {project.title}
              </h3>

              {/* NOTES */}
              {project.notes.map((note, i) => (
                <p
                  key={i}
                  className="absolute text-xs text-[#6B5B4F]"
                  style={note.style}
                >
                  {note.text}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
            >
              <motion.div
                className="bg-white max-w-2xl w-full p-10 relative"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* CLOSE */}
                <button
                  className="absolute top-4 right-4 text-xl"
                  onClick={() => setActiveProject(null)}
                >
                  ✕
                </button>

                {/* TITLE */}
                <h3 className="text-3xl mb-6">
                  {activeProject.title}
                </h3>

                {/* CONTENT */}
                <div className="space-y-6 text-[#6B5B4F]">

                  <div>
                    <p className="text-sm text-[#C97B63] uppercase mb-1">
                      Problem
                    </p>
                    <p>{activeProject.details.problem}</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#C97B63] uppercase mb-1">
                      Thinking
                    </p>
                    <p>{activeProject.details.thinking}</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#C97B63] uppercase mb-1">
                      Outcome
                    </p>
                    <p>{activeProject.details.outcome}</p>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
