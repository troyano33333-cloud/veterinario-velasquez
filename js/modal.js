/**
 * modal.js — Sistema de modal de servicios
 * Un único modal reutilizable que se rellena dinámicamente.
 * Los botones usan data-service="id" para activar el modal correcto.
 */

const SERVICIOS = {
  vacunacion: {
    color:  '#FF8C42',
    emoji:  '💉',
    titulo: 'Vacunación',
    desc:   'Voy hasta tu casa con todo el equipo listo. Tu mascota no tiene que salir ni estresarse. Yo me encargo de todo: aplico la vacuna, registro en el carné y te explico el siguiente esquema.',
    puntos: [
      'Vacunas para perros y gatos',
      'Carné de vacunación incluido y actualizado',
      'Te recuerdo cuándo es la próxima dosis',
      'Sin colas, sin estrés, desde la comodidad de tu hogar',
    ],
    precio: '$130.000 – Domicilio y revisión incluidos',
  },
  consulta: {
    color:  '#4DB6AC',
    emoji:  '🩺',
    titulo: 'Consulta General',
    desc:   'Llego a tu casa con maletín médico completo. Reviso a tu animalito de pies a cabeza: temperatura, corazón, pulmones, piel, ojos, oídos y más. Te entrego un diagnóstico claro y un plan de tratamiento.',
    puntos: [
      'Examen físico completo en casa',
      'Diagnóstico detallado y por escrito',
      'Prescripción de medicamentos si se requiere',
      'Seguimiento por WhatsApp sin costo adicional',
    ],
    precio: '$120.000',
  },
  medicinaInterna: {
    color:  '#01579B',
    emoji:  '🫀',
    titulo: 'Medicina Interna + Electrocardiograma',
    desc:   'Consulta especializada de medicina interna con electrocardiograma incluido. Evaluación profunda del corazón, órganos y sistemas internos directamente en tu hogar, sin estrés para tu mascota.',
    puntos: [
      'Examen físico completo y detallado',
      'Electrocardiograma (ECG) incluido en la visita',
      'Evaluación cardiológica y de órganos internos',
      'Diagnóstico claro con plan de tratamiento',
      'Prescripción de medicamentos si se requiere',
      'Seguimiento por WhatsApp sin costo adicional',
    ],
    precio: '$250.000 – ECG + consulta incluidos',
  },
  diagnostico: {
    color:  '#9C6FDE',
    emoji:  '🔬',
    titulo: 'Diagnóstico y Laboratorio',
    desc:   'Tomo las muestras en tu casa y las envío al laboratorio. Cuando lleguen los resultados te los explico en detalle y definimos el tratamiento.',
    puntos: [
      'Toma de muestras sin salir de casa',
      'Hemograma, química sanguínea, uroanálisis y más',
      'Resultados en 24 a 48 horas',
      'Asesoría completa sobre los resultados',
    ],
    precio: 'Desde $80.000',
  },
  cirugia: {
    color:  '#E91E8C',
    emoji:  '✂️',
    titulo: 'Cirugías Menores',
    desc:   'Realizo procedimientos quirúrgicos menores con todo el material esterilizado y los anestésicos necesarios. Tu mascota queda en casa, en su ambiente, para una recuperación más tranquila.',
    puntos: [
      'Sutura de heridas y limpieza de abscesos',
      'Todo el material quirúrgico esterilizado',
      'Seguimiento postoperatorio incluido',
    ],
    precio: 'Desde $120.000',
  },

  domicilio: {
    color:  '#FF5722',
    emoji:  '🏠',
    titulo: 'Visita a Domicilio',
    desc:   'Mi servicio es 100% a domicilio. Me movilizo por toda el Área Metropolitana de Medellín. Solo dime tu dirección y coordinamos el horario que mejor te quede.',
    puntos: [
      'Cobertura en todo Medellín y municipios del área metro',
      'Horarios flexibles: Lunes a Domingo, 7am a 7pm',
      'Llegada puntual y con todo el equipo listo',
      'Sin costo de desplazamiento dentro de la zona de cobertura',
    ],
    precio: 'Incluido en cada servicio',
  },
  odontologia: {
    color:  '#00BCD4',
    emoji:  '🦷',
    titulo: 'Odontología Veterinaria',
    desc:   'La salud oral de tu mascota es tan importante como la tuya. Realizo limpieza dental, evalúo el estado de los dientes y trato enfermedades bucales directamente en tu hogar.',
    puntos: [
      'Limpieza dental profunda',
      'Tratamiento de gingivitis y mal aliento',
      'Recomendaciones para el cuidado dental en casa',
    ],
    precio: 'Desde $120.000',
  },
  desparasitacion: {
    color:  '#8BC34A',
    emoji:  '🐾',
    titulo: 'Desparasitación',
    desc:   'Protejo a tu mascota de parásitos internos y externos. Aplico el producto adecuado según su peso, edad y estilo de vida. También te enseño cómo prevenir futuras infestaciones.',
    puntos: [
      'Desparasitación interna y externa (pipetas, collares)',
      'Productos de marcas certificadas y seguras',
      'Para perros, gatos, conejos y más',
      'Calendario de desparasitación personalizado',
    ],
    precio: 'Desde $50.000',
  },
};

function openModal(id) {
  const s = SERVICIOS[id];
  if (!s) return;

  document.getElementById('modalEmoji').textContent  = s.emoji;
  document.getElementById('modalTitle').textContent  = s.titulo;
  document.getElementById('modalDesc').textContent   = s.desc;
  document.getElementById('modalPrice').textContent  = s.precio;

  const lista = document.getElementById('modalList');
  lista.innerHTML = s.puntos.map(p => `<li>${p}</li>`).join('');

  const waText = `Hola Dr. Germán! Me interesa el servicio de ${s.titulo}. ¿Podemos coordinar una visita?`;
  document.getElementById('modalWa').href = `https://wa.me/573002104847?text=${encodeURIComponent(waText)}`;

  const header = document.getElementById('modalHeader');
  header.style.background = `linear-gradient(135deg, ${s.color}, ${s.color}cc)`;
  lista.style.setProperty('--li-color', s.color);

  const overlay = document.getElementById('modalOverlay');
  overlay.style.display = 'flex';
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('open');
  overlay.style.display = 'none';
  document.body.style.overflow = '';
}

export function initModal() {
  // Delegación de eventos: cualquier elemento con data-service abre el modal
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-service]');
    if (btn) openModal(btn.dataset.service);
  });

  // Botón de cerrar
  document.getElementById('modalClose')?.addEventListener('click', closeModal);

  // Clic en el overlay (fuera del modal)
  document.getElementById('modalOverlay')?.addEventListener('click', function (e) {
    if (e.target === this) closeModal();
  });

  // Evitar cierre al hacer clic dentro del modal
  document.getElementById('modalBox')?.addEventListener('click', e => e.stopPropagation());

  // Cerrar con tecla Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}
