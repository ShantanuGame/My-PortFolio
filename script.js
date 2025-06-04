let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');  // Added header, was missing

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

function initSlider(sliderId, slideWidth) {
  let currentIndex = 0;
  const slider = document.getElementById(sliderId);
  const totalSlides = slider.children.length;

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Auto slide every 2 seconds
  setInterval(() => {
    moveSlide(1);
  }, 2000);

  // Uncomment below to add manual navigation buttons
  // document.querySelector(`#${sliderId}-prev`).onclick = () => moveSlide(-1);
  // document.querySelector(`#${sliderId}-next`).onclick = () => moveSlide(1);
}

// Initialize sliders
initSlider("slidess", 900);

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

  // Close navbar on scroll
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

/* slider certificate */
 const track = document.getElementById("sliderTrack");
  const slides = Array.from(track.children);
  const slideWidth = slides[0].offsetWidth + 10; // includes margin-right
  let currentIndex = 0;

  // Duplicate slides for infinite effect
  slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    track.appendChild(clone);
  });

  function updateSlidePosition() {
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
      track.style.transition = "none";
      updateSlidePosition();
      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        currentIndex++;
        updateSlidePosition();
      });
    } else {
      updateSlidePosition();
    }
  }

  function prevSlide() {
    if (currentIndex <= 0) {
      currentIndex = slides.length;
      track.style.transition = "none";
      updateSlidePosition();
      requestAnimationFrame(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        currentIndex--;
        updateSlidePosition();
      });
    } else {
      currentIndex--;
      updateSlidePosition();
    }
  }

  document.getElementById("nextBtn").addEventListener("click", nextSlide);
  document.getElementById("prevBtn").addEventListener("click", prevSlide);

  // Auto scroll every 3 seconds
  setInterval(nextSlide, 3000);


// ScrollReveal initialization
ScrollReveal({ 
  // reset: true,  // Uncomment if you want animation to reset on scroll up
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content , .about2', { origin: 'top' });
ScrollReveal().reveal('.home-img, .card-container, .about3, .portfolio-box, .contact form , .work-experience , .education , .heading ,.certificates', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img , .awards', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .headingre , .contact-section, .about-content', { origin: 'right' });

// Typed.js initialization
const typed = new Typed('.multiple-text', {
  strings: ['Full Stack Web Dev.', 'System Admin', 'ML Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
