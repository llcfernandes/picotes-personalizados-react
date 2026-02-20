// ─────────────────────────────────────────────────────
//  src/hooks/useScrollSpy.js
//  Detecta qual seção está visível e retorna o id ativo
// ─────────────────────────────────────────────────────

import { useState, useEffect } from 'react'

const useScrollSpy = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const handleScroll = () => {
      let current = sectionIds[0]

      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 130) {
          current = id
        }
      })

      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeId
}

export default useScrollSpy
