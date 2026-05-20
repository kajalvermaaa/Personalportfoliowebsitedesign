import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-display-md font-bold mb-6">Let's Create Something Amazing</h2>
            <p className="text-serif-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out if you'd like to collaborate.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="scale" delay={100}>
          <a
            href="mailto:hello@kajal.design"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 transition-opacity mb-12"
          >
            <Mail className="w-5 h-5" />
            Send me an email
          </a>
        </ScrollReveal>

        <ScrollReveal variant="slideUp" delay={200}>
          <div className="flex justify-center gap-6">
            {[
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
              { icon: Github, href: 'https://github.com', label: 'GitHub' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}