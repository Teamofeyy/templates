import styled from 'styled-components'

const Page = styled.section`
  padding: 2rem 0;
`

export function Home() {
  return (
    <Page>
      <h1>{{project_name}}</h1>
      <p>React Router and styled-components are configured together.</p>
    </Page>
  )
}
