import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { WaPhoneMockup } from '@/components/WaPhoneMockup'
import './page.css'

export const metadata: Metadata = {
  title: 'Reseñas por WhatsApp — Médano',
  description: 'Pedí reseñas a tus clientes por WhatsApp Business API oficial. Sin riesgo de ban, con métricas de entrega en tiempo real, y para todas tus sucursales.',
  robots: { index: false, follow: false },
}

export default function WhatsappResenasPage() {
  return (
    <>
      <NavBar activePage="resenas" />

      <main id="whatsapp-resenas-main">

        {/* ── HERO ─────────────────────────────── */}
        <section id="wa-hero">
          <div className="wp-hero-bg" aria-hidden="true"></div>
          <div className="wp-hero-grid" aria-hidden="true"></div>
          <div className="container">
            <div className="wa-hero-grid">

              <div className="wa-hero-content">
                <div className="hero-eyebrow-shared animate-in">
                  <span className="hero-dot" />
                  Nuevo feature
                </div>

                <h1 className="hero-title-shared animate-in">
                  Más reseñas.<br />
                  Por <em>WhatsApp</em>.
                </h1>

                <p className="wa-hero-sub animate-in">
                  Pedí reseñas a tus clientes por el canal que más usan. Con un mensaje oficial aprobado por Meta, métricas de entrega en tiempo real, y sin riesgo de que bloqueen tu número.
                </p>

                <div className="wa-hero-actions animate-in">
                  <a href="/#contact" className="btn-primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    Activar en mi cuenta
                  </a>
                  <a href="/resenas" className="btn-outline wa-btn-ghost">
                    Ver servicio de reseñas
                  </a>
                </div>

                <div className="wa-hero-trust animate-in">
                  <span className="wa-trust-dot" />
                  API oficial de WhatsApp Business · Aprobado por Meta
                </div>
              </div>

              <div className="wa-hero-visual">
                {/* Stat badge izquierda */}
                <div className="wa-stat-badge wa-stat-badge--left">
                  <span className="wa-stat-value">87%</span>
                  <span className="wa-stat-label">tasa de apertura</span>
                </div>

                {/* Phone mockup */}
                <WaPhoneMockup />

                {/* Stat badge derecha */}
                <div className="wa-stat-badge wa-stat-badge--right">
                  <span className="wa-stat-value">3.2×</span>
                  <span className="wa-stat-label">más respuestas</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── STATS BAR ────────────────────────── */}
        <section id="wa-stats">
          <div className="container">
            <div className="wa-stats-grid">
              <div className="wa-stat-item">
                <span className="wa-big-number">87%</span>
                <span className="wa-stat-item-label">Tasa de apertura</span>
                <span className="wa-stat-item-detail">vs 21% promedio del email</span>
              </div>
              <div className="wa-stats-divider" aria-hidden="true" />
              <div className="wa-stat-item">
                <span className="wa-big-number">3.2×</span>
                <span className="wa-stat-item-label">Más respuestas</span>
                <span className="wa-stat-item-detail">comparado con SMS o email</span>
              </div>
              <div className="wa-stats-divider" aria-hidden="true" />
              <div className="wa-stat-item">
                <span className="wa-big-number">&lt; 2&apos;</span>
                <span className="wa-stat-item-label">Para enviar</span>
                <span className="wa-stat-item-detail">cualquier colaborador lo usa</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── COMO FUNCIONA ────────────────────── */}
        <section id="wp-proceso">
          <div className="container">
            <header className="wa-section-header">
              <span className="section-label">El proceso</span>
              <h2 className="section-heading">Tres pasos. Eso es todo.</h2>
              <p className="section-subheading">
                Tu equipo no necesita saber de tecnología. Si saben usar WhatsApp, saben usar esto.
              </p>
            </header>

            <div className="wp-pasos-grid">

              {/* PASO 01 */}
              <div className="wp-paso-card">
                <span className="wp-paso-num">01</span>
                <div className="wp-paso-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <h3 className="wp-paso-name">Cargás el contacto</h3>
                <p className="wp-paso-desc">Nombre y teléfono. Sin CSV, sin Excel. Un cliente por vez, en segundos, desde la app.</p>
              </div>

              {/* PASO 02 */}
              <div className="wp-paso-card">
                <span className="wp-paso-num">02</span>
                <div className="wp-paso-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="wp-paso-name">Elegís la sucursal</h3>
                <p className="wp-paso-desc">Seleccionás desde qué sede fue el cliente. El link de reseña correcto se asigna automáticamente.</p>
              </div>

              {/* PASO 03 */}
              <div className="wp-paso-card">
                <span className="wp-paso-num">03</span>
                <div className="wp-paso-icon-wrap" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </div>
                <h3 className="wp-paso-name">Enviás y listo</h3>
                <p className="wp-paso-desc">El mensaje sale por WhatsApp oficial. Ves en tiempo real si fue entregado, leído, y si el cliente respondió.</p>
              </div>

            </div>
          </div>
        </section>

        {/* ── PRICING ─────────────────────────── */}
        <section id="wa-pricing">
          <div className="container">
            <header className="wa-section-header">
              <span className="section-label">Planes</span>
              <h2 className="section-heading">Simple. Sin sorpresas.</h2>
              <p className="section-subheading">
                El fee de WhatsApp Business ($25/mes por número) está incluido en todos los planes. Solo pagás el plan y los mensajes que usás.
              </p>
            </header>

            <div className="wa-pricing-grid">

              <div className="wa-plan-card">
                <div className="wa-plan-header">
                  <span className="wa-plan-name">Starter</span>
                  <div className="wa-plan-price">
                    <span className="wa-plan-amount">$49</span>
                    <span className="wa-plan-period">/mes</span>
                  </div>
                  <p className="wa-plan-desc">Para negocios que están arrancando con WhatsApp.</p>
                </div>
                <ul className="wa-plan-features">
                  <li><span className="wa-plan-check">✓</span> 200 mensajes incluidos</li>
                  <li><span className="wa-plan-check">✓</span> 1 número de WhatsApp Business</li>
                  <li><span className="wa-plan-check">✓</span> Multi-sucursal ilimitada</li>
                  <li><span className="wa-plan-check">✓</span> Dashboard de métricas</li>
                  <li><span className="wa-plan-check">✓</span> Historial de envíos</li>
                  <li><span className="wa-plan-check">✓</span> Soporte prioritario</li>
                  <li className="wa-plan-overage"><span className="wa-plan-check">+</span> $0.12 por mensaje extra</li>
                </ul>
                <a href="/#contact" className="btn-outline wa-btn-ghost wa-plan-cta">Empezar</a>
              </div>

              <div className="wa-plan-card wa-plan-card--featured">
                <div className="wa-plan-badge">Más popular</div>
                <div className="wa-plan-header">
                  <span className="wa-plan-name">Growth</span>
                  <div className="wa-plan-price">
                    <span className="wa-plan-amount">$89</span>
                    <span className="wa-plan-period">/mes</span>
                  </div>
                  <p className="wa-plan-desc">Para negocios con flujo constante de clientes.</p>
                </div>
                <ul className="wa-plan-features">
                  <li><span className="wa-plan-check">✓</span> 500 mensajes incluidos</li>
                  <li><span className="wa-plan-check">✓</span> 1 número de WhatsApp Business</li>
                  <li><span className="wa-plan-check">✓</span> Multi-sucursal ilimitada</li>
                  <li><span className="wa-plan-check">✓</span> Dashboard de métricas</li>
                  <li><span className="wa-plan-check">✓</span> Historial de envíos</li>
                  <li><span className="wa-plan-check">✓</span> Soporte prioritario</li>
                  <li className="wa-plan-overage"><span className="wa-plan-check">+</span> $0.10 por mensaje extra</li>
                </ul>
                <a href="/#contact" className="btn-primary wa-plan-cta">Empezar</a>
              </div>

              <div className="wa-plan-card">
                <div className="wa-plan-header">
                  <span className="wa-plan-name">Pro</span>
                  <div className="wa-plan-price">
                    <span className="wa-plan-amount">$149</span>
                    <span className="wa-plan-period">/mes</span>
                  </div>
                  <p className="wa-plan-desc">Para cadenas y negocios de alto volumen.</p>
                </div>
                <ul className="wa-plan-features">
                  <li><span className="wa-plan-check">✓</span> 1,000 mensajes incluidos</li>
                  <li><span className="wa-plan-check">✓</span> 1 número de WhatsApp Business</li>
                  <li><span className="wa-plan-check">✓</span> Multi-sucursal ilimitada</li>
                  <li><span className="wa-plan-check">✓</span> Dashboard de métricas</li>
                  <li><span className="wa-plan-check">✓</span> Historial de envíos</li>
                  <li><span className="wa-plan-check">✓</span> Soporte prioritario</li>
                  <li className="wa-plan-overage"><span className="wa-plan-check">+</span> $0.09 por mensaje extra</li>
                </ul>
                <a href="/#contact" className="btn-outline wa-btn-ghost wa-plan-cta">Empezar</a>
              </div>

            </div>

            <p className="wa-pricing-note">
              Todos los precios en USD. El costo de mensajes de Meta se pasa 1:1, sin markup. Cancelás cuando querés.
            </p>
          </div>
        </section>

        {/* ── FEATURES + COMPARATIVA ───────────── */}
        <section id="wa-features">
          <div className="container">
            <div className="wa-features-layout">

              <div className="wa-features-left">
                <span className="section-label">Por qué WhatsApp</span>
                <h2 className="section-heading">Oficial. Seguro.<br />Sin riesgo de ban.</h2>
                <p className="section-subheading">
                  Muchas empresas usan su WhatsApp Business para pedir reseñas. Eso puede generar bloqueos automáticos de Meta. Nuestra solución usa la API oficial de WhatsApp Business.
                </p>

                <ul className="wa-feature-list">
                  <li className="wa-feature-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                    </div>
                    <div>
                      <strong>API oficial de WhatsApp</strong>
                      <p>Template aprobado por Meta. Sin riesgo de que bloqueen tu número de negocio.</p>
                    </div>
                  </li>
                  <li className="wa-feature-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
                    </div>
                    <div>
                      <strong>Métricas de entrega en tiempo real</strong>
                      <p>Sabés cuántos mensajes se enviaron, cuántos llegaron y cuántos se leyeron.</p>
                    </div>
                  </li>
                  <li className="wa-feature-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <div>
                      <strong>Multi-sucursal</strong>
                      <p>Cada sede tiene su propio link de reseña asignado automáticamente.</p>
                    </div>
                  </li>
                  <li className="wa-feature-item">
                    <div className="service-icon">
                      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    </div>
                    <div>
                      <strong>Historial completo</strong>
                      <p>Registro de todos los envíos con estado por contacto.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="wa-features-right">
                <p className="wa-comparison-label">WhatsApp Business vs API WhatsApp Médano</p>

                <div className="wa-comparison-card">
                  <div className="wa-comparison-header">
                    <span className="wa-comparison-name">WhatsApp Business</span>
                  </div>
                  {[
                    ['Riesgo de ban por Meta', false, 'Alto riesgo'],
                    ['Métricas de entrega', false, 'No disponible'],
                    ['Personalización por sucursal', false, 'Manual'],
                    ['Historial de envíos', false, 'No existe'],
                    ['Escalabilidad', false, 'Limitada'],
                  ].map(([label, ok, val]) => (
                    <div key={label as string} className="wa-comparison-row">
                      <span className="wa-comparison-row-label">{label}</span>
                      <span className={`wa-comparison-val ${ok ? 'wa-val--yes' : 'wa-val--no'}`}>
                        {ok
                          ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
                          : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12"/></svg>
                        }
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="wa-comparison-card wa-comparison-card--featured">
                  <div className="wa-comparison-header">
                    <span className="wa-comparison-name">
                      API WhatsApp Médano
                      <span className="wa-badge-new">Nuevo</span>
                    </span>
                  </div>
                  {[
                    ['Riesgo de ban por Meta', true, 'API oficial'],
                    ['Métricas de entrega', true, 'En tiempo real'],
                    ['Personalización por sucursal', true, 'Automática'],
                    ['Historial de envíos', true, 'Completo'],
                    ['Escalabilidad', true, 'Ilimitada'],
                  ].map(([label, ok, val]) => (
                    <div key={label as string} className="wa-comparison-row">
                      <span className="wa-comparison-row-label">{label}</span>
                      <span className={`wa-comparison-val ${ok ? 'wa-val--yes' : 'wa-val--no'}`}>
                        {ok
                          ? <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>
                          : <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M6 18L18 6M6 6l12 12"/></svg>
                        }
                        {val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────── */}
        <section id="wa-cta">
          <div className="container">
            <div className="wa-cta-card">
              <span className="section-label" style={{ justifyContent: 'center' }}>Empezá hoy</span>
              <h2 className="section-heading">¿Listo para más reseñas<br />por WhatsApp?</h2>
              <p className="section-subheading" style={{ marginInline: 'auto', textAlign: 'center' }}>
                Ya tenés el canal más poderoso para pedirlas. Solo falta activar el feature en tu cuenta de Médano.
              </p>
              <div className="wa-cta-actions">
                <a href="/#contact" className="btn-primary">
                  Activar WhatsApp en mi cuenta
                </a>
                <a href="/resenas" className="btn-outline wa-btn-ghost">
                  Ver servicio de reseñas
                </a>
              </div>
              <p className="wa-cta-note">Disponible para clientes de Médano. Requiere cuenta de WhatsApp Business.</p>
            </div>
          </div>
        </section>

      </main>

    </>
  )
}
