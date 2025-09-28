// src/sections/Hero.jsx
'use client'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { ChipIcon } from '../assets/icons'
import BlobBackground from '../components/BlobBackground'

export default function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 font-grotesk text-center">
      {/* Blob Background */}
      <BlobBackground />
      
      <div className="mx-auto max-w-screen-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Hi, I'm <span className="relative inline-block">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                Gloria Gato
              </span>
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute bottom-0 left-0 h-1 bg-pink-400"
              />
            </span>
          </h1>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="mt-4 text-lg md:text-xl text-pink-400"
          >
            <Typewriter
              words={["Hardware Engineer ", "Software Engineer ", "Tech Enthusiast "]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.div>

          <p className="mt-8 text-gray-300 max-w-2xl md:text-xl leading-relaxed mx-auto">
            Where code meets circuits — I build cool stuff. Some of it lives on the web, some of it runs your machines.
          </p>
        </motion.div>

        {/* Floating hardware icon */}
        <div className="absolute -top-10 -left-10 opacity-20">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <ChipIcon className="w-16 h-16" />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className="absolute left-1/2 -translate-x-1/2 bottom-6" aria-label="Scroll to About">
        <motion.div
          initial={{ y: 0, opacity: 0.7 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="text-pink-400 text-2xl"
        >
          ↓
        </motion.div>
      </a>
    </section>
  )
}