import { useRef, useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// ─── Featured Real Projects ───────────────────────────────────────────────────

const featuredProjects = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    category: "Product Design × Development",
    tagline: "From concept to deployment—building my own story",
    color: "#6B1B2E",
    year: "2025",
    caseStudyId: "portfolio-website",
    image: "https://images.unsplash.com/photo-1675557570482-df9926f61d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3NTc2MDUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    externalLink: "https://ashwingupta.dev",
  },
  {
    id: "mmt-refund",
    title: "MakeMyTrip Refund Experience",
    category: "UX Case Study",
    tagline: "Mapping mess, finding friction, designing trust",
    color: "#C97B63",
    year: "2024",
    caseStudyId: "refund-redesign",
    image: "https://images.unsplash.com/photo-1578057167755-b182496f4f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGlnaHQlMjB0aWNrZXQlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc1NzYwNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    externalLink: "https://casestudyrefundprocess.vercel.app",
  },
];

// ─── Experimental Projects ────────────────────────────────────────────────────

const experimentalProjects = [
  {
    id: "branding",
    title: "Brand Identity Systems",
    subtitle: "Visual language that scales",
    color: "#D4A574",
    caseStudyId: "brand-identity",
    image: "https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwaWRlbnRpdHl8ZW58MXx8fHwxNzc1NzU4MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rotation: -1.5,
  },
  {
    id: "packaging",
    title: "Shelf Stories",
    subtitle: "Packaging that speaks first",
    color: "#8B4513",
    caseStudyId: "packaging-concept",
    image: "https://images.unsplash.com/photo-1626253934161-08cfea22e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZGVzaWdufGVufDF8fHx8MTc3NTcwMjIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    rotation: 1,
  },
  {
    id: "campaigns",
    title: "Campaign Drops",
    subtitle: "Bold ideas, bolder execution",
    color: "#E8A5A0",
    caseStudyId: "experimental",
    image: "https://images.unsplash.com/photo-1734547459640-5e39e30e2c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlcnRpc2luZyUyMGNhbXBhaWduJTIwcG9zdGVyfGVufDF8fHx8MTc3NTc1MjE3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    rotation: -0.5,
  },
  {
    id: "concepts",
    title: "Concept Work",
    subtitle: "Pure exploration",
    color: "#6B1B2E",
    caseStudyId: "experimental",
    image: "https://images.unsplash.com/photo-1773761193222-4ad3b5ac23dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMGNvbmNlcHQlMjBhcnR8ZW58MXx8fHwxNzc1NzU4MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rotation: 0.5,
  },
];

// ─── Featured Project Card ────────────────────────────────────────────────────

interface FeaturedCardProps {
  project: typeof featuredProjects[0];
  index: number;
}

