import { useLoaderData } from 'react-router-dom'

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
    <section>
      <h1>{data.projectName}</h1>
      <p>React Router Data APIs are configured with createBrowserRouter.</p>
      <p>
        Loader timestamp: <code>{data.generatedAt}</code>
      </p>
    </section>
  )
}
