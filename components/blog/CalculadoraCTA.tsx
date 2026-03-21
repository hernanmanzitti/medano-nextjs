import styles from './CalculadoraCTA.module.css'

interface Props {
  vertical?: string
}

export default function CalculadoraCTA({ vertical }: Props) {
  const label = 'tu negocio'
  const href = vertical
    ? `/calculadora/resenas/${vertical}/buenos-aires`
    : '/calculadora/resenas'

  return (
    <section id="blog-calculadora-cta" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Calculadora gratuita</p>
        <h2 className={styles.title}>
        ¿Cuantas reseñas necesita {label}?
        </h2>
        <p className={styles.body}>
          Calcula en segundos cuantas resenas necesitas para mejorar tu rating
          y superar a tu competencia.
        </p>
        <a href={href} className={styles.cta}>
          Usar la calculadora
        </a>
      </div>
    </section>
  )
}
