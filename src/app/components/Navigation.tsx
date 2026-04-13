import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "About",     href: "#about"    },
  { label: "The Shift", href: "#shift"    },
  { label: "Work",      href: "#work"     },
  { label: "Thinking",  href: "#thinking" },
];

/* ── Animated heart ── */
function Heart() {
  return (
    <motion.svg
      viewBox="0 0 18 18"
      fill="none"
      style={{ width: 18, height: 18, flexShrink: 0 }}
      animate={{ scale: [1, 1.22, 1, 1.12, 1] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path
        d="M9 15.5S2 11 2 6.5A4 4 0 0 1 9 4.3 4 4 0 0 1 16 6.5C16 11 9 15.5 9 15.5z"
        fill="#C97B63"
      />
    </motion.svg>
  );
}

/* ── Dot separator ── */
function Dot() {
  return (
    <span
      style={{
        width: 3,
        height: 3,
        borderRadius: "50%",
        background: "#D4A57488",
        display: "inline-block",
        flexShrink: 0,
      }}
    />
  );
}

/* ── Desktop nav link with animated underline ── */
function NavLink({ label, href }: { label: string; href: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        color: hovered ? "#6B1B2E" : "#2D1B1B",
        textDecoration: "none",
        padding: "6px 12px",
        letterSpacing: "0.02em",
        position: "relative",
        transition: "color 0.2s",
      }}
    >
      {label}
      {/* Animated underline */}
      <motion.span
        initial={false}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        style={{
          position: "absolute",
          bottom: 2,
          left: 12,
          right: 12,
          height: 1.5,
          background: "#D4A574",
          transformOrigin: "left",
          display: "block",
        }}
      />
    </a>
  );
}

/* ── CTA button with dot ── */
function CtaButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        marginLeft: 8,
        padding: "9px 20px",
        background: hovered ? "transparent" : "#6B1B2E",
        color: hovered ? "#6B1B2E" : "#FAF7F2",
        fontFamily: "var(--font-sans)",
        fontSize: 13,
        letterSpacing: "0.03em",
        textDecoration: "none",
        borderRadius: 100,
        border: "2px solid #6B1B2E",
        transition: "all 0.22s ease",
        display: "flex",
        alignItems: "center",
        gap: 7,
        whiteSpace: "nowrap",
      }}
    >
      <motion.span
        animate={{ scale: hovered ? 1.5 : 1, background: hovered ? "#C97B63" : "#D4A574" }}
        transition={{ duration: 0.22 }}
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "#D4A574",
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      Let's Talk
    </a>
  );
}

/* ── Hamburger icon ── */
function Hamburger({ open }: { open: boolean }) {
  const variants = {
    top:    { closed: { rotate: 0,   y: 0    }, open: { rotate: 45,  y: 6.5  } },
    mid:    { closed: { scaleX: 1,   opacity: 1 }, open: { scaleX: 0, opacity: 0 } },
    bottom: { closed: { rotate: 0,   y: 0    }, open: { rotate: -45, y: -6.5 } },
  };
  const lineStyle: React.CSSProperties = {
    width: 20,
    height: 1.5,
    background: "#6B1B2E",
    borderRadius: 2,
    display: "block",
    transformOrigin: "center",
  };
  return (
    <motion.button
      whileHover={{ rotate: open ? 0 : 6 }}
      style={{
        width: 36,
        height: 36,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 4,
      }}
    >
      <motion.span variants={variants.top}    initial="closed" animate={open ? "open" : "closed"} transition={{ duration: 0.25 }} style={lineStyle} />
      <motion.span variants={variants.mid}    initial="closed" animate={open ? "open" : "closed"} transition={{ duration: 0.25 }} style={lineStyle} />
      <motion.span variants={variants.bottom} initial="closed" animate={open ? "open" : "closed"} transition={{ duration: 0.25 }} style={lineStyle} />
    </motion.button>
  );
}

/* ── Main Navigation ── */
export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(250,247,242,0.92)" : "#FAF7F2",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: "1.5px solid #6B1B2E18",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
        boxShadow: scrolled ? "0 2px 20px #6B1B2E08" : "none",
      }}
    >
      {/* ── Desktop bar ── */}
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 28px",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontFamily: "var(--font-handwritten)",
            fontSize: 20,
            color: "#6B1B2E",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 8,
            transition: "color 0.2s",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C97B63")}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B1B2E")}
        >
          A small journal of things I've designed
          <Heart />
        </Link>

        {/* Desktop links — hidden on mobile */}
        <div
          className="hidden md:flex"
          style={{ alignItems: "center", gap: 4 }}
        >
          {navLinks.map((link, i) => (
            <span key={link.href} style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {i > 0 && <Dot />}
              <NavLink label={link.label} href={link.href} />
            </span>
          ))}
          <CtaButton />
        </div>

        {/* Hamburger — mobile only */}
        <div
          className="flex md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Hamburger open={menuOpen} />
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            style={{ overflow: "hidden", background: "#FAF7F2", borderTop: "1px solid #6B1B2E0C" }}
          >
            <div style={{ padding: "8px 24px 24px", display: "flex", flexDirection: "column", gap: 0 }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.22 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    color: "#2D1B1B",
                    textDecoration: "none",
                    padding: "11px 0",
                    borderBottom: "1px solid #6B1B2E0C",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B1B2E")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#2D1B1B")}
                >
                  {link.label}
                  <span style={{ color: "#D4A574", fontSize: 16 }}>→</span>
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.05 }}
                onClick={() => setMenuOpen(false)}
                style={{
                  marginTop: 16,
                  padding: "13px 20px",
                  background: "#6B1B2E",
                  color: "#FAF7F2",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  textAlign: "center",
                  textDecoration: "none",
                  borderRadius: 100,
                  display: "block",
                  letterSpacing: "0.02em",
                }}
              >
                Let's Talk ♡
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
