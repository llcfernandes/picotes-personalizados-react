// ─────────────────────────────────────────────────────
//  src/components/ThemeToggle.jsx
// ─────────────────────────────────────────────────────

import styled from 'styled-components'

const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.full};
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transition};
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryLight};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: scale(1.08);
  }
`

const ThemeToggle = ({ isDark, onToggle }) => (
  <Button onClick={onToggle} aria-label="Alternar tema claro/escuro">
    {isDark ? '☀️' : '🌙'}
  </Button>
)

export default ThemeToggle
