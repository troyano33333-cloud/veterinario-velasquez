/**
 * heroes.js — Animales Disney-style del Hero
 * Genera SVG inline para el perro y el gato de la sección Hero.
 */

export function getDogSVG() {
  return `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" width="140" height="160">
    <ellipse cx="60" cy="80" rx="26" ry="38" fill="#C8956C" transform="rotate(-15,60,80)"/>
    <ellipse cx="140" cy="80" rx="26" ry="38" fill="#C8956C" transform="rotate(15,140,80)"/>
    <ellipse cx="60" cy="82" rx="18" ry="28" fill="#A0704A" transform="rotate(-15,60,82)"/>
    <ellipse cx="140" cy="82" rx="18" ry="28" fill="#A0704A" transform="rotate(15,140,82)"/>
    <ellipse cx="100" cy="105" rx="62" ry="58" fill="#E8A96A"/>
    <ellipse cx="100" cy="125" rx="36" ry="28" fill="#D4895A"/>
    <circle cx="78" cy="98" r="16" fill="white"/>
    <circle cx="122" cy="98" r="16" fill="white"/>
    <circle cx="82" cy="100" r="10" fill="#3D2B1F"/>
    <circle cx="126" cy="100" r="10" fill="#3D2B1F"/>
    <circle cx="85" cy="97" r="4" fill="white"/>
    <circle cx="129" cy="97" r="4" fill="white"/>
    <ellipse cx="100" cy="118" rx="12" ry="9" fill="#2C1810"/>
    <ellipse cx="97" cy="116" rx="4" ry="3" fill="#5A3028" opacity="0.5"/>
    <path d="M84 132 Q100 148 116 132" stroke="#A0604A" stroke-width="3" stroke-linecap="round" fill="none"/>
    <ellipse cx="65" cy="120" rx="14" ry="10" fill="#F0A070" opacity="0.5"/>
    <ellipse cx="135" cy="120" rx="14" ry="10" fill="#F0A070" opacity="0.5"/>
    <ellipse cx="100" cy="180" rx="55" ry="45" fill="#E8A96A"/>
    <ellipse cx="68" cy="212" rx="18" ry="12" fill="#D4895A"/>
    <ellipse cx="132" cy="212" rx="18" ry="12" fill="#D4895A"/>
    <path d="M155 165 Q185 140 175 120 Q165 100 180 90" stroke="#C8956C" stroke-width="14" stroke-linecap="round" fill="none"/>
    <rect x="65" y="148" width="70" height="12" rx="6" fill="#FF8C42"/>
    <circle cx="100" cy="154" r="7" fill="#FFB347"/>
    <text x="96" y="158" font-size="8" fill="#FF6B20" font-weight="bold">♥</text>
  </svg>`;
}

export function getCatSVG() {
  return `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg" width="130" height="150">
    <polygon points="58,82 42,42 82,68" fill="#F0A0B0"/>
    <polygon points="142,82 158,42 118,68" fill="#F0A0B0"/>
    <polygon points="62,80 50,52 78,70" fill="#FFB6C1"/>
    <polygon points="138,80 150,52 122,70" fill="#FFB6C1"/>
    <circle cx="100" cy="108" r="60" fill="#F5C5A0"/>
    <ellipse cx="76" cy="100" rx="18" ry="15" fill="white"/>
    <ellipse cx="124" cy="100" rx="18" ry="15" fill="white"/>
    <ellipse cx="78" cy="101" rx="11" ry="12" fill="#3DB0A0"/>
    <ellipse cx="126" cy="101" rx="11" ry="12" fill="#3DB0A0"/>
    <ellipse cx="79" cy="102" rx="7" ry="9" fill="#1A1A2E"/>
    <ellipse cx="127" cy="102" rx="7" ry="9" fill="#1A1A2E"/>
    <circle cx="82" cy="99" r="3" fill="white"/>
    <circle cx="130" cy="99" r="3" fill="white"/>
    <path d="M95 118 L100 114 L105 118 Z" fill="#FF8CAA"/>
    <line x1="30" y1="118" x2="88" y2="122" stroke="#888" stroke-width="1.5" opacity="0.6"/>
    <line x1="30" y1="126" x2="88" y2="126" stroke="#888" stroke-width="1.5" opacity="0.6"/>
    <line x1="112" y1="122" x2="170" y2="118" stroke="#888" stroke-width="1.5" opacity="0.6"/>
    <line x1="112" y1="126" x2="170" y2="126" stroke="#888" stroke-width="1.5" opacity="0.6"/>
    <path d="M93 124 Q100 132 107 124" stroke="#D07090" stroke-width="2.5" stroke-linecap="round" fill="none"/>
    <ellipse cx="62" cy="118" rx="15" ry="10" fill="#FFB0B0" opacity="0.45"/>
    <ellipse cx="138" cy="118" rx="15" ry="10" fill="#FFB0B0" opacity="0.45"/>
    <ellipse cx="100" cy="182" rx="50" ry="42" fill="#F5C5A0"/>
    <ellipse cx="72" cy="214" rx="16" ry="10" fill="#EBA880"/>
    <ellipse cx="128" cy="214" rx="16" ry="10" fill="#EBA880"/>
    <path d="M150 168 Q185 155 178 128 Q172 108 185 95" stroke="#EBA880" stroke-width="12" stroke-linecap="round" fill="none"/>
    <rect x="68" y="148" width="64" height="11" rx="5" fill="#9C6FDE"/>
    <circle cx="100" cy="153" r="6" fill="#B28FEE"/>
    <text x="97" y="157" font-size="7" fill="#6A3DB5" font-weight="bold">★</text>
  </svg>`;
}

export function applyHeroAnimals() {
  const dogEl = document.querySelector('.hero-dog');
  const catEl = document.querySelector('.hero-cat');
  if (dogEl) dogEl.innerHTML = getDogSVG();
  if (catEl) catEl.innerHTML = getCatSVG();
}
