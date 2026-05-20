import { ScrollReveal } from './ScrollReveal';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-8 pb-8 border-b border-primary-foreground/20">
            <p className="text-lg font-serif">
              Designed with intention. Built with care. Crafted for humans.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <div className="space-y-2">
              {['Work', 'About', 'Process', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm hover:opacity-70 transition-opacity block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Social</h4>
            <div className="space-y-2">
              {['LinkedIn', 'Twitter', 'GitHub'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm hover:opacity-70 transition-opacity block"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <a
              href="mailto:hello@kajal.design"
              className="text-sm hover:opacity-70 transition-opacity block"
            >
              hello@kajal.design
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 flex justify-between items-center">
          <p className="text-xs opacity-70">© 2025 Kajal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-xs hover:opacity-70 transition-opacity">
              Privacy
            </a>
            <a href="#" className="text-xs hover:opacity-70 transition-opacity">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}