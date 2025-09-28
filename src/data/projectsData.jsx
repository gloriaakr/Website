const projects = [
  {
    slug: "esp32-assistant",
    title: "Sassy ESP32 Accountability Assistant",
    description: "Physical AI buddy with OLED, keypad, ultrasonic sensor — snarky prompts, streaks, and voice control in progress.",
    stack: ["ESP32", "C++/Arduino", "OLED", "Keypad", "Ultrasonic"],
    image: "/assets/projects/esp32-assistant/cover.jpg",
    gif: "/assets/projects/esp32-assistant/demo.gif",
    links: {
      live: null,
      source: "https://github.com/<your-username>/esp32-assistant",
      case: "/projects/esp32-assistant",
    },
    year: "2025",
    highlight: true,
    tags: ["hardware", "ai"] // Added tags
  },
  {
    slug: "portfolio-2025",
    title: "This Portfolio (v2)",
    description: "Minimal, intentional redesign with motion hygiene and responsive components.",
    stack: ["React", "Tailwind", "Framer Motion"],
    image: "/assets/projects/portfolio-2025/cover.jpg",
    gif: null,
    links: {
      live: "https://gloriabuilds.tech",
      source: "https://github.com/<your-username>/portfolio-v2",
      case: "/projects/portfolio-2025",
    },
    year: "2025",
    tags: ["software", "design"] // Added tags
  },
  {
    slug: "pi5-project",
    title: "Raspberry Pi 5 — Tiny Web Computer",
    description: "From bare Pi to a mini desktop that browses, plays media, and runs local services.",
    stack: ["Raspberry Pi 5", "Linux", "GPIO"],
    image: "/assets/projects/pi5-project/cover.jpg",
    gif: null,
    links: {
      live: null,
      source: "https://github.com/<your-username>/pi5-desktop",
      case: "/projects/pi5-project",
    },
    year: "2025",
    tags: ["hardware", "software"] // Added tags
  },
  {
    slug: "web-to-device",
    title: "Web ↔ Device Experiments",
    description: "Bridging browser UIs with microcontrollers for fun (and occasionally useful) gadgets.",
    stack: ["Web Serial", "Web Bluetooth", "JavaScript"],
    image: "/assets/projects/web-to-device/cover.jpg",
    gif: null,
    links: {
      live: null,
      source: "https://github.com/<your-username>/web-device-lab",
      case: "/projects/web-to-device",
    },
    year: "2024–2025",
    tags: ["hardware", "software"] // Added tags
  },
  {
    slug: "arduino-mini-car",
    title: "Smart Arduino Mini Car",
    description: "Two-motor mini rover with ultrasonic obstacle avoidance and basic PID speed control.",
    stack: ["Arduino", "C++", "Ultrasonic", "Motor Driver", "PID (basic)"],
    image: "/assets/projects/arduino-mini-car/cover.jpg",
    gif: "/assets/projects/arduino-mini-car/demo.gif",
    links: {
      live: null,
      source: "https://github.com/<your-username>/arduino-mini-car",
      case: "/projects/arduino-mini-car",
    },
    year: "2024",
    tags: ["hardware"] // Added tags
  },
  {
    slug: "snoopy-flashcards",
    title: "Snoopy-Themed Study & Flashcards Website",
    description: "Cozy study web app that generates flashcards and quizzes from notes; animated UI with a playful theme.",
    stack: ["React", "Tailwind", "Node (optional)", "LocalStorage/DB"],
    image: "/assets/projects/snoopy-flashcards/cover.jpg",
    gif: "/assets/projects/snoopy-flashcards/demo.gif",
    links: {
      live: "https://<your-live-url-if-any>",
      source: "https://github.com/<your-username>/snoopy-flashcards",
      case: "/projects/snoopy-flashcards",
    },
    year: "2024",
    tags: ["software", "design"] // Added tags
  }
];

export default projects;