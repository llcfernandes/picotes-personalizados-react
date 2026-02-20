// ─────────────────────────────────────────────────────
//  src/components/WhatsAppButton.jsx
//  Botão flutuante fixo com animação pulse
// ─────────────────────────────────────────────────────

import styled, { keyframes } from 'styled-components'
import { buildWhatsAppLink } from '../utils/whatsapp'
import { WHATSAPP_DEFAULT_MESSAGE } from '../data/products'

const pulse = keyframes`
  0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 0 rgba(37,211,102,.5); }
  50%       { box-shadow: 0 4px 20px rgba(37,211,102,.4), 0 0 0 14px rgba(37,211,102,0); }
`

const Button = styled.a`
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 999;

  display: flex;
  align-items: center;
  gap: 10px;

  height: 52px;
  padding: 0 20px;
  border-radius: ${({ theme }) => theme.radius.full};

  background: ${({ theme }) => theme.colors.whatsapp};
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.88rem;

  animation: ${pulse} 2.5s infinite;
  transition: ${({ theme }) => theme.transition};

  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }

  span {
    white-space: nowrap;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.whatsappHover};
    transform: scale(1.05);
  }

  @media (max-width: 640px) {
    width: 52px;
    padding: 0;
    justify-content: center;
    border-radius: 50%;

    span { display: none; }
  }
`

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.553 4.107 1.515 5.836L.057 23.487a.5.5 0 0 0 .596.613l5.805-1.527A11.935 11.935 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.916 0-3.703-.516-5.237-1.415l-.374-.221-3.873 1.02 1.012-3.782-.234-.393A9.942 9.942 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
)

const WhatsAppButton = () => (
  <Button
    href={buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco no WhatsApp"
  >
    <WhatsAppIcon />
    <span>Fale conosco</span>
  </Button>
)

export default WhatsAppButton
