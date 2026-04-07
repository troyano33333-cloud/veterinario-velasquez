/**
 * reveal.js — Animaciones de entrada al hacer scroll
 * Usa IntersectionObserver para añadir .visible cuando un elemento entra en viewport.
 */

export function initReveal() {
  // Asignar clases de reveal con delays escalonados
  document.querySelectorAll('.service-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.07}s`;
  });

  document.querySelectorAll('.case-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.08}s`;
  });

  document.querySelectorAll('.value-item').forEach((el, i) => {
    el.classList.add('reveal-left');
    el.style.transitionDelay = `${i * 0.15}s`;
  });

  document.querySelectorAll('.contact-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.1}s`;
  });

  document.querySelectorAll('.zone-item').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = `${i * 0.06}s`;
  });

  document.querySelectorAll('.section-header').forEach(el => el.classList.add('reveal'));

  document.querySelector('.about-image-wrap')?.classList.add('reveal-left');
  document.querySelector('.about-content')?.classList.add('reveal-right');
  document.querySelector('.coverage-info')?.classList.add('reveal-left');
  document.querySelector('.map-container')?.classList.add('reveal-right');
  document.querySelector('.contact-info')?.classList.add('reveal-left');
  document.querySelector('.contact-form')?.classList.add('reveal-right');

  // Observer que activa .visible al entrar en viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
    observer.observe(el);
  });
}
