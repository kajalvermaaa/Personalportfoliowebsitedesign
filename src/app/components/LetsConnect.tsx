import { motion } from "motion/react";
import { Mail, Linkedin, Send, Sparkles, Phone } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { useState } from "react";

export function LetsConnect() {
  const { ref, inView } = useInView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Crumpled paper background */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cfilter id='crumple2'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.025' numOctaves='10' seed='5'/%3E%3CfeDisplacementMap in='SourceGraphic' scale='40'/%3E%3C/filter%3E%3Cpath d='M0 0h1000v1000H0z' fill='%23000' filter='url(%23crumple2)'/%3E%3C/svg%3E")`,
          backgroundSize: '500px 500px',
        }}
      />

      {/* Torn edge transition */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-[#FAF7F2]"
        style={{
          clipPath: 'polygon(0 0, 5% 90%, 10% 100%, 15% 75%, 20% 100%, 25% 85%, 30% 100%, 35% 80%, 40% 100%, 45% 90%, 50% 100%, 55% 80%, 60% 100%, 65% 85%, 70% 100%, 75% 75%, 80% 100%, 85% 90%, 90% 100%, 95% 80%, 100% 100%, 100% 0)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Title & Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Title */}
            <div className="relative">
              <h2 className="font-[family-name:var(--font-serif)] text-6xl md:text-7xl lg:text-8xl text-[#6B1B2E] mb-6 leading-tight">
                Let's
                <br />
                Connect
              </h2>
              <div className="w-32 h-1 bg-[#D4A574] rotate-[-1deg]" />
              
              <motion.div 
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-8 right-12 text-4xl"
              >
                <Sparkles className="w-8 h-8 text-[#D4A574]" />
              </motion.div>
            </div>

            {/* Message */}
            <div className="space-y-6">
              <p className="font-[family-name:var(--font-body)] text-2xl md:text-3xl text-[#2D1B1B] leading-relaxed">
                Have a project in mind? Need someone who gets the full stack — ops, product, & design?
              </p>
              
              <p className="font-[family-name:var(--font-serif)] text-3xl text-[#6B1B2E] italic">
                Let's make it happen.
              </p>

              <div className="pt-4 font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63]">
                (I usually respond within 24 hours)
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4 pt-8">
              <a
                href="mailto:kajalverma1104@gmail.com"
                className="group flex items-center gap-4 text-[#6B1B2E] hover:text-[#C97B63] transition-colors"
              >
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center group-hover:bg-[#6B1B2E] transition-colors">
                  <Mail className="w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-sans)] text-sm text-[#6B5B4F]">Email</div>
                  <div className="font-[family-name:var(--font-body)] text-lg">kajalverma1104@gmail.com</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/kajalverma1104"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-[#6B1B2E] hover:text-[#C97B63] transition-colors"
              >
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center group-hover:bg-[#6B1B2E] transition-colors">
                  <Linkedin className="w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-sans)] text-sm text-[#6B5B4F]">LinkedIn</div>
                  <div className="font-[family-name:var(--font-body)] text-lg">linkedin.com/in/kajalverma1104</div>
                </div>
              </a>

              <a
                href="https://wa.me/919508943069"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-[#6B1B2E] hover:text-[#C97B63] transition-colors"
              >
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-full flex items-center justify-center group-hover:bg-[#6B1B2E] transition-colors">
                  <Phone className="w-6 h-6 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-[family-name:var(--font-sans)] text-sm text-[#6B5B4F]">WhatsApp</div>
                  <div className="font-[family-name:var(--font-body)] text-lg">+91 9508943069</div>
                </div>
              </a>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="bg-[#FAF7F2] p-6 rotate-[-1deg] shadow-md">
                <div className="font-[family-name:var(--font-handwritten)] text-xl text-[#6B1B2E] mb-2">
                  Based in
                </div>
                <div className="font-[family-name:var(--font-sans)] text-sm text-[#6B5B4F]">
                  Bangalore, India
                  <br />
                  (Open to remote)
                </div>
              </div>

              <div className="bg-[#E8A5A0] p-6 rotate-[1deg] shadow-md">
                <div className="font-[family-name:var(--font-handwritten)] text-xl text-[#2D1B1B] mb-2">
                  Open to
                </div>
                <div className="font-[family-name:var(--font-sans)] text-sm text-[#2D1B1B]">
                  Product roles
                  <br />
                  UX/UI projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-10 shadow-2xl rotate-[0deg] relative border-4 border-[#FAF7F2]">
              {/* Decorative tape */}
              <div className="absolute -top-4 left-12 w-24 h-8 bg-[#D4A574]/40 rotate-[-8deg] backdrop-blur-sm" />
              <div className="absolute -top-4 right-12 w-24 h-8 bg-[#E8A5A0]/40 rotate-[8deg] backdrop-blur-sm" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label 
                    htmlFor="name" 
                    className="block font-[family-name:var(--font-sans)] text-sm text-[#6B1B2E] tracking-wide"
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
                    className="w-full px-4 py-3 bg-[#FAF7F2] border-2 border-[#6B1B2E]/10 focus:border-[#6B1B2E] focus:outline-none font-[family-name:var(--font-body)] text-[#2D1B1B] transition-colors"
                    placeholder="Kajal Verma"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="email" 
                    className="block font-[family-name:var(--font-sans)] text-sm text-[#6B1B2E] tracking-wide"
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
                    className="w-full px-4 py-3 bg-[#FAF7F2] border-2 border-[#6B1B2E]/10 focus:border-[#6B1B2E] focus:outline-none font-[family-name:var(--font-body)] text-[#2D1B1B] transition-colors"
                    placeholder="hello@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label 
                    htmlFor="message" 
                    className="block font-[family-name:var(--font-sans)] text-sm text-[#6B1B2E] tracking-wide"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#FAF7F2] border-2 border-[#6B1B2E]/10 focus:border-[#6B1B2E] focus:outline-none font-[family-name:var(--font-body)] text-[#2D1B1B] resize-none transition-colors"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[#D4A574] text-[#2D1B1B] px-4 py-3 rounded font-[family-name:var(--font-sans)] text-sm"
                  >
                    ✓ Hey, got your message. Will get back to you soon :)
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#6B1B2E] text-[#FAF7F2] px-8 py-4 font-[family-name:var(--font-sans)] hover:bg-[#C97B63] transition-all hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                
                {/* Handwritten note - centered below button */}
                <div className="flex justify-center pt-4">
                  <div className="font-[family-name:var(--font-handwritten)] text-xl text-[#C97B63] rotate-[0deg]">
                    (I read every message ♡)
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mt-20 pt-8 border-t border-[#6B1B2E]/10 text-center"
        >
          <p className="font-[family-name:var(--font-sans)] text-sm text-[#6B5B4F]">
            © 2026 Kajal Verma. Designed with love and caffeine ♡
          </p>
        </motion.div>
      </div>
    </section>
  );
}