import { Link } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Lenis from 'lenis';
import { motion } from 'framer-motion';
import { 
  TrendingUp, ArrowRight, Shield, Zap, ChevronRight,
  Activity, Cpu, Share2, Globe, ArrowUpRight
} from 'lucide-react';
import './Landing.css';
import './StoryCard.css';
import InteractiveDevice from '../components/InteractiveDevice';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


/* ═══════════════════════════════════════════════════════════
   REUSABLE COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function AnimCounter({ end, prefix = '', suffix = '' }) {
  const ref = useRef();
  const [val, setVal] = useState(0);
  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end, 
      duration: 2.5, 
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 85%' },
      onUpdate: () => setVal(obj.v),
    });
  }, [end]);
  return <span ref={ref} className="t-mono">{prefix}{Math.round(val).toLocaleString()}{suffix}</span>;
}

function ScoreRing({ score = 82 }) {
  const ringRef = useRef();
  const offset = 283 - (283 * score) / 100;
  useGSAP(() => {
    const el = ringRef.current;
    if (!el) return;
    gsap.fromTo(el, { strokeDashoffset: 283 }, {
      strokeDashoffset: offset, 
      duration: 2.8, 
      ease: 'power4.out',
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  }, [offset]);
  return (
    <svg viewBox="0 0 100 100" className="w-36 h-36 md:w-44 md:h-44">
      <defs>
        <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="45" className="ring-bg" />
      <circle ref={ringRef} cx="50" cy="50" r="45" className="ring-fill" transform="rotate(-90 50 50)" />
      <text x="50" y="46" textAnchor="middle" style={{ fontFamily: "'Space Grotesk'", fontWeight: 700, fontSize: '1.6rem', fill: '#71717A' }}>{score}</text>
      <text x="50" y="62" textAnchor="middle" style={{ fontFamily: "'Inter'", fontWeight: 500, fontSize: '0.45rem', fill: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.2em' }}>out of 100</text>
    </svg>
  );
}

function FinScoreChart({ data = [35, 45, 40, 60, 55, 72, 82], labels = ['J','F','M','A','M','J','J'] }) {
  const chartRef = useRef();

  useGSAP(() => {
    const el = chartRef.current;
    if (!el) return;
    
    // Animate the bars growing from the bottom
    gsap.from(el.querySelectorAll('.chart-bar'), {
      scaleY: 0,
      transformOrigin: 'bottom center',
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
    
    gsap.from(el.querySelectorAll('.chart-label'), {
      opacity: 0,
      y: 10,
      duration: 1,
      ease: 'power2.out',
      stagger: 0.1,
      delay: 0.3,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  }, { scope: chartRef });

  return (
    <div className="w-full mt-4" ref={chartRef}>
      <div className="flex items-end gap-[6px] h-24">
        {data.map((v, i) => (
          <div key={i} className="flex-1 flex flex-col justify-end items-center gap-2 h-full">
            <div className="chart-bar w-full rounded-md" style={{ height: `${v}%`, background: `linear-gradient(to top, #FFFFFF, rgba(59, 130, 246,${0.2 + v/200}))` }} />
            <span className="chart-label text-[8px] font-bold text-[#064e3b] uppercase">{labels[i]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}


/* ═══════════════════════════════════════════════════════════
   STORY SCENES — Content for the pinned section
   Updated for Tegaki handwriting animation with segmented coloring
   ═══════════════════════════════════════════════════════════ */
const STORY_SCENES = [
  {
    id: 'hook',
    eyebrow: 'Intelligence Engine',
    titleSegments: [{ text: "The Era of \nPredictive Wealth." }],
    bodySegments: [{ text: "Behavioral logic refined \ninto mathematical certainty." }],
    showHint: true,
  },
  {
    id: 'drain',
    eyebrow: 'Detected Leakage',
    titleSegments: [{ text: "Identifying the \nsilent drain." }],
    bodySegments: [
      { text: "Market noise obscures " },
      { text: "the structural waste.", color: "#A1A1AA" }
    ],
  },
  {
    id: 'trajectory',
    eyebrow: 'Future Modeling',
    titleSegments: [{ text: "Modeling your \nfuture trajectory." }],
    bodySegments: [{ text: "Move beyond tracking history. \nStart architecting your end-game." }],
  },
  {
    id: 'welcome',
    eyebrow: 'Access Granted',
    titleSegments: [
      { text: "Welcome to " },
      { text: "FinSight AI.", color: "#10B981" }
    ],
    bodySegments: [{ text: "Your intelligent financial \nco-pilot, always on." }],
  },
];

