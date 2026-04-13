"use client"

import { useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function NavBar({ activePage }: { activePage?: string }) {
  const navRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLUListElement>(null)

  const closeMenu = useCallback(() => {
    const toggle = toggleRef.current
    const menu = menuRef.current
    if (!toggle || !menu) return
    toggle.setAttribute('aria-expanded', 'false')
    toggle.setAttribute('aria-label', 'Abrir menú de navegación')
    menu.classList.remove('is-open')
    const scrollY = document.body.style.top
    document.body.style.removeProperty('top')
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
    document.body.classList.remove('menu-open', 'nav-open')
    document.body.style.removeProperty('--scrollbar-width')
    toggle.focus()
  }, [])

  const openMenu = useCallback(() => {
    const toggle = toggleRef.current
    const menu = menuRef.current
    if (!toggle || !menu) return
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth
    document.body.style.setProperty('--scrollbar-width', scrollbarW + 'px')
    toggle.setAttribute('aria-expanded', 'true')
    toggle.setAttribute('aria-label', 'Cerrar menú de navegación')
    menu.classList.add('is-open')
    document.body.style.setProperty('--scroll-y', window.scrollY + 'px')
    document.body.classList.add('menu-open', 'nav-open')
  }, [])

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return

    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 40)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const toggle = toggleRef.current
    if (!toggle) return

    const handleClick = () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true'
      if (isOpen) { closeMenu() } else { openMenu() }
    }
    toggle.addEventListener('click', handleClick)
    return () => toggle.removeEventListener('click', handleClick)
  }, [closeMenu, openMenu])

  useEffect(() => {
    const menu = menuRef.current
    if (!menu) return

    const links = menu.querySelectorAll('a')
    links.forEach(link => link.addEventListener('click', closeMenu))
    return () => links.forEach(link => link.removeEventListener('click', closeMenu))
  }, [closeMenu])

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuRef.current?.classList.contains('is-open')) {
        closeMenu()
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [closeMenu])

  return (
    <nav id="nav" ref={navRef} aria-label="Navegación principal">
      <div className="container">
        <Link href="/" className="nav-logo">
          <Image
            src="/img/logo-medano-final.png"
            alt="Médano — Crecimiento Digital"
            className="nav-logo-img"
            width={120}
            height={28}
            priority
          />
        </Link>
        <ul className="nav-links" id="nav-menu" ref={menuRef}>
          <li className="nav-item-home">
            <Link href="/" aria-current={activePage === 'home' ? 'page' : undefined}>Home</Link>
          </li>
          <li className="nav-item-dropdown">
            <button className="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">
              Servicios
              <svg className="nav-dropdown-chevron" viewBox="0 0 12 8" aria-hidden={true}>
                <polyline points="1,1 6,7 11,1" />
              </svg>
            </button>
            <ul className="nav-dropdown-panel" role="menu">
              <li role="menuitem">
                <Link href="/publicidad-digital">Publicidad Digital</Link>
              </li>
              <li role="menuitem">
                <Link href="/resenas" aria-current={activePage === 'resenas' ? 'page' : undefined}>Gestión de Reseñas</Link>
              </li>
              <li role="menuitem">
                <Link href="/whatsapp-resenas" aria-current={activePage === 'whatsapp-resenas' ? 'page' : undefined}>Reseñas Google por WhatsApp</Link>
              </li>
              {/*<li role="menuitem">
                <Link href="/#seo">SEO y Posicionamiento</Link>
              </li>*/}
            </ul>
          </li>
          <li>
            <Link href="/nosotros" aria-current={activePage === 'nosotros' ? 'page' : undefined}>Nosotros</Link>
          </li>
          {/*<li>
            <Link href="/#projects">Proyectos</Link>
          </li>*/}
          <li>
            <Link href="/#contact">Contacto</Link>
          </li>
        </ul>
        <button
          className="nav-toggle"
          id="nav-toggle"
          ref={toggleRef}
          aria-expanded="false"
          aria-controls="nav-menu"
          aria-label="Abrir menú de navegación"
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
        <a
          href="https://wa.me/5491173616189"
          className="btn-primary nav-cta"
          target="_blank"
          rel="noopener"
        >
          Hablar ahora
        </a>
      </div>
    </nav>
  )
}
