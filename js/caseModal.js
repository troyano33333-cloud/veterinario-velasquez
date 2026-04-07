/**
 * caseModal.js — Modal de casos de éxito
 */

const CASOS = {
  cooper: {
    color:   '#E65100',
    nombre:  'Cooper 🐾',
    badge:   'Urgencias · Cardiología',
    img:     'assets/images/casos/cooper.webp',
    video:   'assets/images/casos/cooper video.mp4',
    result:  'Estabilización hemodinámica exitosa',
    resultIcon: 'fas fa-heart-pulse',
    desc:    'Paciente remitido por episodio agudo de colapso posterior a vómito, con dificultad respiratoria marcada y deterioro hemodinámico severo. Al examen físico presentaba mucosas pálidas, tiempo de llenado capilar prolongado, pulso femoral débil e irregular, taquicardia sinusal y ruidos cardíacos apagados compatibles con derrame pericárdico. Se realizó electrocardiograma a domicilio que evidenció alteraciones del ritmo y cambios en la morfología del complejo QRS compatibles con compromiso miocárdico agudo. Se instauró manejo de soporte inmediato con fluidoterapia controlada, oxigenoterapia y monitoreo continuo de parámetros vitales. Cooper respondió favorablemente al tratamiento en su entorno habitual, evitando el estrés del traslado en un momento crítico para su estabilidad cardiovascular.',
    hechos: [
      { icon: 'fas fa-map-marker-alt', texto: 'Atención 100% a domicilio — sin traslado en crisis' },
      { icon: 'fas fa-heartbeat',      texto: 'ECG realizado in situ: alteraciones del ritmo detectadas' },
      { icon: 'fas fa-tint',           texto: 'Fluidoterapia IV controlada y oxigenoterapia de soporte' },
      { icon: 'fas fa-check-circle',   texto: 'Estabilización hemodinámica en menos de 2 horas' },
    ],
  },
  tokio: {
    color:   '#29B6F6',
    nombre:  'Tokio �',
    badge:   'Oftalmología',
    img:     'assets/images/casos/tokio.webp',
    result:  'Visión recuperada',
    resultIcon: 'fas fa-eye',
    desc:    'Tokio fue evaluada por presentar ojo derecho entornado, epifora marcada, fotofobia y froté ocular persistente de 2 días de evolución. A la exploración oftalmólógica con test de fluoresceína se confirmó úlcera corneal superficial en el cuadrante central anterior, sin perforación ni compromiso del estroma profundo. Se instauró tratamiento con colirio antibiótico de amplio espectro (tobramicina), lubricante ocular libre de conservantes y anti-inflamatorio sistémico oral. Se prohibió el uso de cóllar isabelino durante el reposo en casa y se programó revisión en 48 horas. En el segundo control el test de fluoresceína fue negativo, con epitelio corneal íntegro y ojo cómodo. Tokio completó el tratamiento sin complicaciones y sin ingresar a una clínica.',
    hechos: [
      { icon: 'fas fa-eye',             texto: 'Test de fluoresceína positivo — úlcera corneal superficial central' },
      { icon: 'fas fa-eye-dropper',     texto: 'Tobramicina + lubricante ocular sin conservantes cada 6 h' },
      { icon: 'fas fa-pills',           texto: 'Antiinflamatorio sistémico oral por 5 días' },
      { icon: 'fas fa-check-circle',    texto: 'Epitelio corneal íntegro a las 48 horas — sin hospitalización' },
    ],
  },
  mia: {
    color:      '#E91E8C',
    nombre:     'Mia �',
    badge:      'Oncología',
    img:        'assets/images/casos/mia.webp',
    video:      'assets/images/casos/mia.mp4',
    result:     'Calidad de vida preservada',
    resultIcon: 'fas fa-ribbon',
    desc:       'Mia fue presentada por pérdida de peso progresiva de 6 semanas, linfoadenopatía generalizada palpable, anorexia intermitente y decaimiento marcado. A la exploración física se evidenciaron múltiples nódulos linfáticos aumentados de tamaño en regiones submandibular, axilar e inguinal, con consistencia firme y no dolorosos. Se realizó punción aspirativa con aguja fina (PAAF) de ganglio axilar en domicilio, con resultado citológico compatible con linfoma de células grandes. Tras la confirmación diagnóstica se orientó al propietario sobre el protocolo de quimioterapia oral (clorambucilo + prednisolona), el cual fue administrado en casa bajo supervisión médica. Mia respondió favorablemente al tratamiento, manteniendo buena calidad de vida durante el proceso.',
    hechos: [
      { icon: 'fas fa-microscope',   texto: 'PAAF ganglionar en domicilio — linfoma de células grandes confirmado' },
      { icon: 'fas fa-pills',        texto: 'Quimioterapia oral: clorambucilo + prednisolona administrados en casa' },
      { icon: 'fas fa-heart',        texto: 'Seguimiento mensual con evaluación de nódulos y estado general' },
      { icon: 'fas fa-check-circle', texto: 'Buena calidad de vida mantenida durante el tratamiento' },
    ],
  },
};

