import { Link } from "react-router";
import { motion } from "motion/react";
import { useRef } from "react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TheWork() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section
      id="work"
      ref={ref}
      className="py-32 px-6 bg-[#FAF7F2]"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl text-[#6B1B2E] mb-6 font-[family-name:var(--font-serif)]">
            Selected Work
          </h2>

          <p className="text-xl text-[#6B5B4F] max-w-2xl leading-relaxed">
            I focus on solving product problems — reducing friction, improving clarity,
            and designing systems that actually work in real usage.
          </p>
        </div>

        {/* CASE STUDY 01 — MMT */}
        <Link
          to="/case-study/refund-redesign"
          className="block mb-32 group"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative overflow-hidden">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1578057167755-b182496f4f3d"
                alt="MMT Refund"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            </div>

            {/* Content */}
            <div>
              <p className="text-sm uppercase tracking-widest text-[#C97B63] mb-4">
                Case Study 01
              </p>

              <h3 className="text-4xl md:text-5xl text-[#2D1B1B] mb-6 font-[family-name:var(--font-serif)]">
                MakeMyTrip Refund Experience
              </h3>

              <p className="text-lg text-[#6B5B4F] mb-6 leading-relaxed">
                Users couldn’t track refunds, leading to confusion and support overload.
                I redesigned the flow to bring clarity, transparency, and trust.
              </p>

              <p className="text-[#6B1B2E] italic">
                Reduced friction from multiple unclear steps → a single clear tracking flow.
              </p>
            </div>

          </div>
        </Link>

        {/* CASE STUDY 02 — PORTFOLIO */}
        <Link
          to="/case-study/portfolio-website"
          className="block group"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div className="relative overflow-hidden lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1675557570482-df9926f61d86"
                alt="Portfolio"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
            </div>

            {/* Content */}
            <div className="lg:order-1">
              <p className="text-sm uppercase tracking-widest text-[#C97B63] mb-4">
                Case Study 02
              </p>

              <h3 className="text-4xl md:text-5xl text-[#2D1B1B] mb-6 font-[family-name:var(--font-serif)]">
                Portfolio Website (Client)
              </h3>

              <p className="text-lg text-[#6B5B4F] mb-6 leading-relaxed">
                Designed and shipped a complete personal portfolio for an AI engineer —
                from UX structure to deployment.
              </p>

              <p className="text-[#6B1B2E] italic">
                End-to-end execution — design, content, and development.
              </p>
            </div>

          </div>
        </Link>

        {/* FOOTER */}
        <div className="mt-32 pt-12 border-t border-[#6B1B2E]/10">
          <p className="text-sm text-[#6B5B4F] italic max-w-md">
            Each project goes deep into problem, thinking, and outcome.
            Additional work available on request.
          </p>
        </div>

      </div>
    </section>
  );
}
