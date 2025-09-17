# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a static portfolio website showcasing electronics projects and published books. It's built with vanilla HTML5, CSS3, and JavaScript without any build tools or frameworks, making it simple to develop and deploy.

## Development Commands

### Local Development
```powershell
# Serve the website locally (using Python)
python -m http.server 8000

# Alternative using Node.js (if available)
npx http-server . -p 8000

# Open directly in browser (for basic testing)
# Simply open index.html in your web browser
```

### Testing
```powershell
# Validate HTML (if using validator)
npx html-validate index.html

# Check for broken links (if using link checker)
npx broken-link-checker http://localhost:8000
```

## Architecture Overview

### File Structure
- `index.html` - Single-page application entry point with all content sections
- `css/style.css` - Complete styling with responsive design, gradient themes, and animations
- `js/script.js` - Interactive functionality including modal system, filtering, and form handling
- `images/` - Asset directory with placeholder references (see images/README.md for requirements)

### Key Components

#### Modal System (`js/script.js` lines 102-196)
- Dynamic project detail overlays with feature lists and technology tags
- Project data stored as JavaScript objects (lines 111-159)
- Keyboard navigation support (Escape key)
- Body scroll locking when modal is open

#### Project Filtering (`js/script.js` lines 70-100)
- Category-based filtering system using data attributes
- Smooth animations for show/hide transitions
- Filter buttons: 'all', 'hardware', 'software', 'iot'
- Projects categorized using `data-category` attributes in HTML

#### Responsive Navigation (`js/script.js` lines 14-68)
- Mobile hamburger menu with smooth transitions
- Active section highlighting based on scroll position
- Auto-close on outside click or nav link selection
- Backdrop blur effects on scroll

#### Contact Form (`js/script.js` lines 258-327)
- Client-side validation with custom notification system
- Form submission currently shows success message (not connected to backend)
- Email validation regex included
- Toast notifications with auto-dismiss

### Styling Architecture

#### CSS Custom Properties (implied from usage)
- Primary gradient: `#667eea` to `#764ba2`
- Text color: `#2c3e50`
- Section backgrounds: Linear gradients with light tones
- Responsive breakpoints handled through media queries

#### Animation System
- Intersection Observer API for scroll-triggered animations (lines 330-366)
- CSS keyframe animations for fade-in effects
- Transform-based hover effects on cards and buttons
- Smooth scrolling behavior

## Content Management

### Adding Projects
1. Add HTML project card in the projects grid section (around line 87 in index.html)
2. Add corresponding project data object in `js/script.js` projectData (lines 111-159)
3. Include appropriate category in `data-category` attribute for filtering
4. Add project image to `images/` directory

### Adding Books
1. Add HTML book card in books grid section (around line 154 in index.html)
2. Update Amazon links with actual URLs
3. Add book cover image to `images/` directory

### Customizing Content
- Personal information: Update hero section (lines 40-41 in index.html)
- About section: Modify content and skills tags (lines 59-70 in index.html)
- Contact information: Update email and social links (lines 211-221 in index.html)
- Footer: Update copyright and social links (line 244 in index.html)

## Image Requirements

All images should be placed in the `images/` directory:
- `hero-placeholder.jpg` - Profile photo (400x400px)
- `project1-placeholder.jpg`, `project2-placeholder.jpg`, `project3-placeholder.jpg` - Project screenshots (600x300px)
- `book1-placeholder.jpg`, `book2-placeholder.jpg` - Book covers (300x400px)

## Deployment

This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

No build process required - simply upload the files.

## Browser Compatibility

Uses modern JavaScript features:
- ES6+ syntax (arrow functions, template literals)
- Intersection Observer API
- CSS Grid and Flexbox
- CSS Custom Properties (var())

## Development Notes

- Form submission handler is placeholder only (line 282 in js/script.js)
- All external links in project modals are placeholder '#' links
- Project filtering assumes specific category values: 'hardware', 'software', 'iot'
- Smooth scrolling accounts for fixed navbar height (80px offset)
- Mobile-first responsive design approach used throughout CSS