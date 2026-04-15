import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import profileImage from "figma:asset/7fae8e88ae5df6c80fe030cdc91b8e3f1740ad32.png";

/* ─────────────────────────────────────────────────────────────────────────────
   REDESIGNED HERO
   Design decisions (senior POV):
   • Stronger typographic scale — name breaks the grid intentionally
   • Role tags moved into a pill-strip for cleaner scan
   • Image frame uses a ruled-paper / ticket-stub notch system for character
   • Scroll-parallax on image for depth on desktop
   • Floating annotation cards (stats) positioned as sticky notes on image
   • CTA pair: primary action + subtle secondary link
   • Thin ruled line across top of section as editorial separator
   • All motion is purposeful — no decorative spins; only entrance + scroll
   ───────────────────────────────────────────────────────────────────────── */

const BURGUNDY   = "#6B1B2E";
const TERRACOTTA = "#C97B63";
const GOLD       = "#D4A574";
const CREAM      = "#FAF7F2";
const INK        = "#2D1B1B";
const WARM_MUTED = "#6B5B4F";
const CREAM_DARK = "#EDE8E0";

/* Wavy SVG underline */
function WavyUnderline({ color = GOLD, width = 120 }: { color?: string; width?: number }) {
  return (
    <svg
      viewBox="0 0 120 10"
      style={{ width, height: 10, display: "block", marginTop: 4 }}
      preserveAspectRatio="none"
    >
      <path
        d="M 0 5 Q 15 1, 30 5 T 60 5 T 90 5 T 120 5"
        stroke={color}
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Tape strip decorating photo corners */
function TapeStrip({
  rotate,
  top,
  left,
  right,
}: {
  rotate: number;
  top?: string;
  left?: string;
  right?: string;
}) {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        right,
        width: 72,
        height: 20,
        background: `${GOLD}55`,
        backdropFilter: "blur(2px)",
        borderRadius: 2,
        transform: `rotate(${rotate}deg)`,
        pointerEvents: "none",
      }}
    />
  );
}

