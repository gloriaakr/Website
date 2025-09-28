// src/components/SkillsCloud.jsx
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️", color: "text-blue-400" },
  { name: "IoT", icon: "📶", color: "text-purple-400" },
  { name: "Python", icon: "🐍", color: "text-yellow-400" },
  { name: "Embedded Systems", icon: "💾", color: "text-pink-400" },
  { name: "AI/ML", icon: "🧠", color: "text-green-400" },
  { name: "Node.js", icon: "🟢", color: "text-emerald-400" },
  { name: "Hardware", icon: "🔌", color: "text-orange-400" },
  { name: "UI/UX", icon: "🎨", color: "text-cyan-400" }
];

export default function SkillsCloud() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-screen-md text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            Tools & Tech
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ 
                y: -8,
                scale: 1.2,
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`text-5xl ${skill.color} cursor-default relative`}
              title={skill.name}
            >
              {skill.icon}
              <motion.span
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono bg-black/80 px-2 py-1 rounded whitespace-nowrap"
              >
                {skill.name}
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}