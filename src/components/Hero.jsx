// ─────────────────────────────────────────────────────
//  src/components/Hero.jsx
// ─────────────────────────────────────────────────────

import styled, { keyframes } from 'styled-components'
import { buildWhatsAppLink } from '../utils/whatsapp'
import { WHATSAPP_DEFAULT_MESSAGE } from '../data/products'
import imagemCoruja from '../assets/coruja.png'

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`

const Section = styled.section`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 520px;
    height: 520px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.primaryLight}, transparent 70%);
    top: -140px;
    right: -140px;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(circle, ${({ theme }) => theme.colors.accentLight}, transparent 70%);
    bottom: -80px;
    left: -80px;
    pointer-events: none;
  }
`

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 7px 18px;
  border-radius: ${({ theme }) => theme.radius.full};
  margin-bottom: 28px;
  animation: ${fadeUp} 0.6s ease both;
  position: relative;
  z-index: 1;
`

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.15;
  max-width: 700px;
  margin: 0 auto 24px;
  animation: ${fadeUp} 0.7s 0.1s ease both;
  position: relative;
  z-index: 1;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
  }
`

const Subtitle = styled.p`
  font-size: clamp(0.95rem, 2.5vw, 1.15rem);
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 500px;
  margin: 0 auto 44px;
  line-height: 1.75;
  animation: ${fadeUp} 0.7s 0.2s ease both;
  position: relative;
  z-index: 1;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  animation: ${fadeUp} 0.7s 0.3s ease both;
  position: relative;
  z-index: 1;
`

const PrimaryButton = styled.a`
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  padding: 14px 30px;
  border-radius: ${({ theme }) => theme.radius.full};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
  box-shadow: 0 6px 24px ${({ theme }) => theme.colors.shadowStrong};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px ${({ theme }) => theme.colors.shadowStrong};
    filter: brightness(1.07);
  }
`

const SecondaryButton = styled.button`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
  padding: 14px 30px;
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`

const ImageRow = styled.div`
  margin-top: 90px;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  #hide-coruja-mobile {
    @media screen and (max-width: 828px){
      display: none;
    }
  }
`

const Hero = ({ onOpenGallery }) => (
  <Section id="inicio">
    <Badge>📍 Ilha do Governador – RJ</Badge>

    <Title>
      Personalizados que contam a <em>sua história</em>
    </Title>

    <Subtitle>
      Criamos peças únicas e personalizadas para os momentos mais especiais.
      Arte, carinho e qualidade em cada detalhe.
    </Subtitle>

    <ButtonGroup>
      <PrimaryButton
        href={buildWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Solicitar Orçamento
      </PrimaryButton>
      <SecondaryButton onClick={() => onOpenGallery('all')}>
        Ver Produtos 🌸
      </SecondaryButton>
    </ButtonGroup>

    <ImageRow> <a href="#produtos"><img src={imagemCoruja}/> <img src= {imagemCoruja}/>  <span id='hide-coruja-mobile'> <img src={imagemCoruja}/> <img src={imagemCoruja}/> </span></a> </ImageRow>
  </Section>
)

export default Hero
