import styles from './app.module.css'

export function App() {
  return (
    <main class={styles.page}>
      <h1>{{project_name}}</h1>
      <p>Preact is using Vite's native CSS Modules support.</p>
    </main>
  )
}
