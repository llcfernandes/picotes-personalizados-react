// ─────────────────────────────────────────────────────
//  src/components/Gallery.jsx  (Seção de Depoimentos)
// ─────────────────────────────────────────────────────

import styled from 'styled-components'
import { TESTIMONIALS } from '../data/products'

const Section = styled.section`
  padding: 88px 24px;
  background: ${({ theme }) => theme.colors.background};
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Label = styled.p`
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`

const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: clamp(1.7rem, 4vw, 2.6rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 52px;
  max-width: 480px;
  line-height: 1.2;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
`

const Card = styled.blockquote`
  background: ${({ theme }) => theme.colors.surface};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: ${({ theme }) => theme.transition};
  margin: 0;

  &:hover {
    box-shadow: 0 12px 36px ${({ theme }) => theme.colors.shadow};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

const Stars = styled.div`
  font-size: 0.9rem;
  letter-spacing: 2px;
`

const Quote = styled.p`
  font-size: 0.92rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  flex: 1;
  font-style: italic;
`

const Author = styled.cite`
  font-size: 0.85rem;
  font-weight: 600;
  font-style: normal;
  color: ${({ theme }) => theme.colors.primary};
`

const Gallery = () => (
  <Section id="depoimentos">
    <Inner>
      <Label>✦ Depoimentos</Label>
      <Title>O que nossos clientes dizem</Title>
      <Grid>
        {TESTIMONIALS.map(({ id, stars, text, author }) => (
          <Card key={id}>
            <Stars>{stars}</Stars>
            <Quote>"{text}"</Quote>
            <Author>— {author}</Author>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
)

export default Gallery
