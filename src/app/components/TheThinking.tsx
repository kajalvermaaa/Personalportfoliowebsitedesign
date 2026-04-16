import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function TheThinking() {
  const { ref, inView } = useInView();

  const thoughts = [
    {
      number: "01",
      tag: "Systems",
      title: "Why most systems are overcomplicated",
      insight:
        "Because they're designed by people who never have to use them. Add a layer for every stakeholder, never subtract.",
      takeaway: "Start with the user's mental model, not your org chart.",
      annotation: "this one stings →",
      annotationRotate: "rotate-[10deg]",
      annotationColor: "text-[#C97B63]",
      tapeRotate: "-rotate-[12deg]",
      cardRotate: "-0.6deg",
      pullDir: "right" as const,
    },
    {
      number: "02",
      tag: "Clarity",
      title: "Why clarity beats features",
      insight:
        "A feature solves one problem. Clarity solves a thousand. People don't want more options — they want confidence in their next step.",
      takeaway: "Ship understanding, not just functionality.",
      annotation: "← so true",
      annotationRotate: "-rotate-[7deg]",
      annotationColor: "text-[#6B1B2E]",
      tapeRotate: "rotate-[10deg]",
      cardRotate: "0.5deg",
      pullDir: "left" as const,
    },
    {
      number: "03",
      tag: "Ops Mindset",
      title: "The ops mindset is a superpower",
      insight:
        "Designers dream. Developers build. Operations people ship. We know what breaks at scale, what users actually do (vs. what they say), and how to fix it fast.",
      takeaway: "Design isn't real until it works in production.",
      annotation: "truth →",
      annotationRotate: "rotate-[6deg]",
      annotationColor: "text-[#D4A574]",
      tapeRotate: "-rotate-[8deg]",
      cardRotate: "-0.4deg",
      pullDir: "right" as const,
    },
  ];

  return (
    <section
      id="thinking"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 bg-[#FAF7F2] relative overflow-hidden"
    >
      {/* Paper grain texture */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Faint ruled lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(transparent, transparent 47px, #6B1B2E 47px, #6B1B2E 48px)",
          backgroundPositionY: "64px",
        }}
      />

      <div className="max-w-5xl mx-auto relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 sm:mb-24 relative"
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] uppercase text-[#C97B63]">
              Principles I've learned
            </span>
            <span className="block w-8 sm:w-12 h-px bg-[#D4A574]" />
            <span className="font-[family-name:var(--font-sans)] text-xs tracking-[0.2em] uppercase text-[#6B5B4F] hidden sm:inline">
              the hard way
            </span>
          </div>

          <div className="relative inline-block">
            <h2
              className="font-[family-name:var(--font-serif)] text-[#6B1B2E] leading-none"
              style={{ fontSize: "clamp(48px, 10vw, 96px)" }}
            >
              The Thinking
            </h2>
            <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 480 14" fill="none">
              <path d="M4 9 C80 4, 160 12, 240 7 S380 3, 476 8" stroke="#D4A574" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M20 12 C100 9, 180 13, 260 10 S400 6, 460 11" stroke="#D4A574" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
            </svg>

            <motion.div
              initial={{ opacity: 0, rotate: -4 }}
              animate={inView ? { opacity: 1, rotate: -3 } : {}}
              transition={{ delay: 0.6 }}
              className="absolute -right-24 sm:-right-36 top-2 font-[family-name:var(--font-handwritten)] text-lg sm:text-xl text-[#C97B63] rotate-[-3deg] hidden sm:block"
            >
              (unfiltered)
            </motion.div>
          </div>

          <p className="font-[family-name:var(--font-body)] text-base sm:text-xl text-[#6B5B4F] mt-6 sm:mt-8 max-w-xl leading-relaxed">
            Three beliefs that quietly govern every decision I make — about
            systems, people, and the spaces between.
          </p>
        </motion.div>

        {/* Thought Cards */}
        {/* Outer wrapper adds horizontal padding on lg+ to make room for annotations */}
        <div className="space-y-10 sm:space-y-16 lg:px-28">
          {thoughts.map((thought, index) => (
            <motion.div
              key={thought.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.18, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full"
            >
              {/* Side annotation — visible on lg+, positioned outside the card in the padding zone */}
              <div
                className={`absolute ${
                  thought.pullDir === "left" ? "-right-24" : "-left-24"
                } top-1/2 -translate-y-1/2 z-10 font-[family-name:var(--font-handwritten)] text-lg ${thought.annotationColor} ${thought.annotationRotate} hidden lg:block select-none pointer-events-none`}
              >
                {thought.annotation}
              </div>

              <div
                className="bg-white shadow-xl relative overflow-hidden group transition-shadow duration-300 hover:shadow-2xl"
                style={{ transform: `rotate(${thought.cardRotate})` }}
              >
                {/* Tape */}
                <div className={`absolute -top-3 ${thought.pullDir === "left" ? "left-8" : "right-8"} w-16 sm:w-20 h-6 sm:h-7 bg-[#D4A574]/25 backdrop-blur-sm ${thought.tapeRotate}`} />
                <div className={`absolute -top-2 ${thought.pullDir === "left" ? "left-24 sm:left-28" : "right-24 sm:right-28"} w-10 sm:w-12 h-5 sm:h-6 bg-[#D4A574]/15 backdrop-blur-sm rotate-[4deg]`} />

                <div className="p-6 sm:p-8 md:p-10">
                  {/* Top row */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-[family-name:var(--font-handwritten)] text-4xl sm:text-5xl text-[#FAF7F2] select-none leading-none"
                      style={{ WebkitTextStroke: "1.5px #E8DED0" }}
                    >
                      {thought.number}
                    </span>
                    <span className="font-[family-name:var(--font-sans)] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-[#C97B63] border border-[#C97B63]/30 px-2 sm:px-3 py-1">
                      {thought.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-2 rounded-full bg-[#D4A574]" />
                    <div className="flex-1 h-px bg-[#E8DED0]" />
                  </div>

                  <h3 className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl text-[#6B1B2E] leading-tight mb-4">
                    {thought.title}
                  </h3>

                  <p className="font-[family-name:var(--font-body)] text-base sm:text-lg text-[#2D1B1B] leading-relaxed">
                    {thought.insight}
                  </p>

                  {/* Takeaway bar */}
                  <div className="mt-6 sm:mt-8 -mx-6 sm:-mx-8 md:-mx-10 -mb-6 sm:-mb-8 md:-mb-10 bg-[#6B1B2E] px-6 sm:px-8 md:px-10 py-5 sm:py-6 flex items-start gap-4 sm:gap-5">
                    <div className="mt-1 w-3 h-3 rounded-full bg-[#D4A574] flex-shrink-0" />
                    <div>
                      <span className="font-[family-name:var(--font-handwritten)] text-sm text-[#D4A574] block mb-1 tracking-wide">
                        Takeaway
                      </span>
                      <p className="font-[family-name:var(--font-body)] text-base sm:text-lg md:text-xl italic text-[#FAF7F2] leading-relaxed">
                        {thought.takeaway}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 sm:mt-28 relative"
        >
          <div className="absolute -top-4 left-1/4 w-14 h-5 bg-[#D4A574]/30 -rotate-[8deg]" />
          <div className="absolute -top-3 right-1/4 w-18 h-5 bg-[#D4A574]/20 rotate-[6deg]" />
          <div className="absolute -top-5 left-1/2 w-10 h-4 bg-[#C97B63]/20 rotate-[3deg]" />

          <div className="bg-[#C97B63] text-[#FAF7F2] p-8 sm:p-12 md:p-16 rotate-[0.4deg] shadow-2xl relative overflow-hidden max-w-3xl mx-auto">
            <div className="absolute -bottom-6 -right-4 font-[family-name:var(--font-serif)] text-[180px] leading-none select-none pointer-events-none opacity-[0.06]">
              ✦
            </div>
            <div className="font-[family-name:var(--font-handwritten)] text-base sm:text-lg text-[#FAF7F2]/60 mb-4 rotate-[-1deg] inline-block">
              the short version:
            </div>
            <p className="font-[family-name:var(--font-serif)] text-2xl sm:text-3xl md:text-4xl leading-snug">
              I don't just make things look good.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-3xl sm:text-4xl md:text-5xl mt-3 italic">
              I make things{" "}
              <span className="text-[#FAF7F2] not-italic font-[700] relative">
                work
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 80 8" fill="none">
                  <path d="M2 5 Q20 1, 40 5 T78 4" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                </svg>
              </span>
              .
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1.1 }}
            className="text-center mt-6 sm:mt-8 font-[family-name:var(--font-handwritten)] text-base sm:text-lg text-[#6B5B4F] rotate-[-1deg]"
          >
            (and I have receipts)
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
