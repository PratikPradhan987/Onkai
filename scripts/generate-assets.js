const fs = require('fs');
const path = require('path');

const assets = [
  {
    file: 'public/images/projects/hyperdrift-thumb.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0D0B14"/>
  <rect x="2" y="2" width="796" height="496" stroke="#251F33" stroke-width="2"/>
  <polygon points="400,100 700,450 100,450" stroke="#FF5C00" stroke-width="3" fill="none" opacity="0.8"/>
  <line x1="400" y1="100" x2="400" y2="450" stroke="#FF8533" stroke-width="2" stroke-dasharray="8 6"/>
  <circle cx="400" cy="380" r="16" fill="#FF5C00"/>
  <path d="M250 420 Q 400 350, 550 420" stroke="#A855F7" stroke-width="4" fill="none"/>
  <text x="40" y="60" fill="#A1A1AA" font-family="monospace" font-size="14">HYPERDRIFT // DETERMINISTIC PHYSICS 60FPS</text>
</svg>`,
  },
  {
    file: 'public/images/projects/hyperdrift-hero.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" fill="none">
  <rect width="1200" height="680" fill="#0A0812"/>
  <rect x="2" y="2" width="1196" height="676" stroke="#251F33" stroke-width="2"/>
  <path d="M100 550 L600 150 L1100 550" stroke="#FF5C00" stroke-width="4" fill="none"/>
  <path d="M250 550 L600 250 L950 550" stroke="#A855F7" stroke-width="3" fill="none" opacity="0.6"/>
  <circle cx="600" cy="420" r="28" fill="#FF5C00"/>
  <text x="60" y="80" fill="#F5F5F7" font-family="system-ui, sans-serif" font-size="20" font-weight="700">HYPERDRIFT ZERO // PROCEDURAL SHADER TUNNEL</text>
  <text x="60" y="620" fill="#A1A1AA" font-family="monospace" font-size="16">GLSL FRAGMENT PIPELINE // DYNAMIC MOMENTUM PHYSICS</text>
</svg>`,
  },
  {
    file: 'public/images/projects/hyperdrift-screen1.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0D0B14"/>
  <rect x="2" y="2" width="796" height="496" stroke="#251F33" stroke-width="2"/>
  <line x1="50" y1="450" x2="750" y2="450" stroke="#FF5C00" stroke-width="2"/>
  <polyline points="100,450 300,200 500,300 700,100" stroke="#A855F7" stroke-width="3" fill="none"/>
  <text x="40" y="60" fill="#F5F5F7" font-family="monospace" font-size="14">TELEMETRY // GHOST LAP TRAJECTORY VECTOR</text>
</svg>`,
  },
  {
    file: 'public/images/projects/lumina-thumb.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0E1214"/>
  <rect x="2" y="2" width="796" height="496" stroke="#1D2A30" stroke-width="2"/>
  <rect x="150" y="100" width="120" height="120" rx="16" fill="#FF5C00" opacity="0.9"/>
  <rect x="340" y="100" width="120" height="120" rx="16" fill="#14B8A6" opacity="0.9"/>
  <rect x="530" y="100" width="120" height="120" rx="16" fill="#3B82F6" opacity="0.9"/>
  <rect x="150" y="270" width="500" height="130" rx="16" fill="#151E22" stroke="#25353D"/>
  <text x="40" y="60" fill="#A1A1AA" font-family="monospace" font-size="14">LUMINA TOKENS // CROSS-PLATFORM PARSER</text>
</svg>`,
  },
  {
    file: 'public/images/projects/lumina-hero.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" fill="none">
  <rect width="1200" height="680" fill="#0A0E10"/>
  <rect x="2" y="2" width="1196" height="676" stroke="#1D2A30" stroke-width="2"/>
  <g transform="translate(100, 150)">
    <rect x="0" y="0" width="280" height="380" rx="20" fill="#141D22" stroke="#25353D"/>
    <rect x="340" y="0" width="280" height="380" rx="20" fill="#141D22" stroke="#25353D"/>
    <rect x="680" y="0" width="280" height="380" rx="20" fill="#141D22" stroke="#25353D"/>
  </g>
  <text x="60" y="80" fill="#F5F5F7" font-family="system-ui, sans-serif" font-size="20" font-weight="700">LUMINA // UNIFIED DESIGN TOKEN ARCHITECTURE</text>
</svg>`,
  },
  {
    file: 'public/images/projects/lumina-screen1.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0E1214"/>
  <text x="40" y="60" fill="#14B8A6" font-family="monospace" font-size="16">APCA / WCAG 2.2 AA CONTRAST AUDIT MATRIX // 100% PASS</text>
  <rect x="40" y="100" width="720" height="340" rx="12" fill="#151E22" stroke="#25353D"/>
</svg>`,
  },
  {
    file: 'public/images/projects/kinetic-thumb.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0F0E14"/>
  <circle cx="400" cy="250" r="140" stroke="#FF5C00" stroke-width="2" stroke-dasharray="4 8"/>
  <circle cx="400" cy="250" r="80" stroke="#A855F7" stroke-width="2"/>
  <circle cx="400" cy="250" r="20" fill="#FF5C00"/>
  <text x="40" y="60" fill="#A1A1AA" font-family="monospace" font-size="14">KINETIC CANVAS // BROWSER OPTICAL FLOW</text>
</svg>`,
  },
  {
    file: 'public/images/projects/kinetic-hero.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" fill="none">
  <rect width="1200" height="680" fill="#0F0E14"/>
  <circle cx="600" cy="340" r="240" stroke="#FF5C00" stroke-width="3" stroke-dasharray="6 12"/>
  <circle cx="600" cy="340" r="120" stroke="#A855F7" stroke-width="2"/>
  <text x="60" y="80" fill="#F5F5F7" font-family="system-ui, sans-serif" font-size="20" font-weight="700">KINETIC CANVAS // SPATIAL GESTURE VECTOR FIELD</text>
</svg>`,
  },
  {
    file: 'public/images/projects/chronos-thumb.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#0C0E12"/>
  <circle cx="400" cy="250" r="130" stroke="#232733" stroke-width="8"/>
  <circle cx="400" cy="250" r="130" stroke="#FF5C00" stroke-width="8" stroke-dasharray="400 500"/>
  <text x="400" y="260" text-anchor="middle" fill="#F5F5F7" font-family="sans-serif" font-size="36" font-weight="700">25:00</text>
</svg>`,
  },
  {
    file: 'public/images/projects/chronos-hero.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" fill="none">
  <rect width="1200" height="680" fill="#0C0E12"/>
  <circle cx="600" cy="340" r="200" stroke="#232733" stroke-width="12"/>
  <circle cx="600" cy="340" r="200" stroke="#FF5C00" stroke-width="12" stroke-dasharray="600 800"/>
  <text x="600" y="355" text-anchor="middle" fill="#F5F5F7" font-family="sans-serif" font-size="54" font-weight="700">FLOW STATE</text>
</svg>`,
  },
  {
    file: 'public/images/projects/echo-thumb.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" fill="none">
  <rect width="800" height="500" fill="#140D0E"/>
  <path d="M50 250 Q 200 100, 400 250 T 750 250" stroke="#E11D48" stroke-width="3" fill="none"/>
  <circle cx="400" cy="250" r="12" fill="#FF5C00"/>
  <text x="40" y="60" fill="#A1A1AA" font-family="monospace" font-size="14">ECHO RELAY // SYNTHETIC RF PUZZLE</text>
</svg>`,
  },
  {
    file: 'public/images/projects/echo-hero.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 680" fill="none">
  <rect width="1200" height="680" fill="#140D0E"/>
  <path d="M100 340 C 300 140, 500 540, 700 340 C 900 140, 1000 440, 1100 340" stroke="#E11D48" stroke-width="4" fill="none"/>
  <text x="60" y="80" fill="#F5F5F7" font-family="system-ui, sans-serif" font-size="20" font-weight="700">ECHO RELAY // FREQUENCY SPECTROGRAM</text>
</svg>`,
  },
  {
    file: 'public/images/experiments/physics.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="#0C0D12"/><circle cx="300" cy="200" r="70" stroke="#FF5C00" stroke-width="2"/><circle cx="260" cy="180" r="8" fill="#FF5C00"/><circle cx="340" cy="220" r="14" fill="#3B82F6"/></svg>`,
  },
  {
    file: 'public/images/experiments/terrain.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="#0B1112"/><path d="M50 320 Q 200 180, 350 280 T 550 160" stroke="#10B981" stroke-width="3" fill="none"/></svg>`,
  },
  {
    file: 'public/images/experiments/audio.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="#120E14"/><path d="M50 200 L 150 100 L 250 300 L 350 120 L 450 280 L 550 200" stroke="#FF5C00" stroke-width="3" fill="none"/></svg>`,
  },
  {
    file: 'public/images/experiments/ascii.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="#08100A"/><text x="50" y="200" fill="#22C55E" font-family="monospace" font-size="28">01001111 01001110 01001011 01000001 01001001</text></svg>`,
  },
  {
    file: 'public/images/experiments/type.svg',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 400" fill="none"><rect width="600" height="400" fill="#120E0E"/><text x="300" y="220" text-anchor="middle" fill="#FF5C00" font-family="sans-serif" font-size="56" font-style="italic" font-weight="900">MOMENTUM</text></svg>`,
  },
  {
    file: 'public/og/onkai-default-og.png',
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" fill="none">
  <rect width="1200" height="630" fill="#070709"/>
  <rect x="20" y="20" width="1160" height="590" rx="20" stroke="#23232C" stroke-width="2"/>
  <circle cx="950" cy="315" r="200" stroke="#FF5C00" stroke-width="2" stroke-dasharray="12 6" opacity="0.6"/>
  <circle cx="950" cy="315" r="50" fill="#FF5C00"/>
  <text x="100" y="280" fill="#F5F5F7" font-family="system-ui, sans-serif" font-size="64" font-weight="800">ONKAI STUDIO</text>
  <text x="100" y="340" fill="#FF5C00" font-family="system-ui, sans-serif" font-size="24" font-weight="600" letter-spacing="0.1em">CREATIVE TECHNOLOGY STUDIO</text>
  <text x="100" y="400" fill="#A1A1AA" font-family="system-ui, sans-serif" font-size="20">Mobile Apps • Web Experiences • Games • Digital Products</text>
</svg>`,
  },
];

assets.forEach((a) => {
  const filePath = path.resolve(__dirname, '..', a.file);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, a.content, 'utf8');
  console.log('Wrote ' + a.file);
});
