'use client'

import { useEffect } from 'react'

export default function FooterAccordionSync() {
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    const sync = () => {
      document
        .querySelectorAll<HTMLDetailsElement>('#footer [data-footer-acc]')
        .forEach((d) => { d.open = !mq.matches }) // desktop=abierto, mobile=colapsado
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  return null
}
