import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import profileImage from "figma:asset/7fae8e88ae5df6c80fe030cdc91b8e3f1740ad32.png";

export function Hero() {
  return (
    <section className="min-h-screen relative pt-20 pb-16 px-4 sm:px-6 overflow-hidden bg-[#FAF7F2]">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Profile image: shows ABOVE text on mobile/tablet ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative lg:hidden order-first"
          >
            <div className="relative max-w-[280px] sm:max-w-sm mx-auto">
              <div className="absolute inset-0 bg-white shadow-xl"
                style={{ clipPath: 'polygon(2% 0%, 98% 0%, 100% 3%, 100% 97%, 98% 100%, 2% 100%, 0% 97%, 0% 3%)' }}
              />
              <div className="relative p-3 bg-white shadow-xl"
                style={{ clipPath: 'polygon(1% 0%, 99% 0%, 100% 2%, 100% 98%, 99% 100%, 1% 100%, 0% 98%, 0% 2%)' }}
              >
                <img
                  src={profileImage}
                  alt="Kajal Verma"
                  className="w-full h-[340px] sm:h-[420px] object-cover object-top"
                />
              </div>
              <div className="absolute -top-3 left-8 w-16 h-6 bg-[#D4A574]/30 rotate-[-5deg] backdrop-blur-sm" />
              <div className="absolute -top-3 right-8 w-16 h-6 bg-[#D4A574]/30 rotate-[8deg] backdrop-blur-sm" />
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 bg-[#6B1B2E] text-[#FAF7F2] rounded-full p-3 shadow-xl"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-6 right-4 font-[family-name:var(--font-handwritten)] text-base text-[#6B1B2E]"
              >
                Bangalore, IN
              </motion.div>
            </div>
          </motion.div>

          {/* ── Left: Editorial Typography ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 mt-8 lg:mt-0"
          >
            {/* Oversized Name */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-[family-name:var(--font-handwritten)] leading-[0.9] text-[#6B1B2E] overflow-hidden"
                style={{
                  fontSize: 'clamp(64px, 14vw, 144px)',
                  letterSpacing: '-0.02em',
                }}
              >
                <span className="block">Kajal</span>
                <span className="block -mt-2">Verma</span>
              </motion.h1>

              {/* Annotation — hidden on smallest screens */}
              <motion.div
                initial={{ opacity: 0, rotate: -5 }}
                animate={{ opacity: 1, rotate: -3 }}
                transition={{ delay: 0.5 }}
                className="hidden sm:block absolute -right-4 top-12 font-[family-name:var(--font-handwritten)] text-lg sm:text-2xl text-[#C97B63] rotate-[-3deg]"
              >
                this is me →
              </motion.div>
            </div>

            {/* Identity Statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-3 lg:space-y-4"
            >
              <div className="flex items-center gap-3 sm:gap-4 font-[family-name:var(--font-sans)] text-base sm:text-lg tracking-wider">
                <span className="text-[#6B1B2E]">Ops</span>
                <span className="text-[#D4A574]">×</span>
                <span className="text-[#6B1B2E]">Product</span>
                <span className="text-[#D4A574]">×</span>
                <span className="text-[#6B1B2E]">Design</span>
              </div>

              <h2 className="font-[family-name:var(--font-body)] text-[#2D1B1B] leading-relaxed"
                style={{ fontSize: 'clamp(22px, 4vw, 40px)' }}
              >
                Turning messy systems into<br />
                <span className="italic text-[#6B1B2E]">meaningful experiences</span>
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-[family-name:var(--font-body)] text-base sm:text-xl text-[#6B5B4F] max-w-lg leading-relaxed"
            >
              I fix what's broken, build what's missing, and design what people actually want to use.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-6 sm:gap-8 pt-2"
            >
              {[
                { text: "200+ workflows handled", d: "M 0 4 Q 25 2, 50 4 T 100 4", stroke: "#D4A574" },
                { text: "15% less rework", d: "M 0 4 Q 25 6, 50 4 T 100 4", stroke: "#C97B63" },
                { text: "1+ year in ops", d: "M 0 4 Q 25 3, 50 5 T 100 4", stroke: "#6B1B2E" },
              ].map(({ text, d, stroke }) => (
                <div key={text} className="relative">
                  <div className="font-[family-name:var(--font-sans)] text-xs sm:text-sm tracking-wide text-[#6B5B4F]">{text}</div>
                  <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path d={d} stroke={stroke} strokeWidth="1.5" fill="none" strokeLinecap="round" />
                  </svg>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <a
                href="#work"
                className="inline-flex items-center gap-2 bg-[#6B1B2E] text-[#FAF7F2] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-[family-name:var(--font-sans)] text-sm sm:text-base hover:bg-[#C97B63] transition-all hover:shadow-xl hover:scale-105 group"
              >
                explore a little
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right: Desktop Profile Image ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 bg-white rotate-0 shadow-2xl"
                style={{ clipPath: 'polygon(2% 0%, 98% 0%, 100% 3%, 100% 97%, 98% 100%, 2% 100%, 0% 97%, 0% 3%)' }}
              />
              <div className="relative p-4 bg-white shadow-xl"
                style={{ clipPath: 'polygon(1% 0%, 99% 0%, 100% 2%, 100% 98%, 99% 100%, 1% 100%, 0% 98%, 0% 2%)' }}
              >
                <img
                  src={profileImage}
                  alt="Kajal Verma"
                  className="w-full h-[600px] object-cover object-top"
                />
              </div>
              <div className="absolute -top-4 left-12 w-20 h-8 bg-[#D4A574]/30 rotate-[-5deg] backdrop-blur-sm" />
              <div className="absolute -top-4 right-12 w-20 h-8 bg-[#D4A574]/30 rotate-[8deg] backdrop-blur-sm" />
              <motion.div
                animate={{ rotate: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-[#6B1B2E] text-[#FAF7F2] rounded-full p-4 shadow-xl"
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -bottom-8 -right-4 font-[family-name:var(--font-handwritten)] text-xl text-[#6B1B2E]"
              >
                Bangalore, IN
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute top-1/2 -right-20 font-[family-name:var(--font-handwritten)] text-lg text-[#C97B63] rotate-[8deg]"
              >
                built from chaos
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="absolute -bottom-12 left-8 font-[family-name:var(--font-handwritten)] text-m text-[#6B5B4F] rotate-[-2deg]"
              >
                still figuring things out :)
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
