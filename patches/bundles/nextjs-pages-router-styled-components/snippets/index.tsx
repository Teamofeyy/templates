import styled from "styled-components";

const Page = styled.main`
  max-width: 48rem;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

export default function Home() {
  return (
    <Page>
      <h1>{{project_name}}</h1>
      <p>Next.js Pages Router is configured with styled-components.</p>
    </Page>
  );
}
