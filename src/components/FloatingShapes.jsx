import { motion } from "framer-motion";

const shapes = [
  { icon: "🖥️", size: "w-16 h-16", duration: 25, delay: 0, x: "10%", y: "20%" },
  { icon: "⚡", size: "w-12 h-12", duration: 30, delay: 5, x: "80%", y: "40%" },
  { icon: "🌐", size: "w-20 h-20", duration: 40, delay: 10, x: "30%", y: "70%" },
  { icon: "💻", size: "w-14 h-14", duration: 35, delay: 15, x: "70%", y: "10%" }
];

export default function FloatingShapes() {
  return (
    <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: shape.x, y: shape.y }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: [shape.y, `${parseInt(shape.y) + 10}%`, shape.y],
            rotate: 360
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute ${shape.size} text-4xl opacity-20`}
        >
          {shape.icon}
        </motion.div>
      ))}
    </div>
  );
}