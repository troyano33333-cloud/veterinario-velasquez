/**
 * main.js — Punto de entrada principal (ES Module)
 * Importa todos los módulos e inicializa la aplicación.
 *
 * NOTA: Requiere un servidor local para ES Modules.
 * Usa la extensión "Live Server" de VS Code (clic derecho → Open with Live Server).
 */

import { initPaws }         from './particles.js';
import { initNavbar }       from './navbar.js';
import { initReveal }       from './reveal.js';
import { initMap }          from './map.js';
import { initSlider }       from './slider.js';
import { initModal }        from './modal.js';
import { initContactForm }  from './form.js';
import { initCounters }     from './counters.js';
import { initCaseModal }    from './caseModal.js';

document.addEventListener('DOMContentLoaded', () => {
  initPaws();
  initNavbar();
  initReveal();
  initMap();
  initSlider();
  initModal();
  initContactForm();
  initCounters();
  initCaseModal();

  // Smooth scroll con offset de navbar (75px)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
});
