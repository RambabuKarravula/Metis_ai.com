// Debounce function to limit the rate at which a function can fire
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this, args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle fade-in animation
function handleFadeIn() {
    const featureBoxes = document.querySelectorAll('.fade-feature');
    featureBoxes.forEach((box, index) => {
        if (isInViewport(box) && !box.classList.contains('faded-in')) {
            box.style.opacity = 1;
            box.style.animation = `fadeIn 1s ease forwards ${index * 0.5}s`;
            box.classList.add('faded-in');
        }
    });
}

// Add event listeners
window.addEventListener('scroll', debounce(handleFadeIn));
window.addEventListener('resize', debounce(handleFadeIn));
window.addEventListener('orientationchange', debounce(handleFadeIn));

// Initial call to handle elements that are already in view on page load
document.addEventListener('DOMContentLoaded', handleFadeIn);
