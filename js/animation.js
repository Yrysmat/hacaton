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
const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.header__link');

    // Toggle burger menu
    burgerBtn.addEventListener('click', () => {
      burgerBtn.classList.toggle('header__burger--active');
      navMenu.classList.toggle('header__nav--active');
      document.body.style.overflow = navMenu.classList.contains('header__nav--active') ? 'hidden' : '';
    });

    // Close menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerBtn.classList.remove('header__burger--active');
        navMenu.classList.remove('header__nav--active');
        document.body.style.overflow = '';
      });
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!header.contains(e.target) && navMenu.classList.contains('header__nav--active')) {
        burgerBtn.classList.remove('header__burger--active');
        navMenu.classList.remove('header__nav--active');
        document.body.style.overflow = '';
      }
    });
    