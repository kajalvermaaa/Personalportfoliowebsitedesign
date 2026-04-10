import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function TheHuman() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">

      {/* Background texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cfilter id='crumple'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='8' seed='2'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='30'/%3E%3C/filter%3E%3Cpath d='M0 0h1000v1000H0z' fill='%23000' filter='url(%23crumple)'/%3E%3C/svg%3E")`,
          backgroundSize: "400px 400px",
        }}
      />

      {/* Torn edge */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#FAF7F2]"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 100%, 95% 80%, 90% 100%, 85% 70%, 80% 100%, 75% 90%, 70% 100%, 65% 85%, 60% 100%, 55% 75%, 50% 100%, 45% 80%, 40% 100%, 35% 90%, 30% 100%, 25% 85%, 20% 100%, 15% 75%, 10% 100%, 5% 90%, 0 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* LEFT SIDE - STORY */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >

              {/* Title */}
              <div className="relative mb-16">
                <h2 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl text-[#6B1B2E] mb-4">
                  The Human
                </h2>
                <div className="w-24 h-1 bg-[#D4A574]" />
                <div className="absolute -top-6 right-0 font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63]">
                  (the real story)
                </div>
              </div>

              {/* STORY */}
              <div className="space-y-8 font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#2D1B1B]">

                <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }}>
                  <p>I didn’t start here.</p>
                  <p className="mt-4">
                    I started in <span className="text-[#6B1B2E] italic">operations</span> — spreadsheets, SOPs, exception handling.
                    Managing 200+ records weekly where mistakes weren’t an option.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}
                  className="bg-[#FAF7F2] p-8 -mx-4 rotate-[-0.5deg] shadow-sm relative">
                  <div className="absolute -top-3 -left-3 w-16 h-8 bg-[#D4A574]/30 rotate-[-12deg]" />
                  <p className="italic text-[#6B5B4F]">
                    “Every process I fixed, every workflow I mapped — had the same problem.”
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.6 }}>
                  <p className="text-[#6B1B2E] font-semibold">
                    They weren’t designed for humans.
                  </p>
                  <p className="mt-4">
                    Systems optimized for efficiency, not clarity. Tools that worked — but felt like punishment.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8 }}
                  className="pl-8 border-l-4 border-[#C97B63]">
                  <p className="text-2xl text-[#6B1B2E]">So I taught myself design.</p>
                  <p className="mt-4 text-[#6B5B4F]">
                    Not to make things pretty —  
                    but to make them <span className="italic text-[#2D1B1B]">make sense</span>.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 1 }}>
                  <p>
                    I built real things — a full portfolio for an AI engineer, end-to-end.
                  </p>
                  <p className="mt-4">
                    Then redesigned a refund system. Found friction. Fixed it.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.2 }}
                  className="bg-[#6B1B2E] text-[#FAF7F2] p-8 -mx-4 rotate-[0.5deg] shadow-lg">
                  <p className="text-2xl">
                    Now I’m deepening my product thinking through a PG in Product Management.
                  </p>
                  <p className="mt-4 text-[#E8A5A0]">
                    Not just design. Not just ops.
                  </p>
                  <p className="mt-4 text-xl">
                    I understand the <span className="italic">full system</span> —  
                    from data to user experience.
                  </p>
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.4 }}>
                  <p className="text-2xl">
                    I don’t just design interfaces.  
                    <span className="text-[#6B1B2E] italic"> I design how things work.</span>
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE - FLOATING NOTES */}
          <div className="relative hidden lg:block">

            <div className="sticky top-32 h-[600px]">

              <p className="absolute top-0 right-0 font-[family-name:var(--font-handwritten)] text-sm text-[#C97B63]">
                things I’m good at
              </p>

              <motion.div whileHover={{ scale: 1.05, y: -4 }}
                className="absolute top-16 right-12 bg-[#FAF7F2] px-4 py-2 shadow-md rotate-[-2deg] text-sm">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#C97B63] rounded-full" />
                UX flows
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -4 }}
                className="absolute top-32 right-36 bg-[#FAF7F2] px-4 py-2 shadow-md rotate-[3deg] text-sm">
                <div className="absolute -top-2 left-2 w-6 h-3 bg-[#D4A574]/50 rotate-[-12deg]" />
                wireframing
              </motion.div>

              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-52 right-8 bg-[#FAF7F2] px-4 py-2 shadow-md rotate-[-1deg] text-sm">
                product thinking
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}
                className="absolute top-72 right-28 bg-[#FAF7F2] px-4 py-2 shadow-md rotate-[2deg] text-sm">
                user journeys
              </motion.div>

              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-96 right-12 bg-[#FAF7F2] px-4 py-2 shadow-md rotate-[-3deg] text-sm">
                SOP design
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}
                className="absolute top-[430px] right-40 bg-[#FAF7F2] px-4 py-2 shadow-md rotate-[1deg] text-sm">
                system clarity
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}
                className="absolute top-[500px] right-20 bg-[#FAF7F2] px-4 py-2 shadow-md rotate-[-2deg] text-sm">
                figma
              </motion.div>

              <div className="absolute bottom-0 right-0 font-[family-name:var(--font-handwritten)] text-xs text-[#C97B63] rotate-[-4deg]">
                still figuring things out →
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Decorative */}
      <div className="absolute bottom-12 right-12 text-6xl text-[#E8A5A0]/20 rotate-12">
        ♡
      </div>

    </section>
  );
}
