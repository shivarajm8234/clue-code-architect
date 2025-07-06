import React, { useState } from 'react';
import { Send, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Received",
        description: "Your clue has been logged. Investigation will begin shortly.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const socialLinks = [
    { icon: Mail, href: 'mailto:detective@investigation.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/detective-l', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/detective-l', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/detective_l', label: 'Twitter' }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-accent">06.</span> Drop a Clue
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a complex problem that needs investigating? Ready to start your next AI-powered project? Let's connect and solve it together.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="case-file p-8 rounded-lg">
          <h3 className="text-xl font-bold mb-6 font-mono text-accent">
            Case Submission Form
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-mono text-accent mb-2">
                  Contact Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-mono"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-accent mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-mono"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-mono text-accent mb-2">
                Case Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-mono"
                placeholder="Brief description of your project"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-mono text-accent mb-2">
                Case Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent font-mono resize-none"
                placeholder="Describe your project requirements, timeline, and any specific challenges you're facing..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full glow-border px-6 py-3 rounded-lg font-mono hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
              <span>{isSubmitting ? 'Submitting Case...' : 'Submit Investigation Request'}</span>
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <div className="detective-card p-8 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-6 font-mono text-accent">
              Investigation Headquarters
            </h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="font-mono font-semibold mb-2">Response Time:</h4>
                <p className="text-muted-foreground text-sm">
                  All cases are reviewed within 24 hours. Complex investigations may require additional analysis time.
                </p>
              </div>
              
              <div>
                <h4 className="font-mono font-semibold mb-2">Consultation:</h4>
                <p className="text-muted-foreground text-sm">
                  Free initial consultation to discuss your project scope and determine the best investigative approach.
                </p>
              </div>
              
              <div>
                <h4 className="font-mono font-semibold mb-2">Availability:</h4>
                <p className="text-muted-foreground text-sm">
                  Open to new cases. Currently accepting projects starting in Q1 2024.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-mono font-semibold mb-4 text-accent">Connect & Follow:</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-accent/10 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Detective Quote */}
          <div className="speech-bubble p-6">
            <blockquote className="text-sm italic text-center font-mono">
              "Every great solution begins with understanding the problem completely. 
              Like L's methodical approach to each case, I analyze every detail before 
              crafting the perfect technical solution."
            </blockquote>
            <div className="text-center mt-4 text-accent font-mono text-sm">
              — Detective L
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;