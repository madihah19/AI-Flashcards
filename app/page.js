import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.card}>
        <h1 className={styles.title}>DrawCards</h1>
        <p className={styles.subtitle}>revolutionize learning one card at a time.</p>
        <a href="/promptgen" className={styles.getStartedButton}>
          Start your journey
        </a>
        <div className={styles.loginPrompt}>
          <p>Not a member? <Link href="/sign-in" className={styles.loginLink}>click here</Link></p>
        </div>
      </div>

    </main>
  );
}
