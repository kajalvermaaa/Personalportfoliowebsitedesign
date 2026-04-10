import { Link } from "react-router";
import { motion } from "motion/react";

export function Navigation() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/80 backdrop-blur-md border-b border-[#6B1B2E]/10"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="font-[family-name:var(--font-handwritten)] text-2xl text-[#6B1B2E] hover:text-[#C97B63] transition-colors"
        >
          A small journal of things I've designed  ♡ 
        </Link>
        
        <div className="flex gap-8 items-center">
           <a 
            href="#about" 
            className="font-[family-name:var(--font-sans)] text-sm tracking-wide text-[#2D1B1B] hover:text-[#6B1B2E] transition-colors"
          >
            About
          </a>
          <a 
            href="#shift" 
            className="font-[family-name:var(--font-sans)] text-sm tracking-wide text-[#2D1B1B] hover:text-[#6B1B2E] transition-colors"
          >
            The Shift
          </a>
          <a 
            href="#work" 
            className="font-[family-name:var(--font-sans)] text-sm tracking-wide text-[#2D1B1B] hover:text-[#6B1B2E] transition-colors"
          >
            Work
          </a>
          <a 
            href="#thinking" 
            className="font-[family-name:var(--font-sans)] text-sm tracking-wide text-[#2D1B1B] hover:text-[#6B1B2E] transition-colors"
          >
            Thinking
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-[#6B1B2E] text-[#FAF7F2] rounded-full font-[family-name:var(--font-sans)] text-sm hover:bg-[#C97B63] transition-all hover:shadow-lg hover:-rotate-1"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </motion.nav>
  );
}