function HeroSection() {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row items-center relative overflow-hidden bg-[#000000] px-8 md:px-20 pt-24 pb-8">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-[#10B981]/10 to-transparent" />
        <div className="absolute -top-[10%] -right-[5%] w-[700px] h-[700px] bg-[#10B981]/[0.05] blur-[160px] opacity-40 rounded-full" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-[#10B981]/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#000000] to-transparent z-10" />
      </div>

      {/* Left: Content Column */}
      <div className="flex-1 relative z-10 text-left flex flex-col justify-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <div className="h-[1px] w-10 bg-[#A1A1AA]" />
          <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#10B981]/90">
            AI-Powered Financial Intelligence
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="t-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.92] text-white mb-6"
        >
          Understand your money.<br/> 
          <span className="text-[#10B981] font-light">Fix your habits.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="t-body text-base md:text-lg text-white/50 max-w-lg mb-10 leading-relaxed"
        >
          We analyze your behavior and show you exactly where your money is going wrong.
          Private, encrypted, and designed for your individual journey.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
           className="flex flex-wrap gap-5 items-center"
        >
          <button 
            onClick={() => {
              gsap.to(window, { scrollTo: window.innerHeight, duration: 1.5, ease: "power4.inOut" });
            }}
            className="mag px-10 py-4 rounded-full bg-[#FFFFFF] text-[#000000] text-[11px] font-bold uppercase tracking-[0.2em] shadow-[0_12px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_16px_40px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 transition-all"
          >
            Explore FinSight
          </button>
          
          <Link to="/signup" className="group flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Get Started</span>
            <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-[#A1A1AA]/50 group-hover:bg-[#0A0A0A]/5 transition-all">
              <ArrowRight size={14} className="text-[#10B981]" />
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Right: Interactive Device */}
      <div className="flex-1 relative z-10 hidden md:flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div style={{ transform: 'scale(0.75)', transformOrigin: 'center center' }}>
            <InteractiveDevice />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
        <span className="text-[8px] uppercase tracking-[0.4em] font-semibold text-white/60">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}


/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════ */
export default function Landing() {
  const container = useRef();
  const stageRef = useRef();
  const cursorRef = useRef();
  const progressRef = useRef();
  const [activeScene, setActiveScene] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(false);

  /* ── Smooth Scrolling (Lenis) ───────────────────────── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // Higher sensitivity for snappier response
      touchMultiplier: 2.2,
      lerp: 0.07, // Optimal smooth-stop feel
    });

    lenis.on('scroll', ScrollTrigger.update);
    ScrollTrigger.normalizeScroll({ allowNestedScroll: true });

    function raf(time) {
      // time is in seconds from ticker. Lenis needs milliseconds.
      lenis.raf(time * 1000); 
    }
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Critical for ensuring pinning and backward scroll works correctly
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      window.scrollTo(0, 0); // Start at top
    }, 500);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(raf);
      clearTimeout(timer);
    };
  }, []);

  /* ── Cursor Follower ────────────────────────────────── */
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    let x = 0, y = 0, cx = 0, cy = 0;
    const move = (e) => { x = e.clientX; y = e.clientY; };
    const tick = () => {
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      cursor.style.transform = `translate(${cx - 275}px, ${cy - 275}px)`;
      requestAnimationFrame(tick);
    };
    window.addEventListener('mousemove', move);
    requestAnimationFrame(tick);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  /* ── Scroll Progress ────────────────────────────────── */
  // Scroll Progress is now handled by ScrollTrigger for better accuracy with Lenis
  useGSAP(() => {
    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.3
      }
    });
  }, { scope: container });

  /* ── 3D Tilt ────────────────────────────────────────── */
  useEffect(() => {
    document.querySelectorAll('.tilt-card').forEach(card => {
      const onMove = (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotateY: x * 10, rotateX: -y * 10, duration: 0.4, ease: 'power2.out' });
      };
      const onLeave = () => gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.7, ease: 'elastic.out(1,0.4)' });
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
    });
  }, []);

  /* ═══════════════════════════════════════════════════════
     GSAP — THE MASTER ANIMATION
     ═══════════════════════════════════════════════════════ */
  useGSAP(() => {

    const scenes = gsap.utils.toArray('.story-scene');
    const sceneCount = scenes.length;

    /* ── ACT 1: Pinned Story ──────────────────────────── */
    const holdTime = 2.5;
    const transTime = 1.2;

    const storyTl = gsap.timeline({
      scrollTrigger: {
        trigger: stageRef.current,
        start: 'top top',
        end: `+=${sceneCount * 800}`, // Long scroll for dramatic pacing
        pin: true,
        scrub: 0.05, 
        anticipatePin: 1,
        onUpdate: (self) => {
          const totalLen = holdTime + (sceneCount - 1) * (transTime + holdTime);
          const t = self.progress * totalLen;
          let idx = 0;
          let pos = holdTime;
          for (let i = 1; i < sceneCount; i++) {
            if (t < pos) break;
            idx = i;
            pos += transTime + holdTime;
          }
          setActiveScene(idx);
          setIsNavVisible(self.progress > 0.99); 
        },
      }
    });

    // AUTO-SNAP FROM HERO TO STORY REMOVED AS REQUESTED

    // Scene 0: starts visible, hold for `holdTime`
    // Ensure scene 0 transition handles initial load better
    gsap.set(scenes[0], { opacity: 1, visibility: 'visible', filter: 'blur(0px)', scale: 1, pointerEvents: 'auto' });
    
    let cursor = 0;
    storyTl.to({}, { duration: holdTime }, cursor);
    cursor += holdTime;

    // For each subsequent scene: transition from previous to current, then hold
    for (let i = 1; i < sceneCount; i++) {
      // PREVIOUS SCENE: Scale out, Blur out, Fade away
      storyTl.to(scenes[i - 1], {
        opacity: 0, 
        scale: 1.1, 
        filter: 'blur(40px)',
        duration: transTime, 
        ease: 'power2.inOut',
        pointerEvents: 'none'
      }, cursor);

      // CURRENT SCENE: Fade in from blur/small scale
      storyTl.fromTo(scenes[i],
        { opacity: 0, visibility: 'hidden', scale: 0.95, filter: 'blur(20px)', pointerEvents: 'none' },
        { 
          opacity: 1, 
          visibility: 'visible', 
          scale: 1, 
          filter: 'blur(0px)',
          duration: transTime, 
          ease: 'power2.out',
          pointerEvents: 'auto'
        },
        cursor // Simultaneous
      );
      cursor += transTime;

      // Hold the new scene
      storyTl.to({}, { duration: holdTime }, cursor);
      cursor += holdTime;
    }

    // Entrance animation for the first scene
    gsap.from('.scene-intro-text', {
      y: 50, opacity: 0, duration: 1.8, ease: 'expo.out', stagger: 0.15, delay: 0.3,
    });

    // Scroll hint fade out as user starts scrolling
    gsap.to('.scroll-hint', {
      scrollTrigger: { trigger: stageRef.current, start: 'top top', end: '+=300', scrub: true },
      opacity: 0, y: 20,
    });


    /* ── ACT 2: Normal Scroll Features ────────────────── */

    // Reveal-up
    gsap.utils.toArray('.cin-up').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none reverse' },
        y: 100, opacity: 0, duration: 2.2, ease: 'power4.out', filter: 'blur(15px)'
      });
    });

    // Reveal-left
    gsap.utils.toArray('.cin-left').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        x: -50, opacity: 0, duration: 1.6, ease: 'expo.out', filter: 'blur(6px)'
      });
    });

    // Reveal-right
    gsap.utils.toArray('.cin-right').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 85%' },
        x: 50, opacity: 0, duration: 1.6, ease: 'expo.out', filter: 'blur(6px)'
      });
    });

    // Scale-in
    gsap.utils.toArray('.cin-scale').forEach(el => {
      gsap.from(el, {
        scrollTrigger: { trigger: el, start: 'top 88%' },
        scale: 0.95, opacity: 0, filter: 'blur(10px)', y: 30, duration: 2, ease: 'expo.out'
      });
    });

    // Stagger children
    gsap.utils.toArray('.cin-stagger').forEach(parent => {
      gsap.from(parent.children, {
        scrollTrigger: { trigger: parent, start: 'top 85%' },
        y: 50, opacity: 0, scale: 0.95, stagger: 0.15, duration: 2.8, ease: 'power3.out'
      });
    });

    // Highlight swipes
    gsap.utils.toArray('.highlight-swipe').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 80%',
        onEnter: () => el.classList.add('active'),
        onLeaveBack: () => el.classList.remove('active'),
      });
    });

    // Reveal lines
    gsap.utils.toArray('.reveal-line').forEach(el => {
      ScrollTrigger.create({
        trigger: el, start: 'top 85%',
        onEnter: () => el.classList.add('active'),
      });
    });

    // Orb parallax
    gsap.utils.toArray('.orb').forEach(orb => {
      gsap.to(orb, {
        scrollTrigger: { trigger: orb, start: 'top bottom', end: 'bottom top', scrub: true },
        y: -80, ease: 'none'
      });
    });

    // Chart bars
    gsap.utils.toArray('.chart-bar').forEach((bar, i) => {
      gsap.from(bar, {
        scrollTrigger: { trigger: bar, start: 'top 92%' },
        height: 0, duration: 1.4, delay: i * 0.05, ease: 'expo.out'
      });
    });

  }, { scope: container });

  /* ── Magnetic ───────────────────────────────────────── */
  useEffect(() => {
    const move = (e) => {
      const el = e.currentTarget;
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width/2) * 0.25, y: (e.clientY - r.top - r.height/2) * 0.25, duration: 0.4, ease: 'power2.out' });
    };
    const reset = (e) => gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.8, ease: 'elastic.out(1,0.3)' });
    document.querySelectorAll('.mag').forEach(m => {
      m.addEventListener('mousemove', move);
      m.addEventListener('mouseleave', reset);
    });
  }, []);


  /* ═══════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════ */
  return (
    <div ref={container} className="overflow-x-hidden bg-[#000000] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* GLOBAL OVERLAYS */}
      <div className="noise-overlay" />
      <div ref={cursorRef} className="cursor-glow hidden lg:block" />
      <div ref={progressRef} className="scroll-progress" style={{ transform: 'scaleX(0)' }} />

      {/* FLOATING PILL NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[880px]">
        <div className="flex justify-between items-center px-6 md:px-7 py-2.5 bg-[#0A0A0A]/90 backdrop-blur-3xl rounded-full border border-white/[0.12] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-[#FFFFFF] flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-500">
              <span className="text-[#000000] text-[12px] font-black tracking-tighter">F</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[14px] font-bold text-white tracking-tight leading-none">FinSight</span>
              <span className="text-[#10B981] text-[7px] font-black uppercase tracking-[0.3em] mt-0.5">Intelligence</span>
            </div>
          </Link>
          
          <div className="flex items-center gap-5">
            <Link to="/login" className="flex items-center justify-center px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[9px] font-bold uppercase tracking-[0.15em] text-white/50 hover:text-white transition-all border border-white/5 hover:border-white/10 hidden sm:block">Login</Link>
            <Link to="/signup" className="flex items-center justify-center px-7 py-2.5 rounded-full bg-[#FFFFFF] text-[#000000] text-[10px] font-bold uppercase tracking-[0.15em] shadow-[0_5px_15px_rgba(255,255,255,0.08)] hover:shadow-[0_10px_25px_rgba(255,255,255,0.12)] hover:scale-105 active:scale-95 transition-all">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* 
          PAGE ACTS
      */}
      {/* Act 0: Hero Landing */}
      <HeroSection />

      {/* Act 1: Pinned Storytelling Stage */}
      <div ref={stageRef} className="story-stage">
        {/* Ambient background orbs — providing color for the glass to capture */}
        <div className="stage-orb stage-orb-1 opacity-20" />
        <div className="stage-orb stage-orb-2 opacity-10" />
        <div className="stage-orb stage-orb-3 opacity-5" />

        {/* Story Scenes — absolutely positioned, cross-fade via GSAP */}
        {/* Story Scenes — absolutely positioned, cross-fade via GSAP */}
        {STORY_SCENES.map((scene, i) => (
          <div key={scene.id} className="story-scene z-10" style={i === 0 ? { opacity: 1, visibility: 'visible' } : undefined}>
            <div className="scene-content scene-card p-12 md:p-16 rounded-[4rem] max-w-4xl mx-auto border border-white/5 shadow-2xl">
              {scene.eyebrow && (
                <div className={`scene-eyebrow ${i === 0 ? 'scene-intro-text' : ''} text-[#10B981]`}>
                  {i === 0 && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FFFFFF] mr-3 animate-pulse align-middle" />}
                  {scene.eyebrow}
                </div>
              )}
                <h2 className={`scene-title t-display italic tracking-tight ${i === 0 ? 'scene-intro-text' : ''}`}
                  style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95 }}>
                <div className="flex flex-col justify-center items-center gap-y-4 text-center">
                  {scene.titleSegments.map((seg, idx) => (
                    <motion.span 
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={activeScene === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.8, delay: idx * 0.1 }}
                      style={{ color: seg.color || 'inherit', whiteSpace: 'pre-wrap' }}
                    >
                      {seg.text}
                    </motion.span>
                  ))}
                </div>
              </h2>
              {scene.bodySegments && (
                <div className={`scene-body font-body tracking-wide mt-8 opacity-70 ${i === 0 ? 'scene-intro-text' : ''}`}>
                  <div className="flex flex-col justify-center items-center gap-y-1.5 text-center">
                    {scene.bodySegments.map((seg, idx) => (
                      <motion.span 
                        key={idx}
                        initial={{ opacity: 0 }}
                        animate={activeScene === i ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ color: seg.color || 'inherit', whiteSpace: 'pre-wrap' }}
                      >
                        {seg.text}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Progress dots — horizontal at bottom */}
        <div className="story-progress">
          {STORY_SCENES.map((s, i) => (
            <div key={s.id} className={`story-dot ${activeScene === i ? 'active' : ''}`} />
          ))}
        </div>

        {/* Scroll hint on first scene */}
        <div className="scroll-hint">
          <span className="text-[8px] uppercase tracking-[0.5em] font-bold text-[#064e3b]">Scroll</span>
          <div className="scroll-hint-line" />
        </div>
      </div>


      {/* ── THE MATRIX MATRIX (BENTO) ─────────────────── */}
      <section className="py-20 md:py-32 px-8 md:px-12 bg-[#000000] border-t border-white/[0.03] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />
        
        <div className="max-w-[1200px] mx-auto text-center mb-24 md:mb-32">
          <div className="cin-up flex flex-col items-center">
            <span className="inline-block px-5 py-2 rounded-full bg-[#10B981]/5 border border-[#10B981]/20 text-[#10B981] text-[10px] font-bold uppercase tracking-[0.5em] mb-12 shadow-[0_0_20px_rgba(16,185,129,0.05)]">
              Sensing Unlocked
            </span>
            <h2 className="t-display text-5xl md:text-[clamp(3rem,6vw,5.5rem)] text-white leading-[1.1] mb-14 transition-all tracking-tight">
              Moving beyond <span className="italic font-light text-[#10B981]">behavioral data.</span><br/> 
              <span className="text-white/20">Into structural foresight.</span>
            </h2>
            <div className="w-[px] h-20 bg-gradient-to-b from-[#10B981] via-[#10B981]/10 to-transparent mb-12" />
            <div className="max-w-xl mx-auto border-t border-white/5 pt-12">
              <p className="t-body text-xs md:text-base text-white/40 leading-relaxed uppercase tracking-[0.3em]">
                Precision tools for the <span className="text-white font-medium">modern investor.</span>
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto">

          <div className="flex flex-col gap-16 md:gap-24 w-full">
            
            {/* Feature 1: Health Score (Text Left, UI Right) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full py-12 border-b border-white/[0.03]">
              <div className="flex-1 space-y-6 cin-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-[#10B981] shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                    <Activity size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#10B981]">Feature 01</span>
                </div>
                <h3 className="t-display text-4xl md:text-5xl text-white leading-[1.05]">
                  Your Financial <br/> Health Score.
                </h3>
                <p className="t-body text-base md:text-lg text-white/45 max-w-md leading-relaxed">
                  Stop guessing. See exactly where you stand with a single, clear score driven entirely by your everyday financial habits.
                </p>
                <div className="pt-4">
                  <Link to="/signup" className="group flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Check Your Score</span>
                    <ArrowRight size={14} className="text-[#10B981] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-md cin-right relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FFFFFF]/10 blur-[80px] rounded-full" />
                <div className="relative rounded-[2rem] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 p-10 flex flex-col items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.02)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FFFFFF]/50 to-transparent" />
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 mb-8 w-full text-center">Live Diagnostics</h4>
                  <div className="scale-125 mb-8">
                    <ScoreRing score={94} />
                  </div>
                  <div className="w-full space-y-3">
                    <div className="flex justify-between items-center bg-[#000000]/50 p-4 rounded-xl border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                      <span className="text-xs font-semibold text-white/40">Savings Rate</span>
                      <span className="text-xs font-bold text-[#10B981]">+12.4%</span>
                    </div>
                    <div className="flex justify-between items-center bg-[#000000]/50 p-4 rounded-xl border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                      <span className="text-xs font-semibold text-white/40">Debt Ratio</span>
                      <span className="text-xs font-bold text-[#10B981]">Optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Waste Tracking (UI Left, Text Right) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16 w-full py-12 border-b border-white/[0.03]">
              <div className="flex-1 space-y-6 cin-right">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-[#EF4444] shadow-[0_0_20px_rgba(239,68,68,0.05)]">
                    <Zap size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#EF4444]">Feature 02</span>
                </div>
                <h3 className="t-display text-4xl md:text-5xl text-white leading-[1.05]">
                  AI Subscription <br/> Detection.
                </h3>
                <p className="t-body text-base md:text-lg text-white/45 max-w-md leading-relaxed">
                  Our AI scans your trajectory to instantly detect forgotten, duplicate, and underutilized subscriptions. Stop paying for what you don't use.
                </p>
                <div className="pt-4">
                  <Link to="/waste" className="group flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Manage Subscriptions</span>
                    <ArrowRight size={14} className="text-[#EF4444] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-md cin-left relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#EF4444]/10 blur-[80px] rounded-full" />
                <div className="relative rounded-[2rem] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.02)] overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#EF4444]/50 to-transparent" />
                  <div className="flex items-center justify-between mb-8">
                    <h4 className="text-sm font-bold text-white/90">Flagged Subscriptions</h4>
                    <span className="px-3 py-1 bg-[#EF4444]/10 text-[#EF4444] text-[10px] font-bold rounded-full">3 Alerts</span>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { icon: '📺', name: 'Netflix Premium', cost: '$22.99/mo', desc: 'Not used in 30 days' },
                      { icon: '🎨', name: 'Canva Pro', cost: '$14.99/mo', desc: 'Duplicate subscription' },
                      { icon: '🎵', name: 'Spotify Music', cost: '$11.99/mo', desc: 'Price increased by $2' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-[#000000]/50 p-4 rounded-xl border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-lg">{item.icon}</div>
                        <div className="flex-1">
                          <h5 className="text-xs font-bold text-white/90">{item.name}</h5>
                          <p className="text-[10px] text-white/40 mt-0.5">{item.desc}</p>
                        </div>
                        <span className="text-xs font-bold text-[#EF4444]">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Goal Predictor (Text Left, UI Right) */}
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full pt-12 pb-20">
              <div className="flex-1 space-y-6 cin-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-white/5 flex items-center justify-center text-[#10B981] shadow-[0_0_20px_rgba(255,255,255,0.03)]">
                    <TrendingUp size={18} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#10B981]">Feature 03</span>
                </div>
                <h3 className="t-display text-4xl md:text-5xl text-white leading-[1.05]">
                  Predict Your <br/> Trajectory.
                </h3>
                <p className="t-body text-base md:text-lg text-white/45 max-w-md leading-relaxed">
                  Know if you'll hit your financial goals before you even try, based on your current spending and saving behavior.
                </p>
                <div className="pt-4">
                  <Link to="/signup" className="group flex items-center gap-3 text-white/40 hover:text-white/80 transition-colors">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">Predict Future</span>
                    <ArrowRight size={14} className="text-[#10B981] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              <div className="flex-1 w-full max-w-md cin-right relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#10B981]/10 blur-[80px] rounded-full" />
                <div className="relative rounded-[2rem] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_80px_rgba(255,255,255,0.02)] overflow-hidden min-h-[300px] flex flex-col">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent" />
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-white/90">Home Downpayment</h4>
                      <p className="text-[10px] text-white/40 mt-1">Goal: $40,000 in 24 months</p>
                    </div>
                    <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] text-[10px] font-bold rounded-full">On Track</span>
                  </div>
                  
                  <div className="flex-1 w-full bg-[#000000]/50 rounded-xl border border-white/5 p-4 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
                    <div className="w-full scale-110 origin-center">
                       <FinScoreChart />
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-center border-t border-white/5 pt-4">
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-white/30">Current</span>
                      <span className="text-sm font-bold text-white/80">$12,450</span>
                    </div>
                    <div className="flex flex-col text-right">
                      <span className="text-[9px] uppercase font-bold text-white/30">Prediction</span>
                      <span className="text-sm font-bold text-[#10B981]">$42,100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ACT 3 — TRUST & TECHNOLOGY
          ═══════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 px-8 bg-[#000000] relative overflow-hidden">
        <div className="max-w-[1100px] mx-auto text-center relative z-10">
          <div className="cin-up mb-14">
            <span className="t-accent text-[10px] uppercase tracking-[0.4em] text-[#10B981] font-bold block mb-5">Why FinSight AI</span>
            <h2 className="t-display text-3xl md:text-[2.8rem] text-white leading-[1.05] mb-6">
              Built for <span className="font-light text-[#10B981]">action.</span>
            </h2>
            <p className="t-body text-base text-white/45 max-w-lg mx-auto leading-relaxed">
              Everything you need to understand your behavior and fix your spending.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cin-stagger">
            {[
              { t: 'Real-Time Analysis', d: 'Instant intelligence matching production-grade performance.', icon: Zap },
              { t: 'Smart Insights', d: 'Behavioral patterns surfaced to reduce wastage automatically.', icon: Activity },
              { t: 'AI-Powered', d: 'Every data point feeds into our predictive intelligence engine.', icon: Cpu }
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 rounded-[1.8rem] border border-white/[0.05] text-left group hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFFF]/10 flex items-center justify-center text-[#10B981] mb-5 group-hover:scale-110 transition-transform">
                  <item.icon size={18} />
                </div>
                <h4 className="text-white font-bold text-sm uppercase tracking-[0.08em] mb-2">{item.t}</h4>
                <p className="text-[14px] text-white/40 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Final Call to Action ────────────────────────── */}
      <section className="py-20 px-6 bg-[#000000] relative overflow-hidden flex justify-center border-t border-white/[0.02]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-white/[0.03] blur-[120px] rounded-[100%] pointer-events-none" />
        
        <div className="w-full max-w-[1100px] bg-[#0A0A0A] rounded-[2.5rem] border border-white/[0.05] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="relative z-10 w-full max-w-[550px] mx-auto">
            <span className="cin-up inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-[9px] font-bold uppercase tracking-[0.2em] mb-6">
              Start Your Journey
            </span>
            <h2 className="cin-up t-display text-4xl md:text-5xl text-white leading-[1.1] mb-6">
              Master your <br/><span className="text-[#10B981]">financial future.</span>
            </h2>
            <p className="cin-up t-body text-sm text-white/40 mb-8 max-w-sm mx-auto leading-relaxed">
              Join thousands optimizing their spending and accelerating goals with structural foresight.
            </p>
            <div className="cin-up flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup" className="flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.1em] hover:scale-[1.02] active:scale-[0.98] transition-transform w-full sm:w-auto">
                Create Free Account <ArrowRight size={14} />
              </Link>
              <Link to="/login" className="flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent border border-white/10 text-white text-[11px] font-bold uppercase tracking-[0.1em] hover:bg-white/5 transition-colors w-full sm:w-auto">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ── Footer ────────────────────────────────────── */}
      <footer className="bg-[#000000] pt-16 pb-8 px-6 md:px-12 border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
            <div className="md:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-black text-[14px] font-black t-display">F</span>
                </div>
                <span className="text-xl font-medium text-white tracking-tight">FinSight <span className="text-white/40">AI</span></span>
              </div>
              <p className="text-sm text-white/40 leading-relaxed max-w-sm mb-8">
                Institutional-grade behavioral analytics for your personal finances. Detect waste, analyze habits, and secure your trajectory.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all cursor-pointer"><Share2 size={16}/></div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all cursor-pointer"><Globe size={16}/></div>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all cursor-pointer"><ArrowUpRight size={16}/></div>
              </div>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Platform</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Health Score</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Waste Recovery</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Goal Trajectory</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Company</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-6">Newsletter</h4>
              <p className="text-xs text-white/40 mb-4">Get the latest insights on behavioral finance.</p>
              <div className="flex items-center">
                <input type="email" placeholder="Email address" className="bg-[#111] border border-white/10 rounded-l-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 w-full" />
                <button className="bg-white text-black px-4 py-3 rounded-r-lg text-[12px] font-bold uppercase tracking-[0.1em] hover:bg-white/90 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-[0.1em] text-white/30">&copy; 2026 FinSight AI. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-white/30 hover:text-white/60">Privacy Policy</a>
              <a href="#" className="text-[10px] uppercase tracking-[0.1em] text-white/30 hover:text-white/60">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
