import type { CSSProperties, ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * IMPORTANT
 * 1) Put your image inside /public/profile.png
 * 2) Save this file as Hero.tsx
 * 3) Make sure framer-motion and lucide-react are installed
 *
 * npm install framer-motion lucide-react
 */

const profileImage = "/profile.png";

const C = {
  burgundy: "#6B1B2E",
  terracotta: "#C97B63",
  gold: "#D4A574",
  cream: "#FAF7F2",
  ink: "#2D1B1B",
  muted: "#6B5B4F",
  creamy: "#EDE8E0",
  peach: "#F5DDD0",
  sage: "#C8D5B9",
  mustard: "#E8C547",
};

type WashiTapeProps = {
  color: string;
  width?: number;
  height?: number;
  rotate?: number;
  style?: CSSProperties;
};

function WashiTape({
  color,
  width = 80,
  height = 20,
  rotate = 0,
  style,
}: WashiTapeProps) {
  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        background: color,
        transform: `rotate(${rotate}deg)`,
        opacity: 0.82,
        borderRadius: 2,
        zIndex: 10,
        pointerEvents: "none",
        ...style,
      }}
    >
      {[20, 40, 60].map((x) => (
        <div
          key={x}
          style={{
            position: "absolute",
            left: x,
            top: 0,
            width: 1,
            height: "100%",
            background: "rgba(255,255,255,0.3)",
          }}
        />
      ))}
    </div>
  );
}

type StampProps = {
  label: string;
  color: string;
  rotate?: number;
  style?: CSSProperties;
};

function Stamp({ label, color, rotate = 0, style }: StampProps) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        border: `2px solid ${color}`,
        borderRadius: 3,
        padding: "3px 10px",
        fontFamily: "var(--font-sans, Inter, sans-serif)",
        fontSize: 10,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        color,
        transform: `rotate(${rotate}deg)`,
        opacity: 0.88,
        position: "relative",
        ...style,
      }}
    >
      {label}
      <div
        style={{
          position: "absolute",
          inset: 2,
          border: `1px solid ${color}`,
          borderRadius: 1,
          opacity: 0.35,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

type StickyNoteProps = {
  children: ReactNode;
  bg: string;
  rotate?: number;
  delay?: number;
  style?: CSSProperties;
};

function StickyNote({
  children,
  bg,
  rotate = 0,
  delay = 0,
  style,
}: StickyNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, rotate: rotate - 8 }}
      animate={{ opacity: 1, y: 0, rotate }}
      transition={{ delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        background: bg,
        padding: "10px 14px 14px",
        boxShadow: "2px 4px 16px rgba(45,27,27,0.18)",
        zIndex: 20,
        pointerEvents: "none",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "0 0 14px 14px",
          borderColor: `transparent transparent rgba(0,0,0,0.10) transparent`,
        }}
      />
      {children}
    </motion.div>
  );
}

type DoodleCircleProps = {
  size?: number;
  color?: string;
  style?: CSSProperties;
};

function DoodleCircle({
  size = 100,
  color = C.terracotta,
  style,
}: DoodleCircleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
    >
      <ellipse
        cx="50"
        cy="50"
        rx="44"
        ry="40"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeDasharray="6 3"
        style={{ transform: "rotate(-8deg)", transformOrigin: "50% 50%" }}
      />
    </svg>
  );
}

function Highlight({
  children,
  color,
}: {
  children: ReactNode;
  color: string;
}) {
  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span
        style={{
          position: "absolute",
          bottom: "0.05em",
          left: "-3px",
          right: "-3px",
          height: "0.52em",
          background: color,
          opacity: 0.38,
          transform: "skewX(-4deg) rotate(-1deg)",
          borderRadius: 2,
          zIndex: 0,
        }}
      />
      <span style={{ position: "relative", zIndex: 1 }}>{children}</span>
    </span>
  );
}

