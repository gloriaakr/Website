// src/components/ProjectCard.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const { slug, title, description, image, stack = [], links = {}, year, highlight } = project;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`group relative h-full rounded-2xl overflow-hidden bg-gradient-to-br ${highlight ? 'from-pink-400/10 to-purple-400/10' : 'from-white/5 to-white/5'} border ${highlight ? 'border-pink-400/30' : 'border-white/10'}`}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity opacity-0 group-hover:opacity-100 ${highlight ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400/20 to-transparent' : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent'}`} />

      {/* Project thumbnail */}
      <Link to={`/projects/${slug}`} className="block h-48 overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-purple-900/30 to-pink-900/30 flex items-center justify-center">
            <span className="text-zinc-400">{title}</span>
          </div>
        )}
      </Link>

      {/* Project content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight group-hover:text-pink-300 transition-colors">
              {title}
            </h3>
            {year && <span className="text-xs text-zinc-400 mt-1 block">{year}</span>}
          </div>
          
          {highlight && (
            <span className="text-xs uppercase tracking-wider px-2 py-1 rounded-full bg-pink-400/10 text-pink-300 border border-pink-400/30">
              Featured
            </span>
          )}
        </div>

        <p className="mt-3 text-zinc-300 line-clamp-2">{description}</p>

        {stack.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span 
                  key={tech} 
                  className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex gap-3">
          {links.live && (
            <motion.a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Live Demo</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          )}
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ml-auto"
          >
            <Link
              to={`/projects/${slug}`}
              className="text-sm px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center gap-1"
            >
              Details <span className="text-pink-300">→</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}