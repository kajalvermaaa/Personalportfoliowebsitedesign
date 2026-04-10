import { motion } from "motion/react";
import { Mail, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function LetsBuild() {
  const { ref, inView } = useInView();

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Torn edge transition */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#FAF7F2]"
        style={{
          clipPath: 'polygon(0 0, 5% 90%, 10% 100%, 15% 75%, 20% 100%, 25% 85%, 30% 100%, 35% 80%, 40% 100%, 45% 90%, 50% 100%, 55% 80%, 60% 100%, 65% 85%, 70% 100%, 75% 75%, 80% 100%, 85% 90%, 90% 100%, 95% 80%, 100% 100%, 100% 0)',
        }}
      />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          {/* Title */}
          <div className="relative">
            <h2 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl lg:text-8xl text-[#6B1B2E] mb-6 leading-tight">
              Let's Build
              <br />
              Something Real
            </h2>
            <div className="w-32 h-1 bg-[#D4A574] mx-auto" />
            
            <motion.div 
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -top-8 right-12 text-4xl"
            >
              <Sparkles className="w-8 h-8 text-[#D4A574]" />
            </motion.div>
          </div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="font-[family-name:var(--font-body)] text-2xl md:text-3xl text-[#2D1B1B] leading-relaxed">
              If you need someone who can map your chaos, find the real problem, 
              and ship solutions that actually work —
            </p>
            
            <p className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#6B1B2E] italic">
              I'm your person.
            </p>

            <div className="pt-4 font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63]">
              (No fluff. No templates. Just thoughtful work.)
            </div>
          </motion.div>

          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          >
            <a
              href="mailto:kajalverma1104@gmail.com"
              className="group flex items-center gap-3 bg-[#6B1B2E] text-[#FAF7F2] px-8 py-4 rounded-full font-[family-name:var(--font-sans)] hover:bg-[#C97B63] transition-all hover:shadow-xl hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email Me</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="https://linkedin.com/in/kajalverma1104"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border-2 border-[#6B1B2E] text-[#6B1B2E] px-8 py-4 rounded-full font-[family-name:var(--font-sans)] hover:bg-[#6B1B2E] hover:text-[#FAF7F2] transition-all hover:shadow-xl hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Decorative cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="grid sm:grid-cols-3 gap-6 pt-12"
          >
            <div className="bg-[#FAF7F2] p-6 rotate-[-1deg] shadow-md">
              <div className="font-[family-name:var(--font-handwritten)] text-xl text-[#6B1B2E] mb-2">
                Open to
              </div>
              <div className="font-[family-name:var(--font-sans)] text-sm text-[#6B5B4F]">
                Product roles, UX/UI projects, design systems, freelance work
              </div>
            </div>

            <div className="bg-[#E8A5A0] p-6 rotate-[1deg] shadow-md">
              <div className="font-[family-name:var(--font-handwritten)] text-xl text-[#2D1B1B] mb-2">
                Based in
              </div>
              <div className="font-[family-name:var(--font-sans)] text-sm text-[#2D1B1B]">
                Bangalore, India
                <br />
                (Open to remote)
              </div>
            </div>

            <div className="bg-[#D4A574] p-6 rotate-[-1deg] shadow-md">
              <div className="font-[family-name:var(--font-handwritten)] text-xl text-[#2D1B1B] mb-2">
                Response time
              </div>
              <div className="font-[family-name:var(--font-sans)] text-sm text-[#2D1B1B]">
                Usually within 24 hours
                <br />
                (I'm fast like that)
              </div>
            </div>
          </motion.div>

          {/* Final note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="pt-12"
          >
            <div className="inline-block bg-[#6B1B2E] text-[#FAF7F2] px-12 py-8 rotate-[-0.5deg] shadow-2xl relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-[#D4A574]/40 rotate-[-3deg]" />
              
              <p className="font-[family-name:var(--font-body)] text-xl">
                Let's turn complicated problems into simple solutions.
              </p>
              <p className="font-[family-name:var(--font-handwritten)] text-2xl text-[#D4A574] mt-4">
                — Kajal ✨
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.1 }}
        className="mt-20 pt-8 border-t border-[#6B1B2E]/10 text-center"
      >
        <p className="font-[family-name:var(--font-sans)] text-sm text-[#6B5B4F]">
          © 2026 Kajal Verma. Designed with chaos, built with care.
        </p>
      </motion.div>
    </section>
  );
}
