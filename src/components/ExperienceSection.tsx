import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechInnovate Solutions',
      period: '2022 - Present',
      description: 'Led development of AI-powered automation systems, managing a team of 4 developers. Implemented machine learning models that increased client efficiency by 40%.',
      achievements: [
        'Architected 15+ AI automation workflows',
        'Reduced processing time by 60% through optimization',
        'Mentored junior developers in ML integration'
      ]
    },
    {
      type: 'work',
      title: 'AI Solutions Architect',
      company: 'DataCorp Analytics',
      period: '2020 - 2022',
      description: 'Designed and implemented intelligent data processing pipelines using Python, TensorFlow, and cloud technologies.',
      achievements: [
        'Built predictive models with 95% accuracy',
        'Deployed 20+ machine learning solutions',
        'Integrated AI APIs for 50+ client projects'
      ]
    },
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'Tech University',
      period: '2018 - 2020',
      description: 'Specialized in Artificial Intelligence and Machine Learning. Thesis on "Behavioral Pattern Recognition in Web Applications".',
      achievements: [
        'GPA: 3.9/4.0',
        'Published 3 research papers',
        'Teaching Assistant for AI courses'
      ]
    },
    {
      type: 'work',
      title: 'Junior Full Stack Developer',
      company: 'StartupLab Inc.',
      period: '2017 - 2018',
      description: 'Developed web applications using React, Node.js, and MongoDB. Gained experience in agile development and client communication.',
      achievements: [
        'Built 10+ responsive web applications',
        'Implemented real-time features using WebSockets',
        'Improved application performance by 35%'
      ]
    }
  ];

  const certifications = [
    { name: 'AWS Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Google Cloud Professional ML Engineer', issuer: 'Google Cloud', year: '2022' },
    { name: 'MongoDB Developer Associate', issuer: 'MongoDB', year: '2021' },
    { name: 'React Developer Certification', issuer: 'Meta', year: '2020' }
  ];

  const getIcon = (type: string) => {
    switch(type) {
      case 'work': return Briefcase;
      case 'education': return GraduationCap;
      default: return Briefcase;
    }
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" id="experience">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4 font-mono">
          <span className="text-accent">05.</span> Investigation History
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A chronological record of cases solved, knowledge acquired, and expertise developed through years of detective work in the digital realm.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Experience Timeline */}
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-mono mb-8 text-accent">Case History</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-border"></div>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => {
                const Icon = getIcon(exp.type);
                return (
                  <div key={index} className="relative flex items-start space-x-4">
                    {/* Timeline Node */}
                    <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center border-2 border-accent">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 detective-card p-6 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-accent font-mono text-sm">{exp.period}</span>
                      </div>
                      
                      <h4 className="text-xl font-bold font-mono mb-1">{exp.title}</h4>
                      <p className="text-accent font-mono text-sm mb-3">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h5 className="font-mono text-accent text-sm mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="text-muted-foreground text-sm flex items-start">
                              <span className="w-1 h-1 bg-accent rounded-full mr-2 mt-2 flex-shrink-0"></span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-mono mb-8 text-accent">Credentials</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div key={index} className="detective-card p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Award className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-mono font-semibold text-sm mb-1">{cert.name}</h4>
                    <p className="text-muted-foreground text-xs mb-1">{cert.issuer}</p>
                    <span className="text-accent font-mono text-xs">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detective Note */}
          <div className="mt-8 case-file p-4 rounded-lg">
            <h4 className="font-mono font-bold mb-2 text-accent text-sm">Detective's Note:</h4>
            <p className="text-muted-foreground text-xs leading-relaxed">
              "Each case has taught me something new. Every challenge overcome has sharpened my analytical skills. 
              Like L's unwavering pursuit of truth, I continuously evolve and adapt to solve increasingly complex problems."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;