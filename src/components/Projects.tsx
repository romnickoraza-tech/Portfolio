import React from "react";
import { ExternalLink, Github } from "lucide-react";

// --- Local Card Component ---
const Card: React.FC<{ className?: string; children: React.ReactNode }> = ({
  children,
  className
}) => (
  <div className={`rounded-lg p-4 shadow-sm bg-white ${className}`}>{children}</div>
);

// --- Local Button Component ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "outline" | "default";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  className,
  ...props
}) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center";

  const variantStyle =
    variant === "outline"
      ? "border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
      : "bg-teal-600 text-white hover:bg-teal-700";

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

// --- Projects Component ---
const Projects: React.FC = () => {
  const projects = [
    {
      title: "Inventory Management System",
      description:
        "A comprehensive inventory management solution designed to streamline stock tracking, order management, and inventory analytics.",
      techStack: ["Laravel", "MySQL", "Bootstrap"],
      features: ["Real-time inventory tracking", "Stock level alerts", "Order management", "Analytics dashboard"],
      github: "https://github.com/romnickoraza-tech/inventory_management_system",
      demo: null
    },
    {
      title: "University Event Management & Attendance Portal",
      description:
        "An integrated platform for managing university events and tracking attendance. Includes event scheduling, registration system, QR code-based attendance tracking, and reporting.",
      techStack: ["Laravel", "MySQL", "Flutter"],
      features: ["Event creation and scheduling", "Student registration system", "QR code attendance tracking", "Admin analytics dashboard"],
      github: "https://github.com/romnickoraza-tech/UniversityEventManagement_AttendancePortal",
      demo: null
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-teal-600 mx-auto rounded-full"></div>
          <p className="text-lg text-neutral-600 mt-6 max-w-2xl mx-auto">
            Real-world applications built with modern technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all duration-300 border border-neutral-200 bg-neutral-50"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-2xl font-bold text-neutral-800">{project.title}</h3>
                  <p className="text-neutral-700 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold text-neutral-800 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-neutral-700 flex items-start">
                          <span className="text-teal-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                 <div className="flex gap-4 pt-4">
  <Button
    onClick={() => window.open(project.github, "_blank")}
    className="bg-neutral-800 hover:bg-neutral-900 text-white px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
  >
    <Github size={18} />
    View Code
  </Button>
  {project.demo && (
    <Button
      onClick={() => window.open(project.demo!, "_blank")} // note the !
      variant="outline"
      className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
    >
      <ExternalLink size={18} />
      Live Demo
    </Button>
  )}
</div>

                </div>

                {/* Tech Stack */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-neutral-800">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white border border-neutral-300 rounded-lg text-neutral-700 text-sm font-medium shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
