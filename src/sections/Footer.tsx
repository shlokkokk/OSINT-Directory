import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  Shield, 
  MapPin, 
  Youtube,
  Terminal,
  Lock,
  Database,
  ExternalLink
} from 'lucide-react';

/**
 * Footer Component
 * Cyber-themed footer with Cybermindspace branding and links
 */

const footerLinks = {
  platform: [
    { name: 'About', href: 'https://cybermindspace.live/about' },
    { name: 'Courses', href: 'https://cybermindspace.com/courses/' },
    { name: 'Certificates', href: 'https://cybermindspace.com/certificate-verification/' },
  ],
  resources: [
    { name: 'Writeups & Reports', href: 'https://cybermindspace.live/articles' },
    { name: 'Security Tools', href: 'https://cybermindspace.live/tools' },
    { name: 'Learning Roadmaps', href: 'https://cybermindspace.live/roadmaps' },
    { name: 'Documentation', href: 'https://github.com/ALMADADALI' },
  ],
  community: [
    { name: 'Discord', href: 'https://discord.gg/8CYAbqXf' },
    { name: 'YouTube', href: 'https://youtube.com/@cybermindspace' },
    { name: 'Telegram', href: 'https://t.me/cybermindspace' },
    { name: 'Telegram Channel', href: 'https://t.me/+LJvMwjAE6yA5YWQ1' },
    { name: 'Twitter', href: 'https://twitter.com/cybermindspace' },
    { name: 'GitHub', href: 'https://github.com/ALMADADALI' },
  ],
  legal: [
    { name: 'Privacy Policy', href: 'https://cybermindspace.live/privacy-policy' },
    { name: 'Terms of Service', href: 'https://cybermindspace.live/terms-and-conditions' },
  ],
};

// Custom SVG icons
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const TelegramIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
  </svg>
);

const DiscordIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
  </svg>
);

const FacebookIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
  </svg>
);

const WhatsAppIcon = () => (
  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
  </svg>
);

const socialLinks = [
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@cybermindspace' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/cyber_mind_space' },
  { name: 'Telegram', icon: TelegramIcon, href: 'https://t.me/cybermindspace' },
  { name: 'Telegram Channel', icon: TelegramIcon, href: 'https://t.me/+LJvMwjAE6yA5YWQ1' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/cybermindspace' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/cyber-mind-space/' },
  { name: 'Discord', icon: DiscordIcon, href: 'https://discord.gg/qA3CqZ86hY' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61575658943222' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/ALMADADALI' },
  { name: 'Email', icon: Mail, href: 'mailto:cybermindspacee@gmail.com' },
  { name: 'WhatsApp', icon: WhatsAppIcon, href: 'https://whatsapp.com/channel/0029VbAzQMU9hXF70zjpCu1Y' },
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
          
          {/* Brand Column - Wider */}
          <div className="lg:col-span-4 space-y-6">
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
            <p className="text-cyan-100/60 leading-relaxed text-sm">
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
                href="mailto:cybermindspacee@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-cyan-500/70 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>cybermindspacee@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Links Grid - 4 columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              
              {/* Platform Column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  Platform
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.platform.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group inline-flex items-center gap-1.5 text-sm text-cyan-100/60 
                                 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-cyan-400 
                                         transition-all duration-300 group-hover:w-full" />
                        </span>
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  Resources
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.resources.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="group inline-flex items-center gap-1.5 text-sm text-cyan-100/60 
                                 hover:text-green-400 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-green-400 
                                         transition-all duration-300 group-hover:w-full" />
                        </span>
                        {link.href.startsWith('http') && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Community Column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                  Community
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.community.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-cyan-100/60 
                                 hover:text-purple-400 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-purple-400 
                                         transition-all duration-300 group-hover:w-full" />
                        </span>
                        <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Legal Column */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-white tracking-widest uppercase flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-pink-400"></span>
                  Legal
                </h4>
                <ul className="space-y-2.5">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group inline-flex items-center gap-1.5 text-sm text-cyan-100/60 
                                 hover:text-pink-400 transition-colors duration-200"
                      >
                        <span className="relative">
                          {link.name}
                          <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-pink-400 
                                         transition-all duration-300 group-hover:w-full" />
                        </span>
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
                Designed, Developed & Maintained by Cyber&nbsp;Mind&nbsp;Space
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