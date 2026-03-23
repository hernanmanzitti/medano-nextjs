import styles from './BlogBreadcrumb.module.css'

interface Props {
  title: string
}

export default function BlogBreadcrumb({ title }: Props) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <a href="/">Inicio</a>
      <span aria-hidden="true">&#8250;</span>
      <a href="/notas">Notas</a>
      <span aria-hidden="true">&#8250;</span>
      <span>{title}</span>
    </nav>
  )
}
