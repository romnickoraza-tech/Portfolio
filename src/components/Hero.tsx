import React from "react";
import { ArrowDown, Facebook, Github, Mail } from "lucide-react";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <p className="text-teal-600 font-medium text-lg mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-800 mb-4">
            Romnick Oraza
          </h1>
          <h2 className="text-2xl md:text-3xl text-neutral-600 font-medium">
            Web Developer | Mobile Developer
          </h2>
        </div>

        <p className="text-lg md:text-xl text-neutral-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building elegant and efficient solutions across web and mobile platforms.
          Currently pursuing BSIT and developing real-world applications.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => scrollToSection("projects")}
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-neutral-300 text-neutral-700 hover:border-teal-600 hover:text-teal-600 px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex gap-6 justify-center mb-12">
          <a href="https://github.com/romnickoraza-tech" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-teal-600 transition-transform duration-200 hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://www.facebook.com/romnick.oraza" target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-teal-600 transition-transform duration-200 hover:scale-110">
            <Facebook size={28} />
          </a>
          <a href="mailto:romnickoraza11@gmail.com" className="text-neutral-600 hover:text-teal-600 transition-transform duration-200 hover:scale-110">
            <Mail size={28} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="animate-bounce text-neutral-400 hover:text-teal-600 transition-colors duration-200"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
