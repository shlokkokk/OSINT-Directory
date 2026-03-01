import { useState, useEffect } from 'react';
import { Search, Menu, X, Terminal, Shield } from 'lucide-react';

/**
 * Navbar Component
 * Sticky navigation bar with:
 * - Logo and branding
 * - Search input
 * - Mobile menu toggle
 * - Smooth scroll navigation
 */

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
}

export default function Navbar({ 
  searchQuery, 
  onSearchChange, 
  onMenuToggle,
  isSidebarOpen 
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-cyber-darker/90 backdrop-blur-lg border-b border-cyan-500/20 shadow-lg shadow-cyan-500/5' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center gap-3">
            <button
              onClick={onMenuToggle}
              data-menu-toggle 
              className="lg:hidden p-2 rounded-lg text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <a href="#" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="absolute inset-0 rounded-lg bg-cyan-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold text-white tracking-tight">
                  <span className="text-cyan-400">OSINT</span>
                  <span className="text-white">&nbsp;&nbsp;TOOLS</span>
                </h1>
                <p className="text-[10px] text-cyan-500/70 -mt-1 tracking-widest uppercase">Cyber Intelligence</p>
              </div>
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl mx-4">
            <div 
              className={`relative transition-all duration-300 ${
                isSearchFocused ? 'scale-[1.02]' : ''
              }`}
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className={`w-4 h-4 transition-colors ${
                  isSearchFocused ? 'text-cyan-400' : 'text-cyan-500/50'
                }`} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search tools by name or description..."
                className="w-full pl-10 pr-4 py-2 bg-cyber-dark/80 border border-cyan-500/20 rounded-lg 
                         text-sm text-white placeholder-cyan-500/40
                         focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30
                         transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-cyan-500/50 hover:text-cyan-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {/* Glow effect on focus */}
              {isSearchFocused && (
                <div className="absolute inset-0 rounded-lg bg-cyan-500/10 blur-md -z-10" />
              )}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyber-green/10 border border-cyber-green/20">
              <Shield className="w-4 h-4 text-cyber-green" />
              <span className="text-xs text-cyber-green font-mono">SECURE</span>
            </div>
            
            <a
              href="https://github.com/ALMADADALI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-cyan-500/70 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
