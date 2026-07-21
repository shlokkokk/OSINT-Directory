import { 
  Github, 
  Linkedin, 
  Mail, 
  Shield, 
  MapPin, 
  Terminal,
  Lock,
  Database,
  ExternalLink
} from 'lucide-react';

/**
 * Footer Component
 * Cyber-themed footer for OSINT Directory
 */

const footerLinks = {
  resources: [
    { name: 'Writeups & Reports', href: 'https://cybermindspace.live/articles' },
    { name: 'Security Tools', href: 'https://cybermindspace.live/tools' },
    { name: 'Learning Roadmaps', href: 'https://cybermindspace.live/roadmaps' },
    { name: 'Documentation', href: 'https://github.com/shlokkokk/OSINT-Directory#readme' },
  ],
  connect: [
    { name: 'Telegram', href: 'https://t.me/shlokok' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shlok-shah-21851a331/' },
    { name: 'GitHub Profile', href: 'https://github.com/shlokkokk' },
  ],
};

const TelegramIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
  </svg>
);

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/shlokkokk/OSINT-Directory' },
  { name: 'Telegram', icon: TelegramIcon, href: 'https://t.me/shlokok' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/shlok-shah-21851a331/' },
  { name: 'Email', icon: Mail, href: 'mailto:shlokshah412@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative bg-cyber-darker border-t border-cyan-500/20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-darker pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Logo */}
            <div className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 
                              border border-cyan-500/30 flex items-center justify-center
                              group-hover:border-cyan-400 transition-colors">
                  <Terminal className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  <span className="text-cyan-400">OSINT</span>&nbsp;&nbsp;TOOLS
                </h3>
                <p className="text-xs text-cyan-500/70 tracking-widest uppercase">Cyber Intelligence Hub</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-cyan-100/60 leading-relaxed text-sm max-w-md">
              Your comprehensive resource for Open Source Intelligence tools. 
              Discover, explore, and utilize powerful cybersecurity tools for 
              reconnaissance, investigation, and digital intelligence gathering.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 rounded-lg bg-cyber-dark/50 border border-cyan-500/20 
                             flex items-center justify-center text-cyan-500/70
                             hover:border-cyan-400/50 hover:text-cyan-400 hover:shadow-neon-cyan
                             transition-all duration-300"
                    aria-label={social.name}
                    title={social.name}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  </a>
                );
              })}
            </div>

            {/* Quick Contact */}
            <div className="pt-2">
              <a 
                href="mailto:shlokshah412@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-cyan-500/70 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>shlokshah412@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              
              {/* Resources Column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Resources
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-cyan-100/60 
                                 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 
                                         transition-all duration-300 group-hover:w-full" />
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect Column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Connect
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.connect.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-cyan-100/60 
                                 hover:text-green-400 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-400 
                                         transition-all duration-300 group-hover:w-full" />
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-cyan-500/10 bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-cyan-500/50">
              <Shield className="w-3.5 h-3.5 text-cyan-500" />
              <span className="font-medium">
                Developed & Maintained by shlokkokk
              </span>
            </div>

            {/* Status Indicators */}
            <div className="flex items-center gap-6 text-cyan-500/50">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                <span className="uppercase tracking-wider">Global</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Database className="w-3 h-3" />
                <span className="uppercase tracking-wider">Always Updated</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3" />
                <span className="uppercase tracking-wider">Secure</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}