/* Sticky-note stat card floating on image */
function StatNote({
  value,
  label,
  rotate,
  style,
}: {
  value: string;
  label: string;
  rotate: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12, rotate: rotate - 4 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "absolute",
        background: CREAM,
        border: `1px solid ${CREAM_DARK}`,
        borderRadius: 4,
        padding: "8px 14px",
        boxShadow: "0 4px 24px rgba(107,27,46,0.12)",
        fontFamily: "var(--font-sans)",
        zIndex: 10,
        ...style,
      }}
    >
      <div
        style={{
          fontSize: "clamp(15px, 2vw, 18px)",
          fontWeight: 700,
          color: BURGUNDY,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: 11,
          color: WARM_MUTED,
          marginTop: 2,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, -60]);

  return (
    <section
      style={{
        minHeight: "100svh",
        position: "relative",
        paddingTop: 80,
        paddingBottom: 64,
        background: CREAM,
        overflow: "hidden",
      }}
    >
      {/* ── Top ruled line (editorial separator) ── */}
      <div
        style={{
          position: "absolute",
          top: 64,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(to right, transparent, ${GOLD}88, ${TERRACOTTA}66, transparent)`,
        }}
      />

      {/* ── Subtle grain overlay ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.028,
          pointerEvents: "none",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* ── Large background letter (editorial device) ── */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "8%",
          right: "-4%",
          fontFamily: "var(--font-handwritten)",
          fontSize: "clamp(200px, 28vw, 400px)",
          color: `${BURGUNDY}06`,
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.06em",
        }}
      >
        K
      </div>

      {/* ── Main layout ── */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px)",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/*
          MOBILE / TABLET: stacked — image on top, text below
          DESKTOP (lg): side-by-side, text left, image right
          Using a CSS class approach via inline responsive isn't ideal in TSX,
          so we use the className utilities from the existing Tailwind setup.
        */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-y-10 gap-x-12 xl:gap-x-20 items-center">

          {/* ══════════════════════════════════════════════
              PHOTO COLUMN — appears first on mobile, second on desktop
          ══════════════════════════════════════════════ */}
          <motion.div
            style={{ y: imageY }}
            className="order-first lg:order-last"
          >
            <div style={{ position: "relative", maxWidth: 400, margin: "0 auto" }}>

              {/* Photo frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  position: "relative",
                  background: "#fff",
                  padding: "10px 10px 40px",
                  boxShadow: "0 8px 48px rgba(107,27,46,0.13), 0 2px 8px rgba(107,27,46,0.06)",
                }}
              >
                {/* Tape strips on corners */}
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
                  }}
                />

                {/* Caption strip at bottom of polaroid */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 40,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-handwritten)",
                      fontSize: 14,
                      color: WARM_MUTED,
                    }}
                  >
                    Bangalore, IN
                  </span>
                  <span style={{ color: GOLD, fontSize: 12 }}>✦</span>
                  <span
                    style={{
                      fontFamily: "var(--font-handwritten)",
                      fontSize: 13,
                      color: TERRACOTTA,
                    }}
                  >
                    still figuring it out :)
                  </span>
                </div>
              </motion.div>

              {/* ── Floating stat notes ── */}
              <StatNote
                value="200+"
                label="workflows handled"
                rotate={-4}
                style={{ top: "18%", right: "-20px" }}
              />
              <StatNote
                value="15%"
                label="less rework"
                rotate={3}
                style={{ bottom: "22%", left: "-30px" }}
              />
              <StatNote
                value="1 yr"
                label="in operations"
                rotate={-2}
                style={{ bottom: "8%", right: "-24px" }}
              />

              {/* Sparkle badge */}
              <motion.div
                animate={{ rotate: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: "55%",
                  left: "-20px",
                  background: BURGUNDY,
                  color: CREAM,
                  borderRadius: "50%",
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `0 4px 20px ${BURGUNDY}55`,
                }}
              >
                <Sparkles size={18} />
              </motion.div>

              {/* Annotation: "built from chaos" */}
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
                style={{
                  position: "absolute",
                  top: "38%",
                  left: "-80px",
                  fontFamily: "var(--font-handwritten)",
                  fontSize: 15,
                  color: TERRACOTTA,
                  transform: "rotate(-8deg)",
                  whiteSpace: "nowrap",
                }}
                className="hidden lg:block"
              >
                built from chaos
              </motion.div>
            </div>
          </motion.div>

          {/* ══════════════════════════════════════════════
              TEXT COLUMN
          ══════════════════════════════════════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-last lg:order-first"
            style={{ paddingTop: "clamp(0px, 2vh, 32px)" }}
          >

            {/* ── Role pill strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginBottom: 20,
              }}
            >
              {["Operations", "Product", "Design"].map((tag, i) => (
                <span
                  key={tag}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: i === 0 ? BURGUNDY : WARM_MUTED,
                    border: `1px solid ${i === 0 ? BURGUNDY : CREAM_DARK}`,
                    borderRadius: 100,
                    padding: "4px 14px",
                    background: i === 0 ? `${BURGUNDY}0E` : "transparent",
                  }}
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* ── Name — oversized, grid-breaking ── */}
            <div style={{ position: "relative", marginBottom: "clamp(16px, 3vw, 28px)" }}>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                style={{
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "clamp(72px, 15vw, 148px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.03em",
                  color: BURGUNDY,
                  margin: 0,
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
                  }}
                >
                  Verma
                </span>
              </motion.h1>

              {/* Handwritten annotation — desktop only */}
              <motion.div
                initial={{ opacity: 0, rotate: -8 }}
                animate={{ opacity: 1, rotate: -4 }}
                transition={{ delay: 0.6 }}
                className="hidden sm:block"
                style={{
                  position: "absolute",
                  right: -80,
                  top: "50%",
                  fontFamily: "var(--font-handwritten)",
                  fontSize: "clamp(16px, 2vw, 22px)",
                  color: TERRACOTTA,
                  transform: "translateY(-50%) rotate(-5deg)",
                }}
              >
                this is me →
              </motion.div>
            </div>

            {/* ── Headline ── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              style={{ marginBottom: "clamp(14px, 2.5vw, 24px)" }}
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
                Turning messy systems into{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    color: BURGUNDY,
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  meaningful experiences
                  <WavyUnderline color={TERRACOTTA} width={260} />
                </em>
              </h2>
            </motion.div>

            {/* ── Tagline ── */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px, 1.6vw, 19px)",
                color: WARM_MUTED,
                lineHeight: 1.7,
                maxWidth: 480,
                margin: "0 0 clamp(24px, 4vw, 40px)",
              }}
            >
              I fix what's broken, build what's missing, and design what people
              actually want to use.
            </motion.p>

            {/* ── Divider ── */}
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
              <a
                href="#work"
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
                  transition: "background 0.2s, transform 0.2s, box-shadow 0.2s",
                  boxShadow: `0 4px 20px ${BURGUNDY}40`,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = TERRACOTTA;
                  el.style.transform = "scale(1.04)";
                  el.style.boxShadow = `0 8px 28px ${BURGUNDY}55`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = BURGUNDY;
                  el.style.transform = "scale(1)";
                  el.style.boxShadow = `0 4px 20px ${BURGUNDY}40`;
                }}
              >
                explore my work
                <ArrowRight size={15} style={{ transition: "transform 0.2s" }} />
              </a>

              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  color: BURGUNDY,
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(13px, 1.2vw, 15px)",
                  letterSpacing: "0.04em",
                  textDecoration: "none",
                  borderBottom: `1px solid ${GOLD}`,
                  paddingBottom: 2,
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = TERRACOTTA)
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = BURGUNDY)
                }
              >
                say hello
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom ruled line ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: `linear-gradient(to right, transparent, ${GOLD}44, transparent)`,
        }}
      />
    </section>
  );
}
