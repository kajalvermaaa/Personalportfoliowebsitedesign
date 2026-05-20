import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-between relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-secondary opacity-5 rounded-full blur-3xl"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-8">
        {/* Superheading */}
        <div className="flex items-center gap-3 animate-fade-in">
          <div className="w-12 h-px bg-accent" />
          <span className="text-label text-muted-foreground">
            Creative Strategist & Product Designer
          </span>
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-display-lg font-bold">
            Crafting{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary">
              intentional digital
            </span>{' '}
            experiences
          </h1>

          <p className="text-serif-lg text-muted-foreground max-w-2xl leading-relaxed">
            I design & build digital products that blend creative vision with strategic thinking.
            Every pixel, every interaction, every experience is intentional.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <button className="px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity">
            Explore My Work
          </button>
          <button className="px-8 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors">
            Learn About Me
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mx-auto relative z-10 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>

      {/* Parallax decoration */}
      <div
        className="absolute bottom-20 left-10 text-8xl opacity-5 select-none pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        ✦
      </div>
    </section>
  );
}