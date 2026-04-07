/**
 * counters.js — Animación de contadores en el Hero
 * Anima los números de estadísticas con efecto easing suave.
 */

export function initCounters() {
  const statNums = document.querySelectorAll('.stat-num');
  if (statNums.length < 2) return;

  let animated = false;

  function animateValue(el, end, duration) {
    const step = (timestamp, startTime) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * end);
      if (progress < 1) requestAnimationFrame(ts => step(ts, startTime));
    };
    requestAnimationFrame(ts => step(ts, ts));
  }

  const hero = document.querySelector('.hero');
  if (!hero) return;

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      // '+500 mascotas'  → animar a 500, agregar '+' y '' después
      statNums[0].textContent = '+0';
      animateValue({ set textContent(v) { statNums[0].textContent = '+' + v; } }, 500, 1600);
      animateValue(statNums[1], 14, 1200);
      // El tercer stat (100%) es estático, no se anima
    }
  }, { threshold: 0.5 });

  observer.observe(hero);
}
