/**
 * navbar.js — Navbar scroll, toggle móvil y enlace activo
 */

export function initNavbar() {
  const navbar    = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navMenu   = document.getElementById('navMenu');
  const navLinks  = document.querySelectorAll('.nav-link');
  const sections  = document.querySelectorAll('section[id]');

  if (!navbar) return;

  // Clase .scrolled al hacer scroll
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Toggle del menú móvil
  navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    navToggle.innerHTML = navMenu.classList.contains('open')
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });

  // Cerrar menú al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.innerHTML = '<i class="fas fa-bars"></i>';
    });
  });

  // Enlace activo según sección visible
  function updateActiveLink() {
    const scrollY = window.scrollY + 100;

    // Busca la última sección cuyo top ya pasamos
    let current = sections[0]?.getAttribute('id') ?? '';
    sections.forEach(section => {
      if (section.offsetTop <= scrollY) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-link:not(.nav-cta)').forEach(link => {
      const href = link.getAttribute('href');
      link.classList.toggle('active', href === `#${current}`);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  // También al cargar, para marcar la sección inicial
  updateActiveLink();
}
