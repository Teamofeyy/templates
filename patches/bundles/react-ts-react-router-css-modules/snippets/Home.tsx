import styles from './Home.module.css'

export function Home() {
  return (
    <section className={styles.page}>
      <h1>{{project_name}}</h1>
      <p>React Router and CSS Modules are configured together.</p>
    </section>
  )
}
