import styles from './MedanoCTA.module.css'

const SERVICIOS = [
  { icono: '⭐', label: 'Gestión de reseñas' },
  { icono: '📣', label: 'Paid media Meta & Google' },
  { icono: '📊', label: 'Reputación online' },
  { icono: '🎨', label: 'Diseño y contenido' },
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
                <span aria-hidden="true">{s.icono}</span>
                {s.label}
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5491173616189"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Hablar con el equipo →
          </a>
        </div>

      </div>
    </section>
  )
}
