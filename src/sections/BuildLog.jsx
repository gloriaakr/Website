import { motion } from "framer-motion";

const items = [
  { year: "2025", text: "Launched gloriabuilds.tech v2 — minimal, motion-polished." },
  { year: "2025", text: "Prototype: Clinic-in-a-Backpack telemedicine kit." },
  { year: "2025", text: "IoT agri sensors network (LoRa/Wi-Fi) pilot." },
  { year: "2024", text: "Built a sassy ESP32 accountability assistant." },
];

export default function BuildLog() {
  return (
    <section id="log" className="relative z-20 py-28 px-6 scroll-mt-24">
      <div className="mx-auto max-w-screen-md">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-center">Build Log</h2>
        <ol className="mt-8 space-y-5">
          {items.map((it, i) => (
            <motion.li key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:0.2}}
              className="flex gap-4">
              <div className="shrink-0 text-pink-300 font-medium w-14">{it.year}</div>
              <div className="flex-1 text-zinc-300">{it.text}</div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
