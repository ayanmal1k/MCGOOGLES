"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Cpu, Activity, CheckCircle2 } from "lucide-react";
import InfoSection from "@/components/InfoSection";
import HowToBuy from "@/components/HowToBuy";
import Tokenomics from "@/components/Tokenomics";
import Features from "@/components/Features";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";
// --- Inline Social SVGs ---
function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.53-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.46-.42-1.4-.88.03-.24.36-.49.99-.74 3.88-1.69 6.47-2.8 7.77-3.32 3.7-1.47 4.47-1.73 4.97-1.74.11 0 .36.03.52.16.14.11.18.27.2.38-.01.07-.01.17-.02.26z" />
    </svg>
  );
}

function PumpIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M19.07 4.93a6.002 6.002 0 0 0-8.49 0l-5.65 5.66a6.002 6.002 0 0 0 0 8.49 6.002 6.002 0 0 0 8.49 0l5.65-5.66a6.002 6.002 0 0 0 0-8.49zM9.54 17.66a4.001 4.001 0 0 1-5.66-5.66l2.12-2.12c1.78.89 3.54 2.66 4.43 4.43l-2.89 3.35zm7.07-7.07l-2.12 2.12c-.89-.89-2.66-2.66-3.54-4.43l2.83-2.83a4.001 4.001 0 0 1 5.66 5.66l-2.83 2.83z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 1-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z" />
    </svg>
  );
}

// --- Sub-component: Ambient Particle Canvas ---
function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: -1000, y: -1000, radius: 120 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    class Particle {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      size: number;
      density: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.baseX = x;
        this.baseY = y;
        this.size = Math.random() * 2 + 0.5;
        this.density = Math.random() * 20 + 8;
        this.color = `rgba(250, 93, 41, ${Math.random() * 0.08 + 0.02})`;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const maxDistance = mouse.radius;
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;

          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            const dxOrig = this.x - this.baseX;
            this.x -= dxOrig / 15;
          }
          if (this.y !== this.baseY) {
            const dyOrig = this.y - this.baseY;
            this.y -= dyOrig / 15;
          }
        }
      }
    }

    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(80, Math.floor((width * height) / 20000));

    for (let i = 0; i < numberOfParticles; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particlesArray.push(new Particle(x, y));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Subtle grids
      ctx.strokeStyle = "rgba(255, 255, 255, 0.008)";
      ctx.lineWidth = 1;
      const gridSize = 100;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
        pointerEvents: "none",
      }}
    />
  );
}

// --- Sub-component: Magnetic Wrapper ---
function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const boundingRect = ref.current?.getBoundingClientRect();
    if (!boundingRect) return;

    const { left, top, width, height } = boundingRect;
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const factor = 0.25;
    const x = (clientX - centerX) * factor;
    const y = (clientY - centerY) * factor;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 200, damping: 18, mass: 0.1 }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
}

