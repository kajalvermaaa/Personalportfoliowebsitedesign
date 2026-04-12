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
    hook: "Most portfolios look the same. This one had to be different.",
    sections: [
      {
        label: "The Problem",
        content:
          "The client — Ashwin Gupta, an AI Systems Researcher at Coforge — had a site claiming performance engineering that shipped with 400 CSS-animated DOM nodes, a 2 MB JPEG hero, and 72 unvetted dependencies. The artifact directly contradicted the claim. He needed a portfolio that communicated both craft and product thinking — not just pretty visuals.",
      },
      {
        label: "The Insight",
        content:
          "Portfolios aren't about you — they're about what you can do for someone else. The best ones tell a story and prove you understand problems, not just tools. For an engineer whose work spans inference systems, scientific ML, and distributed infrastructure, the design had to reflect that same rigor.",
      },
      {
        label: "What I Built",
        content:
          "Designed a narrative-first experience with editorial aesthetics. Rebuilt around a three-layer spatial architecture — every visual effect collapsed into a single RAF loop, offscreen canvas pre-rendering, lazy boundaries enforcing below-fold deferral. Every section answers: what was built, why it matters, how it was done. The result: 90% image reduction, 72% JS bundle cut, frame time from 18–25ms down to 4–6ms, stable 60fps under CPU throttle.",
      },
    ],
    outcome:
      "A portfolio that stands out in a sea of templates. Shows design execution, product thinking, and real engineering performance in one cohesive experience. Deployed and live at ashwingupta.dev.",
    productThinking:
      "I treated this as a product launch, not a design handoff. Defined performance targets upfront, designed for them, then validated. The visual aesthetic and the technical execution both had to earn their place.",
    tags: ["Product Design", "UX/UI", "React", "Performance", "End-to-End Build"],
  },
];

export function TheWork() {
  const { ref, inView } = useInView();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

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
                className="w-full text-left group py-8 px-2 transition-colors duration-200 hover:bg-white/60"
              >
                <div className="grid grid-cols-[3rem_1fr_auto] md:grid-cols-[3rem_1fr_1fr_auto] items-center gap-6">

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

                  {/* Summary — hidden on mobile */}
                  <p className="hidden md:block font-[family-name:var(--font-body)] text-sm text-[#6B5B4F] leading-relaxed max-w-xs">
                    {project.summary}
                  </p>

                  {/* CTA */}
                  <span className="font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pr-2">
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
          className="mt-12 font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] text-center"
        >
          more work in progress — check back soon ✦
        </motion.p>

      </div>

      {/* ── CASE STUDY MODAL ─────────────────────────────────────────── */}
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
              className="bg-[#FAF7F2] w-full md:max-w-2xl max-h-[92vh] overflow-y-auto relative"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Burgundy top bar */}
              <div className="h-1 w-full bg-[#6B1B2E] sticky top-0 z-10" />

              <div className="p-8 md:p-12">
                {/* Close */}
                <button
                  className="absolute top-5 right-5 text-[#9B8B7F] hover:text-[#2D1B1B] transition-colors text-lg leading-none"
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

                {/* Hook */}
                <p className="font-[family-name:var(--font-serif)] text-lg italic text-[#6B5B4F] mb-3">
                  "{activeProject.hook}"
                </p>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#2D1B1B] mb-6 leading-tight">
                  {activeProject.title}
                </h3>

                {/* Divider */}
                <div className="w-10 h-px bg-[#D4A574] mb-8" />

                {/* Content sections */}
                <div className="space-y-8 font-[family-name:var(--font-body)]">
                  {activeProject.sections.map(({ label, content }) => (
                    <div key={label}>
                      <p className="text-xs text-[#C97B63] uppercase tracking-widest mb-2">
                        {label}
                      </p>
                      <p className="text-[#4A3828] leading-relaxed text-base">
                        {content}
                      </p>
                    </div>
                  ))}

                  {/* Outcome */}
                  <div className="bg-white border-l-4 border-[#6B1B2E] pl-5 py-4">
                    <p className="text-xs text-[#C97B63] uppercase tracking-widest mb-2">
                      Outcome
                    </p>
                    <p className="text-[#4A3828] leading-relaxed text-base">
                      {activeProject.outcome}
                    </p>
                  </div>

                  {/* Product Thinking */}
                  <div>
                    <p className="text-xs text-[#C97B63] uppercase tracking-widest mb-2">
                      Product Thinking
                    </p>
                    <p className="text-[#6B5B4F] leading-relaxed text-sm italic">
                      {activeProject.productThinking}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-8">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-[family-name:var(--font-body)] text-[#6B5B4F] border border-[#C4AFA5] tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live link */}
                <div className="mt-8 pt-6 border-t border-[#E8DED0]">
                  <a
                    href={activeProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#6B1B2E] text-[#FAF7F2] px-6 py-3 text-sm font-[family-name:var(--font-body)] tracking-wide hover:bg-[#8B2A3E] transition-colors duration-200"
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
