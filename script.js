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

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;
let isScrolling = false;

// Function to handle navbar visibility
function handleNavbarVisibility() {
    const currentScroll = window.pageYOffset;
    
    // Always show navbar at the top of the page
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-down');
        navbar.classList.remove('scroll-up');
        return;
    }
    
    // Add a small threshold to prevent flickering
    if (Math.abs(currentScroll - lastScroll) < 5) {
        return;
    }
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else {
        // Scrolling up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
}

// Throttle scroll events for better performance
window.addEventListener('scroll', () => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleNavbarVisibility();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

// Ensure navbar is visible on page load
document.addEventListener('DOMContentLoaded', () => {
    handleNavbarVisibility();
});

// Intersection Observer for sections
const sectionObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, sectionObserverOptions);

document.querySelectorAll('section').forEach(section => {
    sectionObserver.observe(section);
});

// Research cards animation
const cardObserverOptions = {
    threshold: 0.2,
    rootMargin: '0px'
};

const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Add staggered animation delay
            const cards = document.querySelectorAll('.research-card');
            cards.forEach((card, index) => {
                card.style.transitionDelay = `${index * 0.1}s`;
            });
        }
    });
}, cardObserverOptions);

document.querySelectorAll('.research-card').forEach(card => {
    cardObserver.observe(card);
});

// Add hover effect to research cards
document.querySelectorAll('.research-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
}); 