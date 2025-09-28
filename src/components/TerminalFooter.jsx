// src/components/TerminalFooter.jsx
import { Typewriter } from "react-simple-typewriter";

export default function TerminalFooter() {
  return (
    <footer className="bg-black/50 p-6 rounded-t-2xl font-mono">
      <div className="flex gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <div className="text-green-400">
        <span className="mr-2">$</span>
        <Typewriter
          words={[
            "gloria build --portfolio --with passion",
            "npm install creativity@latest",
            "git push origin awesome-projects"
          ]}
          loop
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={40}
        />
      </div>
    </footer>
  );
}