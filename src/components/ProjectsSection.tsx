import React from 'react';
import { ExternalLink, Github, Brain, Shield, Car, Utensils, Briefcase } from 'lucide-react';
import aiAutomationImg from '../assets/project-ai-automation.jpg';
import proctoringImg from '../assets/project-proctoring.jpg';
import roadConditionImg from '../assets/project-road-condition.jpg';
import foodNetworkImg from '../assets/project-food-network.jpg';
import jobFinderImg from '../assets/project-job-finder.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: '001',
      title: 'AI Marketing Automation Platform',
      description: 'Intelligent automation system for social media, email campaigns, and job applications. Features predictive analytics, content optimization, and multi-platform integration.',
      image: aiAutomationImg,
      icon: Brain,
      tech: ['Python', 'Groq AI', 'Flask', 'React', 'PostgreSQL'],
      features: ['Social Media Automation', 'Email Campaign AI', 'Job Application Bot', 'Analytics Dashboard'],
      status: 'Active Investigation'
    },
    {
      id: '002', 
      title: 'Risk-Based Proctoring System',
      description: 'Advanced behavioral analysis system for academic integrity monitoring. Uses ML to detect suspicious patterns and generate risk assessments.',
      image: proctoringImg,
      icon: Shield,
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Node.js', 'MongoDB'],
      features: ['Behavioral Analysis', 'Real-time Monitoring', 'Risk Scoring', 'Report Generation'],
      status: 'Case Closed'
    },
    {
      id: '003',
      title: 'CNN Road Condition Analyzer',
      description: 'Computer vision application analyzing road conditions and traffic patterns. Provides real-time analytics for infrastructure management.',
      image: roadConditionImg,
      icon: Car,
      tech: ['Python', 'TensorFlow', 'OpenCV', 'React', 'Firebase'],
      features: ['Image Recognition', 'Traffic Analytics', 'Condition Mapping', 'Predictive Maintenance'],
      status: 'Ongoing Investigation'
    },
    {
      id: '004',
      title: 'Smart Food Redistribution Network',
      description: 'AI-powered matching system connecting food donors with recipients and biogas plants. Optimizes resource allocation and reduces waste.',
      image: foodNetworkImg,
      icon: Utensils,
      tech: ['Python', 'Machine Learning', 'React', 'PostgreSQL', 'Google Maps API'],
      features: ['Smart Matching', 'Route Optimization', 'Impact Tracking', 'Mobile App'],
      status: 'Evidence Analysis'
    },
    {
      id: '005',
      title: 'Job Finder Bot',
      description: 'Comprehensive job search automation with AI-powered resume scoring, job alerts, and multi-platform scraping from LinkedIn, Naukri, and more.',
      image: jobFinderImg,
      icon: Briefcase,
      tech: ['Python', 'Selenium', 'NLP', 'React', 'Node.js'],
      features: ['Resume AI Scoring', 'Job Alerts', 'Platform Integration', 'Application Tracking'],
      status: 'Under Investigation'
    }
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-accent">03.</span> Case Files
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Each project represents a complex investigation solved through methodical analysis and innovative AI integration.
        </p>
      </div>

      {/* Horizontal Scrolling Projects */}
      <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide">
        {projects.map((project, index) => (
          <div key={project.id} className="min-w-[400px] md:min-w-[500px] flex-shrink-0">
            <div className="case-file p-6 rounded-lg h-full">
              {/* Project Image */}
              <div className="relative group mb-6">
                <div className="glow-border rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center space-x-2 bg-background/90 backdrop-blur px-3 py-1 rounded-full">
                    <project.icon className="w-4 h-4 text-accent" />
                    <span className="font-mono text-sm">Case #{project.id}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-accent/20 backdrop-blur px-3 py-1 rounded-full">
                    <span className="font-mono text-xs text-accent">{project.status}</span>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-xl font-bold mb-3 font-mono">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="font-mono text-accent mb-2 text-sm">Investigation Tools:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-accent/10 text-accent px-2 py-1 rounded-full text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="font-mono text-accent mb-2 text-sm">Key Evidence:</h4>
                  <ul className="text-xs space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button className="glow-border px-3 py-2 rounded-lg font-mono text-xs hover:bg-accent hover:text-accent-foreground transition-all duration-300 flex items-center space-x-2">
                    <ExternalLink className="w-3 h-3" />
                    <span>View Case</span>
                  </button>
                  <button className="detective-card px-3 py-2 rounded-lg font-mono text-xs flex items-center space-x-2">
                    <Github className="w-3 h-3" />
                    <span>Evidence</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;