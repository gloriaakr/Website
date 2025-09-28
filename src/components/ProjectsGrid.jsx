// src/components/ProjectsGrid.jsx
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import projects from "../data/projectsData";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('all');

  // More robust filtering function
  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.tags?.includes(filter);
  });

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      variants={container}
      className="relative z-20 py-28 px-6 scroll-mt-24"
    >
      <div className="mx-auto max-w-screen-xl">
        <motion.header 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
            My Creations
          </h2>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-lg">
            From polished UIs to hardware that talks back — each project tells a story.
          </p>

          {/* Enhanced Filter UI */}
          <motion.div 
            className="flex flex-wrap gap-2 justify-center mt-8 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            key={filter} // This forces re-animation when filter changes
          >
            {['all', 'hardware', 'software', 'ai', 'iot', 'design'].map((type) => (
              <motion.button
                key={type}
                onClick={() => setFilter(type)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full text-sm capitalize transition-colors ${
                  filter === type 
                    ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/20' 
                    : 'bg-white/5 hover:bg-white/10'
                }`}
                // Animation when active filter changes
                animate={{
                  scale: filter === type ? 1.1 : 1
                }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {type}
              </motion.button>
            ))}
          </motion.div>
        </motion.header>

        {/* Projects Grid - Now with proper re-rendering */}
        <motion.div
          key={`projects-${filter}`} // Force re-render when filter changes
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div 
                key={project.slug} 
                variants={item}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))
          ) : (
            <motion.div
              className="col-span-full text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-zinc-400 text-lg">
                No {filter} projects found. Check back soon!
              </p>
              <button
                onClick={() => setFilter('all')}
                className="mt-4 px-6 py-2 rounded-full bg-pink-500/10 text-pink-300 hover:bg-pink-500/20 transition-colors"
              >
                Show All Projects
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}