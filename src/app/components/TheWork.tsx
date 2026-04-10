import { useRef } from "react";
import useInView from "./hooks/useInView";

const PortfolioThumbnail = () => (
  <svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="800" height="460" fill="#0a0a0f" />
    {/* Subtle grid */}
    <defs>
      <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff08" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="800" height="460" fill="url(#grid1)" />
    {/* Glow blob */}
    <ellipse cx="600" cy="200" rx="200" ry="180" fill="#6366f120" />
    {/* Browser chrome */}
    <rect x="60" y="40" width="680" height="380" rx="12" fill="#111118" stroke="#ffffff15" strokeWidth="1" />
    <rect x="60" y="40" width="680" height="44" rx="12" fill="#1a1a24" />
    <rect x="60" y="72" width="680" height="12" fill="#1a1a24" />
    <circle cx="88" cy="62" r="6" fill="#ff5f57" />
    <circle cx="108" cy="62" r="6" fill="#febc2e" />
    <circle cx="128" cy="62" r="6" fill="#28c840" />
    <rect x="220" y="52" width="280" height="20" rx="10" fill="#0f0f18" stroke="#ffffff10" strokeWidth="1" />
    <rect x="236" y="59" width="120" height="6" rx="3" fill="#ffffff20" />
    {/* Nav */}
    <rect x="80" y="100" width="640" height="1" fill="#ffffff08" />
    <rect x="80" y="108" width="60" height="10" rx="2" fill="#6366f1" opacity="0.9" />
    <rect x="560" y="108" width="40" height="10" rx="2" fill="#ffffff15" />
    <rect x="610" y="108" width="40" height="10" rx="2" fill="#ffffff15" />
    <rect x="660" y="108" width="40" height="10" rx="2" fill="#ffffff15" />
    {/* Hero */}
    <rect x="80" y="148" width="320" height="28" rx="4" fill="#ffffff" opacity="0.92" />
    <rect x="80" y="184" width="260" height="28" rx="4" fill="#6366f1" opacity="0.8" />
    <rect x="80" y="222" width="280" height="10" rx="2" fill="#ffffff30" />
    <rect x="80" y="238" width="240" height="10" rx="2" fill="#ffffff20" />
    <rect x="80" y="268" width="120" height="36" rx="18" fill="#6366f1" />
    <rect x="100" y="281" width="80" height="10" rx="2" fill="#fff" opacity="0.9" />
    {/* Card on right */}
    <rect x="460" y="132" width="240" height="260" rx="16" fill="#13131e" stroke="#6366f130" strokeWidth="1" />
    <rect x="460" y="132" width="240" height="100" rx="16" fill="#1e1e30" />
    <rect x="460" y="200" width="240" height="32" fill="#1e1e30" />
    <rect x="480" y="152" width="100" height="12" rx="3" fill="#6366f1" opacity="0.7" />
    <rect x="480" y="172" width="140" height="8" rx="2" fill="#ffffff25" />
    <rect x="480" y="252" width="200" height="10" rx="2" fill="#ffffff20" />
    <rect x="480" y="268" width="160" height="10" rx="2" fill="#ffffff15" />
    <rect x="480" y="284" width="180" height="10" rx="2" fill="#ffffff15" />
    <rect x="480" y="310" width="80" height="28" rx="14" fill="#6366f115" stroke="#6366f140" strokeWidth="1" />
    <rect x="492" y="320" width="56" height="8" rx="2" fill="#6366f1" opacity="0.7" />
    <rect x="570" y="310" width="80" height="28" rx="14" fill="#6366f115" stroke="#6366f140" strokeWidth="1" />
    <rect x="582" y="320" width="56" height="8" rx="2" fill="#6366f1" opacity="0.7" />
    {/* Bottom bar */}
    <rect x="80" y="380" width="640" height="1" fill="#ffffff08" />
    <rect x="80" y="392" width="80" height="8" rx="2" fill="#ffffff15" />
    <rect x="180" y="392" width="80" height="8" rx="2" fill="#ffffff15" />
    <rect x="280" y="392" width="80" height="8" rx="2" fill="#ffffff15" />
  </svg>
);

const CaseStudyThumbnail = () => (
  <svg viewBox="0 0 800 460" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="800" height="460" fill="#f8f8f6" />
    {/* Subtle dot grid */}
    <defs>
      <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="1.5" fill="#00000008" />
      </pattern>
    </defs>
    <rect width="800" height="460" fill="url(#dots)" />
    {/* Header */}
    <rect x="0" y="0" width="800" height="60" fill="#fff" />
    <rect x="0" y="59" width="800" height="1" fill="#e5e5e0" />
    <rect x="40" y="22" width="120" height="16" rx="3" fill="#111" />
    <rect x="600" y="20" width="80" height="20" rx="10" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
    <rect x="616" y="28" width="48" height="5" rx="2" fill="#10b981" />
    {/* Section label */}
    <rect x="40" y="86" width="140" height="10" rx="2" fill="#10b981" opacity="0.7" />
    {/* Flow diagram */}
    {/* Step boxes */}
    {[
      { x: 40, label: "#e0e7ff", border: "#6366f1", text: "#6366f1", tag: "Request" },
      { x: 188, label: "#fef2f2", border: "#ef4444", text: "#ef4444", tag: "Friction ⚠" },
      { x: 336, label: "#fffbeb", border: "#f59e0b", text: "#f59e0b", tag: "Review" },
      { x: 484, label: "#f0fdf4", border: "#22c55e", text: "#22c55e", tag: "Resolved ✓" },
    ].map((s, i) => (
      <g key={i}>
        <rect x={s.x} y="116" width="130" height="76" rx="10" fill={s.label} stroke={s.border} strokeWidth="1.5" />
        <rect x={s.x + 14} y="134" width="80" height="10" rx="2" fill={s.text} opacity="0.8" />
        <rect x={s.x + 14} y="152" width="60" height="7" rx="2" fill="#00000020" />
        <rect x={s.x + 14} y="165" width="70" height="7" rx="2" fill="#00000015" />
        {i < 3 && (
          <>
            <line x1={s.x + 130} y1="154" x2={s.x + 148} y2="154" stroke="#6366f1" strokeWidth="2" />
            <polygon points={`${s.x + 148},149 ${s.x + 158},154 ${s.x + 148},159`} fill="#6366f1" />
          </>
        )}
      </g>
    ))}
    {/* Pain point callout */}
    <rect x="158" y="106" width="90" height="22" rx="11" fill="#ef4444" />
    <rect x="170" y="113" width="66" height="8" rx="2" fill="#fff" opacity="0.9" />
    {/* Metrics panel */}
    <rect x="40" y="220" width="720" height="180" rx="14" fill="#fff" stroke="#e5e5e0" strokeWidth="1" />
    {/* Left metric */}
    <rect x="64" y="244" width="100" height="12" rx="3" fill="#111" />
    <rect x="64" y="262" width="140" height="8" rx="2" fill="#ccc" />
    <rect x="64" y="276" width="120" height="8" rx="2" fill="#ccc" />
    <rect x="64" y="290" width="100" height="8" rx="2" fill="#ccc" />
    {/* Vertical divider */}
    <line x1="240" y1="236" x2="240" y2="388" stroke="#f0f0ec" strokeWidth="1" />
    {/* Bar chart */}
    {[
      { x: 268, h: 40, fill: "#6366f120", stroke: "#6366f1" },
      { x: 308, h: 70, fill: "#6366f130", stroke: "#6366f1" },
      { x: 348, h: 100, fill: "#6366f150", stroke: "#6366f1" },
      { x: 388, h: 120, fill: "#6366f170", stroke: "#6366f1" },
      { x: 428, h: 100, fill: "#10b98150", stroke: "#10b981" },
      { x: 468, h: 80, fill: "#10b98130", stroke: "#10b981" },
    ].map((b, i) => (
      <g key={i}>
        <rect x={b.x} y={380 - b.h} width="30" height={b.h} rx="4" fill={b.fill} stroke={b.stroke} strokeWidth="1" />
      </g>
    ))}
    <line x1="256" y1="380" x2="520" y2="380" stroke="#e5e5e0" strokeWidth="1" />
    {/* Vertical divider 2 */}
    <line x1="540" y1="236" x2="540" y2="388" stroke="#f0f0ec" strokeWidth="1" />
    {/* Right insight */}
    <rect x="564" y="244" width="160" height="12" rx="3" fill="#111" />
    <rect x="564" y="264" width="140" height="8" rx="2" fill="#ccc" />
    <rect x="564" y="278" width="150" height="8" rx="2" fill="#ccc" />
    <rect x="564" y="292" width="130" height="8" rx="2" fill="#ccc" />
    <rect x="564" y="316" width="120" height="28" rx="14" fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1" />
    <rect x="580" y="326" width="88" height="8" rx="2" fill="#10b981" />
    <rect x="564" y="352" width="120" height="28" rx="14" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1" />
    <rect x="580" y="362" width="88" height="8" rx="2" fill="#3b82f6" />
  </svg>
);

const projects = [
  {
    id: 1,
    number: "01",
    title: "Personal Portfolio Website",
    subtitle: "Ashwin Gupta — AI Engineer",
    description:
      "Designed and deployed a fully responsive production portfolio for an AI Engineer — handled end-to-end UX layout, content architecture, and live Vercel deployment. Full product execution from concept to shipped product with zero handoff.",
    tags: ["UX Design", "Vercel", "Web Design", "End-to-End Delivery"],
    link: "https://ashwingupta.dev",
    linkLabel: "ashwingupta.dev",
    thumbnail: <PortfolioThumbnail />,
  },
  {
    id: 2,
    number: "02",
    title: "Case Study: Refund Process Optimisation",
    subtitle: "Product Discovery — Process Redesign",
    description:
      "Mapped an end-to-end refund workflow, identified friction points, and redesigned the process with defined success metrics. Documented user pain points and process flows structured as a product discovery exercise.",
    tags: ["Process Mapping", "UX Research", "SOP Design", "Product Analytics"],
    link: "https://casestudyrefundprocess.vercel.app",
    linkLabel: "casestudyrefundprocess.vercel.app",
    thumbnail: <CaseStudyThumbnail />,
  },
];

export default function TheWork() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });

  return (
    <section
      id="work"
      ref={ref}
      className="py-24 px-6 md:px-12 lg:px-24 bg-[var(--background)]"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div
          className="mb-16"
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)] mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--foreground)] leading-tight">
            The Work
          </h2>
        </div>

        {/* Project cards */}
        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <div
              key={project.id}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.6s ease ${i * 0.15 + 0.2}s, transform 0.6s ease ${
                  i * 0.15 + 0.2
                }s`,
              }}
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--foreground)] transition-all duration-300 bg-[var(--card)]"
              >
                {/* Thumbnail */}
                <div className="w-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
                  {project.thumbnail}
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-xs text-[var(--muted)] tracking-widest uppercase font-mono mb-1 block">
                        {project.number}
                      </span>
                      <h3 className="text-2xl font-semibold text-[var(--foreground)] group-hover:underline underline-offset-4">
                        {project.title}
                      </h3>
                      <p className="text-sm text-[var(--muted)] mt-1">{project.subtitle}</p>
                    </div>
                    <span className="shrink-0 mt-1 text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors text-xl">
                      ↗
                    </span>
                  </div>

                  <p className="text-[var(--muted)] leading-relaxed mb-6 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-[var(--border)] text-[var(--muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors font-mono">
                    <span>→</span>
                    <span>{project.linkLabel}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
