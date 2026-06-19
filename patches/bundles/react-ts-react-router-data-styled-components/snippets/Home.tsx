import { useLoaderData } from 'react-router'
import styled from 'styled-components'

const Page = styled.section`
  padding: 2rem 0;
`

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
    <Page>
      <h1>{data.projectName}</h1>
      <p>React Router Data APIs and styled-components are configured together.</p>
      <p>Loader timestamp: {data.generatedAt}</p>
    </Page>
  )
}
