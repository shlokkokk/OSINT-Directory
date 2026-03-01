import { useState, useEffect, useMemo } from 'react';
import { ChevronRight, Folder, FolderOpen, Hash, X, Search } from 'lucide-react';

/**
 * CategorySidebar Component
 * Collapsible sidebar for filtering tools by category
 * - Shows all categories with tool counts
 * - Allows multi-select filtering
 * - Search/filter categories
 * - Collapsible on mobile
 */

interface CategorySidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
  onClearFilters: () => void;
  isOpen: boolean;
  onClose: () => void;
  categoryCounts: Record<string, number>;
}

export default function CategorySidebar({
  categories,
  selectedCategories,
  onCategoryToggle,
  onClearFilters,
  isOpen,
  onClose,
  categoryCounts,
}: CategorySidebarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [categorySearch, setCategorySearch] = useState('');

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (!target.closest('.category-sidebar') && !target.closest('[data-menu-toggle]')) {
          onClose();
        }
      };
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isMobile, isOpen, onClose]);

  // Filter categories based on search
  const filteredCategories = useMemo(() => {
    if (!categorySearch.trim()) return categories;
    const query = categorySearch.toLowerCase();
    return categories.filter(cat => cat.toLowerCase().includes(query));
  }, [categories, categorySearch]);

  // Get color based on original category index for consistency
  const getCategoryColor = (category: string): string => {
    const originalIndex = categories.indexOf(category);
    const colors = ['cyan', 'green', 'purple', 'pink', 'yellow'];
    return colors[originalIndex % colors.length];
  };

  // Get Tailwind classes for color
  const getColorClasses = (color: string, isSelected: boolean) => {
    const baseClasses = {
      cyan: {
        text: 'text-cyan-400',
        bg: 'bg-cyan-500/10',
        border: 'border-cyan-500/30',
        hover: 'hover:border-cyan-500/50',
        glow: 'shadow-cyan-500/20',
      },
      green: {
        text: 'text-green-400',
        bg: 'bg-green-500/10',
        border: 'border-green-500/30',
        hover: 'hover:border-green-500/50',
        glow: 'shadow-green-500/20',
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-500/10',
        border: 'border-purple-500/30',
        hover: 'hover:border-purple-500/50',
        glow: 'shadow-purple-500/20',
      },
      pink: {
        text: 'text-pink-400',
        bg: 'bg-pink-500/10',
        border: 'border-pink-500/30',
        hover: 'hover:border-pink-500/50',
        glow: 'shadow-pink-500/20',
      },
      yellow: {
        text: 'text-yellow-400',
        bg: 'bg-yellow-500/10',
        border: 'border-yellow-500/30',
        hover: 'hover:border-yellow-500/50',
        glow: 'shadow-yellow-500/20',
      },
    };

    const classes = baseClasses[color as keyof typeof baseClasses] || baseClasses.cyan;
    
    if (isSelected) {
      return `${classes.bg} ${classes.border} ${classes.glow}`;
    }
    return `border-transparent ${classes.hover}`;
  };

  const getTextColor = (color: string) => {
    const colors: Record<string, string> = {
      cyan: 'text-cyan-400',
      green: 'text-green-400',
      purple: 'text-purple-400',
      pink: 'text-pink-400',
      yellow: 'text-yellow-400',
    };
    return colors[color] || colors.cyan;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`category-sidebar fixed lg:sticky top-16 left-0 z-40
                   w-72 h-[calc(100vh-4rem)] lg:h-[calc(100vh-4rem)]
                   bg-cyber-darker/95 lg:bg-cyber-darker/80 backdrop-blur-xl
                   border-r border-cyan-500/20
                   transform transition-transform duration-300 ease-out
                   ${isOpen || !isMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
                   overflow-hidden flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/10">
          <div className="flex items-center gap-2">
            <Folder className="w-5 h-5 text-cyan-400" />
            <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
              Categories
            </h2>
          </div>
          <div className="flex items-center gap-2">
            {selectedCategories.length > 0 && (
              <button
                onClick={onClearFilters}
                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear
              </button>
            )}
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Count */}
        <div className="px-4 py-2 bg-cyan-500/5 border-b border-cyan-500/10">
          <p className="text-xs text-cyan-500/70">
            <span className="text-cyan-400 font-mono">{categories.length}</span> categories available
          </p>
        </div>

        {/* Category Search */}
        <div className="px-3 py-3 border-b border-cyan-500/10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-500/50" />
            <input
              type="text"
              value={categorySearch}
              onChange={(e) => setCategorySearch(e.target.value)}
              placeholder="Search categories..."
              className="w-full pl-9 pr-8 py-2 bg-cyber-dark/50 border border-cyan-500/20 rounded-lg
                       text-sm text-white placeholder-cyan-500/40
                       focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30
                       transition-all duration-300"
            />
            {categorySearch && (
              <button
                onClick={() => setCategorySearch('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded
                         text-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
          {categorySearch && (
            <p className="mt-2 text-[10px] text-cyan-500/50">
              Found <span className="text-cyan-400 font-mono">{filteredCategories.length}</span> categories
            </p>
          )}
        </div>

        {/* Category List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-xs text-cyan-500/50">No categories found</p>
            </div>
          ) : (
            filteredCategories.map((category) => {
              const color = getCategoryColor(category);
              const isSelected = selectedCategories.includes(category);
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  onClick={() => onCategoryToggle(category)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg
                            border transition-all duration-200 group
                            ${getColorClasses(color, isSelected)}
                            ${isSelected ? 'shadow-lg' : 'hover:bg-white/5'}`}
                >
                  {/* Icon */}
                  <div className={`flex-shrink-0 ${getTextColor(color)}`}>
                    {isSelected ? (
                      <FolderOpen className="w-4 h-4" />
                    ) : (
                      <Folder className="w-4 h-4" />
                    )}
                  </div>

                  {/* Category Name */}
                  <div className="flex-1 text-left min-w-0">
                    <p className={`text-sm truncate ${isSelected ? 'text-white' : 'text-cyan-100/80 group-hover:text-white'}`}>
                      {category}
                    </p>
                  </div>

                  {/* Tool Count */}
                  <div className={`flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full
                                 ${isSelected ? 'bg-white/10' : 'bg-white/5'}`}>
                    <Hash className={`w-3 h-3 ${getTextColor(color)}`} />
                    <span className={`text-xs font-mono ${getTextColor(color)}`}>
                      {count}
                    </span>
                  </div>

                  {/* Selected Indicator */}
                  {isSelected && (
                    <ChevronRight className={`w-4 h-4 ${getTextColor(color)}`} />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-cyan-500/10 bg-cyber-darker/50">
          <p className="text-[10px] text-cyan-500/50 text-center">
            Click categories to filter tools
          </p>
        </div>
      </aside>
    </>
  );
}
