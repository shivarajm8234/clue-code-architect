import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Startup Founder',
      company: 'TechFlow Solutions',
      content: 'Working with L was like having Sherlock Holmes solve our automation challenges. The AI integration was flawless and saved us 40+ hours weekly.',
      rating: 5,
      project: 'Marketing Automation Platform'
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Academic Director',
      company: 'EduSecure Institute',
      content: 'The proctoring system they developed is incredibly sophisticated. The behavioral analysis accuracy exceeded our expectations by 300%.',
      rating: 5,
      project: 'AI Proctoring System'
    },
    {
      name: 'James Thompson',
      role: 'HR Manager',
      company: 'CareerBoost Agency',
      content: 'The job finder bot transformed our recruitment process. Client satisfaction increased dramatically with the AI-powered resume matching.',
      rating: 5,
      project: 'Job Finder Bot'
    },
    {
      name: 'Emily Watson',
      role: 'Operations Manager',
      company: 'GreenCycle Network',
      content: 'Their food redistribution algorithm is genius. We reduced food waste by 60% while increasing donation efficiency. Absolutely brilliant work.',
      rating: 5,
      project: 'Food Redistribution Network'
    },
    {
      name: 'Alex Kumar',
      role: 'CTO',
      company: 'SmartCity Solutions',
      content: 'The road condition analyzer using CNN technology helped us optimize infrastructure maintenance. Predictive accuracy is outstanding.',
      rating: 5,
      project: 'Road Condition Analyzer'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="testimonials">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-accent">05.</span> Case Testimonials
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Client testimonials from successfully closed investigations. Each case solved with methodical precision.
        </p>
      </div>

      <div className="relative">
        {/* Main Testimonial */}
        <div className="speech-bubble p-8 max-w-4xl mx-auto mb-8">
          <div className="flex items-center mb-4">
            {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-current" />
            ))}
          </div>
          
          <blockquote className="text-lg leading-relaxed mb-6 font-mono text-center">
            "{testimonials[currentTestimonial].content}"
          </blockquote>
          
          <div className="text-center">
            <div className="font-bold font-mono text-accent">
              {testimonials[currentTestimonial].name}
            </div>
            <div className="text-muted-foreground text-sm">
              {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
            </div>
            <div className="mt-2 text-xs font-mono bg-accent/10 text-accent px-3 py-1 rounded-full inline-block">
              Case: {testimonials[currentTestimonial].project}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center space-x-4">
          <button 
            onClick={prevTestimonial}
            className="glow-border p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-accent w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                }`}
              />
            ))}
          </div>

          <button 
            onClick={nextTestimonial}
            className="glow-border p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center detective-card p-4 rounded-lg">
            <div className="text-2xl font-bold text-accent font-mono">50+</div>
            <div className="text-sm text-muted-foreground">Cases Solved</div>
          </div>
          <div className="text-center detective-card p-4 rounded-lg">
            <div className="text-2xl font-bold text-accent font-mono">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center detective-card p-4 rounded-lg">
            <div className="text-2xl font-bold text-accent font-mono">24h</div>
            <div className="text-sm text-muted-foreground">Avg Response</div>
          </div>
          <div className="text-center detective-card p-4 rounded-lg">
            <div className="text-2xl font-bold text-accent font-mono">5★</div>
            <div className="text-sm text-muted-foreground">Client Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;