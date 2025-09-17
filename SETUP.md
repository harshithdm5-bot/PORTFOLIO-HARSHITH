# Portfolio Website Setup Guide

## 🚀 Quick Start

Your portfolio website is now ready! Here's how to get started:

### 1. View Your Website
- Open `index.html` in any web browser to see your portfolio
- For the best experience, use a local server (like Live Server extension in VS Code)

### 2. Customize Your Content

#### Personal Information
Edit `index.html` to replace placeholder content with your information:
- **Line 40**: Change "Electronics Engineer & Author" to your title
- **Line 41**: Update the hero description
- **Line 59-60**: Replace About Me content with your background
- **Line 211**: Update email address
- **Line 244**: Add your name in the footer

#### Projects Section
Replace the example projects (lines 89-144 in `index.html`) with your actual electronics projects:
- Update project titles, descriptions, and tags
- Replace image placeholders with your project photos
- Modify the project data in `js/script.js` (lines 111-159) for modal content

#### Books Section  
Update the books section (lines 156-194 in `index.html`):
- Replace book titles and descriptions
- Add your actual Amazon links
- Update publication years and categories
- Add your book cover images

### 3. Add Your Images
Add the following images to the `images/` folder:
- `hero-placeholder.jpg` - Your profile photo
- `project1-placeholder.jpg`, `project2-placeholder.jpg`, `project3-placeholder.jpg` - Project screenshots
- `book1-placeholder.jpg`, `book2-placeholder.jpg` - Book covers

### 4. Update Links
Replace placeholder links throughout the site:
- Social media links in navigation and footer
- GitHub and demo links in project modals
- Amazon book links

### 5. Color Scheme (Optional)
The website uses a purple gradient theme. To change colors, update the CSS variables:
- Primary color: `#667eea` 
- Secondary color: `#764ba2`
- Text color: `#2c3e50`

## 🛠 Advanced Customization

### Adding New Projects
1. Add HTML for new project card in the projects section
2. Add corresponding data object in `js/script.js` projectData
3. Add images to the `images/` folder

### Adding New Books
1. Add HTML for new book card in the books section  
2. Add book cover image
3. Update Amazon links

### Form Integration
The contact form currently shows a success message. To add real functionality:
1. Replace the form submission handler in `js/script.js` (line 282)
2. Integrate with services like Formspree, Netlify Forms, or your backend

### SEO Optimization
- Update meta tags in `<head>` section
- Add structured data markup
- Optimize images with proper alt text
- Add sitemap.xml and robots.txt

## 📱 Responsive Design
The website is fully responsive and works on:
- Desktop (1200px+)
- Tablet (768px-1199px) 
- Mobile (480px-767px)
- Small mobile (< 480px)

## 🚀 Deployment
Deploy your website using:
- **GitHub Pages**: Push to GitHub and enable Pages
- **Netlify**: Connect your Git repository
- **Vercel**: Deploy directly from Git
- **Traditional hosting**: Upload files to your web server

## 🔧 Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Inter (Google Fonts)
- **Icons**: Font Awesome 6
- **Features**: Responsive design, smooth scrolling, modal dialogs, project filtering

## 📞 Need Help?
- Check browser console for any errors
- Ensure all file paths are correct
- Test on multiple browsers and devices
- Use browser developer tools for debugging

Happy coding! 🎉