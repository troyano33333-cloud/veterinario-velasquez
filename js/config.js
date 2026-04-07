/**
 * config.js — Configuración global del sitio
 * ─────────────────────────────────────────────
 * Cambia aquí cualquier dato y se actualiza en TODA la app.
 * El HTML no necesita tocar ningún número ni URL directamente.
 */

// ── Identidad ────────────────────────────────
export const DOCTOR_NAME      = 'Dr. Germán';
export const DOCTOR_FULL_NAME = 'Dr. Germán Velásquez Gutiérrez';
export const SPECIALTY        = 'Médico Internista Veterinario';
export const CITY             = 'Medellín, Colombia';

// ── Contacto ─────────────────────────────────
export const WA_NUMBER      = '573002104847';   // sin + ni espacios
export const PHONE_DISPLAY  = '+57 300 210 4847';
export const WA_BASE_URL    = `https://wa.me/${WA_NUMBER}`;

// ── Redes sociales ───────────────────────────
export const TIKTOK_URL = 'https://www.tiktok.com/@germanveterinario?_r=1&_t=ZS-95DrlZFc1Uj';

// ── Helpers ──────────────────────────────────

/** Genera una URL de WhatsApp con texto pre-cargado */
export function waUrl(text) {
  return `${WA_BASE_URL}?text=${encodeURIComponent(text)}`;
}

/**
 * Parchea en tiempo de ejecución todos los links del HTML:
 * - wa.me/...      → usa WA_NUMBER
 * - tel:+57...     → usa WA_NUMBER (formato tel:)
 * - tiktok.com/... → usa TIKTOK_URL
 * Así cambiar un dato en config.js actualiza el HTML completo.
 */
export function patchLinks() {
  // WhatsApp links
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    a.href = a.href.replace(/wa\.me\/\d+/, `wa.me/${WA_NUMBER}`);
  });
  // Teléfono (tel:)
  document.querySelectorAll('a[href^="tel:"]').forEach(a => {
    a.href = `tel:+${WA_NUMBER}`;
    if (a.textContent.match(/^\+?57/)) a.textContent = PHONE_DISPLAY;
  });
  // TikTok
  document.querySelectorAll(`a[href*="tiktok.com"]`).forEach(a => {
    a.href = TIKTOK_URL;
  });
}
