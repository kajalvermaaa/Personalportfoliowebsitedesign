import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function TheHuman() {
  const { ref, inView } = useInView();

  const skills = [
    { label: "UX Design",        variant: "filled"  },
    { label: "Wireframing",       variant: "outline-accent" },
    { label: "Product Thinking",  variant: "outline" },
    { label: "User Research",     variant: "filled"  },
    { label: "Figma",             variant: "outline" },
    { label: "User Journeys",     variant: "outline" },
    { label: "SOP Design",        variant: "filled"  },
    { label: "Design Systems",    variant: "outline-accent" },
    { label: "Prototyping",       variant: "outline" },
    { label: "System Clarity",    variant: "filled"  },
    { label: "Ops & Process",     variant: "outline" },
  ];

  const tools = [
    {
      label: "Figma",
      icon: (
        <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#FF7262"/>
        </svg>
      ),
    },
    {
      label: "Canva",
      icon: (
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <circle cx="25" cy="25" r="25" fill="#7D2AE8"/>
          <path d="M25 10c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm6.5 20.5c-1.1 1.5-2.9 2.5-5 2.5-3.6 0-6.5-3.1-6.5-7s2.9-7 6.5-7c2 0 3.8.9 5 2.4l-2.3 1.9c-.7-.9-1.7-1.5-2.8-1.5-2.1 0-3.8 1.9-3.8 4.2s1.7 4.2 3.8 4.2c1.1 0 2.1-.6 2.8-1.6l2.3 1.9z" fill="white"/>
        </svg>
      ),
    },
    {
      label: "Photoshop",
      icon: (
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <rect width="50" height="50" rx="8" fill="#001E36"/>
          <text x="7" y="35" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#31A8FF">Ps</text>
        </svg>
      ),
    },
    {
      label: "Illustrator",
      icon: (
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <rect width="50" height="50" rx="8" fill="#300"/>
          <text x="7" y="35" fontFamily="Arial" fontWeight="bold" fontSize="22" fill="#FF9A00">Ai</text>
        </svg>
      ),
    },
    {
      label: "Express",
      icon: (
        <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" width="20" height="20">
          <rect width="50" height="50" rx="8" fill="#1A0033"/>
          <text x="5" y="35" fontFamily="Arial" fontWeight="bold" fontSize="19" fill="#E535AB">Ex</text>
        </svg>
      ),
    },
  ];

  const education = [
    {
      degree: "PG in Product Management",
      school: "Duke CE",
      year: "Dec 2025 — Present",
      current: true,
    },
    {
      degree: "BBA",
      school: "IFIM College, Bangalore University",
      year: "Aug 2020 — Aug 2023",
      current: false,
    },
  ];

  const timeline = [
    {
      era: "chapter 01",
      label: "The ops years- Gallagher Center of Excellence",
      body: "200+ records a week. Zero margin for error. Spreadsheets at 11pm, SOPs before coffee. I was the person who made broken systems survivable.",
      accent: false,
    },
    {
      era: "the pivot",
      label: "Wait — why does this feel like punishment?",
      body: "Every workflow I fixed had the same flaw. Optimised for efficiency. Hostile to humans. So I did the obvious thing nobody expected.",
      accent: true,
    },
    {
      era: "chapter 02",
      label: "Taught myself design",
      body: "Not to make things pretty. To make them make sense. Built a full portfolio for an AI engineer — end to end. Redesigned a refund flow. Found the friction. Killed it.",
      accent: false,
    },
    {
      era: "right now",
      label: "Both brains, one person",
      body: "PG in Product Management- upGrad. Ops instincts + design eye + systems thinking. Not just design. Not just ops. The whole picture.",
      accent: true,
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 bg-white relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cfilter id='crumple'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='8' seed='2'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='30'/%3E%3C/filter%3E%3Cpath d='M0 0h1000v1000H0z' fill='%23000' filter='url(%23crumple)'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
        }}
      />

      {/* Torn edge */}
      <div
        className="absolute top-0 left-0 right-0 h-8 bg-[#FAF7F2]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 95% 80%, 90% 100%, 85% 70%, 80% 100%, 75% 90%, 70% 100%, 65% 85%, 60% 100%, 55% 75%, 50% 100%, 45% 80%, 40% 100%, 35% 90%, 30% 100%, 25% 85%, 20% 100%, 15% 75%, 10% 100%, 5% 90%, 0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">

          {/* LEFT / MAIN STORY */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Title */}
              <div className="relative mb-12 lg:mb-16">
                <h2
                  className="font-[family-name:var(--font-serif)] text-[#6B1B2E] mb-4"
                  style={{ fontSize: "clamp(44px, 10vw, 80px)" }}
                >
                  The Human
                </h2>
                <div className="w-24 h-1 bg-[#D4A574]" />
                <div className="absolute -top-5 right-0 font-[family-name:var(--font-handwritten)] text-base sm:text-xl text-[#C97B63]">
                  (yes, a real one)
                </div>
              </div>

              {/* Opening line */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="font-[family-name:var(--font-body)] text-xl sm:text-2xl text-[#2D1B1B] leading-relaxed mb-12"
              >
                I didn't open Figma first.{" "}
                <span className="text-[#6B5B4F]">
                  I opened a spreadsheet. At 11pm. For fun. (We were all young once.)
                </span>
              </motion.p>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-[#E8D5C8]" />

                <div className="space-y-10 sm:space-y-12">
                  {timeline.map(({ era, label, body, accent }, i) => (
                    <motion.div
                      key={era}
                      initial={{ opacity: 0, x: -24 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.2 }}
                      className="relative pl-10"
                    >
                      {/* Dot */}
                      <div
                        className={`absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center
                          ${accent
                            ? "bg-[#6B1B2E] border-[#6B1B2E]"
                            : "bg-white border-[#C97B63]"
                          }`}
                      >
                        {accent && (
                          <div className="w-2 h-2 rounded-full bg-[#FAF7F2]" />
                        )}
                      </div>

                      {/* Era label */}
                      <p className="font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] mb-1 tracking-wide">
                        {era}
                      </p>

                      {/* Chapter title */}
                      <h3
                        className={`font-[family-name:var(--font-body)] font-semibold mb-3 leading-snug
                          ${accent ? "text-[#6B1B2E] text-xl sm:text-2xl" : "text-[#2D1B1B] text-lg sm:text-xl"}`}
                      >
                        {label}
                      </h3>

                      {/* Body */}
                      {accent ? (
                        <div className="bg-[#FAF7F2] p-5 sm:p-6 -ml-1 rotate-[-0.3deg] shadow-sm">
                          <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-[#6B5B4F] leading-relaxed italic">
                            {body}
                          </p>
                        </div>
                      ) : (
                        <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-[#6B5B4F] leading-relaxed">
                          {body}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Closing punch */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4 }}
                className="mt-14 bg-[#6B1B2E] text-[#FAF7F2] p-6 sm:p-8 -mx-2 sm:-mx-4 shadow-lg"
              >
                <p className="font-[family-name:var(--font-body)] text-xl sm:text-2xl leading-snug">
                  I don't just design interfaces.
                </p>
                <p className="mt-3 font-[family-name:var(--font-body)] text-lg sm:text-xl italic text-[#E8A5A0]">
                  I design how things work.
                </p>
                <div className="mt-5 pt-5 border-t border-[#8B3A4E]">
                  <p className="text-sm text-[#C97B63] font-[family-name:var(--font-handwritten)] tracking-wide">
                    — the full-system person your team didn't know it needed
                  </p>
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* RIGHT — SKILLS + EDUCATION + TOOLS */}
          <div className="relative lg:flex lg:justify-start">
            <div className="lg:sticky lg:top-32 w-full">

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="font-[family-name:var(--font-handwritten)] text-base text-[#C97B63] mb-4 tracking-wide"
              >
                things I'm good at
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-2 mb-2"
              >
                {skills.map(({ label, variant }, i) => (
                  <motion.span
                    key={label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className={[
                      "px-3 py-1.5 text-sm font-[family-name:var(--font-body)] tracking-wide cursor-default transition-all duration-200",
                      variant === "filled"
                        ? "bg-[#2D1B1B] text-[#FAF7F2] border border-[#2D1B1B] hover:bg-[#6B1B2E] hover:border-[#6B1B2E]"
                        : variant === "outline-accent"
                        ? "bg-transparent text-[#C97B63] border border-[#C97B63] hover:bg-[#C97B63] hover:text-[#FAF7F2]"
                        : "bg-transparent text-[#6B5B4F] border border-[#C4AFA5] hover:border-[#6B1B2E] hover:text-[#6B1B2E]",
                    ].join(" ")}
                  >
                    {label}
                  </motion.span>
                ))}
              </motion.div>

              {/* Fun stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 }}
                className="mt-8 space-y-3"
              >
                {[
                  { num: "200+", desc: "records/week — zero oops" },
                  { num: "2×",   desc: "career pivots, 0 regrets" },
                  { num: "∞",    desc: "broken flows spotted" },
                ].map(({ num, desc }, i) => (
                  <motion.div
                    key={num + desc}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.0 + i * 0.12 }}
                    className="flex items-baseline gap-3 py-3 border-b border-[#E8D5C8]"
                  >
                    <span className="font-[family-name:var(--font-serif)] text-2xl text-[#6B1B2E] min-w-[3rem]">
                      {num}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-sm text-[#6B5B4F]">
                      {desc}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
                className="mt-5 font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63] tracking-wide"
              >
                + always learning something new
              </motion.p>

              {/* ── TOOLS SECTION ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.6 }}
                className="mt-10"
              >
                <p className="font-[family-name:var(--font-handwritten)] text-base text-[#C97B63] mb-4 tracking-wide">
                  tools I live in
                </p>
                <div className="flex flex-wrap gap-3">
                  {tools.map(({ label, icon }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1.65 + i * 0.08 }}
                      className="flex items-center gap-2 px-3 py-2 bg-[#FAF7F2] border border-[#E8D5C8] hover:border-[#C97B63] hover:shadow-sm transition-all duration-200 cursor-default group"
                    >
                      <span className="flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
                        {icon}
                      </span>
                      <span className="font-[family-name:var(--font-body)] text-xs text-[#6B5B4F] group-hover:text-[#6B1B2E] transition-colors duration-200">
                        {label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ── EDUCATION SECTION ── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.9 }}
                className="mt-10"
              >
                <p className="font-[family-name:var(--font-handwritten)] text-base text-[#C97B63] mb-5 tracking-wide">
                  where I studied
                </p>

                <div className="space-y-4">
                  {education.map(({ degree, school, year, current }, i) => (
                    <motion.div
                      key={school}
                      initial={{ opacity: 0, x: 16 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1.95 + i * 0.15 }}
                      className={`relative p-4 border-l-2 ${
                        current
                          ? "border-[#6B1B2E] bg-[#FAF7F2]"
                          : "border-[#E8D5C8] bg-transparent"
                      }`}
                    >
                      {current && (
                        <span className="absolute top-3 right-3 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6B1B2E] animate-pulse" />
                          <span className="font-[family-name:var(--font-handwritten)] text-[10px] text-[#6B1B2E] tracking-wide">
                            now
                          </span>
                        </span>
                      )}
                      <p className="font-[family-name:var(--font-body)] font-semibold text-sm text-[#2D1B1B] leading-snug mb-0.5">
                        {degree}
                      </p>
                      <p className="font-[family-name:var(--font-body)] text-xs text-[#6B5B4F] mb-1">
                        {school}
                      </p>
                      <p className="font-[family-name:var(--font-handwritten)] text-xs text-[#C97B63] tracking-wide">
                        {year}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
