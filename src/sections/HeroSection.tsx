import { useEffect, useState, useRef } from 'react';
import { Terminal, Database, Shield, Globe, Cpu, Lock } from 'lucide-react';

interface HeroSectionProps {
  totalTools: number;
  totalCategories: number;
}

// Animated counter hook
function useAnimatedCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      countRef.current = Math.floor(easeOutQuart * target);
      setCount(countRef.current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return count;
}

export default function HeroSection({ totalTools, totalCategories }: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const animatedTools = useAnimatedCounter(totalTools);
  const animatedCategories = useAnimatedCounter(totalCategories);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingIcons = [
    { Icon: Terminal, color: 'text-cyan-400', delay: '0s', position: 'top-20 left-[10%]' },
    { Icon: Database, color: 'text-purple-400', delay: '1s', position: 'top-32 right-[15%]' },
    { Icon: Shield, color: 'text-green-400', delay: '2s', position: 'bottom-32 left-[20%]' },
    { Icon: Globe, color: 'text-cyan-400', delay: '0.5s', position: 'top-40 right-[25%]' },
    { Icon: Cpu, color: 'text-purple-400', delay: '1.5s', position: 'bottom-40 right-[10%]' },
    { Icon: Lock, color: 'text-green-400', delay: '2.5s', position: 'top-24 left-[30%]' },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[70vh] flex items-center justify-center pt-20 pb-12 overflow-hidden"
    >
      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, color, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} opacity-20 pointer-events-none hidden lg:block`}
          style={{ animationDelay: delay }}
        >
          <div className="animate-float" style={{ animationDelay: delay }}>
            <Icon className={`w-8 h-8 ${color}`} />
          </div>
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-cyan-500/10 border border-cyan-500/30 mb-6
                     transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
            Open Source Intelligence Toolkit
          </span>
        </div>

        {/* Main Title with Glitch Effect */}
        <h1 
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4
                     transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400">
              OSINT
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 via-green-400/20 to-purple-400/20 blur-xl -z-10" />
          </span>
          <span className="text-white"> TOOLS</span>
        </h1>

        {/* Subtitle with Typing Effect */}
        <p 
          className={`text-lg sm:text-xl text-cyan-100/70 mb-8 max-w-2xl mx-auto font-light
                     transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Your ultimate cybersecurity resource hub. Discover powerful tools for 
          <span className="text-cyan-400"> reconnaissance</span>, 
          <span className="text-green-400"> intelligence gathering</span>, and 
          <span className="text-purple-400"> digital investigations</span>.
        </p>

        {/* Stats Cards */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-8
                     transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          {/* Total Tools */}
          <div className="cyber-card p-4 group">
            <div className="text-3xl sm:text-4xl font-bold text-cyan-400 font-mono mb-1">
              {animatedTools.toLocaleString()}
            </div>
            <div className="text-xs text-cyan-500/70 uppercase tracking-wider">Total Tools</div>
            <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          </div>

          {/* Categories */}
          <div className="cyber-card p-4 group">
            <div className="text-3xl sm:text-4xl font-bold text-green-400 font-mono mb-1">
              {animatedCategories.toLocaleString()}
            </div>
            <div className="text-xs text-green-500/70 uppercase tracking-wider">Categories</div>
            <div className="absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          </div>

          {/* Security Rating */}
          <div className="cyber-card p-4 group">
            <div className="text-3xl sm:text-4xl font-bold text-purple-400 font-mono mb-1">
              100%
            </div>
            <div className="text-xs text-purple-500/70 uppercase tracking-wider">Open Source</div>
            <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          </div>

          {/* Updated */}
          <div className="cyber-card p-4 group">
            <div className="text-3xl sm:text-4xl font-bold text-pink-400 font-mono mb-1">
              24/7
            </div>
            <div className="text-xs text-pink-500/70 uppercase tracking-wider">Available</div>
            <div className="absolute inset-0 bg-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-wrap justify-center gap-4
                     transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <a
            href="#tools"
            className="cyber-btn inline-flex items-center gap-2"
          >
            <Terminal className="w-4 h-4" />
            <span>Explore Tools</span>
          </a>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
    </section>
  );
}
