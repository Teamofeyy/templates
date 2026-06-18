export default function Home() {
  return (
    <main className="page">
      <section className="main">
        <p className="eyebrow">Next.js Pages Router template</p>
        <h1>{{project_name}}</h1>
        <p className="lead">
          This project uses the Next.js Pages Router with file-system routes in
          the pages directory.
        </p>
        <div className="actions">
          <a className="button" href="https://nextjs.org/docs/pages">
            Pages Router docs
          </a>
          <a className="button secondary" href="https://react.dev">
            React docs
          </a>
        </div>
      </section>
    </main>
  );
}
