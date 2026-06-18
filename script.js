// Loading Screen
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});



// Image Slider
class Slider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.totalSlides = this.slides.length;
        this.autoSlideInterval = null;
        
        this.createNavigation();
        this.setupEventListeners();
        this.startAutoSlide();
    }

    createNavigation() {
        const sliderNav = document.getElementById('sliderNav');
        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(i));
            sliderNav.appendChild(dot);
        }
    }

    setupEventListeners() {
        const prevBtn = document.getElementById('prevSlide');
        const nextBtn = document.getElementById('nextSlide');
        
        prevBtn.addEventListener('click', () => this.prevSlide());
        nextBtn.addEventListener('click', () => this.nextSlide());

        // Pause auto slide on hover
        const slider = document.querySelector('.slider');
        slider.addEventListener('mouseenter', () => this.stopAutoSlide());
        slider.addEventListener('mouseleave', () => this.startAutoSlide());
    }

    goToSlide(index) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide].classList.remove('active');
        document.querySelectorAll('.slider-dot')[this.currentSlide].classList.remove('active');
        
        // Update current slide
        this.currentSlide = index;
        
        // Add active class to new slide and dot
        this.slides[this.currentSlide].classList.add('active');
        document.querySelectorAll('.slider-dot')[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 4000);
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }
}

// Initialize slider when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new Slider();
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// News card click animation
document.querySelectorAll('.news-card').forEach(card => {
    card.addEventListener('click', function() {
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Announcement hover effects
document.querySelectorAll('.announcements li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '8px';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '4px';
    });
});



// Smooth scroll for navigation links
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

// Add ripple effect to buttons and cards
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
}

// Apply ripple effect to clickable elements
document.addEventListener('DOMContentLoaded', function() {
    const clickableElements = document.querySelectorAll('.news-card, .about-card, .announcements li');
    clickableElements.forEach(el => {
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.addEventListener('click', createRipple);
    });
});

// Initialize dynamic greeting
updateGreeting();

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Weather widget (simulated)
function addWeatherWidget() {
    const weather = document.createElement('div');
    weather.style.cssText = `
        position: fixed;
        top: 120px;
        right: 20px;
        background: rgba(255, 255, 255, 0.95);
        padding: 15px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        backdrop-filter: blur(10px);
        font-size: 14px;
        z-index: 50;
        transition: all 0.3s ease;
    `;
    
    weather.innerHTML = `
        <div style="text-align: center;">
            <i class="fas fa-cloud-sun" style="color: #52b788; font-size: 20px;"></i>
            <div style="margin: 5px 0; font-weight: bold; color: #1b4332;">Samsun</div>
            <div style="color: #2d5016;">22°C</div>
            <div style="font-size: 12px; color: #40916c;">Parçalı Bulutlu</div>
        </div>
    `;
    
    weather.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    weather.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    document.body.appendChild(weather);
}

// Add weather widget after page load
setTimeout(addWeatherWidget, 2000);

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    const slider = document.querySelector('.slider');
    if (!slider) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            document.getElementById('prevSlide').click();
            break;
        case 'ArrowRight':
            document.getElementById('nextSlide').click();
            break;
        case 'Escape':
            // Close mobile menu if open
            navMenu.classList.remove('active');
            break;
    }
});

// Add accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels
    const sliderArrows = document.querySelectorAll('.slider-arrow');
    sliderArrows.forEach((arrow, index) => {
        arrow.setAttribute('aria-label', index === 0 ? 'Önceki slayt' : 'Sonraki slayt');
    });

    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, [tabindex]');
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--success-color)';
            this.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Performance optimization - Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    // Apply to images that need lazy loading
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}