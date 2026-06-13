import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Mail, ExternalLink, ChevronDown,
  Brain, Cpu, Activity, Code2, Download, ArrowRight,
  Microscope, Waves, Network, Database, Layers, Zap
} from "lucide-react";

import sohailaPhoto from "./assets/sohaila_photo.jpg";

// Signal Viewer screenshots (8 images → auto-cycling carousel on hover)
import sv1 from "./assets/554429426-98f628c1-12a6-476e-9790-097a978bb93a.png";
import sv2 from "./assets/554429739-467417a8-588e-4495-b4c8-da42476a9a27.png";
import sv3 from "./assets/554429843-bf04b350-2056-4c84-89d6-16e689988d6e.png";
import sv4 from "./assets/554430009-bc9d5c0e-51ac-4a6e-9136-aea4ecfb11c6.png";
import sv5 from "./assets/554430358-15ca9668-fb73-4c48-becd-20f49b6f6ed6.png";
import sv6 from "./assets/554430849-8c830462-92d0-4c8f-9511-c0c0cca4f231.png";
import sv7 from "./assets/554431100-1a54faa5-2464-42be-a3e9-02f39a9b2bc2.png";
import sv8 from "./assets/554431331-8e4b9c0b-f278-43fb-be22-141e20e7204c.png";

const SIGNAL_VIEWER_IMGS = [sv1, sv2, sv3, sv4, sv5, sv6, sv7, sv8];

// Signal Equalizer screenshots + video
import se1 from "./assets/566234062-6b7a3e00-c96a-4fd8-ab43-db3f893ecc62.png";
import se2 from "./assets/566234634-15275a9b-6fb7-41d5-b88d-50d11cca5588.png";
import se3 from "./assets/566237861-05a4275a-50cb-4e0e-b3bf-57fda08c9549.png";
import se4 from "./assets/566239807-17678ba4-9313-41e7-aed2-449c6c514680.jpeg";
import seVid from "./assets/566432007-42d1e428-cdcb-4c03-85b3-e22152b88812.mp4";

const SIGNAL_EQUALIZER_MEDIA = [
  { type: "img", src: se1 },
  { type: "img", src: se2 },
  { type: "img", src: se3 },
  { type: "img", src: se4 },
  { type: "video", src: seVid },
];

// BeamSim screenshots
import bs1 from "./assets/task-4.png";
import bs2 from "./assets/task4-5g.png";
import bs3 from "./assets/task4-radar.png";
import bs4 from "./assets/task4-US.png";

const BEAMSIM_MEDIA = [
  { type: "img", src: bs1 },
  { type: "img", src: bs2 },
  { type: "img", src: bs3 },
  { type: "img", src: bs4 },
];

// FTmixer demo video
import ftVid from "./assets/WhatsApp Video 2026-05-08 at 3.56.52 AM.mp4";

const FTMIXER_MEDIA = [
  { type: "video", src: ftVid },
];

// 3elty screenshots
import elty_f   from "./assets/f.jpg";
import elty_f1  from "./assets/f1.jpg";
import elty_f2  from "./assets/f2.jpg";
import elty_f3  from "./assets/f3.jpg";
import elty_f4  from "./assets/f4.jpg";
import elty_f5  from "./assets/f5.jpg";
import elty_f6  from "./assets/f6.jpg";
import elty_f7  from "./assets/f7.jpg";
import elty_f8  from "./assets/f8.jpg";
import elty_f9  from "./assets/f9.jpg";
import elty_ff  from "./assets/ff.jpg";
import elty_ff1 from "./assets/ff1.jpg";
import elty_ff2 from "./assets/ff2.jpg";
import elty_ff3 from "./assets/ff3.jpg";
import elty_ff4 from "./assets/ff4.jpg";
import elty_ff5 from "./assets/ff5.jpg";
import elty_ff6 from "./assets/ff6.jpg";
import elty_ff7 from "./assets/ff7.jpg";
import elty_ff8 from "./assets/ff8.jpg";
import elty_ff9 from "./assets/ff9.jpg";
import elty_fff  from "./assets/fff.jpg";
import elty_fff1 from "./assets/fff1.jpg";
import elty_fff3 from "./assets/fff3.jpg";
import elty_fff4 from "./assets/fff4.jpg";
import elty_fff5 from "./assets/fff5.jpg";
import elty_fff6 from "./assets/fff6.jpg";
import elty_fff7 from "./assets/fff7.jpg";
import elty_fff8 from "./assets/fff8.jpg";

