document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-animate");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => observer.observe(el));
});


document.addEventListener("DOMContentLoaded", function () {
  const whyHeedSection = document.querySelector(".why-heed-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  observer.observe(whyHeedSection);
});

// List of background images
const images = [
    "/images/Background Image.png",
    "/images/bkgd1.jpg",
    "/images/bkgd2.jpg",
    "/images/bkgd4.jpg"
];

let currentIndex = 0;
const heroBg = document.querySelector('.hero-bg');
const heroBgNext = document.querySelector('.hero-bg-next');

function changeBackground() {
    // Set the next image
    heroBgNext.style.backgroundImage = `url('${images[currentIndex]}')`;
    heroBgNext.style.opacity = 1;

    // After fade-in, swap images
    setTimeout(() => {
        heroBg.style.backgroundImage = `url('${images[currentIndex]}')`;
        heroBgNext.style.opacity = 0;
    }, 1500); // match fade duration

    currentIndex = (currentIndex + 1) % images.length;
}

// Set the initial image
heroBg.style.backgroundImage = `url('${images[0]}')`;

// Change every 5 seconds
setInterval(changeBackground, 4000);