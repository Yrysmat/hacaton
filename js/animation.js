document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'stage'
    let stageElements = document.querySelectorAll('.stages-div');
    // Create a new Intersection Observer
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            // Check if the current element is intersecting the viewport
            if (entry.isIntersecting) {
                // Add the 'animate' class to trigger the CSS transition
                entry.target.classList.add('animate');
                // Stop observing the element after the animation has been triggered
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Optional: Trigger the callback when 10% of the element is visible
        threshold: 0.1
    });
    // Start observing each stage element
    stageElements.forEach(function (stage) {
        observer.observe(stage);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    let conditionCards = document.querySelectorAll('.conditions__card');
    let observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                setTimeout(function () {
                    entry.target.classList.add('animate');
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    conditionCards.forEach(function (card) {
        observer.observe(card);
    });
});
window.addEventListener('scroll', function () {
    let  navbar = document.getElementById('header');
    let  links = document.querySelectorAll('.header__link');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Check if the navbar element was found before using it
    if (scrollTop > 100) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add('scrolled');
        links.forEach(function (link) {
            link.classList.add('scrolled');
        });
    }
    else {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove('scrolled');
        links.forEach(function (link) {
            link.classList.remove('scrolled');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const themeBtn = document.querySelector('.header__btn');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // Устанавливаем начальную тему
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    themeBtn.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
});

    // Burger menu functionality
const burgerBtn = document.querySelector('.header__burger');
const navMenu = document.querySelector('.header__nav');
const body = document.body;

// Create overlay element
const overlay = document.createElement('div');
overlay.className = 'header__overlay';
body.appendChild(overlay);

// Toggle burger menu
burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('header__burger--active');
    navMenu.classList.toggle('header__nav--active');
    overlay.classList.toggle('header__overlay--active');
    body.style.overflow = navMenu.classList.contains('header__nav--active') ? 'hidden' : '';
});

// Close menu when clicking on links
const navLinks = document.querySelectorAll('.header__link, .header__links');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('header__burger--active');
        navMenu.classList.remove('header__nav--active');
        overlay.classList.remove('header__overlay--active');
        body.style.overflow = '';
    });
});

// Close menu when clicking overlay
overlay.addEventListener('click', () => {
    burgerBtn.classList.remove('header__burger--active');
    navMenu.classList.remove('header__nav--active');
    overlay.classList.remove('header__overlay--active');
    body.style.overflow = '';
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});