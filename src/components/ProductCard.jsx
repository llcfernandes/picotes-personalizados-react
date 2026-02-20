// ─────────────────────────────────────────────────────
//  src/components/ProductCard.jsx
// ─────────────────────────────────────────────────────

import styled from 'styled-components'

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.xl};
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  gap: 13px;
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
    transform: scaleX(0);
    transition: ${({ theme }) => theme.transition};
    transform-origin: left;
  }

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 48px ${({ theme }) => theme.colors.shadowStrong};
    border-color: ${({ theme }) => theme.colors.accent};
  }

  &:hover::before {
    transform: scaleX(1);
  }
`

const Emoji = styled.div`
  font-size: 2.8rem;
  line-height: 1;
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`

const Description = styled.p`
  font-size: 0.88rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.65;
  flex: 1;
`

const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const Tag = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 4px 11px;
  border-radius: ${({ theme }) => theme.radius.full};
`

const Cta = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition};
  margin-top: 4px;

  ${Card}:hover & {
    gap: 12px;
  }
`

const ProductCard = ({ product, onClick }) => (
  <Card onClick={onClick} role="button" tabIndex={0} aria-label={`Ver fotos de ${product.title}`}>
    <Emoji>{product.emoji}</Emoji>
    <Title>{product.title}</Title>
    <Description>{product.description}</Description>
    <TagRow>
      {product.tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagRow>
    <Cta>Ver fotos e solicitar orçamento →</Cta>
  </Card>
)

export default ProductCard