const ELTY_MEDIA = [
  elty_f, elty_f1, elty_f2, elty_f3, elty_f4, elty_f5,
  elty_f6, elty_f7, elty_f8, elty_f9,
  elty_ff, elty_ff1, elty_ff2, elty_ff3, elty_ff4, elty_ff5,
  elty_ff6, elty_ff7, elty_ff8, elty_ff9,
  elty_fff, elty_fff1, elty_fff3, elty_fff4, elty_fff5,
  elty_fff6, elty_fff7, elty_fff8,
].map(src => ({ type: "img", src }));

// Inline GitHub icon — removed from lucide-react v1+
function Github({ size = 18, className = "", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}

// Inline LinkedIn icon — removed from lucide-react v1+
function Linkedin({ size = 18, className = "", style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} style={style}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// ─── Design tokens ──────────────────────────────────────────────────────────
const ACCENT = "#00ffe7";   // neon cyan
const PURPLE = "#a855f7";   // neon purple
const ROSE   = "#fb7185";   // signal red

// ─── Utility: reveal on scroll ───────────────────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Scanline / grid texture overlay ─────────────────────────────────────────
function GridOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0,255,231,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,231,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
}

// ─── Glowing dot cluster (decorative) ────────────────────────────────────────
function GlowCluster({ color = ACCENT, size = 320, top, left, right, bottom, opacity = 0.15 }) {
  const style = { position: "absolute", width: size, height: size, borderRadius: "50%",
    background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
    opacity, filter: "blur(60px)", top, left, right, bottom, pointerEvents: "none" };
  return <div style={style} />;
}

// ─── Animated counter ─────────────────────────────────────────────────────────
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const t = setInterval(() => {
      start = Math.min(start + step, to);
      setVal(start);
      if (start >= to) clearInterval(t);
    }, 30);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  const links = ["About", "Skills", "Projects", "Research", "Contact"];
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-zinc-950/80 border-b border-cyan-500/10" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-mono text-sm tracking-widest text-cyan-400 font-bold">
          SE<span className="text-purple-400">_</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-xs tracking-widest uppercase text-zinc-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="text-xs font-mono px-4 py-2 border border-cyan-500/40 text-cyan-400 rounded hover:bg-cyan-500/10 transition-all"
        >
          Hire Me
        </a>
      </div>
    </motion.nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
const PHOTO_URL = sohailaPhoto;

function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-24">
      {/* Three.js canvas placeholder */}
      <div className="absolute inset-0 z-0">
        <div id="threejs-canvas-placeholder" className="w-full h-full" />
        <GlowCluster color={ACCENT}  size={500} top={-80}   left={-100}  opacity={0.12} />
        <GlowCluster color={PURPLE}  size={400} bottom={-60} right={-80}  opacity={0.1} />
        <GlowCluster color={ROSE}    size={200} top={200}   right={100}  opacity={0.08} />
      </div>

      {/* ── Two-column layout: text left, photo right ── */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* ── LEFT: text ── */}
        <div className="flex-1 text-center md:text-left">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-400 tracking-widest">SOPHOMORE · CAIRO UNIVERSITY · CGPA 3.4</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            <span className="text-white">Sohaila</span>
            <br />
            <span
              className="inline-block"
              style={{
                background: `linear-gradient(135deg, ${ACCENT} 0%, ${PURPLE} 60%, ${ROSE} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Emad
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-zinc-400 text-base md:text-lg max-w-xl mb-10 leading-relaxed"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Building at the intersection of{" "}
            <span className="text-cyan-400">AI</span>,{" "}
            <span className="text-purple-400">biomedical engineering</span>, and{" "}
            <span className="text-rose-400">signal processing</span>.
            Full-stack developer & ML researcher.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-3.5 rounded-lg font-mono text-sm font-bold text-zinc-950 transition-all duration-200 hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${ACCENT}, #00b4d8)` }}
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/Sohaila_Emad_CV.pdf"
              download
              className="flex items-center gap-2 px-8 py-3.5 rounded-lg font-mono text-sm border border-zinc-700 text-zinc-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-200"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-14 grid grid-cols-3 gap-6 text-center md:text-left"
          >
            {[
              { val: 10, suffix: "+", label: "Projects" },
              { val: 92, suffix: "%", label: "Best Accuracy" },
              { val: 50, suffix: "+", label: "IEEE Recruits" },
            ].map(({ val, suffix, label }) => (
              <div key={label}>
                <div className="text-2xl md:text-3xl font-black font-mono text-white">
                  <Counter to={val} suffix={suffix} />
                </div>
                <div className="text-xs text-zinc-500 mt-1 tracking-wider uppercase">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: photo ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-shrink-0"
        >
          {/* Outer glow ring */}
          <div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `conic-gradient(from 0deg, ${ACCENT}, ${PURPLE}, ${ROSE}, ${ACCENT})`,
              padding: "2px",
              borderRadius: "24px",
              filter: "blur(8px)",
              opacity: 0.6,
            }}
          />
          {/* Animated border ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-1 rounded-3xl opacity-30"
            style={{
              background: `conic-gradient(from 0deg, ${ACCENT} 0%, transparent 40%, ${PURPLE} 60%, transparent 80%, ${ROSE} 100%)`,
              borderRadius: "28px",
            }}
          />
          {/* Photo frame */}
          <div
            className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border-2"
            style={{ borderColor: `${ACCENT}40` }}
          >
            <img
              src={PHOTO_URL}
              alt="Sohaila Emad"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle cyan overlay tint at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-24"
              style={{
                background: `linear-gradient(to top, ${ACCENT}20, transparent)`,
              }}
            />
            {/* Name tag overlay */}
            <div
              className="absolute bottom-4 left-4 right-4 rounded-xl px-3 py-2 backdrop-blur-sm"
              style={{ background: "rgba(9,9,11,0.75)", border: `1px solid ${ACCENT}30` }}
            >
              <p className="font-mono text-xs text-cyan-400 tracking-widest">SOHAILA EMAD</p>
              <p className="font-mono text-[10px] text-zinc-500">Systems & Biomedical Eng.</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="relative z-10 mt-16"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="text-zinc-600"
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}

// ─── Skills Bento ─────────────────────────────────────────────────────────────
const skillCategories = [
  {
    icon: Brain,
    title: "Machine Learning & AI",
    accent: ACCENT,
    span: "md:col-span-2",
    skills: ["PyTorch", "TensorFlow", "Keras", "U-Net", "YOLOv5", "XGBoost", "SVM/RF", "PINNs", "Computer Vision"],
    desc: "Building and training deep learning models for medical imaging, object detection, and physics-informed neural networks.",
  },
  {
    icon: Code2,
    title: "Web & Mobile",
    accent: PURPLE,
    span: "md:col-span-1",
    skills: ["React", "Flask", "Django", "DRF", "Node.js", "Flutter", "Firebase"],
    desc: "Full-stack development across browser, server, and mobile platforms.",
  },
  {
    icon: Activity,
    title: "Biomedical & DSP",
    accent: ROSE,
    span: "md:col-span-1",
    skills: ["DSP", "Medical Imaging", "Beamforming", "DICOM", "CXR Analysis", "ECG/EEG", "STFT"],
    desc: "Signal acquisition, processing, and analysis for clinical and research applications.",
  },
  {
    icon: Cpu,
    title: "Languages & Tools",
    accent: "#f59e0b",
    span: "md:col-span-2",
    skills: ["Python", "Java", "C++", "Dart", "JavaScript", "Git", "PyQt5", "SQLite", "LaTeX"],
    desc: "Fluent across multiple paradigms — from systems-level C++ to rapid ML prototyping in Python.",
  },
];

function SkillCard({ icon: Icon, title, accent, span, skills, desc, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${span} group relative rounded-2xl p-6 border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm overflow-hidden hover:border-opacity-60 transition-all duration-300`}
      style={{ "--accent": accent }}
    >
      {/* Accent glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(circle at 20% 20%, ${accent}15 0%, transparent 60%)` }}
      />
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: `${accent}20`, border: `1px solid ${accent}40` }}
          >
            <Icon size={18} style={{ color: accent }} />
          </div>
        </div>
        <h3 className="text-white font-bold text-base mb-2">{title}</h3>
        <p className="text-zinc-500 text-xs leading-relaxed mb-4">{desc}</p>
        <div className="flex flex-wrap gap-1.5">
          {skills.map(s => (
            <span
              key={s}
              className="px-2 py-0.5 rounded text-xs font-mono"
              style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}25` }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <GlowCluster color={PURPLE} size={400} top={0} left="40%" opacity={0.06} />
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Technical Expertise</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">
              Skills &amp; Stack
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} {...cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
// 📌 SCREENSHOT SETUP: For each project, replace the `screenshot` value with the
// raw GitHub URL of your screenshot, e.g.:
// "https://raw.githubusercontent.com/sohaila-emad/signal-viewer/main/assets/screenshot.png"
// Find the URL by: opening the image in your repo → clicking Raw → copying the URL.
const projects = [
  {
    title: "Signal Viewer",
    subtitle: "Multi-Modal Analysis Platform",
    desc: "Browser-based biomedical & acoustic signal analysis platform processing multi-channel ECG/EEG, microbiome data, and Doppler audio. Features fully in-browser AI inference for ECGNet classification and MobileNet drone audio detection.",
    tags: ["React", "Flask", "ONNX", "WebGL", "Chart.js"],
    accent: ACCENT,
    icon: Waves,
    highlights: ["ECGNet Classification", "STFT Spectrograms", "Polar & Recurrence Plots"],
    repo: "https://github.com/sohaila-emad/signal-viewer",
    screenshot: SIGNAL_VIEWER_IMGS[0],
    screenshots: SIGNAL_VIEWER_IMGS,
    media: SIGNAL_VIEWER_IMGS.map(src => ({ type: "img", src })),
  },
  {
    title: "BeamSim",
    subtitle: "2D Phased Array Simulator",
    desc: "Physics-accurate 2D beamforming simulator modeling 5G, Ultrasound (Shepp-Logan phantom), and X-band Radar (PPI) wave propagation with attenuation, reflection, and interference models.",
    tags: ["Flask", "React", "Python OOP", "Signal Processing"],
    accent: PURPLE,
    icon: Network,
    highlights: ["5G / Ultrasound / Radar", "Physical Attenuation Model", "PPI Display"],
    repo: "https://github.com/sohaila-emad/Beamforming-Simulator",
    screenshot: bs1,
    screenshots: [],
    media: BEAMSIM_MEDIA,
  },
  {
    title: "Hybrid AI Pneumonia",
    subtitle: "Dual-Branch Detection System",
    desc: "Dual-branch AI system integrating classical ML (radiomic features) and deep learning for chest X-ray pneumonia detection. U-Net for lung segmentation; GLCM texture features feeding XGBoost, Random Forest, and SVM ensembles.",
    tags: ["Python", "U-Net", "YOLOv5", "XGBoost", "DICOM"],
    accent: ROSE,
    icon: Microscope,
    highlights: ["U-Net Segmentation", "GLCM Radiomic Features", "Ensemble ML"],
    repo: "https://github.com/sohaila-emad",
    screenshot: null,
    screenshots: [],
    media: [],
  },
  {
    title: "FTmixer",
    subtitle: "Fourier Transform Image Workbench",
    desc: "Dual-mode Fourier Transform workbench to blend images via magnitude/phase and real/imaginary components. Async backend for spatial/frequency transformations including convolution, complex exponential multiply, and rotation.",
    tags: ["Django", "DRF", "React", "Image Processing"],
    accent: "#f59e0b",
    icon: Layers,
    highlights: ["Magnitude/Phase Blending", "Async Processing", "Convolution Engine"],
    repo: "https://github.com/sohaila-emad/FTmixer",
    screenshot: null,
    screenshots: [],
    media: FTMIXER_MEDIA,
  },
  {
    title: "Signal Equalizer",
    subtitle: "Real-Time Audio & ECG Equalizer",
    desc: "Real-time audio and ECG signal equalizer with synchronized waveform and spectrogram visualizations. Custom frequency band filtering across Generic, Musical, and ECG modes using NumPy FFT and inverse FFT.",
    tags: ["React", "Flask", "NumPy", "Plotly.js", "DSP"],
    accent: "#22d3ee",
    icon: Activity,
    highlights: ["FFT/iFFT Filtering", "3 EQ Modes", "Live Spectrogram"],
    repo: "https://github.com/sohaila-emad/signal-equalizer",
    screenshot: se1,
    screenshots: [],
    media: SIGNAL_EQUALIZER_MEDIA,
  },
  {
    title: "3elty",
    subtitle: "Egyptian Family Health Companion",
    desc: "Cross-platform family health management app built with Flutter & Firebase. Supports 5 role-based profiles (Child, Elderly, Pregnant, Chronic, Adult) with digital vaccination booklets, vital monitoring, missed-dose alerts, GPS panic button, and a shared family calendar — all with offline-first SQLite caching.",
    tags: ["Flutter", "Firebase", "Dart", "SQLite", "Agile", "Scrum"],
    accent: "#34d399",
    icon: Database,
    highlights: ["5 Profile Types", "GPS Panic Button", "Offline-First"],
    repo: "https://github.com/sohaila-emad/3elty",
    screenshot: elty_f,
    screenshots: [],
    media: ELTY_MEDIA,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const Icon = project.icon;
  const isEven = index % 2 === 0;

  // Unified media array: prefer project.media, fall back to screenshots
  const media = project.media?.length > 0
    ? project.media
    : (project.screenshots || []).map(src => ({ type: "img", src }));
  const hasMedia = media.length > 0;

  // Auto-cycle through slides while hovered (skip if current is video)
  useEffect(() => {
    if (!hovered || media.length <= 1) return;
    if (media[slideIndex]?.type === "video") return; // don't skip away from video
    const t = setInterval(() => {
      setSlideIndex(i => (i + 1) % media.length);
    }, 1400);
    return () => clearInterval(t);
  }, [hovered, media.length, slideIndex]);

  useEffect(() => { if (!hovered) setSlideIndex(0); }, [hovered]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-zinc-600 transition-all duration-500 cursor-pointer"
    >
      {/* Top accent bar */}
      <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }} />

      {/* ── Media carousel (images + video) ── */}
      {(() => {
        // Use taller height for portrait/mobile screenshots (3elty), normal for landscape
        const isPortrait = project.media?.length > 0 &&
          project.media[0]?.src && project.title === "3elty";
        const carouselH = isPortrait ? 380 : 200;
        return (
      <motion.div
        animate={{ height: hovered && hasMedia ? carouselH : 0, opacity: hovered && hasMedia ? 1 : 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden bg-zinc-950"
      >
        {media.map((item, i) => (
          <motion.div
            key={i}
            animate={{ opacity: i === slideIndex ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay muted loop playsInline
                className="w-full h-full object-cover object-top"
                style={{ height: carouselH }}
              />
            ) : (
              <img
                src={item.src}
                alt={`${project.title} screenshot ${i + 1}`}
                className={isPortrait
                  ? "h-full w-auto object-contain mx-auto"
                  : "w-full h-full object-cover object-top"
                }
                style={{ height: carouselH, maxHeight: carouselH }}
              />
            )}
          </motion.div>
        ))}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-12 z-10"
          style={{ background: "linear-gradient(to top, #18181b, transparent)" }} />

        {/* Dot indicators */}
        {media.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-20 flex-wrap justify-center max-w-xs">
            {media.map((item, i) => (
              <button key={i} onClick={() => setSlideIndex(i)}
                className="rounded-full transition-all duration-300 flex items-center justify-center"
                style={{ width: i === slideIndex ? 16 : 6, height: 6,
                  background: i === slideIndex ? project.accent : "rgba(255,255,255,0.25)" }}
              >
                {item.type === "video" && i === slideIndex && (
                  <span className="text-[6px] text-zinc-900 font-bold">▶</span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Video badge */}
        {media[slideIndex]?.type === "video" && (
          <div className="absolute top-3 left-3 z-20 px-2 py-1 rounded text-[10px] font-mono"
            style={{ background: `${project.accent}22`, color: project.accent, border: `1px solid ${project.accent}40` }}>
            ▶ DEMO
          </div>
        )}

        {/* GitHub button */}
        <a href={project.repo} target="_blank" rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono backdrop-blur-sm transition-all hover:scale-105"
          style={{ background: "rgba(9,9,11,0.8)", border: `1px solid ${project.accent}40`, color: project.accent }}>
          <Github size={11} />
          Repo
        </a>
      </motion.div>
        );
      })()}

      <div className="p-7">
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: `${project.accent}20`, border: `1px solid ${project.accent}40` }}>
                <Icon size={16} style={{ color: project.accent }} />
              </div>
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: project.accent }}>
                Project {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white">{project.title}</h3>
            <p className="text-zinc-400 text-sm mt-0.5">{project.subtitle}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <motion.span animate={{ opacity: hovered ? 0 : 1 }} transition={{ duration: 0.2 }}
              className="text-[10px] font-mono text-zinc-600">
              {hasMedia
                ? `hover · ${media.length} ${media.some(m => m.type === "video") ? "screens+video" : "screens"}`
                : "hover to preview"}
            </motion.span>
            <ExternalLink size={14} className="text-zinc-600 group-hover:text-zinc-400 transition-colors" />
          </div>
        </div>

        <p className="text-zinc-400 text-sm leading-relaxed mb-5">{project.desc}</p>

        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.highlights.map(h => (
            <div key={h} className="rounded-lg px-3 py-2 text-xs text-center font-mono"
              style={{ background: `${project.accent}08`, color: `${project.accent}cc`, border: `1px solid ${project.accent}20` }}>
              {h}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="px-2 py-1 text-xs font-mono bg-zinc-800 text-zinc-400 rounded">{t}</span>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 50%, ${project.accent}06 0%, transparent 70%)` }} />
    </motion.div>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <GlowCluster color={ACCENT} size={350} bottom={0} right={0} opacity={0.07} />
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Selected Work</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Featured Projects</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Additional projects strip */}
        <Reveal delay={0.3} className="mt-10">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6">
            <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4">Additional Projects</p>
            <div className="flex flex-wrap gap-3">
              {[
                "3D Anatomy Puzzle Game (Unity3D, Blender)",
                "Medical Brain Image Viewer (PyQt5)",
                "YOLO Object Tracker with Heatmaps",
                "Sinus Endoscopy Classifier — 92% Accuracy",
              ].map(p => (
                <span key={p} className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <Zap size={10} className="text-cyan-500" />
                  {p}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
const timelineItems = [
  {
    date: "Feb – Jun 2025",
    type: "Research",
    accent: ACCENT,
    title: "Corneal Curvature Modeling via AI",
    org: "Cairo University — Graduation Project",
    bullets: [
      "Developed a numerical solution for a boundary value ODE modeling corneal curvature using the Method of Lines.",
      "Implemented a Physics-Informed Neural Network (PINN) approach using PyTorch.",
      "Compared computational efficiency and accuracy between numerical and ML methods.",
    ],
    tags: ["PyTorch", "PINNs", "Python", "ODEs"],
  },
  {
    date: "2025 – 2026",
    type: "Leadership",
    accent: PURPLE,
    title: "AI Department Member",
    org: "IEEE SBME Student Branch",
    bullets: [
      "Active contributor to AI-focused technical workshops and sessions.",
      "Collaborating on research dissemination and student development initiatives.",
    ],
    tags: ["AI", "IEEE", "Technical Workshops"],
  },
  {
    date: "2024 – 2025",
    type: "Leadership",
    accent: ROSE,
    title: "Human Resources Department Member",
    org: "IEEE SBME Student Branch",
    bullets: [
      "Organised recruitment drives attracting 50+ new members to the branch.",
      "Coordinated technical workshops and networking events across departments.",
    ],
    tags: ["HR", "Recruitment", "Events"],
  },
  {
    date: "Oct 2023 – Present",
    type: "Education",
    accent: "#f59e0b",
    title: "B.Eng. Systems & Biomedical Engineering",
    org: "Cairo University · CGPA 3.4 / 4.0",
    bullets: [
      "Relevant Coursework: Biomedical Signal Processing, Algorithms, Software Engineering, Machine Learning, Medical Imaging, Data Structures, Differential Equations.",
    ],
    tags: ["Sophomore", "Expected Jul 2027"],
  },
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="relative pl-10"
    >
      {/* Connector line */}
      {index < timelineItems.length - 1 && (
        <div className="absolute left-3.5 top-8 bottom-0 w-px bg-zinc-800" />
      )}
      {/* Dot */}
      <div
        className="absolute left-0 top-1.5 w-7 h-7 rounded-full flex items-center justify-center border-2"
        style={{ borderColor: item.accent, background: `${item.accent}15` }}
      >
        <div className="w-2 h-2 rounded-full" style={{ background: item.accent }} />
      </div>

      <div className="pb-12">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span
            className="text-xs font-mono px-2 py-0.5 rounded"
            style={{ background: `${item.accent}15`, color: item.accent, border: `1px solid ${item.accent}30` }}
          >
            {item.type}
          </span>
          <span className="text-xs text-zinc-500 font-mono">{item.date}</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-0.5">{item.title}</h3>
        <p className="text-sm text-zinc-500 mb-3 font-mono">{item.org}</p>
        <ul className="space-y-1.5 mb-4">
          {item.bullets.map((b, i) => (
            <li key={i} className="text-sm text-zinc-400 flex gap-2">
              <span style={{ color: item.accent }} className="mt-1 shrink-0">›</span>
              {b}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map(t => (
            <span key={t} className="text-xs font-mono text-zinc-500 bg-zinc-800/80 px-2 py-0.5 rounded">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Research() {
  return (
    <section id="research" className="relative py-32 px-6">
      <GlowCluster color={ROSE} size={300} top={100} left={0} opacity={0.06} />
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <div className="mb-16">
            <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-3">Timeline</p>
            <h2 className="text-4xl md:text-5xl font-black text-white">Research &amp; Experience</h2>
          </div>
        </Reveal>
        <div>
          {timelineItems.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact / Footer ─────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 border-t border-zinc-800/50">
      <GlowCluster color={ACCENT} size={400} top={-100} left="30%" opacity={0.08} />
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
            Let's Build<br />
            <span style={{ color: ACCENT }}>Something.</span>
          </h2>
          <p className="text-zinc-500 text-base mb-12 max-w-lg mx-auto leading-relaxed">
            Open to research collaborations, internship opportunities, and interesting engineering problems.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a
              href="mailto:sohailaemad85@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-900/60 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 w-full sm:w-auto"
            >
              <Mail size={18} className="text-cyan-400" />
              <span className="font-mono text-sm text-zinc-300 group-hover:text-white transition-colors">
                sohailaemad85@gmail.com
              </span>
            </a>
            <a
              href="https://github.com/sohaila-emad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-900/60 hover:border-purple-500/40 hover:bg-purple-500/5 transition-all duration-300 w-full sm:w-auto"
            >
              <Github size={18} className="text-purple-400" />
              <span className="font-mono text-sm text-zinc-300 group-hover:text-white transition-colors">
                github.com/sohaila-emad
              </span>
            </a>
            <a
              href="https://linkedin.com/in/sohaila-emad"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-xl border border-zinc-700 bg-zinc-900/60 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 w-full sm:w-auto"
            >
              <Linkedin size={18} className="text-cyan-400" />
              <span className="font-mono text-sm text-zinc-300 group-hover:text-white transition-colors">
                linkedin.com/in/sohaila-emad
              </span>
            </a>
          </div>
        </Reveal>

        {/* Footer bottom */}
        <div className="border-t border-zinc-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-zinc-600">
            © 2025 Sohaila Emad · Cairo, Egypt
          </span>
          <span className="font-mono text-xs text-zinc-600">
            Systems &amp; Biomedical Engineering · Cairo University
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Root App ─────────────────────────────────────────────────────────────────
export default function App() {
  // Inject Google Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=IBM+Plex+Mono:wght@300;400;500&display=swap";
    document.head.appendChild(link);
    document.body.style.background = "#09090b";
    document.body.style.color = "#e4e4e7";
    document.body.style.fontFamily = "'IBM Plex Mono', monospace";
  }, []);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">
      <GridOverlay />
      <NavBar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Research />
        <Contact />
      </main>
    </div>
  );
}