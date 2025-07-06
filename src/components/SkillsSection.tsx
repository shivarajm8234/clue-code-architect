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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center font-mono">
        <span className="text-accent">02.</span> Investigation Toolkit
      </h2>

      {/* Compact Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {skills.map((skill, index) => (
          <div key={skill.name} className="detective-card p-3 rounded-lg text-center group">
            <div className="font-mono font-semibold text-sm mb-2">{skill.name}</div>
            <div className="text-accent font-mono text-xs">{skill.level}%</div>
            <div className="w-full bg-muted rounded-full h-1.5 mt-2">
              <div 
                className={`h-1.5 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${skill.level}%`,
                  animationDelay: `${index * 50}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Specializations */}
      <div className="mb-8">
        <h3 className="text-xl font-mono mb-4 text-accent text-center">Specializations</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((badge, index) => (
            <span 
              key={badge}
              className="detective-card px-3 py-1 rounded-full text-xs font-mono hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4 case-file rounded-lg max-w-3xl mx-auto">
        <h4 className="font-mono font-bold mb-2 text-accent text-center">Detective's Note:</h4>
        <p className="text-muted-foreground text-sm text-center leading-relaxed">
          "Each technology is a tool in my investigative arsenal. Like L's deductive reasoning, 
          I combine these elements to create intelligent solutions that think several steps ahead."
        </p>
      </div>
    </section>
  );
};

export default SkillsSection;