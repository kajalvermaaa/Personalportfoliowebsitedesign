import { ScrollReveal } from './ScrollReveal';
import { ArrowRight } from 'lucide-react';

export function Work() {
  const projects = [
    {
      id: 1,
      title: 'Design System Revolution',
      category: 'Design System',
      description: 'Building a comprehensive design system for a growing SaaS platform',
      role: 'Lead Designer',
      image: '📐',
      tags: ['UI/UX', 'Design System', 'Component Library'],
    },
    {
      id: 2,
      title: 'Mobile Product Redesign',
      category: 'Product Design',
      description: 'Reimagining the mobile experience for a fintech app',
      role: 'Product Designer',
      image: '📱',
      tags: ['Mobile', 'Product Design', 'Strategy'],
    },
    {
      id: 3,
      title: 'Editorial Digital Experience',
      category: 'Digital Experience',
      description: 'Creating an immersive storytelling platform',
      role: 'Digital Designer',
      image: '📖',
      tags: ['Web Design', 'Editorial', 'Interaction'],
    },
  ];

  return (
    <section id="work" className="py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <ScrollReveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-px bg-accent" />
              <span className="text-label text-muted-foreground">Selected Work</span>
            </div>
            <h2 className="text-display-md font-bold">Featured Projects</h2>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ScrollReveal
              key={project.id}
              variant="slideUp"
              delay={idx * 100}
            >
              <a
                href={`/case-study/${project.id}`}
                className="group block p-8 bg-background border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  {/* Image */}
                  <div className="text-6xl">{project.image}</div>

                  {/* Content */}
                  <div className="md:col-span-2">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-label text-accent">{project.category}</span>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-display-sm font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-serif text-muted-foreground mb-4">{project.description}</p>
                    <p className="text-sans-sm text-muted-foreground mb-4">Role: {project.role}</p>
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}