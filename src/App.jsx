// ─────────────────────────────────────────────────────
//  src/App.jsx
//  Orquestra temas, layout e estado da GalleryPage
// ─────────────────────────────────────────────────────

import { useState, useCallback } from 'react'
import { ThemeProvider } from 'styled-components'

import lightTheme from './theme/lightTheme'
import darkTheme  from './theme/darkTheme'
import useThemeMode from './hooks/useThemeMode'
import GlobalStyle from './styles/GlobalStyle'

import Header        from './components/Header'
import Hero          from './components/Hero'
import Products      from './components/Products'
import HowItWorks    from './components/HowItWorks'
import Gallery       from './components/Gallery'
import Footer        from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import GalleryPage   from './components/GalleryPage'

const App = () => {
  const { isDark, toggleMode } = useThemeMode()
  const activeTheme = isDark ? darkTheme : lightTheme

  const [galleryOpen, setGalleryOpen]         = useState(false)
  const [galleryCategory, setGalleryCategory] = useState('all')

  const openGallery = useCallback((categoryId) => {
    setGalleryCategory(categoryId)
    setGalleryOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeGallery = useCallback(() => {
    setGalleryOpen(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <ThemeProvider theme={activeTheme}>
      <GlobalStyle />
      <Header isDark={isDark} onToggleTheme={toggleMode} />
      <main>
        <Hero onOpenGallery={openGallery} />
        <Products onOpenGallery={openGallery} />
        <HowItWorks />
        <Gallery />
      </main>
      <Footer />
      <WhatsAppButton />
      <GalleryPage
        open={galleryOpen}
        initialCategory={galleryCategory}
        onClose={closeGallery}
        isDark={isDark}
      />
    </ThemeProvider>
  )
}

export default App
