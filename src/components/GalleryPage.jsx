// ─────────────────────────────────────────────────────
//  src/components/GalleryPage.jsx
//  Página de fotos dos produtos (overlay deslizante)
//  Para adicionar fotos reais: troque o emoji por <img>
//  dentro de PhotoThumb, mantendo aspect-ratio 1/1
// ─────────────────────────────────────────────────────

import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import products from '../data/products'
import { buildWhatsAppLink } from '../utils/whatsapp'

// Paleta de fundos para os cards (simulando fotos)
// Substitua por imagens reais quando tiver as fotos
const PHOTO_GRADIENTS_LIGHT = [
  'linear-gradient(135deg,#FFD6E7,#FFB3C6)',
  'linear-gradient(135deg,#FFC6D9,#FF8FAB)',
  'linear-gradient(135deg,#FFADC5,#E96C93)',
  'linear-gradient(135deg,#FDCFE8,#F4A8CC)',
  'linear-gradient(135deg,#F9C5D1,#F48DA8)',
  'linear-gradient(135deg,#FFD1DC,#FF93B0)',
]
const PHOTO_GRADIENTS_DARK = [
  'linear-gradient(135deg,#3D1020,#5C1A30)',
  'linear-gradient(135deg,#4A1228,#6E2040)',
  'linear-gradient(135deg,#3A0E1C,#521826)',
  'linear-gradient(135deg,#40101E,#5E1E30)',
  'linear-gradient(135deg,#380C1A,#541A28)',
  'linear-gradient(135deg,#3C0E1E,#582232)',
]

// ── Styled ───────────────────────────────────────────

const Page = styled.div`
  position: fixed;
  inset: 0;
  z-index: 300;
  background: ${({ theme }) => theme.colors.background};
  overflow-y: auto;
  transform: translateX(${({ $open }) => $open ? '0' : '100%'});
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`

const PageHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.border};
  padding: 0 20px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 16px ${({ theme }) => theme.colors.shadow};
`

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

const PageTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};

  @media (max-width: 480px) { display: none; }
`

const OrderNowBtn = styled.a`
  font-size: 0.8rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  padding: 9px 18px;
  border-radius: ${({ theme }) => theme.radius.full};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
  white-space: nowrap;

  &:hover { filter: brightness(1.1); transform: translateY(-1px); }
`

const Tabs = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 24px 24px 0;
  max-width: 1100px;
  margin: 0 auto;
`

const TabButton = styled.button`
  font-size: 0.82rem;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1.5px solid ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.border};
  background: ${({ $active, theme }) => $active ? theme.colors.primary : theme.colors.surface};
  color: ${({ $active, theme }) => $active ? '#fff' : theme.colors.textSecondary};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ $active }) => $active ? '#fff' : 'inherit'};
  }
`

const Content = styled.div`
  padding: 28px 24px 80px;
  max-width: 1100px;
  margin: 0 auto;
`

const PhotoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;

  @media (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
  }
`

const PhotoCard = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  transition: ${({ theme }) => theme.transition};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px ${({ theme }) => theme.colors.shadowStrong};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`

const PhotoThumb = styled.div`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  background: ${({ $bg }) => $bg};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(160deg, rgba(255,255,255,.2), transparent 60%);
  }

  @media (max-width: 640px) { font-size: 3rem; }
`

const PhotoInfo = styled.div`
  padding: 14px 16px 4px;
`

const PhotoName = styled.p`
  font-weight: 600;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 4px;
`

const PhotoSub = styled.p`
  font-size: 0.78rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.4;
`

const PhotoCta = styled.a`
  display: block;
  text-align: center;
  margin: 12px 16px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1px solid ${({ theme }) => theme.colors.accent};
  padding: 9px;
  border-radius: ${({ theme }) => theme.radius.full};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

// ── Lightbox ─────────────────────────────────────────

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 400;
  background: rgba(20, 5, 10, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  opacity: ${({ $open }) => $open ? 1 : 0};
  pointer-events: ${({ $open }) => $open ? 'all' : 'none'};
  transition: opacity 0.3s ease;
`

const LightboxInner = styled.div`
  max-width: 560px;
  width: 100%;
  text-align: center;
`

const LightboxThumb = styled.div`
  width: 100%;
  aspect-ratio: 1;
  max-height: 320px;
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 7rem;
  margin-bottom: 20px;
  border: 3px solid ${({ theme }) => theme.colors.accent};
  background: ${({ $bg }) => $bg};

  @media (max-width: 640px) { font-size: 5rem; max-height: 240px; }
`

const LbName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`

const LbSub = styled.p`
  font-size: 0.92rem;
  color: rgba(255,255,255,0.65);
  margin-bottom: 24px;
`

const LbActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`

const LbOrderBtn = styled.a`
  font-size: 0.95rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primaryDark});
  padding: 14px 30px;
  border-radius: ${({ theme }) => theme.radius.full};
  text-decoration: none;
  transition: ${({ theme }) => theme.transition};
