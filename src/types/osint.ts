/**
 * OSINT Tool Data Types
 * Defines the structure for tools and categories from the JSON file
 */

// Individual tool structure
export interface OsintTool {
  name: string;
  description: string;
  url: string;
}

// Category with array of tools
export interface ToolCategory {
  name: string;
  tools: OsintTool[];
}

// Complete data structure from JSON
export type OsintData = Record<string, OsintTool[]>;

// Filter state
export interface FilterState {
  searchQuery: string;
  selectedCategories: string[];
}

// Stats for hero section
export interface ToolStats {
  totalTools: number;
  totalCategories: number;
}
