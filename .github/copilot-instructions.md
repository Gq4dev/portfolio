# Copilot Instructions for Portfolio Project

## Project Overview
This is a React-based portfolio website built with Create React App, showcasing projects in SAP UI5, React, and Next.js. It features dark/light theming, responsive design, and static JSON data for categories and projects.

## Build and Test Commands
- `npm start`: Start development server on localhost:3000 with hot reload
- `npm test`: Run Jest tests in watch mode
- `npm run build`: Create production build in `/build` folder
- `npm run deploy`: Deploy to GitHub Pages

## Architecture Decisions
- **Component Structure**: Each component has its own folder with .js/.jsx and .css files
- **State Management**: React Context for theme (dark/light), local component state for UI toggles
- **Data Layer**: Static JSON files in `public/data/` fetched via native fetch API
- **Routing**: React Router v6 with parameterized routes for category filtering
- **Styling**: CSS custom properties for theming, responsive design with media queries

## Project-Specific Conventions
- **URL Resolution**: Use `src/utils/publicUrl.js` utilities (`getImageUrl()`, `getDataUrl()`) for proper asset paths at any route depth
- **File Extensions**: Mix of .js and .jsx; prefer .jsx for components with JSX
- **Data Fetching**: Native fetch with .json() and console.error logging; no loading states or error boundaries yet
- **Theming**: CSS custom properties with `data-theme` attribute; toggle via context
- **Accessibility**: aria-labels on icons, proper semantic HTML
- **Image Optimization**: Lazy loading with explicit width/height to prevent CLS

## Potential Pitfalls
- **PUBLIC_URL Dependency**: Ensure `homepage` in package.json is set correctly for subdirectory deployments
- **Fetch Error Handling**: Currently logs to console only; add user-facing error states
- **Category Sync**: Hard-coded category filters in Projects.jsx; keep in sync with categories.json
- **Mobile Menu**: Sidebar state managed in App.js; ensure proper closing on navigation
- **Sentry DSN**: Exposed in index.js; consider environment variables for production

## Key Files and Patterns
- `src/utils/publicUrl.js`: Utility for resolving public URLs
- `src/context/ThemeContext.js`: Theme context with localStorage persistence
- `src/components/Projects/Projects.jsx`: Filtering logic with URL params and JSON data
- `public/data/projects.json`: Project data structure (title, category, deploy, tech)
- `src/index.css`: Global styles with theme variables

## Development Environment
- Node.js ^16.0 (CRA 5.0.x compatible)
- npm for package management
- Docker support available for containerized development