import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import profileImage from "figma:asset/7fae8e88ae5df6c80fe030cdc91b8e3f1740ad32.png";

const BURGUNDY   = "#6B1B2E";
const TERRACOTTA = "#C97B63";
const GOLD       = "#D4A574";
const CREAM      = "#FAF7F2";
const INK        = "#2D1B1B";
const WARM_MUTED = "#6B5B4F";
const CREAM_DARK = "#EDE8E0";

/* ─────────────────────────── small helpers ─────────────────────────── */

function WavyUnderline({ color = GOLD, width = 120 }: { color?: string; width?: number }) {
  return (
    <svg
      viewBox="0 0 120 12"
      style={{ width, height: 12, display: "block", marginTop: 2 }}
      preserveAspectRatio="none"
    >
      <path
        d="M0 6 Q10 1,20 6 T40 6 T60 6 T80 6 T100 6 T120 6"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}


function TapeStrip({ rotate, top, left, right }: { rotate: number; top?: string; left?: string; right?: string }) {
  return (
    <div
      style={{
        position: "absolute",
        top, left, right,
        width: 72, height: 20,
        background: `${GOLD}55`,
        backdropFilter: "blur(2px)",
        borderRadius: 2,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: "none",
      }}
    />
  );
}

function StickyNote({
  value, label, rotate, style,
}: {
  value: string; label: string; rotate: number; style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7, rotate: rotate - 10 }}
      animate={{ opacity: 1, scale: 1, rotate }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.1, rotate: rotate + 2, zIndex: 20 }}
      style={{
        position: "absolute",
        background: CREAM,
        border: `1.5px solid ${CREAM_DARK}`,
        borderRadius: 4,
        padding: "8px 14px",
        boxShadow: `0 4px 20px rgba(107,27,46,0.14), 3px 3px 0 ${GOLD}55`,
        fontFamily: "var(--font-sans)",
        cursor: "default",
        zIndex: 10,
        ...style,
      }}
    >
      <div style={{ fontSize: "clamp(15px, 2vw, 19px)", fontWeight: 700, color: BURGUNDY, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
        {value}
      </div>
      <div style={{ fontSize: 10, color: WARM_MUTED, marginTop: 2, letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </div>
    </motion.div>
  );
}

/* ──────────────────────────── main export ──────────────────────────── */

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -60]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left - rect.width / 2) / 30);
    mouseY.set((e.clientY - rect.top - rect.height / 2) / 30);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        minHeight: "100svh",
        position: "relative",
        paddingTop: 80,
        paddingBottom: 64,
        background: CREAM,
        overflow: "hidden",
      }}
    >
      {/* ── Google Fonts: Cormorant Garamond ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');
        .name-cormorant {
          font-family: 'Cormorant Garamond', Georgia, serif !important;
        }
      `}</style>

      {/* ── ruled lines ── */}
      <div style={{ position: "absolute", top: 64, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${GOLD}88, ${TERRACOTTA}66, transparent)` }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${GOLD}44, transparent)` }} />

      {/* ── grain overlay ── */}
      <div aria-hidden style={{ position: "absolute", inset: 0, opacity: 0.028, pointerEvents: "none", backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      {/* ── background ghost letter ── */}
      <div aria-hidden style={{ position: "absolute", top: "6%", right: "-5%", fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(200px, 28vw, 420px)", color: `${BURGUNDY}05`, lineHeight: 1, userSelect: "none", pointerEvents: "none", letterSpacing: "-0.06em" }}>
        K
      </div>

      {/* ── scattered doodle dots (decorative) ── */}
      {[
        { top: "18%", left: "7%", size: 6 },
        { top: "72%", left: "4%", size: 4 },
        { top: "30%", right: "6%", size: 5 },
        { top: "82%", right: "10%", size: 7 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: dot.size, height: dot.size,
            borderRadius: "50%",
            background: i % 2 === 0 ? TERRACOTTA : GOLD,
            opacity: 0.4,
            ...dot,
          } as React.CSSProperties}
        />
      ))}

      {/* ── main layout ── */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(20px, 5vw, 64px)", position: "relative", zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-y-10 gap-x-12 xl:gap-x-20 items-center">

          {/* ══ PHOTO COLUMN ══ */}
          <motion.div style={{ y: imageY, x: springX }} className="order-first lg:order-last">
            <div style={{ position: "relative", maxWidth: 400, margin: "0 auto" }}>

              {/* polaroid card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ rotate: 1, scale: 1.015 }}
                style={{
                  position: "relative",
                  background: "#fff",
                  padding: "10px 10px 44px",
                  boxShadow: "0 8px 48px rgba(107,27,46,0.14), 0 2px 8px rgba(107,27,46,0.07)",
                }}
              >
                <TapeStrip rotate={-6} top="-10px" left="32px" />
                <TapeStrip rotate={7}  top="-10px" right="32px" />

                <img
                  src={profileImage}
                  alt="Kajal Verma"
                  style={{
                    width: "100%",
                    height: "clamp(300px, 50vw, 560px)",
                    objectFit: "cover",
                    objectPosition: "top",
                    display: "block",
                    /* ── sharpness fixes ── */
                    imageRendering: "auto",
                    WebkitFontSmoothing: "antialiased",
                    transform: "translateZ(0)",          /* force GPU layer, prevents subpixel blur */
                    backfaceVisibility: "hidden",
                    willChange: "transform",
                  } as React.CSSProperties}
                />

                {/* caption strip */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 44, display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
                  <span style={{ fontFamily: "var(--font-handwritten)", fontSize: 14, color: WARM_MUTED }}>Bangalore, IN</span>
                  <span style={{ color: GOLD, fontSize: 11 }}>✦</span>
                  <span style={{ fontFamily: "var(--font-handwritten)", fontSize: 13, color: TERRACOTTA }}>still figuring it out :)</span>
                </div>
              </motion.div>

              {/* sticky stat notes */}
              <StickyNote value="200+" label="workflows handled" rotate={-4} style={{ top: "12%", right: "-80px" }} />
              <StickyNote value="15%" label="less rework" rotate={3} style={{ bottom: "22%", left: "-30px" }} />
              <StickyNote value="1 yr" label="in operations" rotate={-2} style={{ bottom: "8%", right: "-35px" }} />

              {/* scribble annotation */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                className="hidden lg:block"
                style={{
                  position: "absolute",
                  top: "38%",
                  left: "-44px",
                  fontFamily: "var(--font-handwritten)",
                  fontSize: 15,
                  color: TERRACOTTA,
                  transform: "rotate(-10deg)",
                  whiteSpace: "nowrap",
                }}
              >
                built from chaos ↓
              </motion.div>
            </div>
          </motion.div>

          {/* ══ TEXT COLUMN ══ */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-last lg:order-first"
            style={{ paddingTop: "clamp(0px, 2vh, 32px)" }}
          >

            {/* ── availability badge ── */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#fff",
                border: "1.5px solid rgba(45,106,79,0.28)",
                borderRadius: 100,
                padding: "6px 14px 6px 10px",
                marginBottom: 20,
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 500,
                color: "#1B4332",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                boxShadow: "0 2px 12px rgba(45,106,79,0.10)",
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#2D6A4F", flexShrink: 0, animation: "availPulse 2s ease-in-out infinite" }} />
              Open to full-time &amp; freelance
              <style>{`@keyframes availPulse { 0%,100%{box-shadow:0 0 0 0 rgba(45,106,79,0.4)} 50%{box-shadow:0 0 0 5px rgba(45,106,79,0)} }`}</style>
            </motion.div>

            {/* ── role pills ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}
            >
              {["Operations", "Product", "Design"].map((tag) => (
                <motion.span
                  key={tag}
                  whileHover={{ scale: 1.06, borderColor: TERRACOTTA, color: TERRACOTTA }}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: WARM_MUTED,
                    border: `1px solid ${CREAM_DARK}`,
                    borderRadius: 100,
                    padding: "4px 14px",
                    background: "transparent",
                    cursor: "default",
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* ── name ── */}
            <div style={{ position: "relative", marginBottom: "clamp(16px, 3vw, 28px)" }}>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "clamp(72px, 15vw, 148px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.02em",
                  color: BURGUNDY,
                  margin: 0,
                  position: "relative",
                  display: "inline-block",
                  fontWeight: 600,
                  fontStyle: "italic",
                }}
              >
                <span style={{ display: "block" }}>Kajal</span>
                <span
                  style={{
                    display: "block",
                    marginTop: "-0.04em",
                    WebkitTextStroke: `1.5px ${BURGUNDY}`,
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                    fontStyle: "italic",
                  }}
                >
                  Verma
                </span>
              </motion.h1>

              {/* "this is me" annotation */}
              <motion.div
                initial={{ opacity: 0, rotate: -8 }}
                animate={{ opacity: 1, rotate: -5 }}
                transition={{ delay: 0.7 }}
                className="hidden sm:block"
                style={{
                  position: "absolute",
                  right: -80,
                  top: "50%",
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "clamp(15px, 1.8vw, 21px)",
                  color: TERRACOTTA,
                  transform: "translateY(-50%) rotate(-5deg)",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                hi, that's me →
              </motion.div>
            </div>

            {/* ── headline ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{ marginBottom: "clamp(14px, 2.5vw, 22px)" }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(20px, 3.2vw, 36px)",
                  color: INK,
                  lineHeight: 1.3,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                I take messy, tangled systems and{" "}
                <em style={{ fontStyle: "italic", color: BURGUNDY, position: "relative", display: "inline-block" }}>
                  make them make sense.
                  <WavyUnderline color={TERRACOTTA} width={270} />
                </em>
              </h2>
            </motion.div>

            {/* ── tagline with inline highlight ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.6vw, 19px)",
                color: WARM_MUTED,
                lineHeight: 1.75,
                maxWidth: 480,
                margin: "0 0 clamp(24px, 4vw, 40px)",
              }}
            >
              Part fixer, part builder, part designer — I thrive at the intersection
              of{" "}
              <span style={{ background: `${GOLD}33`, padding: "1px 6px", borderRadius: 4, color: INK }}>chaos</span>
              {" "}and{" "}
              <span style={{ background: `${TERRACOTTA}22`, padding: "1px 6px", borderRadius: 4, color: INK }}>clarity</span>.{" "}
              Currently hunting for a team that appreciates both.
            </motion.p>

            {/* ── divider ── */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              style={{
                transformOrigin: "left",
                height: 1,
                maxWidth: 320,
                background: `linear-gradient(to right, ${GOLD}, transparent)`,
                marginBottom: "clamp(20px, 3vw, 32px)",
              }}
            />

            {/* ── CTA row ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 16 }}
            >
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: BURGUNDY,
                  color: CREAM,
                  padding: "13px clamp(20px, 3vw, 32px)",
                  borderRadius: 100,
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(13px, 1.2vw, 15px)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  boxShadow: `0 4px 20px ${BURGUNDY}40`,
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = TERRACOTTA;
                  el.style.boxShadow = `0 8px 28px ${BURGUNDY}55`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = BURGUNDY;
                  el.style.boxShadow = `0 4px 20px ${BURGUNDY}40`;
                }}
              >
                see my work
                <ArrowRight size={15} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ gap: "10px" } as any}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: BURGUNDY,
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(13px, 1.2vw, 15px)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  borderBottom: `1.5px solid ${GOLD}`,
                  paddingBottom: 2,
                  transition: "color 0.2s, gap 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = TERRACOTTA)}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = BURGUNDY)}
              >
                <Sparkles size={13} />
                say hello
              </motion.a>
            </motion.div>

            {/* ── fun footnote ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              style={{
                fontFamily: "var(--font-handwritten)",
                fontSize: 13,
                color: `${WARM_MUTED}88`,
                marginTop: "clamp(18px, 2.5vw, 28px)",
                letterSpacing: "0.01em",
              }}
            >
              * no systems were harmed in the making of this portfolio
            </motion.p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
