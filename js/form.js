/**
 * form.js — Formulario de contacto → WhatsApp
 * Al hacer submit construye un mensaje y abre WhatsApp directamente.
 */

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name     = document.getElementById('name').value.trim();
    const pet      = document.getElementById('pet').value.trim();
    const service  = document.getElementById('service').value;
    const barrio   = document.getElementById('barrio').value.trim();
    const urgencia = form.querySelector('input[name="urgencia"]:checked')?.value || 'Con cita';

    if (!name || !pet || !service || !barrio) {
      alert('Por favor completa todos los campos.');
      return;
    }

    const lines = [
      '¡Hola Dr. Germán! 🐾 Me contacto desde tu página web.',
      `*Nombre:* ${name}`,
      `*Mascota:* ${pet}`,
      `*Servicio:* ${service}`,
      `*Barrio / Sector:* ${barrio}`,
      `*Tipo de atención:* ${urgencia}`,
    ];

    const waURL = `https://wa.me/573002104847?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(waURL, '_blank', 'noopener,noreferrer');
  });
}
