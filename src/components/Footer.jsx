import { Phone, PhoneCallIcon } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="relative bg-black text-white py-10 overflow-hidden flex flex-col items-center"
    >
      {/* Ambient Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-500/30 blur-[150px] animate-pulse-slow" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-indigo-500/30 blur-[150px] animate-pulse-slow" />

      {/* Floating Particles */}
      <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-4 h-4 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 opacity-20 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 rounded-full bg-gradient-to-tr from-pink-400 to-indigo-400 opacity-20 animate-pulse"></div>

      {/* Logo */}
      <div className="mb-12 text-3xl font-bold z-10">Connect with me!</div>

      {/* Social Media Icons */}
      <div className="flex flex-col items-center gap-4 z-10">
        {/* Social Media Icons */}
        <div className="flex items-center gap-8">
          <a
            href="https://github.com/Ativor-Godsway"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-4xl transition-transform duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/godsway-ativor-737123334"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-4xl transition-transform duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(0,119,181,0.5)]"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ativorgodsway@icloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-4xl transition-transform duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(255,69,58,0.5)]"
          >
            <FaEnvelope />
          </a>

          <a
            href="tel:+233548608146"
            className="text-white/80 hover:text-white text-4xl transition-transform duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <PhoneCallIcon className="w-8 h-8" />
          </a>

          <a
            href="https://wa.me/233548608146"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 hover:text-white text-4xl transition-transform duration-300 hover:scale-125 hover:shadow-[0_0_30px_rgba(37,211,102,0.5)]"
          >
            <FaWhatsapp />
          </a>
        </div>

        {/* Name and Phone */}
        <div className="mt-4 text-center space-y-1">
          <p className="text-white font-semibold text-lg">
            Ativor Godsway Kwabla
          </p>
          <p className="text-white/70 text-sm">+233 54 860 8146</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="mt-10 text-center text-white/50 text-sm z-10">
        &copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