`

const LbCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};

  &:hover { background: rgba(255,255,255,0.2); }
`

const LbCloseSecondary = styled.button`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.primaryLight};
  border: 1.5px solid ${({ theme }) => theme.colors.accent};
  padding: 14px 30px;
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover { background: rgba(255,255,255,0.1); color: #fff; }
`

// ── Component ────────────────────────────────────────

const GalleryPage = ({ open, initialCategory, onClose, isDark }) => {
  const [activeTab, setActiveTab] = useState(initialCategory)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    setActiveTab(initialCategory)
  }, [initialCategory])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (lightbox) setLightbox(null)
        else onClose()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [lightbox, onClose])

  const getBackground = (colorIndex) => {
    const idx = (colorIndex - 1) % 6
    return isDark ? PHOTO_GRADIENTS_DARK[idx] : PHOTO_GRADIENTS_LIGHT[idx]
  }

  const visiblePhotos = activeTab === 'all'
    ? products.flatMap((p) => p.photos.map((ph) => ({ ...ph, parentMsg: p.whatsappMessage })))
    : (products.find((p) => p.id === activeTab)?.photos || []).map((ph) => {
        const parent = products.find((p) => p.id === activeTab)
        return { ...ph, parentMsg: parent.whatsappMessage }
      })

  const activeProduct = products.find((p) => p.id === activeTab)
  const headerTitle = activeProduct ? `${activeProduct.emoji} ${activeProduct.title}` : '🌸 Todos os Produtos'
  const headerWaMsg = activeProduct ? activeProduct.whatsappMessage : 'Olá! Quero fazer um pedido!'

  return (
    <>
      <Page $open={open}>
        <PageHeader>
          <HeaderLeft>
            <BackButton onClick={onClose}>← Voltar</BackButton>
            <PageTitle>{headerTitle}</PageTitle>
          </HeaderLeft>
          <OrderNowBtn href={buildWhatsAppLink(headerWaMsg)} target="_blank" rel="noopener noreferrer">
            💬 Pedir agora
          </OrderNowBtn>
        </PageHeader>

        <Tabs>
          <TabButton $active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
            🌸 Todos
          </TabButton>
          {products.map((p) => (
            <TabButton
              key={p.id}
              $active={activeTab === p.id}
              onClick={() => setActiveTab(p.id)}
            >
              {p.emoji} {p.title}
            </TabButton>
          ))}
        </Tabs>

        <Content>
          <PhotoGrid>
            {visiblePhotos.map((photo, index) => (
              <PhotoCard
                key={`${photo.name}-${index}`}
                onClick={() => setLightbox({ ...photo, bg: getBackground(photo.colorIndex) })}
              >
                <PhotoThumb $bg={getBackground(photo.colorIndex)}>
                  {photo.emoji}
                </PhotoThumb>
                <PhotoInfo>
                  <PhotoName>{photo.name}</PhotoName>
                  <PhotoSub>{photo.subtitle}</PhotoSub>
                </PhotoInfo>
                <PhotoCta
                  href={buildWhatsAppLink(photo.parentMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  💬 Pedir este
                </PhotoCta>
              </PhotoCard>
            ))}
          </PhotoGrid>
        </Content>
      </Page>

      {/* Lightbox */}
      <Overlay $open={!!lightbox} onClick={() => setLightbox(null)}>
        <LbCloseBtn onClick={() => setLightbox(null)}>✕</LbCloseBtn>
        {lightbox && (
          <LightboxInner onClick={(e) => e.stopPropagation()}>
            <LightboxThumb $bg={lightbox.bg}>
              {lightbox.emoji}
            </LightboxThumb>
            <LbName>{lightbox.name}</LbName>
            <LbSub>{lightbox.subtitle}</LbSub>
            <LbActions>
              <LbOrderBtn
                href={buildWhatsAppLink(lightbox.parentMsg)}
                target="_blank"
                rel="noopener noreferrer"
              >
                💬 Pedir Este
              </LbOrderBtn>
              <LbCloseSecondary onClick={() => setLightbox(null)}>
                Fechar
              </LbCloseSecondary>
            </LbActions>
          </LightboxInner>
        )}
      </Overlay>
    </>
  )
}

export default GalleryPage
