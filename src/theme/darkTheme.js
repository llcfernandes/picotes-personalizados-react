// ─────────────────────────────────────────────────────
//  src/theme/darkTheme.js
//  Versão escura da paleta rosa (tons vinho/bordô)
// ─────────────────────────────────────────────────────

const darkTheme = {
  name: 'dark',

  colors: {
    background:    '#1A0A10',
    surface:       '#261018',
    surfaceHover:  '#33151F',
    border:        '#4A2030',

    text:          '#F9E8EE',
    textSecondary: '#D4899A',
    textMuted:     '#7A4455',

    primary:       '#E08AA8',
    primaryHover:  '#EFA0BC',
    primaryLight:  '#2A0E18',
    primaryDark:   '#F5C0D4',

    accent:        '#C96A8A',
    accentLight:   '#1E0C14',

    whatsapp:      '#25D366',
    whatsappHover: '#2EE872',

    shadow:        'rgba(0, 0, 0, 0.4)',
    shadowStrong:  'rgba(0, 0, 0, 0.6)',
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

export default darkTheme
