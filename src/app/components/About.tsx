import { ScrollReveal } from './ScrollReveal';

export function About() {
  const traits = [
    { label: 'Designer', description: 'Creating visual systems with intention' },
    { label: 'Product Thinker', description: 'Strategic approach to every decision' },
    { label: 'Strategist', description: 'Balancing creativity with business goals' },
    { label: 'Internet Native', description: 'Living and breathing digital culture' },
  ];

  const values = [
    { number: '01', title: 'Intentionality', description: 'Every choice has purpose' },
    { number: '02', title: 'Craft', description: 'Details matter, always' },
    { number: '03', title: 'Clarity', description: 'Simplicity through complexity' },
    { number: '04', title: 'Impact', description: 'Design that moves people' },
  ];

  return (
    <section id="about" className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-accent" />
              <span className="text-label text-muted-foreground">About Me</span>
            </div>
            <h2 className="text-display-md font-bold">The Human Behind The Design</h2>
          </div>
        </ScrollReveal>

        {/* Bio */}
        <ScrollReveal variant="slideUp" delay={100}>
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <p className="text-serif-lg text-foreground mb-6 leading-relaxed">
                I'm a product designer & strategist obsessed with creating digital experiences that feel
                intentional, human-centered, and beautifully crafted.
              </p>
              <p className="text-serif text-muted-foreground mb-6">
                With experience spanning product design, design systems, and digital strategy, I approach
                every project as an opportunity to create something that matters—something that blends
                creative vision with business thinking.
              </p>
            </div>
            <div>
              <p className="text-serif text-muted-foreground mb-6">
                I believe the best design is invisible—it feels natural, intuitive, and purposeful. I'm
                passionate about design that respects user intelligence and tells a story.
              </p>
              <p className="text-serif text-muted-foreground">
                When I'm not designing, you'll find me exploring design systems, writing about digital
                culture, or experimenting with new technologies.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Traits */}
        <ScrollReveal variant="scale" delay={200}>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            {traits.map((trait, idx) => (
              <div
                key={idx}
                className="p-6 border border-border rounded-lg hover:border-accent hover:bg-accent/2 transition-all duration-300"
              >
                <h4 className="font-bold text-primary mb-2">{trait.label}</h4>
                <p className="text-serif text-muted-foreground">{trait.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Core Values */}
        <ScrollReveal variant="slideUp" delay={300}>
          <div>
            <h3 className="text-display-sm font-bold mb-12">Core Values</h3>
            <div className="grid md:grid-cols-2 gap-12">
              {values.map((value, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="text-3xl font-bold text-accent">{value.number}</span>
                    <h4 className="text-serif-lg font-bold text-primary">{value.title}</h4>
                  </div>
                  <p className="text-serif text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}