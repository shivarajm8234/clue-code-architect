import React from 'react';
import { Bot, Code, FileText, Bug } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI + Automation Development',
      description: 'Custom AI workflows and intelligent automation systems that think ahead and execute flawlessly.',
      features: [
        'Machine Learning Integration',
        'Process Automation',
        'Predictive Analytics',
        'AI-Powered Decision Making'
      ],
      
    },
    {
      icon: Code,
      title: 'Full-Stack Web Solutions',
      description: 'End-to-end web applications with modern tech stacks and seamless user experiences.',
      features: [
        'React/Node.js Development',
        'Database Architecture',
        'API Development',
        'Cloud Deployment'
      ],
      
    },
    {
      icon: FileText,
      title: 'Resume Building & Optimization',
      description: 'AI-analyzed resume optimization with ATS compatibility and industry-specific tailoring.',
      features: [
        'ATS Optimization',
        'Industry Tailoring',
        'Keyword Analysis',
        'Performance Tracking'
      ],
      
    },
    {
      icon: Bug,
      title: 'Bug Detection & Fixing',
      description: 'Systematic debugging and code optimization using detective-level analytical approaches.',
      features: [
        'Code Review & Analysis',
        'Performance Optimization',
        'Security Assessment',
        'Technical Documentation'
      ],
      
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="services">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-accent">04.</span> Investigation Services
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every problem is a case waiting to be solved. I offer specialized services combining analytical thinking with cutting-edge technology.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={service.title} className="detective-card p-8 rounded-lg group">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 font-mono">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-mono text-accent text-sm mb-2">Evidence Includes:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-muted-foreground text-sm flex items-center">
                        <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  <button 
                    onClick={() => window.open('mailto:contact@example.com?subject=' + encodeURIComponent(`Inquiry: ${service.title}`))}
                    className="glow-border px-6 py-2 rounded-lg font-mono text-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 w-full"
                  >
                    Start Investigation
                  </button>
                </div>
              </div>
            </div>

            {/* Case File Number */}
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <span className="font-mono text-xs">#{String(index + 1).padStart(3, '0')}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="case-file p-6 rounded-lg max-w-2xl mx-auto">
          <h3 className="font-mono font-bold mb-2 text-accent">Detective's Guarantee:</h3>
          <p className="text-muted-foreground text-sm">
            "Like every case L takes on, I approach each project with methodical precision and unwavering dedication. 
            Every solution is thoroughly tested, documented, and delivered with the analytical rigor of a master detective."
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;