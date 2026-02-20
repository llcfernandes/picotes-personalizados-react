// ─────────────────────────────────────────────────────
//  src/components/Products.jsx
// ─────────────────────────────────────────────────────

import styled from 'styled-components'
import products from '../data/products'
import ProductCard from './ProductCard'

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
  grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
  gap: 22px;
`

const Products = ({ onOpenGallery }) => (
  <Section id="produtos">
    <Inner>
      <Label>✦ O que criamos</Label>
      <Title>Cada peça feita com dedicação</Title>
      <Grid>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => onOpenGallery(product.id)}
          />
        ))}
      </Grid>
    </Inner>
  </Section>
)

export default Products
