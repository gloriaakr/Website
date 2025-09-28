// src/ParticlesBackground.jsx
import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = useMemo(
    () => ({
      // Let tsparticles manage the canvas layer
      fullScreen: { enable: true, zIndex: -10 },
      background: { color: { value: "transparent" } },
      detectRetina: true,
      fpsLimit: 60,
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        opacity: { value: 0.25 },
        size: { value: { min: 3, max: 4 } },
        links: { enable: true, color: "#ffffff", distance: 140, opacity: 0.2, width: 1 },
        move: { enable: true, speed: 0.6, outModes: { default: "out" } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "repulse" }, resize: true },
        modes: { repulse: { distance: 100, duration: 0.4 } },
      },
    }),
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{ pointerEvents: "none" }} // never block clicks/scroll
    />
  );
}
