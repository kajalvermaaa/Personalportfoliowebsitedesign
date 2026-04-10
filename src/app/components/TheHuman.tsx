import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function TheHuman() {
  const { ref, inView } = useInView();

  return (
    <section id="about" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Crumpled paper texture */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cfilter id='crumple'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.03' numOctaves='8' seed='2'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='30'/%3E%3C/filter%3E%3Cpath d='M0 0h1000v1000H0z' fill='%23000' filter='url(%23crumple)'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px',
        }}
      />
      
      {/* Decorative torn edge at top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#FAF7F2]"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 100%, 95% 80%, 90% 100%, 85% 70%, 80% 100%, 75% 90%, 70% 100%, 65% 85%, 60% 100%, 55% 75%, 50% 100%, 45% 80%, 40% 100%, 35% 90%, 30% 100%, 25% 85%, 20% 100%, 15% 75%, 10% 100%, 5% 90%, 0 100%)'
        }}
      />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="relative mb-16">
            <h2 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl text-[#6B1B2E] mb-4">
              The Human
            </h2>
            <div className="w-24 h-1 bg-[#D4A574]" />
            
            <div className="absolute -top-6 right-0 font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63] rotate-0">
              (the real story)
            </div>
          </div>

          {/* Story in broken paragraphs - conversational */}
          <div className="space-y-8 font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#2D1B1B]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <p>
                I didn't start here.
              </p>
              <p className="mt-4">
                I started in <span className="text-[#6B1B2E] italic">operations</span> — the unsexy world of spreadsheets, 
                SOPs, and exception handling. Managing 200+ client records weekly with zero margin for error.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="bg-[#FAF7F2] p-8 -mx-4 rotate-[-0.5deg] shadow-sm relative"
            >
              <div className="absolute -top-3 -left-3 w-16 h-8 bg-[#D4A574]/30 rotate-[-12deg]" />
              <p className="italic text-[#6B5B4F]">
                "But here's the thing: every broken process I fixed, every workflow I mapped, 
                every dashboard I built — they all had the same problem."
              </p>
              <div className="absolute -middle-0 -left-40 font-[family-name:var(--font-handwritten)] text-m text-[#C97B63] rotate-[-7deg]">
                this changed everything →
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <p>
                <span className="text-[#6B1B2E] font-semibold">They weren't designed for humans.</span>
              </p>
              <p className="mt-4">
                Systems built for scale, not clarity. Processes optimized for efficiency, not empathy. 
                Tools that technically worked but felt like punishment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="pl-8 border-l-4 border-[#C97B63]"
            >
              <p className="text-2xl text-[#6B1B2E]">
                So I taught myself design.
              </p>
              <p className="mt-4 text-[#6B5B4F]">
                Not to make things pretty (though that helps).
                <br />
                To make things <span className="italic text-[#2D1B1B]">make sense</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1 }}
            >
              <p>
                I built my first real project — a full production portfolio website for an AI engineer. 
                End-to-end. UX layout, content architecture, deployment, zero handoff.
              </p>
              <p className="mt-4">
                Then I redesigned a refund workflow as a product case study. Mapped the mess, 
                found the friction, designed the fix.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="bg-[#6B1B2E] text-[#FAF7F2] p-8 -mx-4 rotate-[0.5deg] shadow-lg relative"
            >
              <div className="absolute -bottom-4 -right-4 font-[family-name:var(--font-handwritten)] text-2xl text-[#D4A574] rotate-6">
                ★
              </div>
              <p className="text-2xl">
                Now I'm deepening my product thinking through a PG in Product Management at Duke CE.
              </p>
              <p className="mt-4 text-[#E8A5A0]">
                Because I'm not just a designer who can code, or an ops person who learned Figma.
              </p>
              <p className="mt-4 text-xl">
                I'm someone who understands the <span className="italic">whole stack</span> — 
                from data precision to user delight, from process design to product execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4 }}
              className="pt-8"
            >
              <p className="text-2xl text-[#2D1B1B]">
                I don't just design interfaces.
                <br />
                <span className="text-[#6B1B2E] italic">I design the thinking behind them.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-12 right-12 font-[family-name:var(--font-handwritten)] text-6xl text-[#E8A5A0]/20 rotate-12 select-none">
        ♡
      </div>
    </section>
  );
}