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

- 📱 Fully responsive design
- ⚡ Fast loading (no frameworks)
- 🎨 Modern UI with smooth animations
- 📧 Contact form integration
- 🚀 Project showcase cards
- 💰 Pricing comparison

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
├── index.html          # Main page
├── css/
│   └── style.css       # Styles
├── js/
│   └── script.js       # Interactivity
├── images/             # Images (add logos, screenshots)
└── README.md           # This file
```

## Future Enhancements

- [ ] Add project screenshots/videos
- [ ] Blog section for project updates
- [ ] Case studies page
- [ ] Testimonials section
- [ ] Multi-page navigation (when needed)
- [ ] Dark mode toggle
- [ ] Analytics integration

## License

MIT License - See LICENSE file

---

**Built by AppForge Labs**
Forging solutions from real-world requirements

📧 Email: paulsemaan007@gmail.com
🐙 GitHub: github.com/paulsemaan007
