// ─────────────────────────────────────────────────────
//  src/components/Footer.jsx
// ─────────────────────────────────────────────────────

import styled from 'styled-components'
import { buildWhatsAppLink } from '../utils/whatsapp'
import { WHATSAPP_DEFAULT_MESSAGE } from '../data/products'

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.primaryDark};
  color: #fff;
  padding: 56px 24px 32px;
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 48px;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

const Logo = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 10px;
`

const Desc = styled.p`
  font-size: 0.88rem;
  line-height: 1.7;
  color: rgba(255,255,255,0.72);
  max-width: 280px;
`

const ContactTitle = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  margin-bottom: 14px;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Link = styled.a`
  font-size: 0.92rem;
  color: rgba(255,255,255,0.8);
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover { color: #fff; }
`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255,255,255,0.15);
  max-width: 1100px;
  margin: 0 auto 24px;
`

const Bottom = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`

const Copy = styled.p`
  font-size: 0.78rem;
  color: rgba(255,255,255,0.5);
`

const Footer = () => (
  <FooterWrapper>
    <Inner>
      <div>
        <Logo>🎀 Picotes Personalizados</Logo>
        <Desc>
          Arte e papelaria personalizada feita com carinho para os momentos que ficam na memória.
          Rio de Janeiro – RJ. Desenvolvemos qualquer tema!
        </Desc>
      </div>
      <div>
        <ContactTitle>Contato</ContactTitle>
        <Links>
          <Link href={buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank" rel="noopener noreferrer">
            💬 WhatsApp
          </Link>
          <Link href="https://www.instagram.com/picotes_personalizados" target="_blank" rel="noopener noreferrer">
            📸 @picotes_personalizados
          </Link>
          <Link href="https://www.instagram.com/robertageovanna" target="_blank" rel="noopener noreferrer">
            👩‍🎨 @robertageovanna
          </Link>
        </Links>
      </div>
    </Inner>
    <Divider />
    <Bottom>
      <Copy>© {new Date().getFullYear()} Picotes Personalizados. Todos os direitos reservados.</Copy>
      <Copy>By Roberta Fernandes 🌸</Copy>
    </Bottom>
  </FooterWrapper>
)

export default Footer
