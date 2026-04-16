import { motion } from "motion/react";
import { Mail, Linkedin, Send, Phone } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";

export function LetsConnect() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xaqaeyva", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 sm:py-32 px-4 sm:px-6 bg-white relative overflow-hidden"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cfilter id='crumple2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.025' numOctaves='10' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='40'/%3E%3C/filter%3E%3Cpath d='M0 0h1000v1000H0z' fill='%23000' filter='url(%23crumple2)'/%3E%3C/svg%3E")`,
          backgroundSize: "500px 500px",
        }}
      />

      {/* Torn edge */}
      <div
        className="absolute top-0 left-0 right-0 h-8 bg-[#FAF7F2]"
        style={{
          clipPath:
            "polygon(0 0, 5% 90%, 10% 100%, 15% 75%, 20% 100%, 25% 85%, 30% 100%, 35% 80%, 40% 100%, 45% 90%, 50% 100%, 55% 80%, 60% 100%, 65% 85%, 70% 100%, 75% 75%, 80% 100%, 85% 90%, 90% 100%, 95% 80%, 100% 100%, 100% 0)",
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* LEFT — Title & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Heading */}
            <div className="relative">
              <div className="font-[family-name:var(--font-handwritten)] text-base sm:text-lg text-[#C97B63] mb-3 tracking-wide">
                don't be a stranger —
              </div>
              <h2
                className="font-[family-name:var(--font-serif)] text-[#6B1B2E] leading-tight mb-5"
                style={{ fontSize: "clamp(44px, 11vw, 88px)" }}
              >
                Say Hello.
              </h2>
              <div className="w-24 h-1 bg-[#D4A574] rotate-[-1deg]" />
            </div>

            {/* Subtext */}
            <div className="space-y-4">
              <p className="font-[family-name:var(--font-body)] text-lg sm:text-xl md:text-2xl text-[#2D1B1B] leading-relaxed">
                Got a broken flow that needs fixing? A product that needs a human who thinks in systems?
              </p>
              <p className="font-[family-name:var(--font-serif)] text-xl sm:text-2xl text-[#6B1B2E] italic">
                Or just want to talk design over coffee?
              </p>
              <p className="font-[family-name:var(--font-handwritten)] text-base sm:text-lg text-[#C97B63]">
                (I reply within 24 hours — sometimes faster if it's interesting)
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-3 sm:space-y-4 pt-2">
              {[
                {
                  href: "mailto:kajalverma1104@gmail.com",
                  icon: <Mail className="w-5 h-5 group-hover:text-white transition-colors" />,
                  label: "Email me",
                  value: "kajalverma1104@gmail.com",
                },
                {
                  href: "https://linkedin.com/in/kajalverma1104",
                  icon: <Linkedin className="w-5 h-5 group-hover:text-white transition-colors" />,
                  label: "LinkedIn",
                  value: "linkedin.com/in/kajalverma1104",
                  external: true,
                },
                {
                  href: "https://wa.me/919508943069",
                  icon: <Phone className="w-5 h-5 group-hover:text-white transition-colors" />,
                  label: "WhatsApp",
                  value: "+91 9508943069",
                  external: true,
                },
              ].map(({ href, icon, label, value, external }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  className="group flex items-center gap-3 sm:gap-4 text-[#6B1B2E] hover:text-[#C97B63] transition-colors"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 bg-[#FAF7F2] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#6B1B2E] transition-colors border border-[#E8D5C8]">
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <div className="font-[family-name:var(--font-handwritten)] text-xs text-[#C97B63] leading-none mb-0.5">
                      {label}
                    </div>
                    <div className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[#2D1B1B] truncate group-hover:text-[#6B1B2E] transition-colors">
                      {value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Info sticky-note cards */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
              <motion.div
                initial={{ opacity: 0, rotate: -2, y: 10 }}
                animate={inView ? { opacity: 1, rotate: -1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="bg-[#FAF7F2] p-4 sm:p-5 shadow-md border border-[#E8D5C8]"
              >
                <div className="font-[family-name:var(--font-handwritten)] text-sm sm:text-base text-[#C97B63] mb-1">
                  based in
                </div>
                <div className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[#2D1B1B] font-semibold">
                  Bangalore, India
                </div>
                <div className="font-[family-name:var(--font-sans)] text-xs text-[#6B5B4F] mt-1">
                  open to remote
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, rotate: 2, y: 10 }}
                animate={inView ? { opacity: 1, rotate: 1, y: 0 } : {}}
                transition={{ delay: 0.85 }}
                className="bg-[#6B1B2E] p-4 sm:p-5 shadow-md"
              >
                <div className="font-[family-name:var(--font-handwritten)] text-sm sm:text-base text-[#E8A5A0] mb-1">
                  open to
                </div>
                <div className="font-[family-name:var(--font-body)] text-sm sm:text-base text-[#FAF7F2] font-semibold">
                  Product & Design roles
                </div>
                <div className="font-[family-name:var(--font-sans)] text-xs text-[#C97B63] mt-1">
                  UX/UI projects
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Tape strips */}
            <div className="absolute -top-3 sm:-top-4 left-8 sm:left-10 w-16 sm:w-20 h-5 sm:h-7 bg-[#D4A574]/40 rotate-[-7deg]" />
            <div className="absolute -top-3 sm:-top-4 right-8 sm:right-10 w-16 sm:w-20 h-5 sm:h-7 bg-[#E8A5A0]/50 rotate-[7deg]" />

            <div className="bg-white border-4 border-[#FAF7F2] shadow-2xl p-6 sm:p-8 md:p-10 relative">

              {/* Form header */}
              <div className="mb-6 sm:mb-8">
                <p className="font-[family-name:var(--font-handwritten)] text-base text-[#C97B63] mb-1">
                  slide into my inbox —
                </p>
                <h3 className="font-[family-name:var(--font-serif)] text-[#6B1B2E] text-2xl sm:text-3xl">
                  Drop me a note
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block font-[family-name:var(--font-sans)] text-xs tracking-widest text-[#6B1B2E] uppercase"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="What should I call you?"
                    className="w-full px-4 py-3 bg-[#FAF7F2] border-2 border-transparent focus:border-[#6B1B2E] focus:outline-none font-[family-name:var(--font-body)] text-[#2D1B1B] placeholder:text-[#B4A09A] transition-colors text-base"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block font-[family-name:var(--font-sans)] text-xs tracking-widest text-[#6B1B2E] uppercase"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="so I can write back :)"
                    className="w-full px-4 py-3 bg-[#FAF7F2] border-2 border-transparent focus:border-[#6B1B2E] focus:outline-none font-[family-name:var(--font-body)] text-[#2D1B1B] placeholder:text-[#B4A09A] transition-colors text-base"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block font-[family-name:var(--font-sans)] text-xs tracking-widest text-[#6B1B2E] uppercase"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hi — I don't bite."
                    className="w-full px-4 py-3 bg-[#FAF7F2] border-2 border-transparent focus:border-[#6B1B2E] focus:outline-none font-[family-name:var(--font-body)] text-[#2D1B1B] placeholder:text-[#B4A09A] resize-none transition-colors text-base"
                  />
                </div>

                {/* Success message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#FAF7F2] border-l-4 border-[#6B1B2E] px-4 py-3"
                  >
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#2D1B1B]">
                      Got it — message received!
                    </p>
                    <p className="font-[family-name:var(--font-handwritten)] text-base text-[#C97B63] mt-0.5">
                      I'll be in touch soon ♡
                    </p>
                  </motion.div>
                )}

                {/* Error message */}
                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#FAF7F2] border-l-4 border-[#C97B63] px-4 py-3"
                  >
                    <p className="font-[family-name:var(--font-body)] text-sm text-[#2D1B1B]">
                      Hmm, something went wrong.
                    </p>
                    <p className="font-[family-name:var(--font-handwritten)] text-base text-[#C97B63] mt-0.5">
                      Try emailing me directly instead ♡
                    </p>
                  </motion.div>
                )}

                {/* Submit button */}
                <b
