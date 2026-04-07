/**
 * form.js — Formulario de contacto → WhatsApp
 * Al hacer submit construye un mensaje y abre WhatsApp directamente.
 */
import { waUrl, DOCTOR_NAME } from './config.js';

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
      `¡Hola ${DOCTOR_NAME}! 🐾 Me contacto desde tu página web.`,
      `*Nombre:* ${name}`,
      `*Mascota:* ${pet}`,
      `*Servicio:* ${service}`,
      `*Barrio / Sector:* ${barrio}`,
      `*Tipo de atención:* ${urgencia}`,
    ];

    window.open(waUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  });
}
