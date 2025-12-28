import React from "react";
import { Server, Smartphone, Database, Code2 } from "lucide-react";

// --- Local Card Component ---
const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className
}) => (
  <div className={`rounded-lg p-4 shadow-sm bg-white ${className}`}>{children}</div>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Laravel", "Node.js", "ASP.NET (C#)", "Python"]
    },
    {
      icon: Smartphone,
      title: "Frontend & Mobile",
      skills: ["Flutter", "React", "Cross-platform Development"]
    },
    {
      icon: Database,
      title: "Database",
      skills: ["MongoDB", "MySQL", "Database Design"]
    },
    {
      icon: Code2,
      title: "Other Skills",
      skills: ["RESTful APIs", "Version Control", "Problem Solving", "UI/UX"]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          <p className="text-lg text-neutral-600 mt-6 max-w-2xl mx-auto">
            A diverse toolkit for building modern web and mobile applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-neutral-200 bg-white"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-teal-600" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                    {category.title}
                  </h3>
                  <div className="space-y-2 w-full">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="bg-neutral-50 px-3 py-2 rounded-lg text-neutral-700 text-sm font-medium"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-neutral-800 mb-8">
            Technical Proficiencies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Laravel",
              "C# ASP.NET",
              "Flutter",
              "Node.js",
              "MongoDB",
              "MySQL",
              "Python",
              "React",
              "REST APIs",
              "Full Stack Development",
              "Mobile Development"
            ].map((tech, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-white border border-neutral-300 rounded-full text-neutral-700 font-medium hover:border-teal-600 hover:text-teal-600 transition-colors duration-200 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
