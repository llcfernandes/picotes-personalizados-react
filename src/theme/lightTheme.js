// ─────────────────────────────────────────────────────
//  src/theme/lightTheme.js
//  Paleta rosa inspirada na identidade visual da marca
//  Para mudar cores: edite os valores abaixo
// ─────────────────────────────────────────────────────

const lightTheme = {
  name: 'light',

  colors: {
    background:    '#FFF5F8',
    surface:       '#FFFFFF',
    surfaceHover:  '#FDE8EF',
    border:        '#F0C8D8',

    text:          '#3D1A26',
    textSecondary: '#8B4D62',
    textMuted:     '#C49AAA',

    primary:       '#C96A8A',
    primaryHover:  '#B55478',
    primaryLight:  '#FDEAF0',
    primaryDark:   '#8B3454',

    accent:        '#E8A0B8',
    accentLight:   '#FEF0F5',

    whatsapp:      '#25D366',
    whatsappHover: '#1EBB58',

    shadow:        'rgba(180, 60, 100, 0.10)',
    shadowStrong:  'rgba(180, 60, 100, 0.22)',
  },

  fonts: {
    display: "'Playfair Display', Georgia, serif",
    body:    "'DM Sans', system-ui, sans-serif",
  },

  radius: {
    sm:   '8px',
    md:   '16px',
    lg:   '24px',
    xl:   '32px',
    full: '999px',
  },

  transition: 'all 0.3s ease',
}

export default lightTheme
