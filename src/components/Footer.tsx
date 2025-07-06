import React from 'react';
import { Heart, Code, Coffee, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'AI + Automation Development',
    'Full-Stack Web Solutions', 
    'Resume Building & Optimization',
    'Bug Detection & Fixing'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-3xl font-bold font-mono mb-4">
              <span className="text-accent">L.</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Detective-level problem solving meets cutting-edge technology. 
              Every bug is a mystery waiting to be solved.
            </p>
            <div className="flex items-center text-muted-foreground text-xs">
              <span>Made with</span>
              <Heart className="w-3 h-3 mx-1 text-destructive" />
              <span>and</span>
              <Code className="w-3 h-3 mx-1 text-accent" />
              <span>and</span>
              <Coffee className="w-3 h-3 mx-1 text-yellow-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono font-bold text-accent mb-4">Quick Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 text-sm font-mono"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-mono font-bold text-accent mb-4">Investigation Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  <span className="w-1 h-1 bg-accent rounded-full inline-block mr-2"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono font-bold text-accent mb-4">Drop a Clue</h3>
            <div className="space-y-3">
              <p className="text-muted-foreground text-sm">
                Ready to start your next investigation?
              </p>
              <button
                onClick={() => scrollToSection('#contact')}
                className="glow-border px-4 py-2 rounded-lg font-mono text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Start Investigation
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-muted-foreground text-sm font-mono mb-4 md:mb-0">
            © 2024 Detective L. All cases confidential. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-muted-foreground text-xs font-mono">
              "Justice will prevail, no matter what."
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;