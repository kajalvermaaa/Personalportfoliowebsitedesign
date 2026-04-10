import { motion } from "motion/react";
import { ArrowRight, Database, Lightbulb, Palette } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function TheShift() {
  const { ref, inView } = useInView();

  const stages = [
    {
      icon: Database,
      title: "Operations",
      subtitle: "Where it started",
      description: "Process mapping, SOP design, data precision. Managing complex workflows with zero error tolerance.",
      skills: ["Excel Mastery", "Process Optimization", "Data Quality", "Cross-functional Coordination"],
      color: "#6B1B2E",
      rotation: -2,
    },
    {
      icon: Lightbulb,
      title: "Product Thinking",
      subtitle: "The bridge",
      description: "Seeing patterns in inefficiency. Asking 'why' instead of just fixing 'what'. User flows, not just workflows.",
      skills: ["User Research", "Journey Mapping", "Problem Framing", "Metrics Design"],
      color: "#C97B63",
      rotation: 1,
    },
    {
      icon: Palette,
      title: "Design",
      subtitle: "The execution",
      description: "From insight to interface. Making the complex feel simple. Building products people want to use.",
      skills: ["Figma", "UX/UI Design", "Prototyping", "Production Deployment", "Adobe", "Canva"],
      color: "#D4A574",
      rotation: -1,
    },
  ];

  return (
    <section id="shift" ref={ref} className="py-32 px-6 bg-[#FAF7F2] relative overflow-hidden">
      {/* Crumpled paper texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cfilter id='crumple4'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.032' numOctaves='7' seed='3'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='25'/%3E%3C/filter%3E%3Cpath d='M0 0h1000v1000H0z' fill='%23000' filter='url(%23crumple4)'/%3E%3C/svg%3E")`,
          backgroundSize: '380px 380px',
        }}
      />
      
      {/* Grain texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl text-[#6B1B2E] mb-4">
            The Shift
          </h2>
          <div className="w-24 h-1 bg-[#D4A574] mx-auto mb-6" />
          <p className="font-[family-name:var(--font-body)] text-2xl text-[#6B5B4F] max-w-2xl mx-auto">
            Not a pivot. An <span className="italic text-[#6B1B2E]">evolution</span>.
          </p>
          
          <div className="mt-4 font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63]">
            (each layer builds on the last)
          </div>
        </motion.div>

        {/* Evolution Timeline */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting arrows */}
          <div className="hidden md:block absolute top-32 left-0 right-0 h-0.5 bg-[#D4A574]/30" />
          
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                <div 
                  className="bg-white p-8 shadow-xl relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    transform: `rotate(${stage.rotation}deg)`,
                  }}
                >
                  {/* Icon badge */}
                  <div 
                    className="absolute -top-6 left-8 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: stage.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Stage number */}
                  <div className="font-[family-name:var(--font-serif)] text-[120px] leading-none text-[#FAF7F2] absolute -top-8 -right-8 select-none">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="relative pt-12 space-y-4">
                    <div>
                      <h3 className="font-[family-name:var(--font-serif)] text-3xl text-[#2D1B1B] mb-1">
                        {stage.title}
                      </h3>
                      <p className="font-[family-name:var(--font-handwritten)] text-lg" style={{ color: stage.color }}>
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="font-[family-name:var(--font-body)] text-base leading-relaxed text-[#6B5B4F]">
                      {stage.description}
                    </p>

                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {stage.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1 bg-[#FAF7F2] text-xs font-[family-name:var(--font-sans)] text-[#2D1B1B] rounded-full border border-[#6B1B2E]/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner tear */}
                  <div 
                    className="absolute bottom-0 right-0 w-12 h-12 bg-[#FAF7F2]"
                    style={{
                      clipPath: 'polygon(100% 0, 100% 100%, 0 100%)'
                    }}
                  />
                </div>

                {/* Arrow between stages */}
                {index < 2 && (
                  <div className="hidden md:flex absolute top-32 -right-4 z-10 items-center justify-center w-8 h-8 bg-[#D4A574] rounded-full">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-[#6B1B2E] text-[#FAF7F2] p-12 rotate-[-0.5deg] shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#D4A574]/40 rotate-[-3deg]" />
            
            <p className="font-[family-name:var(--font-body)] text-2xl leading-relaxed">
              Most people see operations, product, and design as separate lanes.
            </p>
            <p className="font-[family-name:var(--font-serif)] text-3xl mt-6 italic text-[#D4A574]">
              I see them as layers of the same problem.
            </p>
            
            <div className="mt-8 font-[family-name:var(--font-handwritten)] text-xl text-[#E8A5A0]">
              ← and that's my unfair advantage
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}