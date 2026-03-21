import styles from './CalculadoraCTA.module.css'

interface Props {
  vertical?: string
}

const VERTICAL_LABELS: Record<string, string> = {
  restaurantes: 'restaurantes',
  hoteles: 'hoteles',
  clinicas: 'clinicas',
  gimnasios: 'gimnasios',
  veterinarias: 'veterinarias',
}

export default function CalculadoraCTA({ vertical }: Props) {
  const label = vertical ? VERTICAL_LABELS[vertical] ?? vertical : 'tu negocio'
  const href = vertical
    ? `/calculadora/resenas/${vertical}/buenos-aires`
    : '/calculadora/resenas'

  return (
    <section id="blog-calculadora-cta" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Calculadora gratuita</p>
        <h2 className={styles.title}>
          Cuantas resenas necesita {label}?
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
