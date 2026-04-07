/**
 * slider.js — Carrusel de testimonios
 * Slider automático con controles prev/next y dots indicadores.
 */

export function initSlider() {
  const track   = document.getElementById('testimonialsTrack');
  const dotsEl  = document.getElementById('sliderDots');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (!track) return;

  const cards = track.querySelectorAll('.testimonial-card');
  if (cards.length === 0) return;

  let current   = 0;
  let autoTimer = null;

  function getVisible() {
    return 1;
  }

  function totalSlides() {
    return cards.length;
  }

  function buildDots() {
    dotsEl.innerHTML = '';
    for (let i = 0; i < totalSlides(); i++) {
      const dot = document.createElement('span');
      dot.className = 'dot' + (i === current ? ' active' : '');
      dot.addEventListener('click', () => goTo(i));
      dotsEl.appendChild(dot);
    }
  }

  function goTo(index) {
    const max  = totalSlides() - 1;
    current    = Math.max(0, Math.min(index, max));
    const cardW = cards[0].offsetWidth;
    track.style.transform = `translateX(-${current * cardW}px)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  function autoplay() {
    autoTimer = setInterval(() => {
      current = (current + 1) >= totalSlides() ? 0 : current + 1;
      goTo(current);
    }, 4000);
  }

  function resetTimer() {
    clearInterval(autoTimer);
    autoplay();
  }

  prevBtn?.addEventListener('click', () => { goTo(current - 1); resetTimer(); });
  nextBtn?.addEventListener('click', () => { goTo(current + 1); resetTimer(); });

  window.addEventListener('resize', () => {
    buildDots();
    goTo(0);
  });

  buildDots();
  autoplay();
}
