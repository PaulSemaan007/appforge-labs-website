// AppForge Labs - Website JavaScript

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form handling
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            // Submit to Formspree
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formStatus.textContent = '✅ Message sent successfully! We\'ll get back to you within 24-48 hours.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                // Error
                formStatus.textContent = '❌ Something went wrong. Please email us directly at paulsemaan007@gmail.com';
                formStatus.className = 'form-status error';
            }
        } catch (error) {
            // Network error
            formStatus.textContent = '❌ Network error. Please email us directly at paulsemaan007@gmail.com';
            formStatus.className = 'form-status error';
        } finally {
            // Restore button
            submitButton.textContent = originalText;
            submitButton.disabled = false;

            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}

// Update demo link dynamically (will be replaced with actual Streamlit URL)
const demoLink = document.getElementById('demo-link');
if (demoLink) {
    // Placeholder until Streamlit Cloud deployment
    demoLink.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            alert('🚀 OpenSAM demo is being deployed to Streamlit Cloud!\n\nCheck back soon or contact us at paulsemaan007@gmail.com to get early access.');
        }
    });
}

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }

    lastScroll = currentScroll;
});

// Console message for developers
console.log(`
╔═══════════════════════════════════════╗
║                                       ║
║        AppForge Labs                  ║
║                                       ║
║  Forging solutions from real-world    ║
║         requirements                  ║
║                                       ║
║  Interested in how we built this?     ║
║  All our projects are open-source!    ║
║                                       ║
║  github.com/paulsemaan007             ║
║                                       ║
╚═══════════════════════════════════════╝
`);
