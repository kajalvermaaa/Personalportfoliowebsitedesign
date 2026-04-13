import { useEffect, useRef, useState } from "react";

/* ─── typewriter hook ─── */
function useTypewriter(words: string[], speed = 90, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = words[wi];
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(cur.slice(0, ci + 1));
        if (ci + 1 === cur.length) setTimeout(() => setDel(true), pause);
        else setCi((x) => x + 1);
      } else {
        setDisplay(cur.slice(0, ci - 1));
        if (ci - 1 === 0) { setDel(false); setWi((x) => (x + 1) % words.length); setCi(0); }
        else setCi((x) => x - 1);
      }
    }, del ? 55 : speed);
    return () => clearTimeout(t);
  }, [ci, del, wi, words, speed, pause]);

  return display;
}

/* ─── component ─── */
export default function HeroSection() {
  const roles = ["a UI/UX Designer 🎨", "a Frontend Dev 💻", "a Creative Coder ✨", "a Figma Wizard 🔮"];
  const role = useTypewriter(roles);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const h = (e: MouseEvent) => { if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  return (
    <>
      <style>{`
        /* ── Google Fonts ── */
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&family=Fraunces:ital,wght@0,700;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --ks-cream:   #fdf6ec;
          --ks-ink:     #1a1209;
          --ks-coral:   #ff6b5b;
          --ks-mint:    #5ccfab;
          --ks-lemon:   #f7e360;
          --ks-lav:     #c9b8f7;
          --ks-blush:   #f9c4d2;
          --ks-tape:    rgba(255,255,220,0.76);
        }

        /* NAV */
        .ks-nav {
          position:fixed; top:0; left:0; right:0; z-index:100;
          display:flex; align-items:center; justify-content:space-between;
          padding:15px 5%;
          background:rgba(253,246,236,0.91); backdrop-filter:blur(8px);
          border-bottom:2px dashed rgba(26,18,9,.12);
        }
        .ks-logo {
          font-family:'Caveat',cursive; font-size:1.5rem; font-weight:700;
          color:var(--ks-ink); text-decoration:none;
        }
        .ks-logo span { color:var(--ks-coral); }
        .ks-links { display:flex; gap:26px; list-style:none; }
        .ks-links a {
          font-family:'DM Sans',sans-serif; font-size:.9rem; font-weight:500;
          color:var(--ks-ink); text-decoration:none; opacity:.7; transition:opacity .2s;
        }
        .ks-links a:hover, .ks-links a.ks-active { opacity:1; color:var(--ks-coral); }
        .ks-burger {
          display:none; flex-direction:column; gap:5px;
          background:none; border:none; cursor:pointer; padding:4px;
        }
        .ks-burger span { display:block; width:22px; height:2px; background:var(--ks-ink); border-radius:2px; }
        .ks-mob-menu {
          display:none; flex-direction:column;
          position:fixed; top:58px; left:0; right:0; z-index:99;
          background:var(--ks-cream); padding:18px 6%; gap:16px;
          border-bottom:2px dashed rgba(26,18,9,.12);
        }
        .ks-mob-menu.ks-open { display:flex; }
        .ks-mob-menu a {
          font-family:'DM Sans',sans-serif; font-size:1rem; font-weight:500;
          color:var(--ks-ink); text-decoration:none;
        }

        /* HERO */
        .ks-hero {
          min-height:100vh; padding:100px 5% 70px;
          display:grid; grid-template-columns:1fr 1fr;
          gap:48px; align-items:center;
          background:var(--ks-cream);
          position:relative; overflow:hidden;
          font-family:'DM Sans',sans-serif;
        }
        /* dot-paper texture */
        .ks-hero::before {
          content:''; position:absolute; inset:0; z-index:0; pointer-events:none;
          background-image:radial-gradient(circle, rgba(150,130,100,.13) 1px, transparent 1px);
          background-size:26px 26px;
        }
        /* torn bottom */
        .ks-hero::after {
          content:''; position:absolute; bottom:-2px; left:0; right:0; height:30px;
          background:var(--ks-cream); z-index:2;
          clip-path:polygon(0% 0%,3% 100%,6% 20%,9% 90%,12% 10%,15% 80%,18% 15%,21% 95%,24% 5%,27% 85%,30% 20%,33% 100%,36% 10%,39% 90%,42% 0%,45% 85%,48% 15%,51% 100%,54% 5%,57% 90%,60% 10%,63% 80%,66% 25%,69% 95%,72% 5%,75% 85%,78% 15%,81% 90%,84% 5%,87% 75%,90% 20%,93% 100%,96% 10%,100% 50%,100% 0%);
        }

        /* LEFT */
        .ks-left { position:relative; z-index:1; }

        .ks-tag {
          display:inline-flex; align-items:center; gap:6px;
          background:var(--ks-lemon); color:var(--ks-ink);
          padding:6px 16px; border-radius:20px;
          font-family:'Caveat',cursive; font-size:1rem; font-weight:600;
          box-shadow:2px 3px 0 rgba(0,0,0,.12); transform:rotate(-1.5deg);
          margin-bottom:18px; animation:ks-float 4s ease-in-out infinite;
        }
        @keyframes ks-float {
          0%,100% { transform:rotate(-1.5deg) translateY(0); }
          50%      { transform:rotate(-1.5deg) translateY(-6px); }
        }

        .ks-h1 {
          font-family:'Fraunces',serif; font-weight:700;
          font-size:clamp(2.5rem,5.2vw,4.1rem); line-height:1.09;
          color:var(--ks-ink); margin-bottom:10px;
        }
        .ks-h1 em { font-style:italic; color:var(--ks-coral); }
        .ks-wave { display:inline-block; animation:ks-wave 1.8s ease-in-out infinite; }
        @keyframes ks-wave {
          0%,100% { transform:rotate(0); } 25% { transform:rotate(20deg); } 75% { transform:rotate(-10deg); }
        }

        .ks-role {
          font-family:'Caveat',cursive; font-size:clamp(1.3rem,2.8vw,1.9rem);
          font-weight:600; color:var(--ks-coral); margin-bottom:20px; min-height:2.4rem;
        }
        .ks-cursor {
          display:inline-block; width:3px; height:1.1em;
          background:var(--ks-coral); vertical-align:middle; margin-left:2px;
          animation:ks-blink .9s step-end infinite;
        }
        @keyframes ks-blink { 0%,100% { opacity:1; } 50% { opacity:0; } }

        .ks-bio {
          font-size:.97rem; line-height:1.78; color:#4a3f2f;
          max-width:480px; margin-bottom:30px;
        }
        .ks-bio strong { color:var(--ks-ink); font-weight:600; }

        .ks-cta { display:flex; flex-wrap:wrap; gap:12px; margin-bottom:32px; }

        .ks-btn-p {
          display:inline-flex; align-items:center; gap:8px;
          background:var(--ks-coral); color:#fff;
          padding:12px 24px; border-radius:6px; border:none; cursor:pointer;
          font-family:'Caveat',cursive; font-size:1.15rem; font-weight:700;
          box-shadow:4px 4px 0 var(--ks-ink); text-decoration:none;
          transform:rotate(.4deg); transition:transform .15s, box-shadow .15s;
        }
        .ks-btn-p:hover { transform:rotate(.4deg) translate(-2px,-2px); box-shadow:6px 6px 0 var(--ks-ink); }

        .ks-btn-s {
          display:inline-flex; align-items:center; gap:8px;
          background:transparent; color:var(--ks-ink);
          padding:11px 22px; border-radius:6px; border:2px solid var(--ks-ink); cursor:pointer;
          font-family:'Caveat',cursive; font-size:1.15rem; font-weight:700;
          box-shadow:3px 3px 0 var(--ks-ink); text-decoration:none;
          transform:rotate(-.4deg); transition:transform .15s, box-shadow .15s;
        }
        .ks-btn-s:hover { transform:rotate(-.4deg) translate(-2px,-2px); box-shadow:5px 5px 0 var(--ks-ink); }

        .ks-chips { display:flex; flex-wrap:wrap; gap:9px; }
        .ks-chip {
          display:inline-flex; align-items:center; gap:5px;
          padding:5px 14px; border-radius:100px;
          font-size:.82rem; font-weight:500; border:1.5px solid;
          transition:transform .2s; cursor:default;
        }
        .ks-chip:hover { transform:scale(1.08) rotate(-2deg); }
        .c1 { background:#fff5d6; border-color:#e8c94a; color:#6b4f00; }
        .c2 { background:#ffe8e5; border-color:#ff8a7a; color:#a02018; }
        .c3 { background:#e4f9f3; border-color:#5ccfab; color:#1a6b52; }
        .c4 { background:#ede8fd; border-color:#9f89f4; color:#3a1e8f; }
        .c5 { background:#fce8f3; border-color:#e87cc5; color:#880f56; }

        /* RIGHT */
        .ks-right {
          position:relative; z-index:1;
          display:flex; justify-content:center; align-items:center;
          min-height:500px;
        }

        /* polaroid */
        .ks-pol {
          position:absolute; background:#fff;
          box-shadow:5px 8px 22px rgba(0,0,0,.17);
          transition:transform .3s;
        }
        .ks-pol:hover { transform:rotate(0deg) scale(1.05) !important; z-index:20 !important; }
        .ks-photo { display:flex; align-items:center; justify-content:center; overflow:hidden; }
        .ks-cap {
          font-family:'Caveat',cursive; color:#666; text-align:center; padding-top:8px;
        }

        /* main */
        .ks-pm {
          width:250px; padding:13px 13px 50px;
          top:50%; left:50%;
          transform:translateX(-50%) translateY(-50%) rotate(3deg);
          z-index:5;
        }
        .ks-pm .ks-photo {
          width:100%; aspect-ratio:1;
          background:linear-gradient(135deg,#f9c4d2 0%,#c9b8f7 50%,#5ccfab 100%);
          font-size:3.5rem;
        }
        .ks-pm .ks-cap { font-size:1.1rem; }

        /* tape */
        .ks-tape {
          position:absolute; width:58px; height:20px;
          background:var(--ks-tape); border:1px solid rgba(200,190,140,.45); z-index:10;
        }
        .ks-tt { top:-9px; left:50%; transform:translateX(-50%) rotate(-4deg); }
        .ks-tb { bottom:-9px; left:50%; transform:translateX(-50%) rotate(3deg); }

        /* small pols */
        .ks-ps { padding:9px 9px 34px; z-index:4; }
        .ks-ps .ks-photo { width:110px; height:110px; font-size:2rem; }
        .ks-ps .ks-cap { font-size:.85rem; }

        .ks-p1 { top:10%; left:4%; transform:rotate(-8deg); z-index:3; }
        .ks-p1 .ks-photo { background:linear-gradient(135deg,#f7e360,#ffb347); }
        .ks-p2 { bottom:7%; right:3%; transform:rotate(6deg); }
        .ks-p2 .ks-photo { background:linear-gradient(135deg,#c9b8f7,#5ccfab); }
        .ks-p3 { top:56%; left:1%; transform:rotate(-4deg); z-index:6; }
        .ks-p3 .ks-photo { background:linear-gradient(135deg,#f9c4d2,#ff8a7a); }

        /* sticky */
        .ks-stic {
          position:absolute; padding:12px 14px; width:138px;
          font-family:'Caveat',cursive; font-size:.98rem; font-weight:600; line-height:1.5;
          box-shadow:3px 4px 12px rgba(0,0,0,.14); z-index:7;
        }
        .ks-stic::before {
          content:''; position:absolute; top:0; left:0; right:0; height:6px; background:rgba(0,0,0,.08);
        }
        .ks-s1 { background:var(--ks-lemon); color:#4a3800; top:5%; right:6%; transform:rotate(4deg); }
        .ks-s2 { background:var(--ks-blush); color:#5e1430; bottom:9%; left:6%; transform:rotate(-3deg); }

        /* doodles */
        .ks-doodle { position:absolute; pointer-events:none; z-index:2; }
        .ks-dd1 { top:12%; right:28%; opacity:.5; animation:ks-spin 12s linear infinite; }
        .ks-dd2 { bottom:22%; right:30%; opacity:.4; animation:ks-spin 18s linear infinite reverse; }
        .ks-dd3 { top:42%; left:18%; opacity:.35; }
        @keyframes ks-spin { from { transform:rotate(0); } to { transform:rotate(360deg); } }

        /* scroll hint */
        .ks-scroll {
          position:absolute; bottom:44px; left:50%; transform:translateX(-50%);
          font-family:'Caveat',cursive; font-size:1rem; color:#aaa;
          display:flex; flex-direction:column; align-items:center; gap:5px;
          animation:ks-bounce 2s ease-in-out infinite; z-index:5;
        }
        @keyframes ks-bounce {
          0%,100% { transform:translateX(-50%) translateY(0); }
          50%      { transform:translateX(-50%) translateY(7px); }
        }

        /* RESPONSIVE */
        @media (max-width:900px) {
          .ks-hero { grid-template-columns:1fr; padding:90px 6% 80px; gap:20px; }
          .ks-right { min-height:370px; }
          .ks-pm { width:200px; padding:11px 11px 42px; }
          .ks-ps .ks-photo { width:90px; height:90px; }
          .ks-stic { width:120px; font-size:.88rem; }
        }
        @media (max-width:600px) {
          .ks-links { display:none; }
          .ks-burger { display:flex; }
          .ks-hero { padding:80px 5% 60px; }
          .ks-right { min-height:320px; }
          .ks-pm { width:170px; padding:9px 9px 38px; }
          .ks-ps .ks-photo { width:78px; height:78px; font-size:1.5rem; }
          .ks-stic, .ks-scroll { display:none; }
        }
      `}</style>

      {/* NAV */}
      <nav className="ks-nav" ref={navRef}>
        <a href="#" className="ks-logo">kajal<span>.</span>dev</a>
        <ul className="ks-links">
          {["Home","About","Work","Contact"].map((l) => (
            <li key={l}><a href="#" className={l==="Home"?"ks-active":""}>{l}</a></li>
          ))}
        </ul>
        <button className="ks-burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <span/><span/><span/>
        </button>
      </nav>

      <div className={`ks-mob-menu${open?" ks-open":""}`}>
        {["Home","About","Work","Contact"].map((l) => (
          <a key={l} href="#" onClick={() => setOpen(false)}>{l}</a>
        ))}
      </div>

      {/* HERO */}
      <section className="ks-hero">

        {/* LEFT */}
        <div className="ks-left">
          <div className="ks-tag">✨ Open to Opportunities</div>
          <h1 className="ks-h1">
            Hi there! <span className="ks-wave">👋</span><br/>
            I'm <em>Kajal</em> —
          </h1>
          <p className="ks-role">{role}<span className="ks-cursor"/></p>
          <p className="ks-bio">
            A <strong>creative developer & designer</strong> who turns ideas into beautiful,
            interactive experiences. I love crafting interfaces that feel <strong>alive</strong> —
            blending code with a little bit of ✨ magic.
          </p>
          <div className="ks-cta">
            <a href="#" className="ks-btn-p">📂 See My Work</a>
            <a href="#" className="ks-btn-s">📬 Let's Chat</a>
          </div>
          <div className="ks-chips">
            {[["c1","⚛️ React"],["c2","🎨 UI/UX"],["c3","💚 TypeScript"],["c4","🔮 Figma"],["c5","💅 CSS"]].map(([cls,label]) => (
              <span key={label} className={`ks-chip ${cls}`}>{label}</span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="ks-right">
          {/* doodles */}
          <svg className="ks-doodle ks-dd1" width="36" height="36" viewBox="0 0 36 36">
            <polygon points="18,2 22,14 35,14 25,22 29,34 18,27 7,34 11,22 1,14 14,14" fill="none" stroke="#ff6b5b" strokeWidth="2"/>
          </svg>
          <svg className="ks-doodle ks-dd2" width="28" height="28" viewBox="0 0 28 28">
            <polygon points="14,2 16.5,10 25,10 18.5,15.5 21,23 14,18.5 7,23 9.5,15.5 3,10 11.5,10" fill="none" stroke="#5ccfab" strokeWidth="2"/>
          </svg>
          <svg className="ks-doodle ks-dd3" width="44" height="44" viewBox="0 0 44 44">
            <circle cx="22" cy="22" r="18" fill="none" stroke="#c9b8f7" strokeWidth="2" strokeDasharray="5 4"/>
          </svg>

          {/* sticky notes */}
          <div className="ks-stic ks-s1">💡 Building cool things one commit at a time!</div>
          <div className="ks-stic ks-s2">🎯 Pixel-perfect & proud of it 🖼️</div>

          {/* polaroid 1 */}
          <div className="ks-pol ks-ps ks-p1">
            <div className="ks-tape ks-tt"/>
            <div className="ks-photo">🌈</div>
            <p className="ks-cap">side projects</p>
          </div>

          {/* main polaroid */}
          <div className="ks-pol ks-pm">
            <div className="ks-tape ks-tt"/>
            <div className="ks-tape ks-tb"/>
            {/* ↓ Replace emoji with your actual <img> when you have a photo */}
            <div className="ks-photo">🧑‍💻</div>
            <p className="ks-cap">that's me! :)</p>
          </div>

          {/* polaroid 2 */}
          <div className="ks-pol ks-ps ks-p2">
            <div className="ks-tape ks-tt"/>
            <div className="ks-photo">✨</div>
            <p className="ks-cap">big dreams</p>
          </div>

          {/* polaroid 3 */}
          <div className="ks-pol ks-ps ks-p3">
            <div className="ks-tape ks-tt"/>
            <div className="ks-photo">☕</div>
            <p className="ks-cap">fueled by chai</p>
          </div>
        </div>

        {/* scroll hint */}
        <div className="ks-scroll">
          <span>scroll down</span>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 2v12M4 9l6 7 6-7" stroke="#aaa" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </section>
    </>
  );
}
