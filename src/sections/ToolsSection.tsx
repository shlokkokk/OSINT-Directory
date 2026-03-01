import { useRef, useEffect, useState } from 'react';
import { Folder, ChevronUp, AlertCircle } from 'lucide-react';
import ToolCard from '../components/ToolCard';
import type { OsintData } from '../types/osint';

interface ToolsSectionProps {
  data: OsintData;
  searchQuery: string;
  selectedCategories: string[];
}

// Get color based on category index
function getCategoryColor(index: number): string {
  const colors = ['cyan', 'green', 'purple', 'pink', 'yellow'];
  return colors[index % colors.length];
}

// Get color classes for category header
function getHeaderColorClasses(color: string) {
  const classes: Record<string, { border: string; bg: string; text: string; icon: string }> = {
    cyan: {
      border: 'border-cyan-500/30',
      bg: 'bg-cyan-500/10',
      text: 'text-cyan-400',
      icon: 'text-cyan-400',
    },
    green: {
      border: 'border-green-500/30',
      bg: 'bg-green-500/10',
      text: 'text-green-400',
      icon: 'text-green-400',
    },
    purple: {
      border: 'border-purple-500/30',
      bg: 'bg-purple-500/10',
      text: 'text-purple-400',
      icon: 'text-purple-400',
    },
    pink: {
      border: 'border-pink-500/30',
      bg: 'bg-pink-500/10',
      text: 'text-pink-400',
      icon: 'text-pink-400',
    },
    yellow: {
      border: 'border-yellow-500/30',
      bg: 'bg-yellow-500/10',
      text: 'text-yellow-400',
      icon: 'text-yellow-400',
    },
  };
  return classes[color] || classes.cyan;
}

export default function ToolsSection({ data, searchQuery, selectedCategories }: ToolsSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filter and organize tools
  const getFilteredTools = () => {
    const filtered: { category: string; tools: { name: string; description: string; url: string }[]; colorIndex: number }[] = [];
    
    Object.entries(data).forEach(([category, tools], index) => {
      // Skip if categories are selected and this one isn't included
      if (selectedCategories.length > 0 && !selectedCategories.includes(category)) {
        return;
      }

      // Filter tools by search query
      const filteredTools = tools.filter(tool => {
        if (!searchQuery) return true;
        const query = searchQuery.toLowerCase();
        return (
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query) ||
          category.toLowerCase().includes(query)
        );
      });

      if (filteredTools.length > 0) {
        filtered.push({
          category,
          tools: filteredTools,
          colorIndex: index,
        });
      }
    });

    return filtered;
  };

  const filteredData = getFilteredTools();
  const totalFilteredTools = filteredData.reduce((sum, cat) => sum + cat.tools.length, 0);

  return (
    <section 
      ref={sectionRef}
      id="tools" 
      className="relative min-h-screen py-8 px-4"
    >
      {/* Results Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 
                       p-4 rounded-lg bg-cyber-dark/50 border border-cyan-500/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 
                          flex items-center justify-center">
              <Folder className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">Tools Directory</h2>
              <p className="text-xs text-cyan-500/70">
                Showing <span className="text-cyan-400 font-mono">{totalFilteredTools}</span> tools 
                across <span className="text-cyan-400 font-mono">{filteredData.length}</span> categories
              </p>
            </div>
          </div>

          {/* Active Filters */}
          {(searchQuery || selectedCategories.length > 0) && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-cyan-500/70">Filters:</span>
              {searchQuery && (
                <span className="px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  Search: "{searchQuery}"
                </span>
              )}
              {selectedCategories.length > 0 && (
                <span className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  {selectedCategories.length} categor{selectedCategories.length === 1 ? 'y' : 'ies'}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Tools Grid */}
      <div className="max-w-7xl mx-auto space-y-12">
        {filteredData.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/20 
                          flex items-center justify-center mb-6">
              <AlertCircle className="w-10 h-10 text-cyan-400/50" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No tools found</h3>
            <p className="text-cyan-100/50 max-w-md">
              Try adjusting your search query or category filters to find what you're looking for.
            </p>
          </div>
        ) : (
          // Category Sections
          filteredData.map(({ category, tools, colorIndex }) => {
            const color = getCategoryColor(colorIndex);
            const headerColors = getHeaderColorClasses(color);

            return (
              <div key={category} className="category-section">
                {/* Category Header */}
                <div className={`flex items-center gap-4 mb-6 pb-3 border-b ${headerColors.border}`}>
                  <div className={`w-12 h-12 rounded-lg ${headerColors.bg} border ${headerColors.border}
                                 flex items-center justify-center`}>
                    <Folder className={`w-6 h-6 ${headerColors.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold ${headerColors.text}`}>
                      {category}
                    </h3>
                    <p className="text-xs text-cyan-500/50">
                      <span className="font-mono">{tools.length}</span> tools available
                    </p>
                  </div>
                  {/* Decorative Line */}
                  <div className={`hidden sm:block flex-1 h-px ${headerColors.bg.replace('/10', '/30')}`} />
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {tools.map((tool, toolIndex) => (
                    <div
                      key={`${category}-${tool.name}-${toolIndex}`}
                      className="animate-fade-in"
                      style={{ animationDelay: `${toolIndex * 50}ms` }}
                    >
                      <ToolCard
                        name={tool.name}
                        description={tool.description}
                        url={tool.url}
                        categoryColor={color}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-40
                   w-12 h-12 rounded-full
                   bg-cyber-dark/90 border border-cyan-500/30
                   flex items-center justify-center
                   text-cyan-400
                   hover:bg-cyan-500/10 hover:border-cyan-400/50
                   hover:shadow-neon-cyan
                   transition-all duration-300
                   ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </section>
  );
}
