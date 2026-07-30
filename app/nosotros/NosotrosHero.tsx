"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const ROTATE_MS = 3500; // debe coincidir con --nh-rotate en el CSS

type Person = {
  id: string;
  name: string;
  firstName: string;
  role: string;
  linkedin: string;
  photo: string;
};

const PEOPLE: Person[] = [
  {
    id: "manuel",
    name: "Manuel Barrenechea",
    firstName: "Manuel",
    role: "Director de Estrategia y Reputación Online",
    linkedin: "https://www.linkedin.com/in/manuel-barrenechea-76756b8/",
    photo: "/img/manuel.jpg",
  },
  {
    id: "florencia",
    name: "María Florencia Turdó",
    firstName: "Florencia",
    role: "Directora de Paid Media",
    linkedin: "https://www.linkedin.com/in/maria-florencia-turd%C3%B3-5b7b30114/",
    photo: "/img/florencia.jpg",
  },
];

export default function NosotrosHero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  useEffect(() => {
    if (paused || reduced.current) return;
    const t = setTimeout(
      () => setActive((i) => (i + 1) % PEOPLE.length),
      ROTATE_MS
    );
    return () => clearTimeout(t);
  }, [active, paused]);

  const go = useCallback(
    (i: number) =>
      setActive(((i % PEOPLE.length) + PEOPLE.length) % PEOPLE.length),
    []
  );

  const current = PEOPLE[active];

  return (
    <section id="nosotros-hero" aria-label="Presentación del equipo">
      <div className="nh-container">
        <div className="nh-copy">
          <p className="nh-eyebrow">Nosotros</p>
          <h1 className="nh-title">Las personas detrás de tu crecimiento.</h1>
          <p className="nh-lead">
            Médano no es solo software. Somos el equipo que hace crecer negocios
            con múltiples sucursales: reputación online, paid media y estrategia
            digital, con personas que dan la cara.
          </p>

          <nav className="nosotros-page-nav" aria-label="Secciones de la página">
            <a href="#quienes-somos" className="nosotros-pn-item">
              <span>Quiénes somos</span>
              <span className="nosotros-pn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#nuestro-camino" className="nosotros-pn-item">
              <span>Nuestro camino</span>
              <span className="nosotros-pn-arrow" aria-hidden="true">→</span>
            </a>
            <a href="#el-equipo" className="nosotros-pn-item">
              <span>El equipo</span>
              <span className="nosotros-pn-arrow" aria-hidden="true">→</span>
            </a>
          </nav>
        </div>

        <div
          className="nh-stage"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="nh-frame">
            {PEOPLE.map((p, i) => (
              <figure
                key={p.id}
                className={`nh-panel${i === active ? " is-active" : ""}`}
                aria-hidden={i !== active}
              >
                <a
                  className="nh-photo-link"
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i === active ? 0 : -1}
                  aria-label={`${p.name} — ver LinkedIn`}
                >
                  <img
                    className="nh-photo"
                    src={p.photo}
                    alt={`${p.name} — ${p.role}`}
                    width={800}
                    height={800}
                    loading="eager"
                    decoding="async"
                  />
                </a>
                <figcaption className="nh-meta">
                  <span className="nh-name">{p.name}</span>
                  <span className="nh-role">{p.role}</span>
                  <a
                    className="nh-linkedin"
                    href={p.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={i === active ? 0 : -1}
                  >
                    LinkedIn de {p.firstName}
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M3 9L9 3M9 3H4M9 3V8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="nh-progress" key={`${active}-${paused}`}>
            <span
              className="nh-progress-bar"
              style={{ animationPlayState: paused ? "paused" : "running" }}
            />
          </div>

          <div className="nh-controls">
            <div className="nh-dots" role="tablist" aria-label="Integrantes del equipo">
              {PEOPLE.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  className={`nh-dot${i === active ? " is-active" : ""}`}
                  onClick={() => go(i)}
                  aria-label={`Ver a ${p.name}`}
                  aria-current={i === active}
                />
              ))}
            </div>
          </div>

          <p className="nh-live" aria-live="polite">
            {current.name}, {current.role}
          </p>
        </div>
      </div>
    </section>
  );
}
