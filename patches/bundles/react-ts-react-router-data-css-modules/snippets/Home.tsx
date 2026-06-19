import { useLoaderData } from 'react-router'
import styles from './Home.module.css'

type HomeLoaderData = {
  projectName: string
  generatedAt: string
}

export function homeLoader(): HomeLoaderData {
  return {
    projectName: '{{project_name}}',
    generatedAt: new Date().toISOString(),
  }
}

export function Home() {
  const data = useLoaderData() as HomeLoaderData

  return (
    <section className={styles.page}>
      <h1>{data.projectName}</h1>
      <p>React Router Data APIs and CSS Modules are configured together.</p>
      <p>Loader timestamp: {data.generatedAt}</p>
    </section>
  )
}
