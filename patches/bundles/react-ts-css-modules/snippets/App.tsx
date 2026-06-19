import styles from './App.module.css'

function App() {
  return (
    <main className={styles.page}>
      <h1>{{project_name}}</h1>
      <p>This component is styled with a locally scoped CSS Module.</p>
    </main>
  )
}

export default App
