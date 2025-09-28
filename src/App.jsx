// src/App.jsx
import { Typewriter } from "react-simple-typewriter";
import Hero from "./sections/Hero";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import ParticlesBackground from "./ParticlesBackground";
import About from "./sections/About";
import ProjectsGrid from "./components/ProjectsGrid";
import { ChipIcon, MailIcon, LinkedInIcon, DownloadIcon } from "./assets/icons";
import TerminalFooter from "./components/TerminalFooter";

export default function App() {
  return (
    <div className="relative w-full min-h-screen text-white bg-transparent">
      {/* Particles behind everything */}
      <ParticlesBackground />

      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About /> 
      <ProjectsGrid />
      
      {/* Contact Section */}
      <ContactSection />
      
      <TerminalFooter />
      <div className="h-[20vh]" />
    </div>
  );
}

// You could also move this to its own component
function ContactSection() {
  return (
    <section id="contact" className="relative z-20 py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-screen-md text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-2"
        >
          Let's Build Together
        </motion.h2>
        
        <motion.p 
          className="mt-6 text-zinc-300 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Open to internships, freelance, or collabs. Currently especially interested in IoT/AI projects with social impact.
        </motion.p>
        
        <ContactButtons />
      </div>
    </section>
  )
}

// Extracted contact buttons for better organization
function ContactButtons() {
  return (
    <motion.div 
      className="mt-8 flex flex-wrap items-center justify-center gap-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <motion.a
        href="mailto:gloria.kirivita@gmail.com"
        className="rounded-lg border-2 border-pink-400 bg-pink-400/10 px-6 py-3 text-pink-300 hover:bg-pink-400/20 flex items-center gap-2"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <MailIcon className="w-5 h-5" />
        Email me
      </motion.a>
      
      <motion.a
        href="https://www.linkedin.com/in/gloria-g-30a5202ab/"
        target="_blank"
        rel="noreferrer"
        className="rounded-lg border-2 border-white/10 px-6 py-3 hover:bg-white/10 flex items-center gap-2"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <LinkedInIcon className="w-5 h-5" />
        LinkedIn
      </motion.a>
      
      <motion.a
        href="/cv/Resume.pdf"
        download
        className="rounded-lg border-2 border-purple-400/30 bg-purple-400/10 px-6 py-3 text-purple-300 hover:bg-purple-400/20 flex items-center gap-2"
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <DownloadIcon className="w-5 h-5" />
        Download CV
      </motion.a>
    </motion.div>
  )
}