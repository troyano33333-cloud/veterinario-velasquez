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
