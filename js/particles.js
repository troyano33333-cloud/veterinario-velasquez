/**
 * particles.js — Huellas animadas de fondo
 * Genera partículas de huellas que caen desde arriba con CSS animation.
 */

export function initPaws() {
  const container = document.getElementById('pawsContainer');
  if (!container) return;

  const COUNT = 40;

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
    container.appendChild(paw);
  }
}