const FeaturedProjectCard = ({ project, index }: FeaturedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.1 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/case-study/${project.caseStudyId}`}
      ref={ref}
      className="group relative block"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(60px)",
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tape decorations */}
      <div className="absolute -top-3 left-16 w-20 h-6 bg-[#D4A574]/20 backdrop-blur-sm rotate-[-3deg] z-10" />
      <div className="absolute -top-3 right-20 w-20 h-6 bg-[#D4A574]/20 backdrop-blur-sm rotate-[5deg] z-10" />

      {/* Card */}
      <div
        className="relative bg-white rounded-sm overflow-hidden shadow-xl"
        style={{
          transform: isHovered ? "translateY(-12px) rotate(0deg)" : "rotate(0.5deg)",
          transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Image area */}
        <div className="relative aspect-[16/9] overflow-hidden bg-[#FAF7F2]">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Color overlay */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-40"
            style={{ backgroundColor: project.color }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Hover state */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="text-center">
              <p className="text-white text-sm uppercase tracking-[0.3em] mb-2">Read Case Study</p>
              <div className="w-12 h-px bg-white mx-auto" />
            </div>
          </div>

          {/* Year badge */}
          <div className="absolute top-6 right-6">
            <span className="font-[family-name:var(--font-handwritten)] text-white text-2xl rotate-[-5deg] inline-block">
              {project.year}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10 bg-white">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[9px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full font-semibold"
              style={{
                backgroundColor: `${project.color}22`,
                color: project.color,
              }}
            >
              Real Project
            </span>
          </div>

          <h3 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#2D1B1B] leading-tight mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-[#C97B63] uppercase tracking-wide mb-3 font-[family-name:var(--font-sans)]">
            {project.category}
          </p>

          <p className="font-[family-name:var(--font-body)] text-[#6B5B4F] leading-relaxed">
            {project.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
};

// ─── Experimental Project Card ────────────────────────────────────────────────

interface ExperimentalCardProps {
  project: typeof experimentalProjects[0];
  index: number;
}

const ExperimentalProjectCard = ({ project, index }: ExperimentalCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { threshold: 0.2 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/case-study/${project.caseStudyId}`}
      ref={ref}
      className="group relative block"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tape decoration */}
      <div
        className="absolute -top-2 right-8 w-16 h-5 bg-[#D4A574]/30 backdrop-blur-sm z-10"
        style={{ rotate: `${project.rotation * 3}deg` }}
      />

      {/* Poster card */}
      <div
        className="relative aspect-[3/4] bg-white rounded-sm shadow-lg overflow-hidden"
        style={{
          transform: isHovered
            ? "translateY(-8px) rotate(0deg)"
            : `rotate(${project.rotation}deg)`,
          transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* Image */}
        <div className="relative h-2/3 overflow-hidden">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            style={{
              transform: isHovered ? "scale(1.1)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          />

          {/* Color overlay */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-30"
            style={{ backgroundColor: project.color }}
          />

          {/* Hover overlay */}
          <div
            className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-400"
            style={{ opacity: isHovered ? 1 : 0 }}
          >
            <div className="text-center">
              <p className="text-white text-xs uppercase tracking-[0.3em]">View Project</p>
              <div className="w-8 h-px bg-white mx-auto mt-2" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="h-1/3 p-6 flex flex-col justify-center bg-white">
          <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#2D1B1B] mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="font-[family-name:var(--font-sans)] text-xs text-[#6B5B4F] uppercase tracking-wide">
            {project.subtitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

export function TheWork() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { threshold: 0.3 });

  return (
    <section
      id="work"
      className="min-h-screen bg-[#FAF7F2] py-24 md:py-32 px-6 md:px-12 lg:px-16 relative overflow-hidden"
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div
          ref={headingRef}
          className="mb-20 md:mb-28"
          style={{
            opacity: headingInView ? 1 : 0,
            transform: headingInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h2 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl text-[#6B1B2E] mb-6 leading-[0.9]">
            The Work
          </h2>

          <p className="font-[family-name:var(--font-body)] text-xl md:text-2xl text-[#6B5B4F] max-w-2xl leading-relaxed">
            Real projects that shipped.{" "}
            <span className="italic text-[#2D1B1B]">Experiments that explore.</span>
          </p>

          {/* Handwritten note */}
          <div className="absolute -top-8 right-0 font-[family-name:var(--font-handwritten)] text-lg text-[#C97B63] rotate-[-3deg]">
            (click to see the full story)
          </div>
        </div>

        {/* Featured Work */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-2 h-2 rounded-full bg-[#6B1B2E]" />
            <h3 className="font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.3em] text-[#6B1B2E] font-semibold">
              Featured Work
            </h3>
            <div className="flex-1 h-px bg-[#6B1B2E] opacity-20" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {featuredProjects.map((project, i) => (
              <FeaturedProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>

        {/* Experimental Work */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-2 h-2 rounded-full bg-[#C97B63]" />
            <h3 className="font-[family-name:var(--font-sans)] text-sm uppercase tracking-[0.3em] text-[#C97B63] font-semibold">
              Experimental Work
            </h3>
            <div className="flex-1 h-px bg-[#C97B63] opacity-20" />
          </div>

          {/* Irregular grid - masonry-style */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {experimentalProjects.map((project, i) => (
              <ExperimentalProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Handwritten note */}
          <div className="mt-12 text-center">
            <p className="font-[family-name:var(--font-handwritten)] text-lg text-[#6B5B4F] rotate-[1deg] inline-block">
              more experiments in the lab →
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 pt-12 border-t border-[#6B1B2E] border-opacity-10">
          <p className="font-[family-name:var(--font-body)] text-sm text-[#6B5B4F] leading-relaxed max-w-lg italic">
            Each project opens into a case study—context, thinking, and outcome.
            <br />
            Additional work available under NDA.
          </p>
        </div>
      </div>
    </section>
  );
}