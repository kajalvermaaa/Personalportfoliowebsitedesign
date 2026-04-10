import { motion } from "motion/react";
import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// ─── Case Study Data ──────────────────────────────────────────────────────────

const caseStudies: Record<string, any> = {
  "portfolio-website": {
    type: "real", // Real project case study
    title: "Personal Portfolio Website",
    category: "Product Design × Development",
    hero: "https://images.unsplash.com/photo-1675557570482-df9926f61d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3NTc2MDUyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    externalLink: "https://ashwingupta.dev",
    hook: "Most portfolios look the same.",
    context:
      "I needed a portfolio that communicates both craft skill and product thinking—not just pretty visuals. Something that shows how I think, not just what I make.",
    problem:
      "Templates everywhere. Dark mode, feature lists, polished shots. They show what you made, not why it matters. Not who you are.",
    insight:
      "Portfolios aren't about you—they're about what you can do for someone else. The best ones tell a story and prove you understand problems, not just tools.",
    approach:
      "Designed a narrative-first experience with editorial aesthetics. Every section answers: what I built, why it matters, how I think. Scrapbook-style layering, warm color palette, and human voice throughout.",
    designVisuals: [
      {
        title: "Story-driven sections",
        description: "Each section reveals thinking, not just outputs",
        image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd29ya2Zsb3clMjBkZXNpZ258ZW58MXx8fHwxNzc1NzU4MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Editorial typography",
        description: "Serif headlines with intentional spacing and layered compositions",
        image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHN5c3RlbSUyMGxheW91dHxlbnwxfHx8fDE3NzU3NTgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    outcome:
      "A portfolio that stands out in a sea of templates. Shows design execution, product thinking, and personality in one cohesive experience.",
    productThinking:
      "If this was a product: I'd add analytics to see which sections get the most engagement, A/B test different CTAs, and build a CMS for easy updates. Track bounce rate by section to optimize the story flow.",
    tags: ["Product Design", "UX/UI", "React", "Design Systems"],
  },

  "refund-redesign": {
    type: "real",
    title: "MakeMyTrip Refund Experience",
    category: "UX Case Study",
    hero: "https://images.unsplash.com/photo-1578057167755-b182496f4f3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGlnaHQlMjB0aWNrZXQlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzc1NzYwNTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    externalLink: "https://casestudyrefundprocess.vercel.app",
    hook: "Your trip got canceled. Now you need your money back.",
    context:
      "Travel booking refunds are stressful. You've already had to cancel plans—now you need your money back. But most refund flows are opaque, slow, and frustrating.",
    problem:
      "MakeMyTrip's refund process had no visibility. Users submitted requests and waited. No status updates, no clear timelines, no way to know what's happening. Support teams drowned in 'where's my refund?' tickets.",
    insight:
      "Refunds aren't about money—they're about trust. When something goes wrong, people just want to know: what's happening, when will it be resolved, and who's handling it.",
    approach:
      "Mapped the entire end-to-end journey. Identified friction points. Designed a transparent flow with real-time status tracking, clear timelines, and proactive communication.",
    designVisuals: [
      {
        title: "Status tracker",
        description: "4 clear stages: Submitted → Reviewed → Approved → Processed",
        image: "https://images.unsplash.com/photo-1707836868495-3307d371aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzc1NzQ5MzAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Timeline estimates",
        description: "Clear expectations: 'Expect refund in 5-7 business days'",
        image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1c2VyJTIwaW50ZXJmYWNlJTIwd29ya2Zsb3clMjBkZXNpZ258ZW58MXx8fHwxNzc1NzU4MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    outcome:
      "Defined success metrics: reduce refund inquiry tickets by 40%, improve CSAT scores, cut average processing time by 30%. Designed for both user trust and operational efficiency.",
    productThinking:
      "This wasn't a redesign—it was product strategy. Started with user research, mapped pain points, defined metrics, then designed the solution. The design serves the outcome, not the other way around.",
    tags: ["UX Research", "Product Strategy", "User Flows", "Metrics"],
  },

  "brand-identity": {
    type: "experimental", // Experimental project
    title: "Brand Identity Systems",
    category: "Identity Lab",
    hero: "https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwaWRlbnRpdHl8ZW58MXx8fHwxNzc1NzU4MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    concept:
      "Startups move fast. But without a design system, every new asset becomes a decision. Different colors across platforms, fonts that don't match, no cohesive visual language.",
    exploration:
      "I explored how to build flexible but constrained systems. Logo lockups for different contexts, color palettes with usage rules, typography hierarchy that scales from UI to billboards.",
    designVisuals: [
      {
        title: "Logo system",
        description: "Primary mark, icon, and wordmark variations",
        image: "https://images.unsplash.com/photo-1590102426275-8d1c367070d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGJyYW5kaW5nJTIwaWRlbnRpdHl8ZW58MXx8fHwxNzc1NzU4MjYwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
      {
        title: "Color palette",
        description: "Semantic naming (primary, accent, neutral) for consistency",
        image: "https://images.unsplash.com/photo-1614036634955-ae5e90f9b9eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMHN5c3RlbSUyMGxheW91dHxlbnwxfHx8fDE3NzU3NTgzMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    whyItWorks:
      "A brand system isn't about looking good—it's infrastructure. Good systems make decisions for you so teams can ship fast without sacrificing consistency.",
    tags: ["Branding", "Design Systems", "Visual Design"],
  },

  "packaging-concept": {
    type: "experimental",
    title: "Package Design Concept",
    category: "Shelf Stories",
    hero: "https://images.unsplash.com/photo-1626253934161-08cfea22e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZGVzaWdufGVufDF8fHx8MTc3NTcwMjIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
    concept:
      "You have 3 seconds to tell your story on a shelf. Most packaging screams features and specs. It blends in. Customers grab what feels familiar or catches their eye.",
    exploration:
      "Led with visual hierarchy, not copy. Used bold color blocking for shelf visibility. Minimal text. Tactile finishes to signal premium quality. Designed the unboxing as part of the experience.",
    designVisuals: [
      {
        title: "High-contrast colors",
        description: "Immediate shelf standout with bold blocking",
        image: "https://images.unsplash.com/photo-1626253934161-08cfea22e968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGFja2FnaW5nJTIwZGVzaWdufGVufDF8fHx8MTc3NTcwMjIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    whyItWorks:
      "Packaging is the first physical touchpoint. It should communicate value, build trust, and create an emotional connection—all before the customer reads a single word.",
    tags: ["Packaging", "Print Design", "Brand Experience"],
  },

  experimental: {
    type: "experimental",
    title: "Design Experiments",
    category: "Concepts / Experiments",
    hero: "https://images.unsplash.com/photo-1773761193222-4ad3b5ac23dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMGNvbmNlcHQlMjBhcnR8ZW58MXx8fHwxNzc1NzU4MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    concept:
      "Not all work ships. Some ideas exist to explore, test assumptions, and push creative boundaries. Innovation doesn't happen in production—it happens in experimentation.",
    exploration:
      "Created a sandbox for testing unconventional UI patterns, new visual systems, experimental typography, and interaction concepts. No client constraints—pure exploration.",
    designVisuals: [
      {
        title: "Alternative navigation",
        description: "Gesture-based, voice-first concepts",
        image: "https://images.unsplash.com/photo-1773761193222-4ad3b5ac23dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRlc2lnbiUyMGNvbmNlcHQlMjBhcnR8ZW58MXx8fHwxNzc1NzU4MjYxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      },
    ],
    whyItWorks:
      "The best designers stay curious. They test ideas that might not work, because that's how you find breakthroughs. Some experiments became real features. Others taught valuable lessons. Both outcomes are wins.",
    tags: ["Concept", "Innovation", "Interaction Design", "R&D"],
  },
};

// ─── Case Study Component ─────────────────────────────────────────────────────

export function CaseStudy() {
  const { id } = useParams();
  const study = caseStudies[id as string];

  if (!study) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-6">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-serif)] text-6xl text-[#6B1B2E] mb-4">
            Case Study Not Found
          </h1>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-[#6B1B2E] hover:text-[#C97B63] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  // Render different templates based on project type
  return study.type === "real" ? (
    <RealProjectCaseStudy study={study} />
  ) : (
    <ExperimentalCaseStudy study={study} />
  );
}

// ─── Real Project Case Study Template ────────────────────────────────────────

function RealProjectCaseStudy({ study }: { study: any }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-20">
      {/* Grain texture */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Back button */}
      <div className="max-w-6xl mx-auto px-6 py-8 relative">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[#6B1B2E] hover:text-[#C97B63] text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 pb-16 relative"
      >
        {/* Category badge */}
        <div className="mb-6">
          <span className="px-4 py-2 bg-[#6B1B2E] text-[#FAF7F2] rounded-full text-sm font-[family-name:var(--font-sans)] font-semibold">
            {study.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-serif)] text-5xl md:text-7xl text-[#2D1B1B] mb-12 leading-[0.95] max-w-4xl">
          {study.title}
        </h1>

        {/* External Link Button */}
        {study.externalLink && (
          <div className="mb-12">
            <a
              href={study.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C97B63] text-white px-6 py-3 rounded-full font-[family-name:var(--font-sans)] hover:bg-[#6B1B2E] transition-all hover:shadow-xl hover:scale-105 group"
            >
              <ExternalLink className="w-5 h-5" />
              <span>View Live Project</span>
            </a>
            <div className="inline-block ml-4 font-[family-name:var(--font-handwritten)] text-lg text-[#C97B63] rotate-[-2deg]">
              check it out →
            </div>
          </div>
        )}

        {/* Hero Image */}
        <div className="relative bg-white p-6 shadow-2xl rotate-[-0.5deg]">
          <ImageWithFallback
            src={study.hero}
            alt={study.title}
            className="w-full aspect-[16/9] object-cover"
          />

          {/* Tape decorations */}
          <div className="absolute -top-4 left-1/4 w-24 h-8 bg-[#D4A574]/30 backdrop-blur-sm rotate-[-5deg]" />
          <div className="absolute -top-4 right-1/4 w-24 h-8 bg-[#D4A574]/30 backdrop-blur-sm rotate-[8deg]" />
        </div>
      </motion.div>

      {/* Content - Story-driven layout */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20 relative">
        {/* Hook */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <p className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#6B1B2E] leading-tight italic">
            "{study.hook}"
          </p>
          <div className="absolute -right-12 top-0 font-[family-name:var(--font-handwritten)] text-lg text-[#C97B63] rotate-[8deg]">
            ←
          </div>
        </motion.div>

        {/* Context */}
        <StorySection title="Context" content={study.context} />

        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#6B1B2E] text-[#FAF7F2] p-10 rotate-[-0.5deg] shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl mb-6">
              Problem
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#E8DED0]">
              {study.problem}
            </p>
          </div>
          <div className="absolute -top-4 -right-4 font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63] rotate-[5deg]">
            the core issue
          </div>
        </motion.div>

        {/* Insight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#FAF7F2] border-l-4 border-[#C97B63] pl-8 py-6">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#6B1B2E] mb-4">
              Insight
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#2D1B1B]">
              {study.insight}
            </p>
          </div>
        </motion.div>

        {/* Approach */}
        <StorySection title="Approach" content={study.approach} />

        {/* Design Visuals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#6B1B2E]">
            Design
          </h2>

          <div className="space-y-16">
            {study.designVisuals.map((visual: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Image with annotation */}
                <div className="relative bg-white p-6 shadow-lg rotate-[0.5deg]">
                  <ImageWithFallback
                    src={visual.image}
                    alt={visual.title}
                    className="w-full aspect-video object-cover"
                  />

                  {/* Annotation */}
                  <div className="absolute -right-4 top-8 max-w-xs">
                    <div className="bg-[#E8A5A0] p-4 rotate-[2deg] shadow-md">
                      <p className="font-[family-name:var(--font-handwritten)] text-sm text-[#2D1B1B] leading-relaxed">
                        {visual.title}
                      </p>
                    </div>
                    <div className="mt-4 font-[family-name:var(--font-body)] text-sm text-[#6B5B4F]">
                      {visual.description}
                    </div>
                  </div>

                  {/* Tape */}
                  <div className="absolute -top-3 left-12 w-20 h-6 bg-[#D4A574]/30 backdrop-blur-sm rotate-[-8deg]" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white p-10 shadow-lg rotate-[-0.3deg]">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#C97B63] mb-6">
              Outcome
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#2D1B1B]">
              {study.outcome}
            </p>
          </div>
        </motion.div>

        {/* Product Thinking Layer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#2D1B1B] text-[#FAF7F2] p-12 rotate-[0.5deg] shadow-2xl relative">
            <div className="absolute -top-6 left-12 font-[family-name:var(--font-handwritten)] text-2xl text-[#D4A574] rotate-[-8deg]">
              ← the product layer
            </div>

            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl mb-6">
              If This Was Real
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#E8DED0]">
              {study.productThinking}
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center pt-12">
          {study.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white text-[#2D1B1B] font-[family-name:var(--font-sans)] text-sm rounded-full shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="pt-16 text-center border-t border-[#6B1B2E]/10">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 bg-[#6B1B2E] text-[#FAF7F2] px-8 py-4 rounded-full font-[family-name:var(--font-sans)] hover:bg-[#C97B63] transition-all hover:shadow-xl hover:scale-105 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to All Work
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Experimental Case Study Template ────────────────────────────────────────

function ExperimentalCaseStudy({ study }: { study: any }) {
  return (
    <div className="min-h-screen bg-[#FAF7F2] pt-20">
      {/* Grain texture */}
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
        }}
      />

      {/* Back button */}
      <div className="max-w-6xl mx-auto px-6 py-8 relative">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-[#6B1B2E] hover:text-[#C97B63] text-sm transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
      </div>

      {/* Hero - Visual-first */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto px-6 pb-20 relative"
      >
        {/* Category badge */}
        <div className="mb-6">
          <span className="px-4 py-2 bg-[#C97B63] text-[#FAF7F2] rounded-full text-sm font-[family-name:var(--font-sans)] font-semibold">
            {study.category}
          </span>
        </div>

        {/* Title - Big and bold */}
        <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl text-[#2D1B1B] mb-16 leading-[0.9] rotate-[-1deg]">
          {study.title}
        </h1>

        {/* Large hero image */}
        <div className="relative">
          <div className="bg-white p-8 shadow-2xl rotate-[0.5deg]">
            <ImageWithFallback
              src={study.hero}
              alt={study.title}
              className="w-full aspect-[4/3] object-cover"
            />

            {/* Tape decorations */}
            <div className="absolute -top-4 left-1/3 w-28 h-8 bg-[#D4A574]/30 backdrop-blur-sm rotate-[-8deg]" />
            <div className="absolute -top-4 right-1/3 w-28 h-8 bg-[#D4A574]/30 backdrop-blur-sm rotate-[5deg]" />
          </div>

          {/* Handwritten note */}
          <div className="absolute -bottom-8 -right-8 font-[family-name:var(--font-handwritten)] text-2xl text-[#C97B63] rotate-[5deg]">
            exploration mode →
          </div>
        </div>
      </motion.div>

      {/* Content - Lighter, more visual */}
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16 relative">
        {/* Concept */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#6B1B2E] mb-6">
            The Concept
          </h2>
          <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#2D1B1B]">
            {study.concept}
          </p>
        </motion.div>

        {/* What I Explored */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#FAF7F2] border-l-4 border-[#C97B63] pl-8 py-6">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[#6B1B2E] mb-4">
              What I Explored
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#2D1B1B]">
              {study.exploration}
            </p>
          </div>
        </motion.div>

        {/* Design - Visual gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#6B1B2E]">
            Design
          </h2>

          <div className="grid gap-12">
            {study.designVisuals.map((visual: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-white p-6 shadow-lg rotate-[-0.3deg]">
                  <ImageWithFallback
                    src={visual.image}
                    alt={visual.title}
                    className="w-full aspect-video object-cover mb-6"
                  />

                  <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[#2D1B1B] mb-2">
                    {visual.title}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-[#6B5B4F]">
                    {visual.description}
                  </p>
                </div>

                {/* Tape */}
                <div className="absolute -top-3 right-12 w-20 h-6 bg-[#D4A574]/30 backdrop-blur-sm rotate-[8deg]" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why It Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-[#6B1B2E] text-[#FAF7F2] p-10 rotate-[0.5deg] shadow-xl">
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl mb-6">
              Why It Works
            </h2>
            <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#E8DED0]">
              {study.whyItWorks}
            </p>
          </div>
        </motion.div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 justify-center pt-12">
          {study.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-4 py-2 bg-white text-[#2D1B1B] font-[family-name:var(--font-sans)] text-sm rounded-full shadow-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation */}
        <div className="pt-16 text-center border-t border-[#6B1B2E]/10">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 bg-[#6B1B2E] text-[#FAF7F2] px-8 py-4 rounded-full font-[family-name:var(--font-sans)] hover:bg-[#C97B63] transition-all hover:shadow-xl hover:scale-105 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to All Work
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Shared Section Component ─────────────────────────────────────────────────

function StorySection({ title, content }: { title: string; content: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="space-y-6"
    >
      <h2 className="font-[family-name:var(--font-serif)] text-4xl md:text-5xl text-[#2D1B1B]">
        {title}
      </h2>
      <p className="font-[family-name:var(--font-body)] text-xl leading-relaxed text-[#6B5B4F]">
        {content}
      </p>
    </motion.div>
  );
}