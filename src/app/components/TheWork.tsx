import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  liveLink: string;
  liveLinkLabel: string;
  summary: string;
  hook: string;
  sections: { label: string; content: string }[];
  outcome: string;
  productThinking: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: "mmt",
    number: "01",
    title: "MakeMyTrip Refund Redesign",
    category: "UX Research · Product Strategy",
    liveLink: "https://casestudyrefundprocess.vercel.app",
    liveLinkLabel: "view live case study",
    summary: "No visibility. No timeline. No trust. I redesigned the refund experience from the ground up.",
    hook: "Your trip got canceled. Now you need your money back.",
    sections: [
      {
        label: "The Problem",
        content:
          "MakeMyTrip's refund process had zero visibility. Users submitted requests and then waited in silence — no status updates, no clear timelines, no way to know what was actually happening. Support teams were drowning in 'where's my refund?' tickets because the product wasn't answering the most basic question: what is going on?",
      },
      {
        label: "The Insight",
        content:
          "Refunds aren't about money — they're about trust. When something goes wrong, people just need to know: what's happening, when will it be resolved, and who's handling it. The frustration wasn't the wait. It was the silence.",
      },
      {
        label: "My Approach",
        content:
          "I mapped the entire end-to-end journey across every touchpoint — app, email, support chat. Identified 6 friction points. Then designed a transparent flow with real-time status tracking (Submitted → Reviewed → Approved → Processed), clear timeline estimates, and proactive notifications so users never had to wonder.",
      },
    ],
    outcome:
      "Defined success metrics: reduce refund inquiry tickets by 40%, improve CSAT scores, cut average processing time by 30%. Designed for both user trust and operational efficiency — not one at the expense of the other.",
    productThinking:
      "This wasn't a redesign — it was product strategy. I started with user research, mapped pain points, defined metrics, then designed the solution. The design serves the outcome, not the other way around.",
    tags: ["UX Research", "Product Strategy", "User Flows", "Metrics Design"],
  },
  {
    id: "portfolio",
    number: "02",
    title: "Ashwin Gupta — Portfolio Website",
    category: "End-to-End Design + Build",
    liveLink: "https://www.ashwingupta.dev",
    liveLinkLabel: "visit live site",
    summary: "An AI engineer needed a portfolio that proved performance engineering — not just claimed it.",
    hook: "Most portfolios showcase work. This one explains it.",
    sections: [
      {
        label: "The Problem",
        content:
          "The client — Ashwin Gupta, an AI Systems Researcher at Coforge — had a portfolio that looked fine visually, but didn’t communicate the depth of his work. It felt like a template — not something that reflected how he thinks, builds, or solves problems. He needed a portfolio that could communicate both technical depth and clarity — not just aesthetics..",
      },
      {
        label: "The Insight",
        content:
          "A portfolio isn’t about showing everything — it’s about making the right things understood. Especially for someone working across inference systems, ML, and distributed infrastructure, the experience needed to reflect that same clarity and intent.",
      },
      {
        label: "What I Built",
        content:
          "I redesigned the portfolio as a narrative-first experience with editorial aesthetics. Instead of listing projects, I structured the content to answer: — what was built  — why it matters  — how it works  Focused on: — reducing visual noise  — improving content hierarchy  — guiding attention intentionally The goal was to make the portfolio feel thoughtful and structured — not templated.",
      },
    ],
    outcome:
      "A clearer, more intentional portfolio that better communicates Ashwin’s work and thinking. Positions him beyond just another developer portfolio — toward someone who understands systems, not just builds them.",
    productThinking:
      "I approached this as a positioning problem, not just a design task. Instead of asking “how should it look?”  I focused on: — what should a recruiter understand in 10 seconds  — what makes this different from others  — how to guide attention effectively  Because good design isn’t just visual — it’s communicative.",
    tags: ["Product Thinking · UX/UI · Information Architecture · Portfolio Design"],
  },
];

