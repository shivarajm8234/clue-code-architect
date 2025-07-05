import React from 'react';
import { Brain, Code, Zap } from 'lucide-react';
import detectiveProfile from '../assets/detective-profile.jpg';

const AboutSection = () => {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="text-4xl font-bold mb-6 font-mono">
            <span className="text-accent">01.</span> About The Detective
          </h2>
          
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Like L's methodical approach to solving complex cases, I dissect intricate problems 
              with analytical precision. My mind operates at the intersection of logic and creativity, 
              turning abstract challenges into concrete AI-powered solutions.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Every system I architect is a puzzle to solve, every bug a mystery to unravel. 
              I specialize in creating intelligent automation workflows that think ahead, 
              predict patterns, and execute flawlessly—just like connecting the dots in a complex investigation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="detective-card p-4 text-center rounded-lg">
                <Brain className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-mono font-semibold">Analytical</h3>
                <p className="text-sm text-muted-foreground">Deep logical thinking</p>
              </div>
              
              <div className="detective-card p-4 text-center rounded-lg">
                <Code className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-mono font-semibold">Methodical</h3>
                <p className="text-sm text-muted-foreground">Systematic approach</p>
              </div>
              
              <div className="detective-card p-4 text-center rounded-lg">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-mono font-semibold">Innovative</h3>
                <p className="text-sm text-muted-foreground">AI-first solutions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="glow-border rounded-lg overflow-hidden">
              <img 
                src={detectiveProfile} 
                alt="Detective Profile" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent rounded-lg opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-primary rounded-lg opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;