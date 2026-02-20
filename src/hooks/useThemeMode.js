// ─────────────────────────────────────────────────────
//  src/hooks/useThemeMode.js
//  Detecta preferência do sistema, persiste no localStorage
// ─────────────────────────────────────────────────────

import { useState, useEffect } from 'react'

const STORAGE_KEY = 'picotes-theme'

const getSystemPreference = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

const getSavedPreference = () => localStorage.getItem(STORAGE_KEY)

const resolveInitialMode = () => getSavedPreference() ?? getSystemPreference()

const useThemeMode = () => {
  const [mode, setMode] = useState(resolveInitialMode)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, mode)
  }, [mode])

  const toggleMode = () =>
    setMode((current) => (current === 'light' ? 'dark' : 'light'))

  const isDark = mode === 'dark'

  return { mode, isDark, toggleMode }
}

export default useThemeMode
