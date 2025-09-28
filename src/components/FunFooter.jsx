// src/components/PlayfulFooter.jsx
export default function Footer() {
    return (
      <footer className="py-16 text-center text-zinc-400 border-t border-white/10">
        <div className="flex justify-center gap-8 mb-6">
          <div>
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-sm">Coffees spilled</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">∞</div>
            <div className="text-sm">Bad puns made</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">100%</div>
            <div className="text-sm">Passion for building</div>
          </div>
        </div>
        <p className="text-sm">
          Built with React, Framer Motion, and questionable sleep schedules
        </p>
      </footer>
    );
  }