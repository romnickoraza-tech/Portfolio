import React from "react";
import { Mail, Github, MapPin, Phone, Facebook } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "romnickoraza11@gmail.com",
      href: "mailto:romnickoraza11@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+63 9383952092",
      href: "tel:+639123456789"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Philippines",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/romnickoraza-tech"
    },
    {
      icon: Facebook,
      label: "Facebook  ",
      href: "https://www.facebook.com/romnick.oraza"
    }
  ];

  return (
    <footer id="contact" className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-teal-400">Romnick</span> Oraza
            </h3>
            <p className="text-neutral-400 leading-relaxed">
              Web & Mobile Developer passionate about creating innovative solutions.
              Let's build something great together!
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Get In Touch</h4>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex items-start gap-3">
                  <Icon className="text-teal-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-sm text-neutral-500">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-neutral-300 hover:text-teal-400 transition-colors duration-200"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-neutral-300">{info.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-teal-600 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={24} />
                  </a>
                );
              })}
            </div>
            <p className="text-neutral-400 text-sm mt-6">
              Open to internship and junior developer opportunities.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-400 text-sm">
              © {currentYear} Romnick Oraza. All rights reserved.
            </p>
            <p className="text-neutral-500 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
