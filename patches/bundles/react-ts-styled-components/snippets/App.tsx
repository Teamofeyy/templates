import styled from 'styled-components'

const Page = styled.main`
  max-width: 48rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  text-align: left;
`

function App() {
  return (
    <Page>
      <h1>{{project_name}}</h1>
      <p>This component is styled with styled-components.</p>
    </Page>
  )
}

export default App
