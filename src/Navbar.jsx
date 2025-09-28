import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const sections = LINKS.map(l => document.querySelector(l.href)).filter(Boolean);
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive("#" + visible.target.id);
      },
      { rootMargin: "0px 0px -60% 0px", threshold: [0.1, 0.25, 0.5] }
    );
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-30 backdrop-blur border-b border-white/10 bg-black/30">
      <div className="mx-auto max-w-screen-xl px-6 h-14 flex items-center justify-between">
        <motion.a 
          href="#" 
          className="font-semibold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          gloriabuilds
        </motion.a>
        <div className="hidden md:flex gap-6 text-sm">
          {LINKS.map(link => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                active === link.href ? "text-pink-400" : "text-zinc-300 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </nav>
  );
}