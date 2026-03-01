## 📁 FILE GUIDE - What Each File Does

### Project Structure
```
/mnt/okcomputer/output/app/
├── public/                          # Static files (served as-is)
│   └── osint-tools.json            # ← YOUR TOOLS DATA - Edit this to add/remove tools!
│
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── AnimatedBackground.tsx  # Particle/grid animation background
│   │   ├── CategorySidebar.tsx     # ← CATEGORY SIDEBAR with search
│   │   ├── Navbar.tsx              # Sticky top navigation with search
│   │   └── ToolCard.tsx            # Individual tool card component
│   │
│   ├── sections/                    # Page sections
│   │   ├── HeroSection.tsx         # Hero with title, stats, animated counters
│   │   ├── ToolsSection.tsx        # ← MAIN TOOLS DISPLAY - shows filtered tools
│   │   └── Footer.tsx              # ← FOOTER with all social links
│   │
│   ├── types/
│   │   └── osint.ts                # TypeScript type definitions
│   │
│   ├── App.tsx                     # ← MAIN APP - handles all logic, data loading, filters
│   ├── App.css                     # App-specific styles
│   ├── index.css                   # Global styles (cyber theme, animations)
│   └── main.tsx                    # App entry point
│
├── index.html                      # HTML template
├── tailwind.config.js              # Tailwind CSS configuration (cyber colors)
├── package.json                    # Dependencies
└── vite.config.ts                  # Build configuration
```

---

## 📝 HOW TO MAKE CHANGES

### 1. Add/Remove/Edit Tools
**File:** `public/osint-tools.json`

This is your data file. Structure:
```json
{
  "Category Name": [
    {
      "name": "Tool Name",
      "description": "Tool description",
      "url": "https://tool-url.com"
    }
  ]
}
```

**To add a tool:** Add a new object to the appropriate category array.


---

## 🎯 QUICK REFERENCE

| Want to... | Edit this file |
|------------|----------------|
| Add/remove tools | `public/osint-tools.json` |
| Change hero title/subtitle | `src/sections/HeroSection.tsx` |
| Update social links | `src/sections/Footer.tsx` (lines 85-95) |
| Change colors | `src/index.css` + `tailwind.config.js` |
| Add new category filter | Already automatic from JSON! |
| Change animations | `src/index.css` (keyframes) |
| Update navbar | `src/components/Navbar.tsx` |
| Change tool card design | `src/components/ToolCard.tsx` |

---