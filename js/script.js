// AppForge Labs - Website JavaScript

// ============================================
// Smooth scrolling for anchor links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const mobileToggle = document.querySelector('.mobile-menu-toggle');
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ============================================
// Dark Mode Toggle - DISABLED
// ============================================
// Dark mode feature has been removed from the UI

// ============================================
// Scroll Progress Bar
// ============================================
const scrollProgress = document.querySelector('.scroll-progress');

function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.width = progress + '%';
    }
}

window.addEventListener('scroll', updateScrollProgress);

// ============================================
// Animated Statistics Counter
// ============================================
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for stats animation
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-value[data-target]').forEach(stat => {
    statObserver.observe(stat);
});

// ============================================
// Back to Top Button
// ============================================
const backToTopButton = document.getElementById('back-to-top');

function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTopButton?.classList.add('visible');
    } else {
        backToTopButton?.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleBackToTop);

if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// FAQ Accordion
// ============================================
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');

        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        // Toggle current item
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// ============================================
// Contact Form Handling
// ============================================
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
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
                formStatus.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully! We\'ll get back to you within 24-48 hours.';
                formStatus.className = 'form-status success';
                contactForm.reset();
            } else {
                // Error
                formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Something went wrong. Please email us directly at paulsemaan007@gmail.com';
                formStatus.className = 'form-status error';
            }
        } catch (error) {
            // Network error
            formStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Network error. Please email us directly at paulsemaan007@gmail.com';
            formStatus.className = 'form-status error';
        } finally {
            // Restore button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;

            // Hide status message after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}

// ============================================
// Newsletter Form Handling
// ============================================
const newsletterForm = document.getElementById('newsletter-form');
const newsletterStatus = document.getElementById('newsletter-status');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const formData = new FormData(newsletterForm);
        const submitButton = newsletterForm.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Subscribing...';
        submitButton.disabled = true;

        try {
            const response = await fetch(newsletterForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                newsletterStatus.innerHTML = '<i class="fas fa-check-circle"></i> Successfully subscribed! Check your email to confirm.';
                newsletterStatus.className = 'form-status success';
                newsletterForm.reset();
            } else {
                newsletterStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Something went wrong. Please try again.';
                newsletterStatus.className = 'form-status error';
            }
        } catch (error) {
            newsletterStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> Network error. Please try again.';
            newsletterStatus.className = 'form-status error';
        } finally {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;

            setTimeout(() => {
                newsletterStatus.style.display = 'none';
            }, 5000);
        }
    });
}

// ============================================
// Enhanced Scroll-Based Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
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
    sectionObserver.observe(section);
});

// ============================================
// Navbar Scroll Effect
// ============================================
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

// ============================================
// Close mobile menu when clicking outside
// ============================================
document.addEventListener('click', (e) => {
    const navLinks = document.querySelector('.nav-links');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navbar = document.querySelector('.navbar');

    if (navLinks && mobileToggle && navLinks.classList.contains('active')) {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileToggle.classList.remove('active');
        }
    }
});

// ============================================
// Console Message for Developers
// ============================================
console.log(`
╔════════════════════════════════════════════╗
║                                            ║
║           🔨 AppForge Labs 🔨              ║
║                                            ║
║    Forging solutions from real-world       ║
║            requirements                    ║
║                                            ║
║  💡 Interested in how we built this?       ║
║     All our projects are open-source!      ║
║                                            ║
║  🔗 github.com/paulsemaan007               ║
║  🌟 Star our repos if you find them useful ║
║                                            ║
║  Built with: HTML5, CSS3, Vanilla JS       ║
║  No frameworks, just clean code            ║
║                                            ║
╚════════════════════════════════════════════╝
`);

// ============================================
// Performance Monitoring (optional)
// ============================================
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`⚡ Page loaded in ${pageLoadTime}ms`);
    });
}
