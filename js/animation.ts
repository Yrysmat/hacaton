document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'stage'
    const stageElements = document.querySelectorAll('.stages-div');

    // Create a new Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
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
    stageElements.forEach(stage => {
        observer.observe(stage);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const conditionCards = document.querySelectorAll('.conditions__card');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate');
          }, 100);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
  
    conditionCards.forEach(card => {
      observer.observe(card);
    });
  });
  window.addEventListener('scroll', function(): void {
    const navbar: HTMLElement | null = document.getElementById('header');
    const links: NodeListOf<HTMLElement> = document.querySelectorAll('.header__link');
    const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the navbar element was found before using it
    if (scrollTop > 100) {
        navbar?.classList.add('scrolled');
        links.forEach(link => {
            link.classList.add('scrolled');
        });
    } else {
        navbar?.classList.remove('scrolled');
        links.forEach(link => {
            link.classList.remove('scrolled');
        });
    }
});

let root = document.querySelector(":root")
let btn = document.querySelector("header__btn")

btn?.addEventListener('click',()=>{
  event?.preventDefault();
  root?.classList.toggle('dark');
})
