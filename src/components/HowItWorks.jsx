// ─────────────────────────────────────────────────────
//  src/components/HowItWorks.jsx
// ─────────────────────────────────────────────────────

import styled from 'styled-components'
import { HOW_IT_WORKS } from '../data/products'

const Section = styled.section`
  padding: 88px 24px;
  background: ${({ theme }) => theme.colors.surface};
  border-top: 1.5px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.border};
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
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  gap: 28px;
`

const Step = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

const StepNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1;
  color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => theme.colors.accent};
`

const StepTitle = styled.p`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`

const StepDesc = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
`

const HowItWorks = () => (
  <Section id="como-funciona">
    <Inner>
      <Label>✦ Processo</Label>
      <Title>Como funciona</Title>
      <Grid>
        {HOW_IT_WORKS.map((step) => (
          <Step key={step.number}>
            <StepNumber>{step.number}</StepNumber>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.description}</StepDesc>
          </Step>
        ))}
      </Grid>
    </Inner>
  </Section>
)

export default HowItWorks