const WA_NUMBER = '573002104847';

export function initCaseModal() {
  const overlay   = document.getElementById('caseModalOverlay');
  const img       = document.getElementById('caseModalImg');
  const badge     = document.getElementById('caseModalBadge');
  const name      = document.getElementById('caseModalName');
  const result    = document.getElementById('caseModalResult');
  const full      = document.getElementById('caseModalFull');
  const facts     = document.getElementById('caseModalFacts');
  const wa        = document.getElementById('caseModalWa');
  const closeBtn  = document.getElementById('caseModalClose');
  const box       = document.getElementById('caseModalBox');
  const imgWrap   = document.querySelector('.case-modal-img-wrap');
  const track     = document.getElementById('cmSliderTrack');
  const arrowPrev = document.getElementById('cmArrowPrev');
  const arrowNext = document.getElementById('cmArrowNext');
  const dotsEl    = document.getElementById('cmDots');
  const video     = document.getElementById('caseModalVideo');

  if (!overlay) return;

  let slide  = 0;
  let slides = 1;
  const dotItems = dotsEl ? [...dotsEl.querySelectorAll('.cm-dot')] : [];

  function goToSlide(idx) {
    idx = Math.max(0, Math.min(idx, slides - 1));
    slide = idx;
    track.style.transform = `translateX(-${slide * 100}%)`;
    dotItems.forEach((d, i) => d.classList.toggle('active', i === slide));
    arrowPrev.classList.toggle('cm-hidden', slide === 0);
    arrowNext.classList.toggle('cm-hidden', slide >= slides - 1);
    if (slide === 1 && video.src) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }

  function openCase(id) {
    const c = CASOS[id];
    if (!c) return;

    slide = 0;
    track.style.transform = 'translateX(0)';

    box.style.setProperty('--cm-color', c.color);
    img.src = c.img || '';
    img.alt = c.nombre;
    badge.textContent = c.badge;
    badge.style.background = c.color;
    name.textContent = c.nombre;
    result.innerHTML = `<i class="${c.resultIcon}"></i> ${c.result}`;
    result.style.setProperty('--cm-color', c.color);
    full.textContent = c.desc;

    facts.innerHTML = c.hechos.map(h =>
      `<div class="case-modal-fact"><i class="${h.icon}"></i><span>${h.texto}</span></div>`
    ).join('');

    const msg = encodeURIComponent(`Hola Dr. Germán, vi el caso de ${c.nombre.replace(/[^\w\s,]/g,'')} en su página y me gustaría agendar una consulta para mi mascota.`);
    wa.href = `https://wa.me/${WA_NUMBER}?text=${msg}`;

    if (c.video && c.img) {
      // Foto + video: dos slides
      slides = 2;
      video.src = c.video;
      video.load();
      dotsEl.classList.remove('cm-hidden');
      arrowNext.classList.remove('cm-hidden');
      arrowPrev.classList.add('cm-hidden');
      dotItems.forEach((d, i) => d.classList.toggle('active', i === 0));
    } else if (c.video && !c.img) {
      // Solo video: saltar directo al slide del video
      slides = 2;
      video.src = c.video;
      video.load();
      slide = 1;
      track.style.transform = 'translateX(-100%)';
      dotsEl.classList.add('cm-hidden');
      arrowPrev.classList.add('cm-hidden');
      arrowNext.classList.add('cm-hidden');
      video.play().catch(() => {});
    } else {
      slides = 1;
      video.src = '';
      dotsEl.classList.add('cm-hidden');
      arrowNext.classList.add('cm-hidden');
      arrowPrev.classList.add('cm-hidden');
    }

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCase() {
    video.pause();
    video.currentTime = 0;
    slide = 0;
    track.style.transform = 'translateX(0)';
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  arrowPrev.addEventListener('click', () => goToSlide(slide - 1));
  arrowNext.addEventListener('click', () => goToSlide(slide + 1));
  dotsEl.addEventListener('click', e => {
    const dot = e.target.closest('.cm-dot');
    if (dot) goToSlide(dotItems.indexOf(dot));
  });

  // Swipe táctil
  let tx = 0;
  imgWrap.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
  imgWrap.addEventListener('touchend',   e => {
    const diff = tx - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) goToSlide(slide + (diff > 0 ? 1 : -1));
  }, { passive: true });

  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-case]');
    if (btn && !overlay.contains(btn)) openCase(btn.dataset.case);
  });

  closeBtn.addEventListener('click', closeCase);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeCase(); });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     closeCase();
    if (e.key === 'ArrowLeft')  goToSlide(slide - 1);
    if (e.key === 'ArrowRight') goToSlide(slide + 1);
  });
}
