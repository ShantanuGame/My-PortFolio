let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');


 document.addEventListener("DOMContentLoaded", () => {
    const introText = document.querySelector(".intro-text");
    const message = "Engineer of cool things you’ll remember."; // 👉 your intro text
    let index = 0;

    function type() {
      if (index < message.length) {
        introText.textContent += message.charAt(index);
        index++;
        setTimeout(type, 100); // typing speed
      } else {
        // After finished typing, fade out after delay
        setTimeout(() => {
          document.getElementById("intro-loader").classList.add("fade-out");
        }, 1000); // wait 1s then fade
      }
    }

    type();
  });

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// ⭐ Removed hardcoded 900px and made it dynamic
function initSlider(sliderId) {
  let currentIndex = 0;
  const slider = document.getElementById(sliderId);
  const totalSlides = slider.children.length;

  function getSlideWidth() {
    return slider.parentElement.offsetWidth;
  }

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
  }

  // Auto slide every 2 seconds
  setInterval(() => {
    moveSlide(1);
  }, 2000);

  // Recalculate on resize
  window.addEventListener('resize', () => {
    slider.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
  });
}

// ✅ dynamic width for awards slider
initSlider("slidess");

// ===== Active link on scroll =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach(sec => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => link.classList.remove('active'));
      let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });

  header.classList.toggle('sticky', window.scrollY > 100);

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// ===== CERTIFICATE SLIDER =====
(function () {
  const track = document.getElementById("sliderTrack");
  const slides = Array.from(track.children);
  let currentIndex = 0;

  function getSlideWidth() {
    return track.parentElement.offsetWidth;
  }

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * getSlideWidth()}px)`;
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) currentIndex = 0;
    updateSlidePosition();
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    updateSlidePosition();
  }

  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", prevSlide);

  setInterval(nextSlide, 3000);

  window.addEventListener('resize', updateSlidePosition);
})();

// ===== AWARDS SLIDER =====
(function () {
  const track2 = document.getElementById("slidess");
  const slides2 = Array.from(track2.children);
  let currentIndex2 = 0;

  function getSlideWidth2() {
    return track2.parentElement.offsetWidth;
  }

  function updateSlidePosition2() {
    track2.style.transform = `translateX(-${currentIndex2 * getSlideWidth2()}px)`;
  }

  function nextSlide2() {
    currentIndex2++;
    if (currentIndex2 >= slides2.length) currentIndex2 = 0;
    updateSlidePosition2();
  }

  function prevSlide2() {
    currentIndex2--;
    if (currentIndex2 < 0) currentIndex2 = slides2.length - 1;
    updateSlidePosition2();
  }

  document.querySelector(".navs button:nth-child(2)").addEventListener("click", nextSlide2);
  document.querySelector(".navs button:nth-child(1)").addEventListener("click", prevSlide2);

  setInterval(nextSlide2, 3000);

  window.addEventListener('resize', updateSlidePosition2);
})();

// ===== ScrollReveal =====
if (window.innerWidth > 768) {
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content , .about2', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .card-container, .about3, .portfolio-box, .contact form , .work-experience , .education , .heading ,.certificates', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img , .awards', { origin: 'left' });
  ScrollReveal().reveal('.home-content p, .headingre , .contact-section, .about-content', { origin: 'right' });
}
// ===== Typed.js =====
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Web Dev.', 'System Admin', 'ML Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
