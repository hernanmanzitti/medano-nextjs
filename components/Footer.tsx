import Link from 'next/link'

export function Footer() {
  return (
    <footer id="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <img
                src="/img/logo-medano-final.png"
                alt="Médano — Crecimiento Digital"
                className="footer-logo-img"
              />
            </Link>
            <p>Crecimiento digital para marcas que quieren liderar. Buenos Aires, Argentina.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/medano.latam/" className="social-link" aria-label="Instagram" target="_blank" rel="noopener">
                <svg aria-hidden={true} viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/medano-latam/" className="social-link" aria-label="LinkedIn" target="_blank" rel="noopener">
                <svg aria-hidden={true} viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Servicios</h5>
            <ul>
              <li><Link href="/#services">Paid Media</Link></li>
              <li><Link href="/#resenas">Reseñas</Link></li>
              <li><Link href="/#services">Community Management</Link></li>
              <li><Link href="/#services">Analytics &amp; Data</Link></li>
              <li><Link href="/#services">Diseño</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Empresa</h5>
            <ul>
              <li><Link href="/nosotros">Nosotros</Link></li>
              {/*<li><Link href="/#projects">Proyectos</Link></li>*/}
              <li><a href="https://datatrackers.co/" target="_blank" rel="noopener">DataTrackers</a></li>
              {/*<li><a href="/blog">Blog</a></li>*/}
              <li><Link href="/#contact">Contacto</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Calculadoras</h5>
            <ul>
              <li><Link href="/calculadora/resenas">Calculadora de Reseñas</Link></li>
              <li><Link href="/calculadora/resenas/restaurantes">Restaurantes</Link></li>
              <li><Link href="/calculadora/resenas/clinicas">Clínicas</Link></li>
              <li><Link href="/calculadora/resenas/hoteles">Hoteles</Link></li>
              <li><Link href="/calculadora/resenas/gimnasios">Gimnasios</Link></li>
              <li><Link href="/calculadora/resenas/inmobiliarias">Inmobiliarias</Link></li>
              <li><Link href="/calculadora/resenas/veterinarias">Veterinarias</Link></li>
              <li><Link href="/calculadora/resenas/hospitales">Hospitales</Link></li>
              <li><Link href="/calculadora/resenas/farmacias">Farmacias</Link></li>
              <li><Link href="/calculadora/resenas/supermercados">Supermercados</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>DataTrackers</h5>
            <ul>
              <li><a href="https://datatrackers.co/" target="_blank" rel="noopener">Software de reseñas</a></li>
              <li><a href="https://datatrackers.co/" target="_blank" rel="noopener">Gestión de reputación</a></li>
              <li><a href="https://datatrackers.co/" target="_blank" rel="noopener">Para franquicias</a></li>
              <li><a href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2i0iCAT2PidpUenqZLfQUtnBXPvttRlAUsLoNEIsGYog9JkaP1H04tOI2lOoMwaa5o8dJ7AKMG" target="_blank" rel="noopener">Demo gratuita</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Médano. Todos los derechos reservados. Buenos Aires, Argentina.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
