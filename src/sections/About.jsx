// =============================
// sections/About.jsx — Interactive + Bold
// =============================
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="relative z-20 py-32 px-6"
    >
      <div className="mx-auto max-w-screen-md">
        {/* Bigger heading with gradient */}
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300"
        >
          About
        </motion.h2>
        
        <div className="space-y-8 text-zinc-200 leading-relaxed text-lg">
          {/* Intro with animated underline */}
          <motion.p 
            className="text-2xl font-medium"
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            Hi, I'm <span className="relative inline-block">
              <span className="font-bold text-white">Gloria</span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-pink-400"
                style={{ originX: 0 }}
              />
            </span> — a computer engineer who builds bridges between bits and atoms.
          </motion.p>
          
          {/* Interactive skill list */}
          <ul className="space-y-6 pl-2">
            {[
              { emoji: "⚡", title: "Hardware hacking", desc: "(ESP32s, Raspberry Pi, and a concerning number of unfinished side projects)" },
              { emoji: "💻", title: "Software design", desc: "(Clean code > clever code, but why not both?)" },
              { emoji: "🌍", title: "Tech-for-good", desc: "(Exploring ways tech can make everyday life smarter and more accessible.)" }
            ].map((item, index) => (
              <motion.li 
                key={index}
                className="flex items-start group cursor-default"
                onHoverStart={() => setHoveredItem(index)}
                onHoverEnd={() => setHoveredItem(null)}
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.span 
                  animate={{ 
                    rotate: hoveredItem === index ? [0, 10, -10, 0] : 0,
                    scale: hoveredItem === index ? 1.2 : 1
                  }}
                  className="mr-4 text-2xl"
                >
                  {item.emoji}
                </motion.span>
                <span>
                  <span className="font-bold text-white text-xl group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </span>{" "}
                  <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                    {item.desc}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
          
          {/* Currently section with animated dots */}
          <div className="pt-8">
            <motion.p 
              className="font-bold text-white text-xl mb-4 flex items-center"
              whileHover={{ scale: 1.02 }}
            >
              Currently
              <motion.span
                animate={{ 
                  opacity: [0.6, 1, 0.6],
                  transition: { repeat: Infinity, duration: 1.5 }
                }}
                className="ml-2"
              >
                ...
              </motion.span>
            </motion.p>
            <ul className="space-y-3 pl-6 list-disc text-lg">
              {[
                "Teaching mysekf Three.js (because 3D is the new 2D)",
                "Learning CAD design (so I can 3D print my dreams)",
                "Collecting 'why not?' ideas in a Google Doc that's 90% typos",
                " Building an intelligent autonomous robot (which may or may not become self-aware and take over the world)"
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ 
                    x: 5,
                    color: "#f472b6"
                  }}
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Philosophy statement with pulse effect */}
          <motion.p 
            className="pt-10 text-xl border-t border-zinc-700 mt-10"
            whileInView={{
              scale: [1, 1.02, 1],
              transition: { duration: 1 }
            }}
          >
            Sometimes you got to <span className="font-bold text-pink-300">run</span> before you <span className="font-bold text-purple-300">walk</span>. — Tony Stark.
          </motion.p>
        </div>
        
        {/* Footer with social links (optional) */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
        </motion.div>
      </div>
    </motion.section>
  );
}