import React from "react";
import { GraduationCap, Code, Target } from "lucide-react";

interface Highlight {
  icon: React.ElementType;
  title: string;
  description: string;
}

const About: React.FC = () => {
  const highlights: Highlight[] = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Currently pursuing Bachelor of Science in Information Technology (BSIT)"
    },
    {
      icon: Code,
      title: "Development",
      description: "Building full-stack web applications and cross-platform mobile apps"
    },
    {
      icon: Target,
      title: "Goal",
      description: "Seeking opportunities to grow as a professional developer and contribute to impactful projects"
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-neutral-700 leading-relaxed">
              Hello! I'm Romnick Oraza, a passionate developer currently pursuing my degree in Information Technology.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              My journey in software development has equipped me with diverse skills across multiple platforms and frameworks.
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Whether it's developing a comprehensive inventory system or creating event management platforms, I enjoy the challenge of bringing ideas to life through clean, efficient code.
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border border-neutral-200 rounded-lg flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Icon className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-2">{item.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
