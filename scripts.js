// JavaScript to enable smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('scroll', function() {
    const featureBoxes = document.querySelectorAll('.fade-feature');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    featureBoxes.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top + scrollTop;
        if (scrollTop + window.innerHeight > boxTop) {
            box.style.opacity = 1;
            box.style.animation = `fadeIn 1s ease forwards ${index * 0.5}s`;
        }
    });
});