import styles from './App.module.css'

function App() {
  return (
    <main class={styles.page}>
      <h1>{{project_name}}</h1>
      <p>Solid is using Vite's native CSS Modules support.</p>
    </main>
  )
}

export default App
