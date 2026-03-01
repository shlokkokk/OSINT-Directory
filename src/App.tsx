import { useState, useEffect, useCallback, useMemo } from 'react';
import './App.css';

// Components
import AnimatedBackground from './components/AnimatedBackground';
import Navbar from './components/Navbar';
import CategorySidebar from './components/CategorySidebar';

// Sections
import HeroSection from './sections/HeroSection';
import ToolsSection from './sections/ToolsSection';
import Footer from './sections/Footer';

// Types
import type { OsintData } from './types/osint';

function App() {
  // State
  const [osintData, setOsintData] = useState<OsintData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Fetch OSINT data from JSON file
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/osint-tools.json');
        
        if (!response.ok) {
          throw new Error(`Failed to load data: ${response.status}`);
        }
        
        const data: OsintData = await response.json();
        setOsintData(data);
        setError(null);
      } catch (err) {
        console.error('Error loading OSINT data:', err);
        setError(err instanceof Error ? err.message : 'Failed to load tools data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get sorted categories
  const categories = useMemo(() => {
    return Object.keys(osintData).sort((a, b) => a.localeCompare(b));
  }, [osintData]);

  // Get tool counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    Object.entries(osintData).forEach(([category, tools]) => {
      counts[category] = tools.length;
    });
    return counts;
  }, [osintData]);

  // Calculate total stats
  const stats = useMemo(() => {
    const totalTools = Object.values(osintData).reduce((sum, tools) => sum + tools.length, 0);
    return {
      totalTools,
      totalCategories: categories.length,
    };
  }, [osintData, categories]);

  // Handle category toggle - scrolls to Tools Directory after selection
  const handleCategoryToggle = useCallback((category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      }
      return [...prev, category];
    });
    
    // Scroll to Tools Directory section
    setTimeout(() => {
      const toolsSection = document.getElementById('tools');
      if (toolsSection) {
        const navbarHeight = 64; // Height of navbar
        const sectionTop = toolsSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
      }
    }, 100);
    
    // Close sidebar on mobile after selection
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setSelectedCategories([]);
    setSearchQuery('');
  }, []);

  // Handle search change
  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
  }, []);

  // Toggle sidebar
  const handleSidebarToggle = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  // Close sidebar
  const handleSidebarClose = useCallback(() => {
    setIsSidebarOpen(false);
  }, []);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 
                        flex items-center justify-center mb-4 mx-auto animate-pulse">
            <div className="w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
          </div>
          <p className="text-cyan-400 font-mono text-sm animate-pulse">
            Loading OSINT Tools...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
        <AnimatedBackground />
        <div className="relative z-10 text-center max-w-md mx-auto px-4">
          <div className="w-16 h-16 rounded-xl bg-red-500/10 border border-red-500/30 
                        flex items-center justify-center mb-4 mx-auto">
            <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Failed to Load Data</h2>
          <p className="text-cyan-100/60 text-sm mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="cyber-btn"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-darker text-white relative">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        onMenuToggle={handleSidebarToggle}
        isSidebarOpen={isSidebarOpen}
      />

      {/* Main Layout */}
      <div className="relative z-10 flex">
        {/* Category Sidebar */}
        <CategorySidebar
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryToggle={handleCategoryToggle}
          onClearFilters={handleClearFilters}
          isOpen={isSidebarOpen}
          onClose={handleSidebarClose}
          categoryCounts={categoryCounts}
        />

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Hero Section */}
          <HeroSection 
            totalTools={stats.totalTools} 
            totalCategories={stats.totalCategories} 
          />

          {/* Tools Section */}
          <ToolsSection
            data={osintData}
            searchQuery={searchQuery}
            selectedCategories={selectedCategories}
          />

          {/* Footer */}
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;
