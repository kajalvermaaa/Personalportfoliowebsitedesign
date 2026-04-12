import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";

const projects = [
  {
    id: "mmt",
    number: "01",
    title: "MMT Refund Redesign",
    category: "UX Research · Product Design",
    image: "/mmt.png",
    summary: "Users couldn't track refunds. No clarity, no timeline, high frustration.",
    details: {
      problem:
        "Users couldn't track refunds. No clarity, no timeline, high frustration.",
      thinking:
        "Mapped the entire journey → identified gaps in visibility → simplified flow into a single clear tracking system.",
      outcome:
        "Reduced confusion and made refund status instantly understandable.",
    },
  },
  {
    id: "portfolio",
    number: "02",
    title: "Portfolio Website",
    category: "End-to-End Build · Design + Dev",
    image: "/portfolio.png",
    summary: "Client needed a strong digital presence but had no structured portfolio.",
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

export function TheWork() {
  const { ref, inView } = useInView();
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <section id="work" ref={ref} className="py-32 px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="font-[family-name:var(--font-handwritten)] text-[#C97B63] text-base mb-3">
              selected work
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-5xl md:text-6xl text-[#6B1B2E] leading-tight">
              The Work
            </h2>
          </div>
          <p className="text-[#6B5B4F] font-[family-name:var(--font-body)] text-base max-w-xs leading-relaxed">
            I focus on solving product problems — not just making things look good.
          </p>
        </motion.div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-[#D4C4B4] mb-16" />

        {/* PROJECT LIST */}
        <div className="flex flex-col gap-0">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              {/* Row */}
              <button
                onClick={() => setActiveProject(project)}
                className="w-full text-left group"
              >
                <div className="grid grid-cols-[3rem_1fr_auto] md:grid-cols-[3rem_1fr_1fr_auto] items-center gap-6 py-8 px-2 transition-colors duration-200 hover:bg-white/60 rounded-sm">

                  {/* Number */}
                  <span className="font-[family-name:var(--font-handwritten)] text-[#C97B63] text-sm">
                    {project.number}
                  </span>

                  {/* Title + Category */}
                  <div>
                    <h3 className="font-[family-name:var(--font-serif)] text-2xl md:text-3xl text-[#2D1B1B] group-hover:text-[#6B1B2E] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#9B8B7F] mt-1 tracking-wide">
                      {project.category}
                    </p>
                  </div>

                  {/* Summary hidden on mobile */}
                  <p className="hidden md:block font-[family-name:var(--font-body)] text-sm text-[#6B5B4F] leading-relaxed max-w-xs">
                    {project.summary}
                  </p>

                  {/* CTA arrow */}
                  <span className="flex items-center gap-1 font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pr-2">
                    view case →
                  </span>
                </div>
              </button>

              {/* Row divider */}
              <div className="w-full h-px bg-[#D4C4B4]" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] text-center"
        >
          more work in progress — check back soon ✦
        </motion.p>

      </div>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-[#FAF7F2] max-w-xl w-full relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent bar */}
              <div className="h-1 w-full bg-[#6B1B2E]" />

              <div className="p-10">
                {/* Close */}
                <button
                  className="absolute top-5 right-5 text-[#9B8B7F] hover:text-[#2D1B1B] transition-colors text-lg"
                  onClick={() => setActiveProject(null)}
                >
                  ✕
                </button>

                {/* Category */}
                <p className="font-[family-name:var(--font-handwritten)] text-[#C97B63] text-sm mb-3">
                  {activeProject.category}
                </p>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[#2D1B1B] mb-8">
                  {activeProject.title}
                </h3>

                {/* Divider */}
                <div className="w-12 h-px bg-[#D4A574] mb-8" />

                {/* Content blocks */}
                <div className="space-y-7 font-[family-name:var(--font-body)]">
                  {[
                    { label: "Problem", value: activeProject.details.problem },
                    { label: "Thinking", value: activeProject.details.thinking },
                    { label: "Outcome",  value: activeProject.details.outcome },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p className="text-xs text-[#C97B63] uppercase tracking-widest mb-2">
                        {label}
                      </p>
                      <p className="text-[#4A3828] leading-relaxed">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
