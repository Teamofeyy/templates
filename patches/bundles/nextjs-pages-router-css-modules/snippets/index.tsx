import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>{{project_name}}</h1>
      <p>Next.js Pages Router is using a locally scoped CSS Module.</p>
    </main>
  );
}
