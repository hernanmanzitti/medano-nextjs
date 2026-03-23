'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setWidth(pct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return <div id="reading-progress" style={{ width: `${width}%` }} />
}