export function TheWork() {
  const { ref, inView } = useInView();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" ref={ref} className="py-20 sm:py-32 px-4 sm:px-6 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-20 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-6"
        >
          <div>
            <p className="font-[family-name:var(--font-handwritten)] text-[#C97B63] text-base mb-2">
              selected work
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-[#6B1B2E] leading-tight"
              style={{ fontSize: 'clamp(36px, 8vw, 64px)' }}
            >
              The Work
            </h2>
          </div>
          <p className="text-[#6B5B4F] font-[family-name:var(--font-body)] text-sm sm:text-base max-w-xs leading-relaxed">
            I focus on solving product problems — not just making things look good.
          </p>
        </motion.div>

        {/* TOP DIVIDER */}
        <div className="w-full h-px bg-[#D4C4B4] mb-0" />

        {/* PROJECT LIST */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <button
                onClick={() => setActiveProject(project)}
                className="w-full text-left group py-6 sm:py-8 px-2 transition-colors duration-200 hover:bg-white/60 active:bg-white/80"
              >
                <div className="grid grid-cols-[2.5rem_1fr] sm:grid-cols-[3rem_1fr_auto] md:grid-cols-[3rem_1fr_1fr_auto] items-center gap-4 sm:gap-6">

                  {/* Number */}
                  <span className="font-[family-name:var(--font-handwritten)] text-[#C97B63] text-sm">
                    {project.number}
                  </span>

                  {/* Title + Category */}
                  <div>
                    <h3 className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl md:text-3xl text-[#2D1B1B] group-hover:text-[#6B1B2E] transition-colors duration-200 leading-snug">
                      {project.title}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-xs sm:text-sm text-[#9B8B7F] mt-1 tracking-wide">
                      {project.category}
                    </p>
                    {/* Summary visible on mobile below title */}
                    <p className="sm:hidden font-[family-name:var(--font-body)] text-xs text-[#6B5B4F] leading-relaxed mt-2 max-w-xs">
                      {project.summary}
                    </p>
                  </div>

                  {/* Summary — tablet/desktop only */}
                  <p className="hidden sm:block md:block font-[family-name:var(--font-body)] text-sm text-[#6B5B4F] leading-relaxed max-w-xs">
                    {project.summary}
                  </p>

                  {/* CTA arrow */}
                  <span className="hidden sm:inline font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pr-2">
                    read more →
                  </span>
                </div>
              </button>
              <div className="w-full h-px bg-[#D4C4B4]" />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM NOTE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] text-center"
        >
          more work in progress — check back soon ✦
        </motion.p>

      </div>

      {/* ── CASE STUDY MODAL ── */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-end md:items-center justify-center z-50 p-0 md:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="bg-[#FAF7F2] w-full md:max-w-2xl max-h-[92vh] overflow-y-auto relative rounded-t-2xl md:rounded-none"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drag handle — mobile only */}
              <div className="md:hidden flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 rounded-full bg-[#C4AFA5]" />
              </div>

              {/* Burgundy top bar */}
              <div className="h-1 w-full bg-[#6B1B2E] sticky top-0 z-10" />

              <div className="p-6 sm:p-8 md:p-12">
                {/* Close */}
                <button
                  className="absolute top-5 right-5 text-[#9B8B7F] hover:text-[#2D1B1B] transition-colors text-lg leading-none w-8 h-8 flex items-center justify-center"
                  onClick={() => setActiveProject(null)}
                >
                  ✕
                </button>

                {/* Category + number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-[family-name:var(--font-handwritten)] text-[#C97B63] text-sm">
                    {activeProject.number}
                  </span>
                  <span className="text-[#D4C4B4]">·</span>
                  <p className="font-[family-name:var(--font-handwritten)] text-[#C97B63] text-sm">
                    {activeProject.category}
                  </p>
                </div>

                <p className="font-[family-name:var(--font-serif)] text-base sm:text-lg italic text-[#6B5B4F] mb-3">
                  "{activeProject.hook}"
                </p>

                <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl text-[#2D1B1B] mb-6 leading-tight">
                  {activeProject.title}
                </h3>

                <div className="w-10 h-px bg-[#D4A574] mb-6 sm:mb-8" />

                <div className="space-y-6 sm:space-y-8 font-[family-name:var(--font-body)]">
                  {activeProject.sections.map(({ label, content }) => (
                    <div key={label}>
                      <p className="text-xs text-[#C97B63] uppercase tracking-widest mb-2">{label}</p>
                      <p className="text-[#4A3828] leading-relaxed text-sm sm:text-base">{content}</p>
                    </div>
                  ))}

                  <div className="bg-white border-l-4 border-[#6B1B2E] pl-4 sm:pl-5 py-4">
                    <p className="text-xs text-[#C97B63] uppercase tracking-widest mb-2">Outcome</p>
                    <p className="text-[#4A3828] leading-relaxed text-sm sm:text-base">{activeProject.outcome}</p>
                  </div>

                  <div>
                    <p className="text-xs text-[#C97B63] uppercase tracking-widest mb-2">Product Thinking</p>
                    <p className="text-[#6B5B4F] leading-relaxed text-xs sm:text-sm italic">{activeProject.productThinking}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 sm:mt-8">
                  {activeProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs font-[family-name:var(--font-body)] text-[#6B5B4F] border border-[#C4AFA5] tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#E8DED0]">
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#6B1B2E] text-[#FAF7F2] px-5 sm:px-6 py-3 text-sm font-[family-name:var(--font-body)] tracking-wide hover:bg-[#8B2A3E] transition-colors duration-200"
                  >
                    {activeProject.liveLinkLabel}
                    <span className="text-base leading-none">↗</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
