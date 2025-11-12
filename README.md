# AppForge Labs Website

Official website for AppForge Labs - Showcasing open-source projects built from real-world job requirements.

## Live Site

Coming soon: `appforge-labs.vercel.app` (or custom domain)

## About

AppForge Labs turns industry job postings into production-ready open-source applications. We analyze what businesses actually need and build tools that address those requirements.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern, responsive design
- **JavaScript** - Interactive features
- **Formspree** - Contact form handling

## Features

### Core Features
- 📱 Fully responsive design with mobile hamburger menu
- ⚡ Fast loading (vanilla JS, no frameworks)
- 🎨 Modern UI with smooth animations
- 🌙 Dark mode toggle with localStorage persistence
- 📊 Scroll progress bar
- 🔝 Back to top button
- 📧 Contact & newsletter form integration (Formspree)

### Sections
- 🏠 Hero section with clear CTAs
- 📈 Animated statistics counter (GitHub stars, downloads, users)
- ℹ️ About/Story section with mission statement
- 🚀 Enhanced project cards with screenshots, badges, and GitHub stats
- 💼 Use cases section with real-world examples
- 🔄 How It Works with icon-enhanced steps
- 💰 Comprehensive pricing comparison (Free, Professional, Enterprise)
- ⭐ Testimonials section
- ❓ FAQ accordion
- 📝 Blog/News section
- 📬 Newsletter signup
- 🔗 Enhanced footer with social links
- 📜 Privacy policy page

### Interactive Elements
- Smooth scroll navigation
- FAQ accordion functionality
- Mobile-responsive hamburger menu
- Animated counter on scroll
- Project image hover effects
- Form validation and loading states
- Font Awesome icons throughout

## Local Development

```bash
# Simply open index.html in your browser
# Or use a local server:

# Python
python -m http.server 8000

# Node.js
npx http-server

# VS Code Live Server
# Right-click index.html -> Open with Live Server
```

Visit `http://localhost:8000`

## Deployment

### Vercel (Recommended - Free)

1. Push to GitHub
2. Import project in Vercel dashboard
3. Deploy (automatic)

### Netlify (Alternative - Free)

1. Push to GitHub
2. New site from Git in Netlify
3. Deploy

### GitHub Pages (Alternative - Free)

1. Push to GitHub
2. Settings → Pages → Deploy from branch
3. Select main branch, / (root)

## Configuration

### Contact Form

Update the Formspree form ID in `index.html`:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Get your form ID:
1. Sign up at [formspree.io](https://formspree.io)
2. Create new form
3. Copy form ID
4. Replace `YOUR_FORM_ID` in index.html

### Demo Links

When OpenSAM is deployed to Streamlit Cloud, update the demo link in `index.html`:

```html
<a href="https://opensam.streamlit.app" id="demo-link">Try Live Demo</a>
```

## Project Structure

```
appforge-labs-website/
├── index.html          # Main landing page
├── privacy.html        # Privacy policy page
├── css/
│   └── style.css       # Complete styles with dark mode
├── js/
│   └── script.js       # All interactive features
├── images/
│   ├── logo.svg        # AppForge Labs logo
│   ├── favicon.svg     # Browser favicon
│   └── opensam-dashboard.svg  # Project screenshot
└── README.md           # Documentation
```

## Completed Enhancements ✅

- ✅ Project screenshots (SVG placeholders)
- ✅ Blog section for project updates
- ✅ Use cases section
- ✅ Testimonials section
- ✅ Dark mode toggle with persistence
- ✅ Mobile hamburger navigation
- ✅ FAQ accordion
- ✅ Newsletter signup
- ✅ Scroll progress bar
- ✅ Back to top button
- ✅ Animated statistics
- ✅ Privacy policy page
- ✅ Enhanced footer with social links
- ✅ GitHub badges integration
- ✅ Font Awesome icons

## Future Enhancements

- [ ] Analytics integration (Google Analytics / Plausible)
- [ ] Actual blog posts (Markdown/CMS integration)
- [ ] Case study detail pages
- [ ] Team member profiles
- [ ] Client logo section
- [ ] Video testimonials
- [ ] Live chat integration
- [ ] Multi-language support
- [ ] Search functionality for blog
- [ ] RSS feed for blog

## License

MIT License - See LICENSE file

---

**Built by AppForge Labs**
Forging solutions from real-world requirements

📧 Email: paulsemaan007@gmail.com
🐙 GitHub: github.com/paulsemaan007
