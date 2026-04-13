import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Database, Lightbulb, Palette } from "lucide-react";
import { useInView } from "./hooks/useInView";

export function TheShift() {
  const { ref, inView } = useInView();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Animated background canvas ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf: number;
    let tick = 0;

    const blobs = [
      { x: 0.12, y: 0.18, r: 100 },
      { x: 0.88, y: 0.22, r: 70 },
      { x: 0.5,  y: 0.07, r: 50 },
      { x: 0.05, y: 0.72, r: 60 },
      { x: 0.95, y: 0.78, r: 80 },
      { x: 0.75, y: 0.52, r: 38 },
      { x: 0.25, y: 0.44, r: 42 },
    ];
    const colors = ["#6B1B2E", "#C97B63", "#D4A574"];

    function resize() {
      if (!canvas) return;
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function draw() {
      if (!canvas) return;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      blobs.forEach((b, i) => {
        const ox = Math.sin(tick * 0.008 + i) * 12;
        const oy = Math.cos(tick * 0.006 + i * 1.3) * 10;
        ctx.beginPath();
        ctx.arc(b.x * W + ox, b.y * H + oy, b.r, 0, Math.PI * 2);
        ctx.fillStyle   = colors[i % 3] + "1A";
        ctx.strokeStyle = colors[i % 3] + "28";
        ctx.lineWidth   = 1.5;
        ctx.fill();
        ctx.stroke();
      });

      ctx.fillStyle = "#6B1B2E12";
      for (let x = 36; x < W; x += 36) {
        for (let y = 36; y < H; y += 36) {
          ctx.beginPath();
          ctx.arc(x, y, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.lineWidth = 1;
      for (let i = -4; i < 18; i++) {
        ctx.beginPath();
        ctx.strokeStyle = "#D4A57418";
        const sx = i * 130 - 180;
        ctx.moveTo(sx, 0);
        for (let t = 0; t <= H; t += 6) {
          ctx.lineTo(sx + Math.sin(t * 0.034 + i + tick * 0.004) * 16 + t * 0.28, t);
        }
        ctx.stroke();
      }

      tick++;
      raf = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const stages = [
    {
      Icon: Database,
      title: "Operations",
      subtitle: "Where it started",
      description:
        "Process mapping, SOP design, data precision. Managing complex workflows with zero error tolerance.",
      skills: ["Excel Mastery", "Process Optimization", "Data Quality", "Cross-functional Coordination"],
      accent: "#6B1B2E",
      rotation: "-1.5deg",
      mt: "0px",
    },
    {
      Icon: Lightbulb,
      title: "Product Thinking",
      subtitle: "The bridge",
      description:
        "Seeing patterns in inefficiency. Asking 'why' instead of just fixing 'what'. User flows, not just workflows.",
      skills: ["User Research", "Journey Mapping", "Problem Framing", "Metrics Design"],
      accent: "#C97B63",
      rotation: "1deg",
      mt: "20px",
    },
    {
      Icon: Palette,
      title: "Design",
      subtitle: "The execution",
      description:
        "From insight to interface. Making the complex feel simple. Building products people want to use.",
      skills: ["Figma", "UX/UI Design", "Prototyping", "Production Deployment", "Adobe", "Canva"],
      accent: "#D4A574",
      rotation: "-0.8deg",
      mt: "-10px",
    },
  ];

  return (
    <section
      id="shift"
      ref={ref}
      className="relative overflow-hidden py-20 sm:py-24 px-4 sm:px-6"
      style={{ background: "#FAF7F2" }}
    >
      {/* Animated background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Scattered doodle stars */}
      {[
        { top: "5%",  left: "3%",  size: 80,  rot: -20 },
        { top: "10%", right: "5%", size: 50,  rot: 15  },
        { bottom: "22%", left: "5%", size: 42, rot: 0  },
        { bottom: "8%",  right: "7%", size: 72, rot: 10},
      ].map((s, i) => (
        <span
          key={i}
          className="absolute select-none pointer-events-none"
          style={{
            fontFamily: "'Caveat', cursive",
            fontSize: s.size,
            color: "#C97B6330",
            top: s.top,
            left: (s as any).left,
            right: (s as any).right,
            bottom: (s as any).bottom,
            transform: `rotate(${s.rot}deg)`,
            zIndex: 1,
            lineHeight: 1,
          }}
        >
          {i % 2 === 0 ? "✦" : "✶"}
        </span>
      ))}

      <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>

        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="relative inline-block">
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(48px, 10vw, 96px)",
                color: "#6B1B2E",
                lineHeight: 1,
                margin: 0,
              }}
            >
              The Shift
            </h2>
            <svg
              viewBox="0 0 400 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ position: "absolute", bottom: -10, left: 0, width: "100%" }}
            >
              <path
                d="M2 9 C40 2,80 16,120 9 S200 2,240 9 S320 16,360 9 S390 4,398 9"
                stroke="#D4A574"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p style={{ fontFamily: "var(--font-body)", fontSize: 18, color: "#6B5B4F", marginTop: 24 }}>
            Not a pivot. An{" "}
            <em style={{ fontFamily: "var(--font-serif)", color: "#6B1B2E" }}>evolution</em>.
          </p>
          <p style={{ fontFamily: "var(--font-handwritten)", fontSize: 17, color: "#C97B63", marginTop: 6 }}>
            (each layer builds on the last ↓)
          </p>
        </motion.div>

        {/* Stage cards — stacked on mobile, grid on md+ */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {stages.map((stage, index) => (
            <motion.div
              key={stage.title}
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.18, duration: 0.75 }}
              style={{ position: "relative", marginTop: 0 }}
            >
              <div
                style={{
                  background: "white",
                  padding: "28px 24px 36px",
                  border: `2px solid #6B1B2E`,
                  boxShadow: `6px 6px 0 ${stage.accent}`,
                  transform: `rotate(${stage.rotation})`,
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `rotate(${stage.rotation}) translate(-3px,-3px)`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `9px 9px 0 #6B1B2E`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `rotate(${stage.rotation})`;
                  (e.currentTarget as HTMLElement).style.boxShadow = `6px 6px 0 ${stage.accent}`;
                }}
              >
                {/* Ghost number */}
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 110,
                    lineHeight: 1,
                    color: "#FAF7F2",
                    WebkitTextStroke: `2px ${stage.accent}18`,
                    position: "absolute",
                    top: -24,
                    right: 6,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  {index + 1}
                </span>

                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: stage.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <stage.Icon size={22} color="white" />
                </div>

                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 26, color: "#2D1B1B", margin: "0 0 4px" }}>
                  {stage.title}
                </h3>
                <p style={{ fontFamily: "var(--font-handwritten)", fontSize: 16, color: stage.accent, margin: "0 0 10px" }}>
                  {stage.subtitle}
                </p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#6B5B4F", lineHeight: 1.65, margin: "0 0 16px" }}>
                  {stage.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {stage.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: "4px 10px",
                        background: "#FAF7F2",
                        border: "1px solid #6B1B2E33",
                        fontSize: 11,
                        color: "#2D1B1B",
                        letterSpacing: "0.03em",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: 40,
                    height: 40,
                    background: "#FAF7F2",
                    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
                  }}
                />
              </div>

              {/* Arrow connector — desktop only */}
              {index < 2 && (
                <div
                  className="hidden md:flex"
                  style={{
                    position: "absolute",
                    top: "44%",
                    right: -18,
                    zIndex: 10,
                    width: 34,
                    height: 34,
                    background: "#D4A574",
                    border: "2px solid #6B1B2E",
                    borderRadius: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    color: "white",
                    fontWeight: 600,
                  }}
                >
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom insight quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.75, duration: 0.8 }}
          className="mt-12 sm:mt-16"
        >
          <div
            style={{
              maxWidth: 820,
              margin: "0 auto",
              background: "#6B1B2E",
              color: "#FAF7F2",
              padding: "clamp(28px, 5vw, 52px) clamp(20px, 5vw, 56px)",
              position: "relative",
              boxShadow: "8px 8px 0 #D4A574",
              border: "2px solid #2D1B1B",
              transform: "rotate(-0.4deg)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -16,
                left: "50%",
                transform: "translateX(-50%) rotate(-3deg)",
                width: 80,
                height: 24,
                background: "#D4A57455",
                border: "1px solid #D4A574",
              }}
            />
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(15px, 2.5vw, 22px)", lineHeight: 1.55, margin: 0 }}>
              Most people see operations, product, and design as separate lanes.
            </p>
            <p style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(18px, 3vw, 28px)", fontStyle: "italic", color: "#D4A574", margin: "18px 0 0" }}>
              I see them as layers of the same problem.
            </p>
            <p style={{ fontFamily: "var(--font-handwritten)", fontSize: 19, color: "#E8A5A0", margin: "16px 0 0" }}>
              ← and that's my unfair advantage
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
