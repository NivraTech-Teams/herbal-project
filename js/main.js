document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Sticky Navigation on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains('active');
            
            // Close all other FAQs
            faqQuestions.forEach(q => {
                if (q !== question) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('show');
                }
            });
            
            // Toggle current FAQ
            question.classList.toggle('active');
            answer.classList.toggle('show');
        });
    });

    // Testimonial Slider
    const testimonialSlides = document.querySelectorAll('.testimonial-slide');
    const testimonialNav = document.querySelector('.testimonial-nav');
    let currentSlide = 0;
    
    // Create navigation dots
    testimonialSlides.forEach((slide, index) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => goToSlide(index));
        testimonialNav.appendChild(dot);
    });
    
    // Set first dot as active
    testimonialNav.children[0].classList.add('active');
    
    function goToSlide(index) {
        testimonialSlides[currentSlide].style.display = 'none';
        testimonialNav.children[currentSlide].classList.remove('active');
        
        currentSlide = (index + testimonialSlides.length) % testimonialSlides.length;
        
        testimonialSlides[currentSlide].style.display = 'block';
        testimonialNav.children[currentSlide].classList.add('active');
    }
    
    // Initialize slider
    testimonialSlides.forEach((slide, index) => {
        if (index !== 0) slide.style.display = 'none';
    });
    
    // Auto-rotate testimonials
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

    // How It Works Animation
    const animationContainer = document.querySelector('.animation-container');
    const kitchenScene = document.querySelector('.kitchen-scene');
    
    if (animationContainer) {
        // Trigger animations when section is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Apply product drops
                    kitchenScene.classList.add('apply-animation');
                    
                    // After delay, make roaches escape
                    setTimeout(() => {
                        kitchenScene.classList.add('roach-escape');
                    }, 2000);
                } else {
                    // Reset animations when out of view
                    kitchenScene.classList.remove('apply-animation', 'roach-escape');
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(animationContainer);
    }

    // Service Area Pin Hover Effects
    const pins = document.querySelectorAll('.pin');
    pins.forEach(pin => {
        pin.addEventListener('mouseenter', () => {
            pin.style.transform = 'translate(-50%, -50%) scale(1.3)';
            pin.nextElementSibling.style.opacity = '1';
            pin.nextElementSibling.style.top = '-35px';
        });
        
        pin.addEventListener('mouseleave', () => {
            pin.style.transform = 'translate(-50%, -50%)';
            pin.nextElementSibling.style.opacity = '0';
            pin.nextElementSibling.style.top = '-40px';
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});