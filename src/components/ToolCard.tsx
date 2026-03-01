import { useState } from 'react';
import { ExternalLink, Terminal, Shield, Lock, Eye, Globe, Cpu, Database } from 'lucide-react';

/**
 * ToolCard Component
 * Individual tool card with:
 * - Tool name and description
 * - Category indicator
 * - External link button
 * - Hover animations and glow effects
 */

interface ToolCardProps {
  name: string;
  description: string;
  url: string;
  categoryColor?: string;
}

// Get icon based on tool name/description keywords
function getToolIcon(name: string, description: string) {
  const text = (name + ' ' + description).toLowerCase();
  
  if (text.includes('search') || text.includes('find') || text.includes('lookup')) {
    return Eye;
  }
  if (text.includes('scan') || text.includes('detect') || text.includes('check')) {
    return Shield;
  }
  if (text.includes('database') || text.includes('data') || text.includes('storage')) {
    return Database;
  }
  if (text.includes('network') || text.includes('ip') || text.includes('domain')) {
    return Globe;
  }
  if (text.includes('code') || text.includes('script') || text.includes('program')) {
    return Cpu;
  }
  if (text.includes('secure') || text.includes('encrypt') || text.includes('privacy')) {
    return Lock;
  }
  
  return Terminal;
}

export default function ToolCard({ 
  name, 
  description, 
  url, 
  categoryColor = 'cyan' 
}: ToolCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = getToolIcon(name, description);

  const getColorClasses = (color: string) => {
    const colors: Record<string, { text: string; bg: string; border: string; glow: string }> = {
      cyan: {
        text: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        glow: 'shadow-cyan-500/20',
      },
      green: {
        text: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        glow: 'shadow-green-500/20',
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        glow: 'shadow-purple-500/20',
      },
      pink: {
        text: 'text-pink-400',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        glow: 'shadow-pink-500/20',
      },
      yellow: {
        text: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        glow: 'shadow-yellow-500/20',
      },
    };
    return colors[color] || colors.cyan;
  };

  const colors = getColorClasses(categoryColor);

  return (
    <div
      className={`group relative cyber-card p-4 h-full flex flex-col
                 border ${colors.border} ${isHovered ? colors.glow : ''}
                 transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect on Hover */}
      <div 
        className={`absolute inset-0 rounded-lg ${colors.bg} opacity-0 
                   group-hover:opacity-100 transition-opacity duration-300 -z-10`}
      />
      
      {/* Corner Accents */}
      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 
                      ${colors.border.replace('/30', '/50')} rounded-tl-lg`} />
      <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 
                      ${colors.border.replace('/30', '/50')} rounded-tr-lg`} />
      <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 
                      ${colors.border.replace('/30', '/50')} rounded-bl-lg`} />
      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 
                      ${colors.border.replace('/30', '/50')} rounded-br-lg`} />

      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        {/* Icon */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${colors.bg} 
                        border ${colors.border} flex items-center justify-center
                        group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-5 h-5 ${colors.text}`} />
        </div>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-white group-hover:text-cyan-100 
                        truncate transition-colors">
            {name}
          </h3>
          <p className="text-[10px] text-cyan-500/50 font-mono uppercase tracking-wider">
            OSINT Tool
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-xs text-cyan-100/60 mb-4 line-clamp-2 flex-1">
        {description}
      </p>

      {/* Action Button */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-full flex items-center justify-center gap-2 
                   px-4 py-2 rounded-lg
                   border ${colors.border} ${colors.bg}
                   ${colors.text} text-xs font-medium
                   hover:${colors.bg.replace('/10', '/20')} 
                   hover:border-${categoryColor}-400/50
                   transition-all duration-300 group/btn`}
      >
        <span>Open Tool</span>
        <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 
                                group-hover/btn:-translate-y-0.5 transition-transform" />
      </a>

      {/* Hover Glow Overlay */}
      <div 
        className={`absolute inset-0 rounded-lg pointer-events-none
                   bg-gradient-to-br from-${categoryColor}-500/5 to-transparent
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
    </div>
  );
}
