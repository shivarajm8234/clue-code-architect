import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import heroBg from '../assets/hero-bg.jpg';

const HeroSection = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const titles = [
    'Full Stack Developer',
    'AI Workflow Designer', 
    'Automation Architect',
    'Bug Detective'
  ];

  const tagline = "Turning code into clues. Every bug solved is a case closed.";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      const currentText = titles[currentTitle];
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentTitle, isTyping, titles]);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 glitch-text" data-text="L.">
            L.
          </h1>
          <div className="h-16 md:h-20 flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl font-mono text-accent">
              {displayText}
              <span className="animate-blink-caret">|</span>
            </h2>
          </div>
        </div>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-mono max-w-2xl mx-auto">
          {tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="glow-border px-8 py-3 rounded-lg font-mono hover:bg-accent hover:text-accent-foreground transition-all duration-300">
            View Case Files
          </button>
          <button className="detective-card px-8 py-3 rounded-lg font-mono">
            Drop a Clue
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;