function StarDoodle({
  size = 20,
  color = C.gold,
  style,
}: {
  size?: number;
  color?: string;
  style?: CSSProperties;
}) {
  const pts = Array.from({ length: 5 }, (_, i) => {
    const a = (i * 4 * Math.PI) / 5 - Math.PI / 2;
    return `${50 + 40 * Math.cos(a)},${50 + 40 * Math.sin(a)}`;
  }).join(" ");

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      style={{
        position: "absolute",
        pointerEvents: "none",
        ...style,
      }}
    >
      <polygon
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhotoCollage() {
  return (
    <div
      style={{
        position: "relative",
        padding: "52px 80px 72px 40px",
        overflow: "visible",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "#fff",
          padding: "10px 10px 52px",
          boxShadow:
            "4px 8px 32px rgba(45,27,27,0.15), 1px 2px 6px rgba(45,27,27,0.07)",
          transform: "rotate(-1.5deg)",
          zIndex: 2,
        }}
      >
        <WashiTape
          color={`${C.gold}BB`}
          width={70}
          height={20}
          rotate={-8}
          style={{ top: -10, left: 24, zIndex: 12 }}
        />
        <WashiTape
          color={`${C.peach}EE`}
          width={58}
          height={18}
          rotate={6}
          style={{ top: -10, right: 36, zIndex: 12 }}
        />

        <img
          src={profileImage}
          alt="Kajal Verma"
          style={{
            width: "100%",
            height: "clamp(260px, 40vw, 480px)",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 52,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            padding: "0 16px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-handwritten, cursive)",
              fontSize: 13,
              color: C.muted,
            }}
          >
            Bangalore, IN
          </span>
          <span style={{ color: C.gold, fontSize: 10 }}>✦</span>
          <span
            style={{
              fontFamily: "var(--font-handwritten, cursive)",
              fontSize: 12,
              color: C.terracotta,
            }}
          >
            still figuring it out :)
          </span>
        </div>
      </div>

      <StickyNote
        bg="#FFF8DC"
        rotate={5}
        delay={0.9}
        style={{ top: 4, right: 4, width: 124 }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            fontSize: 26,
            fontWeight: 800,
            color: C.burgundy,
            lineHeight: 1,
          }}
        >
          200+
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            fontSize: 9,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.muted,
            marginTop: 4,
          }}
        >
          workflows handled
        </div>
        <svg viewBox="0 0 100 6" style={{ width: "100%", height: 6, marginTop: 6 }}>
          <path
            d="M 0 3 Q 12 0,25 3 Q 38 6,50 3 Q 62 0,75 3 Q 88 6,100 3"
            stroke={C.gold}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </StickyNote>

      <StickyNote
        bg={C.peach}
        rotate={-6}
        delay={1.05}
        style={{ top: "38%", left: 0, width: 112 }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            fontSize: 24,
            fontWeight: 800,
            color: C.burgundy,
            lineHeight: 1,
          }}
        >
          15%
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            fontSize: 9,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: C.muted,
            marginTop: 4,
          }}
        >
          less rework
        </div>
        <svg viewBox="0 0 80 6" style={{ width: "100%", height: 6, marginTop: 6 }}>
          <path
            d="M 0 3 Q 10 6,20 3 Q 30 0,40 3 Q 50 6,60 3 Q 70 0,80 3"
            stroke={C.terracotta}
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </StickyNote>

      <StickyNote
        bg={C.sage}
        rotate={3}
        delay={1.2}
        style={{ bottom: 4, right: 4, width: 108 }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            fontSize: 24,
            fontWeight: 800,
            color: C.ink,
            lineHeight: 1,
          }}
        >
          1 yr
        </div>
        <div
          style={{
            fontFamily: "var(--font-sans, Inter, sans-serif)",
            fontSize: 9,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#4a5f3a",
            marginTop: 4,
          }}
        >
          in operations
        </div>
        <svg viewBox="0 0 80 6" style={{ width: "100%", height: 6, marginTop: 6 }}>
          <path
            d="M 0 3 Q 10 0,20 3 Q 30 6,40 3 Q 50 0,60 3 Q 70 6,80 3"
            stroke="#7a9a6a"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </StickyNote>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="hidden lg:block"
        style={{
          position: "absolute",
          bottom: 12,
          left: 8,
          zIndex: 15,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-handwritten, cursive)",
            fontSize: 14,
            color: C.terracotta,
            transform: "rotate(-10deg)",
            display: "inline-block",
            whiteSpace: "nowrap",
            marginBottom: 2,
          }}
        >
          built from chaos
        </span>
        <svg
          viewBox="0 0 70 36"
          width="70"
          height="36"
          style={{ display: "block", marginTop: 2 }}
        >
          <path
            d="M 4 32 Q 18 20, 36 14 Q 50 8, 62 6"
            stroke={C.terracotta}
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 54 2 L 62 6 L 56 13"
            stroke={C.terracotta}
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      <WashiTape
        color={`${C.sage}AA`}
        width={54}
        height={16}
        rotate={-14}
        style={{ bottom: 60, left: 28, zIndex: 5 }}
      />

      <motion.div
        animate={{ rotate: [0, -10, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: 20,
          left: 50,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background: C.burgundy,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: `2px 4px 0 ${C.ink}33`,
          zIndex: 25,
          fontSize: 18,
          color: C.cream,
          pointerEvents: "none",
        }}
      >
        ✦
      </motion.div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        position: "relative",
        background: C.cream,
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          pointerEvents: "none",
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />

      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            border: `2px dashed ${C.gold}28`,
          }}
        />
        {[160, 220, 280, 340, 400].map((y) => (
          <div
            key={y}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: y,
              height: 1,
              background: `${C.gold}14`,
            }}
          />
        ))}
        {[
          [8, 42],
          [91, 18],
          [5, 72],
          [94, 60],
          [52, 6],
          [76, 91],
        ].map(([x, y], i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${x}%`,
              top: `${y}%`,
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: [C.gold, C.terracotta, C.burgundy][i % 3],
              opacity: 0.22,
            }}
          />
        ))}
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(24px, 5vw, 64px) clamp(20px, 5vw, 72px)",
          position: "relative",
          zIndex: 1,
          minHeight: "calc(100svh - 80px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="grid grid-cols-1 items-center gap-y-6 lg:grid-cols-[1fr_440px] lg:gap-x-10 xl:grid-cols-[1fr_480px] xl:gap-x-16">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-last lg:order-first"
            style={{ paddingBottom: 24 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 22 }}
            >
              <Stamp label="Operations" color={C.burgundy} rotate={-2} />
              <Stamp label="Product" color={C.muted} rotate={1} />
              <Stamp label="Design" color={C.terracotta} rotate={-1} />
            </motion.div>

            <div style={{ position: "relative", marginBottom: 4 }}>
              <DoodleCircle
                size={190}
                color={`${C.gold}70`}
                style={{ top: -20, left: -16 }}
              />

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.75 }}
                style={{
                  fontFamily: "var(--font-handwritten, cursive)",
                  fontSize: "clamp(72px, 13.5vw, 148px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.03em",
                  color: C.burgundy,
                  margin: 0,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span style={{ display: "block" }}>Kajal</span>
                <span
                  style={{
                    display: "block",
                    marginTop: "0.02em",
                    color: "transparent",
                    WebkitTextStroke: `2px ${C.burgundy}`,
                  }}
                >
                  Verma
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
                className="hidden sm:block"
                style={{
                  position: "absolute",
                  left: "clamp(220px, 55%, 480px)",
                  bottom: "10%",
                  fontFamily: "var(--font-handwritten, cursive)",
                  fontSize: "clamp(14px, 1.6vw, 20px)",
                  color: C.terracotta,
                  transform: "rotate(-5deg)",
                  whiteSpace: "nowrap",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              >
                ← this is me
              </motion.div>

              <StarDoodle
                size={22}
                color={C.gold}
                style={{ bottom: 8, right: "22%" }}
              />
              <StarDoodle
                size={13}
                color={C.terracotta}
                style={{ top: 8, right: "36%" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                margin: "clamp(16px, 2.5vw, 26px) 0 clamp(10px, 1.5vw, 14px)",
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-body, Inter, sans-serif)",
                  fontSize: "clamp(18px, 2.6vw, 32px)",
                  color: C.ink,
                  lineHeight: 1.35,
                  margin: 0,
                  fontWeight: 400,
                }}
              >
                Turning messy systems into <br className="hidden sm:block" />
                <Highlight color={C.mustard}>
                  <em style={{ fontStyle: "italic", color: C.burgundy }}>
                    meaningful experiences
                  </em>
                </Highlight>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              style={{
                fontFamily: "var(--font-body, Inter, sans-serif)",
                fontSize: "clamp(14px, 1.35vw, 18px)",
                color: C.muted,
                lineHeight: 1.75,
                maxWidth: 420,
                margin: "0 0 clamp(16px, 2.8vw, 28px)",
              }}
            >
              I fix what&apos;s broken, build what&apos;s missing, and design what
              people actually want to use.
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                transformOrigin: "left",
                marginBottom: "clamp(18px, 2.5vw, 28px)",
              }}
            >
              <svg
                viewBox="0 0 320 14"
                style={{ width: "min(320px,100%)", height: 14, display: "block" }}
              >
                <path
                  d="M 0 8 Q 16 3,32 8 Q 48 13,64 7 Q 80 2,96 8 Q 112 13,128 6 Q 144 1,160 8 Q 176 13,192 7 Q 208 2,224 8 Q 240 13,256 6 Q 272 2,288 8 Q 304 13,320 7"
                  stroke={C.gold}
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 20 }}
            >
              <a
                href="#work"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: C.burgundy,
                  color: C.cream,
                  padding: "13px clamp(20px,3vw,30px)",
                  borderRadius: 100,
                  fontFamily: "var(--font-sans, Inter, sans-serif)",
                  fontSize: "clamp(11px, 1vw, 13px)",
                  letterSpacing: "0.08em",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  boxShadow: `3px 5px 0px ${C.ink}33`,
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = C.terracotta;
                  el.style.transform = "translate(-2px,-2px)";
                  el.style.boxShadow = `5px 7px 0 ${C.ink}44`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = C.burgundy;
                  el.style.transform = "translate(0,0)";
                  el.style.boxShadow = `3px 5px 0 ${C.ink}33`;
                }}
              >
                explore my work <ArrowRight size={13} />
              </a>

              <a
                href="#contact"
                style={{
                  fontFamily: "var(--font-handwritten, cursive)",
                  fontSize: "clamp(16px, 1.8vw, 22px)",
                  color: C.burgundy,
                  textDecoration: "none",
                  position: "relative",
                  paddingBottom: 4,
                }}
              >
                say hello ✦
                <svg
                  viewBox="0 0 100 8"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: 8,
                  }}
                  preserveAspectRatio="none"
                >
                  <path
                    d="M 0 6 Q 12 2,25 6 Q 38 10,50 5 Q 62 1,75 6 Q 88 10,100 5"
                    stroke={C.terracotta}
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="order-first lg:order-last"
            style={{ overflow: "visible" }}
          >
            <PhotoCollage />
          </motion.div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 20"
          style={{ width: "100%", height: 20 }}
          preserveAspectRatio="none"
        >
          <path
            d="M 0 10 Q 90 3,180 10 Q 270 18,360 10 Q 450 3,540 10 Q 630 18,720 10 Q 810 3,900 10 Q 990 18,1080 10 Q 1170 3,1260 10 Q 1350 18,1440 10 L 1440 20 L 0 20 Z"
            fill={C.creamy}
          />
        </svg>
      </div>
    </section>
  );
}
