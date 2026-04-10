// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.toggle('active');
}

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if(navLinks && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Tab Logic for Government Responses
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    const tablinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    const targetTab = document.getElementById(tabName);
    if (targetTab) targetTab.style.display = "block";
    if (evt && evt.currentTarget) evt.currentTarget.className += " active";
}

// Initialize elements safely when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // Initialize first tab ONLY if tabs exist on the current page
    const firstTabBtn = document.querySelector(".tab-btn");
    if (firstTabBtn) {
        firstTabBtn.click();
    }

    // Intersection Observer for scroll-triggered fade-in animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.05 // Lowered threshold to easily trigger on tall elements
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => {
        observer.observe(el);
    });

    // Failsafe: Force show all text after 1 second if the observer fails
    setTimeout(() => {
        fadeElements.forEach((el) => {
            if (!el.classList.contains('visible')) {
                el.classList.add('visible');
            }
        });
    }, 1000);
});