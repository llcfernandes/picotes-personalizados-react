// ─────────────────────────────────────────────────────
//  src/components/Header.jsx
//  Navbar com links desktop + drawer mobile + tema
// ─────────────────────────────────────────────────────

import { useState } from 'react'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'
import { scrollToSection } from '../utils/scroll'
import useScrollSpy from '../hooks/useScrollSpy'
import logo from '../assets/logo-picotes-personalizados.png'

const SECTION_IDS = ['inicio', 'produtos', 'como-funciona', 'depoimentos']

const NAV_ITEMS = [
  { label: 'Produtos',       id: 'produtos' },
  { label: 'Como Funciona',  id: 'como-funciona' },
  { label: 'Depoimentos',    id: 'depoimentos' },
]

// ── Styled ──────────────────────────────────────────

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 200;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1.5px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0 2px 20px ${({ theme }) => theme.colors.shadow};
  transition: ${({ theme }) => theme.transition};
`

const Inner = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  letter-spacing: -0.02em;
  white-space: nowrap;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 6px;

  img {
    width: 90px;
    height: auto;
  }
`

const DesktopNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
`

const NavBtn = styled.button`
  font-size: 0.88rem;
  font-weight: 500;
  color: ${({ theme, $active }) => $active ? theme.colors.primary : theme.colors.textSecondary};
  background: ${({ theme, $active }) => $active ? theme.colors.primaryLight : 'transparent'};
  border: none;
  padding: 8px 14px;
  border-radius: ${({ theme }) => theme.radius.full};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  white-space: nowrap;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }

  /* ─ esconde no mobile ─ */
  @media (max-width: 640px) {
    display: none;
  }
`

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: 8px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
    transition: ${({ theme }) => theme.transition};
  }

  &.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  &.open span:nth-child(2) { opacity: 0; }
  &.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  @media (max-width: 640px) {
    display: flex;
  }
`

const MobileDrawer = styled.div`
  display: none;
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.surface};
  z-index: 199;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  overflow-y: auto;
  animation: slideDown 0.25s ease;

  &.open { display: flex; }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const MobileNavBtn = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  background: transparent;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 14px 18px;
  cursor: pointer;
  text-align: left;
  transition: ${({ theme }) => theme.transition};
  width: 100%;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primaryLight};
  }
`

const ThemeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  margin-top: 4px;
`

const ThemeLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.textSecondary};
`

// ── Component ────────────────────────────────────────

const Header = ({ isDark, onToggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
  }

  const handleMobileNavClick = (sectionId) => {
    setMobileOpen(false)
    document.body.style.overflow = ''
    setTimeout(() => scrollToSection(sectionId), 260)
  }

  const toggleMobile = () => {
    const next = !mobileOpen
    setMobileOpen(next)
    document.body.style.overflow = next ? 'hidden' : ''
  }

  return (
    <>
      <Wrapper>
        <Inner>
          <Logo href="#"><img src={logo} alt="Logo" /></Logo>

          <DesktopNav>
            {NAV_ITEMS.map(({ label, id }) => (
              <NavBtn
                key={id}
                $active={activeId === id}
                onClick={() => handleNavClick(id)}
              >
                {label}
              </NavBtn>
            ))}
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
            <Hamburger
              className={mobileOpen ? 'open' : ''}
              onClick={toggleMobile}
              aria-label="Abrir menu"
            >
              <span /><span /><span />
            </Hamburger>
          </DesktopNav>
        </Inner>
      </Wrapper>

      <MobileDrawer className={mobileOpen ? 'open' : ''}>
        {NAV_ITEMS.map(({ label, id }) => (
          <MobileNavBtn key={id} onClick={() => handleMobileNavClick(id)}>
            {label}
          </MobileNavBtn>
        ))}
        <ThemeRow>
          <ThemeLabel>{isDark ? 'Modo escuro' : 'Modo claro'}</ThemeLabel>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </ThemeRow>
      </MobileDrawer>
    </>
  )
}

export default Header
