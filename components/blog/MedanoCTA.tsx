import Link from 'next/link'
import styles from './MedanoCTA.module.css'

const SERVICIOS = [
  { label: 'Gestión de reseñas' },
  { label: 'Paid media Meta & Google' },
  { label: 'Community Management' },
  { label: 'Diseño y contenido' },
  { label: 'SEO & Posicionamiento' },
]

export default function MedanoCTA() {
  return (
    <section id="blog-medano-cta" className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.text}>
          <p className={styles.eyebrow}>Médano Agencia</p>
          <h2 className={styles.title}>
            ¿Preferís que lo hagamos nosotros?
          </h2>
          <p className={styles.body}>
            Todo lo que describimos en esta nota es lo que hacemos
            todos los días para nuestros clientes. Si no tenés tiempo
            o equipo para implementarlo, nosotros nos encargamos.
          </p>
          <ul className={styles.servicios}>
            {SERVICIOS.map(s => (
              <li key={s.label} className={styles.servicio}>
                {s.label}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link href="/#contact" className="btn-outline">
              Completar formulario
            </Link>
            <a
              href="https://wa.me/5491173616189"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Hablar por WhatsApp
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