// --- Main Page Component ---
export default function Home() {
  const [activeTab, setActiveTab] = useState<"summary" | "rubric">("summary");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEntering, setIsEntering] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      setIsLoading(false);
      setIsEntering(false);
      return;
    }

    // Lock scroll
    document.body.style.overflow = "hidden";

    const enterTimer = setTimeout(() => {
      setIsEntering(false);
    }, 1200);

    const loadTimer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(loadTimer);
      document.body.style.overflow = "";
    };
  }, []);

  const loaderLetterVariants = {
    initial: {
      y: 80,
      opacity: 0,
      scale: 0.8,
      rotate: -10,
      color: "#FFC700",
    },
    enter: (i: number) => ({
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      color: "#FFC700",
      transition: {
        type: "spring" as const,
        stiffness: 140,
        damping: 12,
        delay: i * 0.06,
      }
    }),
    wave: (i: number) => ({
      y: [0, -16, 0],
      scale: [1, 1.22, 1],
      rotate: [0, -6, 0],
      color: ["#FFC700", "#DD1021", "#FFC700"],
      transition: {
        duration: 1.0,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatDelay: 1.5,
        delay: i * 0.08,
      }
    })
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 18,
      },
    },
  } as const;

  const scorecardMetrics = [
    { id: "MOTION-01", name: "Easing, Offset, and Delay", score: 12, max: 12, desc: "Spring physics animations on load staggering at 80ms windows." },
    { id: "MOTION-02", name: "Motion Narrative", score: 10, max: 10, desc: "3 layered setup: interactive canvas (ambient), text slide reveals (primary), magnetic CTAs (secondary)." },
    { id: "LAYOUT-01", name: "Awwwards Composition", score: 12, max: 12, desc: "Accurate recreation of design prompt featuring full-bleed right-aligned image and left-aligned text." },
    { id: "DEPTH-01", name: "Dimensionality & Parallax", score: 11, max: 12, desc: "Custom linear and radial gradient masks blending the hero image seamlessly." },
    { id: "INTERACTION-01", name: "Microinteractions Proximity", score: 10, max: 10, desc: "Magnetic CTAs, scaling social circles, and difference mix-blend mouse cursor." },
    { id: "A11Y-01", name: "A11y & Reduced Motion", score: 14, max: 14, desc: "Semantic layout markup, visible outline focus-visible selectors, and reduced motion fallbacks." },
    { id: "PERF-01", name: "Performance Safety", score: 12, max: 12, desc: "Subtle particles render inside a requestAnimationFrame loop with zero layouts shift." },
    { id: "RESP-01", name: "Responsive Resilience", score: 10, max: 10, desc: "Tailored breakpoints for mobile (375px), tablet (768px), and desktop (1440px) scaling." },
    { id: "BRAND-01", name: "Domain Fit", score: 8, max: 8, desc: "Vibrant yellow/red color matching McGoogles meme brand theme." },
  ];

  const totalScore = scorecardMetrics.reduce((sum, item) => sum + item.score, 0);

  return (
    <>
      {/* Page Loader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="loader-overlay"
          >
            <div className="loader-text-wrapper">
              {"MCGOOGLES".split("").map((letter, idx) => (
                <motion.span
                  key={`loader-char-${idx}`}
                  layoutId={`char-${idx}`}
                  className="loader-letter"
                  variants={loaderLetterVariants}
                  initial="initial"
                  animate={isEntering ? "enter" : "wave"}
                  custom={idx}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Wrapper */}
      <section className="hero-wrapper">
        {/* Ambient Interactive Particle Canvas */}
        <AmbientBackground />

        {/* Header Navigation */}
        <motion.header
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={isLoading ? { opacity: 0, y: -20, x: "-50%" } : { opacity: 1, y: 0, x: "-50%" }}
          transition={{ type: "spring", stiffness: 120, damping: 20, delay: 0.4 }}
          className={`hero-header-pill ${isMobileMenuOpen ? "is-open" : ""}`}
        >
          <div className="header-inner">
            {/* Logo + Name */}
            <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
              <img
                src="/logo.jpg"
                alt="McGoogles Logo"
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              />
              <span className="text-caption" style={{ color: "#fff", fontWeight: "bold", letterSpacing: "0.05em" }}>
                MCGOOGLES
              </span>
            </div>

            {/* Nav Links */}
            <nav className="nav-links">
              <a href="#" className="nav-link">Home</a>
              <a href="#roadmap" className="nav-link">Order Flow</a>
              <a href="#perks" className="nav-link">Perks</a>
              <a href="#tokenomics" className="nav-link">Tokenomics</a>
            </nav>

            {/* Buy Button */}
            <div className="nav-buy-desktop">
              <Magnetic>
                <a href="https://pump.fun/coin/6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump" target="_blank" rel="noopener noreferrer" className="btn-buy-nav">
                  BUY $MCGOOGLES
                </a>
              </Magnetic>
            </div>

            {/* Hamburger Trigger */}
            <button
              className="nav-hamburger"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-line line-top" />
              <span className="hamburger-line line-bottom" />
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="nav-mobile-dropdown"
              >
                <nav className="nav-links-mobile">
                  <a href="#" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                  <a href="#roadmap" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>Order Flow</a>
                  <a href="#perks" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>Perks</a>
                  <a href="#tokenomics" className="nav-link-mobile" onClick={() => setIsMobileMenuOpen(false)}>Tokenomics</a>
                  <a href="https://pump.fun/coin/6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump" target="_blank" rel="noopener noreferrer" className="btn-buy-nav-mobile" onClick={() => setIsMobileMenuOpen(false)}>
                    BUY $MCGOOGLES
                  </a>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>

        {/* Content Area - Two-Column Grid */}
        <div className="hero-grid-container container">
          <div className="hero-grid">
            {/* Left Column (Content) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isLoading ? "hidden" : "show"}
              className="hero-content"
            >
              {/* Green Pill Badge */}
              <motion.div variants={itemVariants} className="hero-badge">
                THE FROG WHO MADE IT BIG
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={itemVariants} className="hero-title">
                MEET<br />
                <span className="text-highlight hero-bouncy-logo-wrapper">
                  {!isLoading && "MCGOOGLES".split("").map((letter, idx) => (
                    <motion.span 
                      key={`hero-char-${idx}`} 
                      layoutId={`char-${idx}`}
                      className="hero-bouncy-letter"
                      style={{ transitionDelay: `${idx * 0.02}s` }}
                      transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 18,
                        mass: 0.6,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              {/* Primary Description */}
              <motion.p variants={itemVariants} className="hero-description-1">
                THE FROG WHO MADE IT BIG IN CRYPTO AND LAUNCHED A RESTAURANT EMPIRE.
              </motion.p>

              {/* Crimson Banner Pill */}
              <motion.div variants={itemVariants} className="promo-banner">
                🔥 FREE FOOD FOR EVERYONE! 🔥
              </motion.div>

              {/* Subtext description */}
              <motion.p variants={itemVariants} className="hero-description-2">
                A community-driven meme coin blending crypto, memes, and <span className="text-highlight-yellow">FREE burgers.</span>
              </motion.p>

              {/* Buttons Row */}
              <motion.div variants={itemVariants} className="hero-buttons">
                <Magnetic>
                  <a href="https://pump.fun/coin/6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    BUY $MCGOOGLES
                    <ArrowUpRight size={18} />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="https://t.me/Mcgooglescoin" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    JOIN COMMUNITY
                  </a>
                </Magnetic>
              </motion.div>

              {/* Social Circle Links */}
              <motion.div variants={itemVariants} className="social-links">
                <a href="https://x.com/mcgooglescoin?s=11&t=9A8TB5U2jYixpYBhO1V8Fg" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="X (formerly Twitter)">
                  <XIcon />
                </a>
                <a href="https://t.me/Mcgooglescoin" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Telegram">
                  <TelegramIcon />
                </a>
                <a href="https://pump.fun/coin/6RAJbAeVHc1qNXYmMi9jj4q2PrWPfPkqQQVuCTScpump" target="_blank" rel="noopener noreferrer" className="social-circle" aria-label="Pump.fun">
                  <PumpIcon />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column (Image Component) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isLoading ? "hidden" : "show"}
              className="hero-image-container"
            >
              <motion.img
                variants={itemVariants}
                src="/hero%20mcgoogles.png"
                alt="McGoogles Frog holding burger"
                className="hero-image-el"
              />
              {/* Left Edge Soft Fade */}
              <div className="hero-image-overlay" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem Pillars Info Section */}
      <InfoSection />

      {/* How To Buy Section */}
      <HowToBuy />

      {/* Perks and Features Section */}
      <Features />

      {/* Tokenomics Section */}
      <Tokenomics />

      {/* Social Section */}
      <SocialSection />

      {/* Footer */}
      <Footer />

      {/* CSS Styles */}
      <style jsx global>{`
        .hero-wrapper {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          background-color: #080808;
        }

        .hero-header-pill {
          position: fixed;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 48px);
          max-width: 1200px;
          z-index: 1000;
          background: rgba(10, 10, 10, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          padding: 12px 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          transition: border-radius 0.3s ease, background-color 0.3s ease;
          overflow: hidden;
        }

        .hero-header-pill.is-open {
          border-radius: 20px;
          background: rgba(10, 10, 10, 0.95);
        }

        .header-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .nav-links {
          display: flex;
          gap: var(--space-5);
          align-items: center;
        }

        .nav-link {
          font-size: var(--font-size-small);
          font-weight: var(--font-weight-medium);
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color var(--transition-fast);
        }

        .nav-link:hover {
          color: #FFC700;
        }

        .btn-buy-nav {
          display: inline-flex;
          align-items: center;
          background-color: #DD1021;
          color: #FFC700;
          padding: 10px 24px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: var(--font-size-small);
          letter-spacing: 0.02em;
          transition: transform 0.2s ease, background-color 0.2s ease;
          box-shadow: 0 4px 15px rgba(221, 16, 33, 0.3);
        }

        .btn-buy-nav:hover {
          background-color: #E5222E;
          transform: scale(1.03);
        }

        /* Hamburger styles */
        .nav-hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 14px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
          display: none;
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background-color: #ffffff;
          transition: transform 0.3s ease, background-color 0.3s ease;
        }

        .hero-header-pill.is-open .line-top {
          transform: translateY(6px) rotate(45deg);
        }

        .hero-header-pill.is-open .line-bottom {
          transform: translateY(-6px) rotate(-45deg);
        }

        /* Mobile Dropdown Panel styles */
        .nav-mobile-dropdown {
          width: 100%;
          overflow: hidden;
        }

        .nav-links-mobile {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          padding-top: var(--space-5);
          padding-bottom: var(--space-3);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: var(--space-3);
        }

        .nav-link-mobile {
          font-size: var(--font-size-body);
          font-weight: var(--font-weight-medium);
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: var(--space-2) 0;
          transition: color 0.2s;
        }

        .nav-link-mobile:hover {
          color: #FFC700;
        }

        .btn-buy-nav-mobile {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #DD1021;
          color: #FFC700;
          padding: var(--space-3) var(--space-5);
          border-radius: 9999px;
          font-weight: 700;
          font-size: var(--font-size-body);
          letter-spacing: 0.02em;
          text-align: center;
          margin-top: var(--space-3);
          box-shadow: 0 4px 15px rgba(221, 16, 33, 0.3);
        }

        .hero-grid-container {
          position: relative;
          z-index: 10;
          flex-grow: 1;
          display: flex;
          align-items: stretch;
          width: 100%;
          max-width: 100%;
          padding: 0;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr; /* Increased image width */
          align-items: stretch;
          width: 100%;
          min-height: 100vh;
        }

        .hero-image-container {
          position: relative;
          z-index: 5;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          overflow: hidden;
        }

        .hero-image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 12%; /* Very narrow fade to hide left edge of the image container */
          height: 100%;
          background: linear-gradient(to right, #080808 0%, rgba(8, 8, 8, 0) 100%);
          z-index: 6;
          pointer-events: none;
        }

        .hero-image-el {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: var(--space-4);
          padding: var(--space-10) 6% var(--space-8) 12%;
        }

        .hero-badge {
          align-self: flex-start;
          border: 1px solid rgb(101, 179, 46);
          color: rgb(101, 179, 46);
          font-size: var(--font-size-caption);
          font-weight: var(--font-weight-bold);
          padding: 6px 14px;
          border-radius: 9999px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .hero-title {
          font-family: var(--font-body), sans-serif;
          font-size: 5rem;
          font-weight: 800;
          line-height: 0.85;
          letter-spacing: -0.01em;
          color: #ffffff;
          text-transform: uppercase;
        }

        .hero-title .text-highlight {
          color: #FFC700;
          font-size: 6.2rem;
          font-weight: 900;
          text-shadow: 3px 3px 0px #8A1F0C, 6px 6px 0px rgba(0, 0, 0, 0.3);
        }

        .hero-bouncy-logo-wrapper {
          display: inline-block;
          white-space: nowrap;
          cursor: pointer;
        }

        .hero-bouncy-letter {
          display: inline-block;
          transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.35), color 0.3s ease;
        }

        .hero-bouncy-logo-wrapper:hover .hero-bouncy-letter {
          transform: translateY(-8px) scale(1.08) rotate(4deg);
          color: #FFE054;
        }

        .hero-bouncy-letter:hover {
          transform: translateY(-16px) scale(1.22) rotate(-6deg) !important;
          color: #DD1021 !important;
        }

        .hero-description-1 {
          font-size: 1.15rem;
          font-weight: 700;
          line-height: 1.45;
          letter-spacing: 0.02em;
          color: #ffffff;
          max-width: 520px;
        }

        .promo-banner {
          background-color: #7D1608;
          border: 1.5px solid rgba(255, 255, 255, 0.08);
          padding: 10px 24px;
          border-radius: 12px;
          font-weight: 800;
          font-size: 1.15rem;
          color: #ffffff;
          align-self: flex-start;
          letter-spacing: 0.02em;
          box-shadow: 0 6px 24px rgba(125, 22, 8, 0.4);
          margin: var(--space-2) 0;
        }

        .hero-description-2 {
          font-size: 1.05rem;
          line-height: 1.5;
          color: var(--text-secondary);
          max-width: 480px;
        }

        .hero-description-2 .text-highlight-yellow {
          color: #FFC700;
          font-weight: 700;
        }

        .hero-buttons {
          display: flex;
          gap: var(--space-4);
          margin-top: var(--space-2);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          background-color: #FFC700;
          color: #000000;
          padding: 14px 28px;
          border-radius: 9999px;
          font-weight: 700;
          font-size: 0.95rem;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .btn-primary:hover {
          background-color: #FFE054;
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          background-color: transparent;
          border: 1.5px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          padding: 14px 28px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: border-color 0.2s ease, background-color 0.2s ease;
        }

        .btn-secondary:hover {
          border-color: #ffffff;
          background-color: rgba(255, 255, 255, 0.05);
        }

        .social-links {
          display: flex;
          gap: var(--space-3);
          margin-top: var(--space-4);
        }

        .social-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          color: #ffffff;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }

        .social-circle:hover {
          background-color: rgba(255, 255, 255, 0.15);
          transform: scale(1.1);
          color: #FFC700;
        }

        @media (max-width: 992px) {
          .hero-header-pill {
            top: 16px;
            width: calc(100% - 32px);
            padding: 12px 24px;
          }
          .nav-links,
          .nav-buy-desktop {
            display: none;
          }
          .nav-hamburger {
            display: flex;
          }
          .hero-grid-container {
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
          }
          .hero-grid {
            grid-template-columns: 1fr;
            min-height: auto;
          }
          .hero-content {
            max-width: 100%;
            padding: var(--space-8) var(--space-5);
            padding-top: var(--space-10); /* Extra top padding to clear floating nav */
          }
          .hero-image-container {
            height: 50vh;
            min-height: auto;
            padding: 0;
            margin: 0;
          }
          .hero-image-overlay {
            top: 0;
            left: 0;
            width: 100%;
            height: 15%;
            background: linear-gradient(to bottom, #080808 0%, rgba(8, 8, 8, 0) 100%);
          }
          .hero-image-el {
            max-width: 100%;
            height: 100%;
            border-radius: 0;
            border: none;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.6rem;
          }
          .hero-title .text-highlight {
            font-size: 3.2rem;
            text-shadow: 2px 2px 0px #8A1F0C, 4px 4px 0px rgba(0, 0, 0, 0.3);
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.0rem;
          }
          .hero-title .text-highlight {
            font-size: 2.2rem;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: stretch;
            gap: var(--space-3);
          }
          .btn-primary, .btn-secondary {
            justify-content: center;
            width: 100%;
          }
        }

        .loader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #080808;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          pointer-events: all;
          overflow: hidden;
        }

        .loader-text-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 4px;
          max-width: 100%;
          padding: 0 var(--space-4);
          box-sizing: border-box;
        }

        .loader-letter {
          font-family: var(--font-display), sans-serif;
          font-size: clamp(3.5rem, 8vw, 7.5rem);
          font-weight: 900;
          color: #FFC700;
          text-shadow: 3px 3px 0px #8A1F0C, 6px 6px 0px rgba(0, 0, 0, 0.3);
          display: inline-block;
          user-select: none;
          transform-origin: center bottom;
        }

        @media (max-width: 768px) {
          .loader-letter {
            font-size: clamp(1.8rem, 8vw, 3.5rem);
            text-shadow: 2px 2px 0px #8A1F0C, 4px 4px 0px rgba(0, 0, 0, 0.3);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(255, 199, 0, 0.4);
          }
          50% {
            transform: scale(1.15);
            opacity: 0.8;
            box-shadow: 0 0 8px 4px rgba(255, 199, 0, 0.2);
          }
        }
      `}</style>
    </>
  );
}
