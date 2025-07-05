import React from 'react';

const SkillsSection = () => {
  const skills = [
    { name: 'Python', level: 95, color: 'bg-accent' },
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 88, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Flask', level: 82, color: 'bg-red-500' },
    { name: 'Firebase', level: 80, color: 'bg-orange-500' },
    { name: 'TailwindCSS', level: 92, color: 'bg-cyan-500' },
    { name: 'PostgreSQL', level: 78, color: 'bg-indigo-500' },
    { name: 'MongoDB', level: 75, color: 'bg-green-600' },
    { name: 'Groq AI', level: 88, color: 'bg-purple-500' },
    { name: 'Web Scraping', level: 90, color: 'bg-pink-500' },
  ];

  const badges = [
    'AI Integration', 'Automation', 'Full-Stack', 'Data Analytics', 
    'Machine Learning', 'Web Security', 'API Development', 'Database Design'
  ];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center font-mono">
        <span className="text-accent">02.</span> Investigation Toolkit
      </h2>

      {/* Core Technologies - Horizontal Scroll */}
      <div className="mb-12">
        <h3 className="text-2xl font-mono mb-6 text-accent">Core Technologies</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {skills.map((skill, index) => (
            <div key={skill.name} className="detective-card p-4 rounded-lg min-w-[280px] flex-shrink-0">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono font-semibold">{skill.name}</span>
                <span className="text-accent font-mono">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ 
                    width: `${skill.level}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specializations - Horizontal Scroll */}
      <div className="mb-8">
        <h3 className="text-2xl font-mono mb-6 text-accent">Specializations</h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {badges.map((badge, index) => (
            <div 
              key={badge}
              className="detective-card p-4 rounded-lg text-center hover:scale-105 transition-transform duration-300 min-w-[160px] flex-shrink-0"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span className="font-mono font-semibold text-sm">{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Detective's Note */}
      <div className="max-w-4xl mx-auto p-6 case-file rounded-lg">
        <h4 className="font-mono font-bold mb-4 text-accent">Detective's Note:</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          "Each technology is a tool in my investigative arsenal. Like L's deductive reasoning, 
          I combine these elements to create intelligent solutions that think several steps ahead. 
          The key isn't just knowing the tools—it's knowing when and how to use them together."
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;