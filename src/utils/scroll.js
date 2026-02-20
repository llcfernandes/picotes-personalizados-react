// ─────────────────────────────────────────────────────
//  src/utils/scroll.js
//  Scroll suave para uma seção pelo id
// ─────────────────────────────────────────────────────

export const scrollToSection = (sectionId) => {
  const el = document.getElementById(sectionId)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
