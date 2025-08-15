// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
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

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    // Animate hero content on page load
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    // Animate hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            heroImage.style.transition = 'all 1s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateY(0)';
        }, 300);
    }

    // Add scroll animation classes to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });

    // Add animation to cards and other elements
    const animatedElements = document.querySelectorAll('.testimonial-card, .process-card, .feature-card, .pricing-card, .logo-item, .faq-item');
    animatedElements.forEach(element => {
        element.classList.add('animate-on-scroll');
        observer.observe(element);
    });
});

// FAQ Accordion functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Navbar background on scroll - keep dark color
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(15, 15, 15, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(15, 15, 15, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Animate chart bars on scroll
const chartBars = document.querySelectorAll('.chart-bar');
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const height = bar.style.height;
            bar.style.height = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'height 1s ease';
                bar.style.height = height;
            }, 200);
            
            chartObserver.unobserve(bar);
        }
    });
}, { threshold: 0.5 });

chartBars.forEach(bar => {
    chartObserver.observe(bar);
});

// Counter animation for mission stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target;
            const finalValue = statNumber.textContent;
            const isPercentage = finalValue.includes('%');
            const isCurrency = finalValue.includes('€');
            const isPlus = finalValue.includes('+');
            
            let numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
            let currentValue = 0;
            const increment = numericValue / 50;
            
            const counter = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(counter);
                }
                
                let displayValue = Math.floor(currentValue);
                if (isPercentage) {
                    displayValue = displayValue + '%';
                } else if (isCurrency) {
                    displayValue = '€' + displayValue + 'M+';
                } else if (isPlus) {
                    displayValue = '+' + displayValue + '+';
                }
                
                statNumber.textContent = displayValue;
            }, 30);
            
            statsObserver.unobserve(statNumber);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    statsObserver.observe(stat);
});

// Testimonials carousel auto-scroll
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const carouselContainer = document.querySelector('.testimonials-carousel');

if (testimonialCards.length > 0 && window.innerWidth > 768) {
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        
        testimonialCards.forEach((card, index) => {
            card.style.transform = `translateX(${(index - currentTestimonial) * 100}%)`;
            card.style.transition = 'transform 0.5s ease';
        });
    }, 5000);
}

// Button hover effects
document.querySelectorAll('.cta-button, .plan-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Card hover effects with parallax
document.querySelectorAll('.testimonial-card, .process-card, .feature-card, .pricing-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero, .dashboard-mockup');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add loading states to buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        if (this.classList.contains('cta-button') || this.classList.contains('plan-button')) {
            const originalText = this.textContent;
            this.textContent = 'Wird geladen...';
            this.disabled = true;
            
            // Simulate loading (replace with actual form submission)
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});

// Keyboard navigation for FAQ
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        const activeElement = document.activeElement;
        if (activeElement.classList.contains('faq-question')) {
            e.preventDefault();
            activeElement.click();
        }
    }
});

// Accessibility improvements
document.querySelectorAll('.nav-link, .cta-button, .plan-button, .faq-question').forEach(element => {
    element.setAttribute('tabindex', '0');
});

// Add focus styles
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid var(--primary-color)';
        this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});

// Preload critical images
const criticalImages = [
    // Add any critical image URLs here
];

criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
