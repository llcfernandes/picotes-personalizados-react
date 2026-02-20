// ─────────────────────────────────────────────────────
//  src/utils/whatsapp.js
//  Regra de negócio isolada: geração do link do WhatsApp
// ─────────────────────────────────────────────────────

import { WHATSAPP_NUMBER } from '../data/products'

export const buildWhatsAppLink = (message) => {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`
}
