import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20 text-center">
      <h3 className="text-3xl font-bold mb-6">Contact</h3>
      <div className="flex justify-center gap-6">
        <a href="https://github.com/romnickoraza-tech"><Github /></a>
        <a href="#"><Linkedin /></a>
        <a href="romnickoraza11@gmail.com"><Mail /></a>
      </div>
      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Romnick Oraza
      </footer>
    </section>
  );
};

export default Contact;
