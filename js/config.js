/**
 * config.js — Configuración global del sitio
 * Cambia aquí cualquier dato y se actualiza en toda la app.
 */

export const WA_NUMBER   = '573002104847';        // WhatsApp sin + ni espacios
export const DOCTOR_NAME = 'Dr. Germán';           // Nombre corto para mensajes
export const WA_BASE_URL = `https://wa.me/${WA_NUMBER}`;

/** Genera una URL de WhatsApp con texto pre-cargado */
export function waUrl(text) {
  return `${WA_BASE_URL}?text=${encodeURIComponent(text)}`;
}

/**
 * Recorre todos los enlaces <a href="https://wa.me/..."> del HTML
 * y reemplaza el número con WA_NUMBER.
 * Así el HTML no necesita saber el número: solo lo define config.js.
 */
export function patchWaLinks() {
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    a.href = a.href.replace(/wa\.me\/\d+/, `wa.me/${WA_NUMBER}`);
  });
}
