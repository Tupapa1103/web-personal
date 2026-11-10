// Menú móvil
const menuBtn = document.getElementById('mobile-menu');
const nav = document.getElementById('main-nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Animación al hacer scroll (también llena las barras de habilidades)
const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

items.forEach(item => observer.observe(item));