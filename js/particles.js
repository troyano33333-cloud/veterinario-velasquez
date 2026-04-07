/**
 * particles.js — Huellas animadas de fondo
 * Genera partículas de huellas que caen desde arriba con CSS animation.
 */

export function initPaws() {
  const container = document.getElementById('pawsContainer');
  if (!container) return;

  // Defer creation until after page load to avoid blocking LCP
  const create = () => {
    const COUNT = 18;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < COUNT; i++) {
      const paw = document.createElement('div');
      paw.className = 'paw-particle';
      paw.textContent = '🐾';
      paw.style.cssText = `
        left: ${Math.random() * 100}%;
        font-size: ${12 + Math.random() * 16}px;
        animation-duration: ${10 + Math.random() * 12}s;
        animation-delay: ${Math.random() * 20}s;
        opacity: 0;
      `;
      frag.appendChild(paw);
    }
    container.appendChild(frag);
  };

  if (document.readyState === 'complete') {
    requestIdleCallback ? requestIdleCallback(create) : setTimeout(create, 200);
  } else {
    window.addEventListener('load', () => {
      requestIdleCallback ? requestIdleCallback(create) : setTimeout(create, 200);
    });
  }
}
