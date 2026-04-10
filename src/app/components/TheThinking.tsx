import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

export function TheThinking() {
  const { ref, inView } = useInView();

  const thoughts = [
    {
      title: "Why most systems are overcomplicated",
      insight: "Because they're designed by people who never have to use them. Add a layer for every stakeholder, never subtract.",
      takeaway: "Start with the user's mental model, not your org chart.",
    },
    {
      title: "Why clarity beats features",
      insight: "A feature solves one problem. Clarity solves a thousand. People don't want more options — they want confidence in their next step.",
      takeaway: "Ship understanding, not just functionality.",
    },
    {
      title: "The ops mindset is a superpower",
      insight: "Designers dream. Developers build. Operations people ship. We know what breaks at scale, what users actually do (vs. what they say), and how to fix it fast.",
      takeaway: "Design isn't real until it works in production.",
    },
  ];

  return (
    <section id="thinking" ref={ref} className="py-32 px-6 bg-[#FAF7F2] relative overflow-hidden">
      {/* Crumpled paper texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cfilter id='crumple3'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.028' numOctaves='9' seed='7'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='35'/%3E%3C/filter%3E%3Cpath d='M0 0h1000v1000H0z' fill='%23000' filter='url(%23crumple3)'/%3E%3C/svg%3E")`,
          backgroundSize: '450px 450px',
        }}
      />
      
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl text-[#6B1B2E] mb-4">
            The Thinking
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mb-6" />
          <p className="font-[family-name:var(--font-body)] text-2xl text-[#6B5B4F]">
            Some principles I've learned (the hard way)
          </p>
        </motion.div>

        {/* Thoughts */}
        <div className="space-y-12">
          {thoughts.map((thought, index) => (
            <motion.div
              key={thought.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className={`relative ${index % 2 === 0 ? '' : 'ml-auto'}`}
              style={{ maxWidth: '90%' }}
            >
              <div 
                className="bg-white p-8 shadow-xl relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                style={{
                  transform: `rotate(${index % 2 === 0 ? -0.5 : 0.5}deg)`,
                }}
              >
                {/* Decorative number */}
                <div className="font-[family-name:var(--font-serif)] text-[100px] leading-none text-[#FAF7F2] absolute -top-6 -right-6 select-none">
                  {index + 1}
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[#6B1B2E] mb-4 relative">
                  {thought.title}
                </h3>

                {/* Insight */}
                <p className="font-[family-name:var(--font-body)] text-lg text-[#2D1B1B] leading-relaxed mb-6 relative">
                  {thought.insight}
                </p>

                {/* Takeaway */}
                <div className="bg-[#6B1B2E] text-[#FAF7F2] px-6 py-4 -mx-8 -mb-8 mt-6 relative">
                  <div className="font-[family-name:var(--font-handwritten)] text-sm text-[#D4A574] mb-2">
                    Takeaway:
                  </div>
                  <p className="font-[family-name:var(--font-body)] text-lg italic">
                    {thought.takeaway}
                  </p>
                </div>

                {/* Tape decoration */}
                <div 
                  className={`absolute -top-3 ${index % 2 === 0 ? '-left-3' : '-right-3'} w-20 h-8 bg-[#D4A574]/30 backdrop-blur-sm`}
                  style={{ transform: `rotate(${index % 2 === 0 ? -12 : 12}deg)` }}
                />

                {/* Handwritten note */}
                <div 
                  className={`absolute ${index % 2 === 0 ? '-right-16' : '-left-16'} top-1/2 font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63]`}
                  style={{ transform: `rotate(${index % 2 === 0 ? 8 : -8}deg)` }}
                >
                  {index === 0 && '→ this!'}
                  {index === 1 && '← yes'}
                  {index === 2 && '→ truth'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-[#C97B63] text-white p-12 rotate-[0.5deg] shadow-2xl relative">
            <div className="absolute -top-3 left-1/4 w-16 h-6 bg-[#D4A574]/40 rotate-[-8deg]" />
            <div className="absolute -top-3 right-1/4 w-16 h-6 bg-[#D4A574]/40 rotate-[5deg]" />
            
            <p className="font-[family-name:var(--font-serif)] text-3xl leading-relaxed">
              I don't just make things look good.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-4xl mt-4 italic">
              I make things <span className="text-[#FAF7F2]">work</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}