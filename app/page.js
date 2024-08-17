import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
 

      <div className={styles.card}>
        <h1 className={styles.title}>DrawCards</h1>
        <p className={styles.subtitle}>Revolutionize learning one card at a time.</p>
        <a href="/promptgen" className={styles.getStartedButton}>
          Start your journey
        </a>
        <div className={styles.loginPrompt}>
          <p>Not a member? <Link href="/sign-in" className={styles.loginLink}>click here</Link></p>
        </div>
      </div>

      <div id="pricing" className={styles.pricingSection}>
        <h2 className={styles.pricingTitle}>Pricing</h2>
        <div className={styles.pricingGrid}>
          {/* Free Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingPlanTitle}>Free</h3>
            <p className={styles.pricingPlanPrice}>Free</p>
            <p className={styles.pricingPlanDescription}>Generation of cards up to 10 prompts</p>
            <a href="/signup" className={styles.pricingButton}>Get Started</a>
          </div>

          {/* Hobbyist Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingPlanTitle}>Hobbyist</h3>
            <p className={styles.pricingPlanPrice}>$8</p>
            <p className={styles.pricingPlanDescription}>Perfect for students</p>
            <a href="/signup" className={styles.pricingButton}>Get Started</a>
          </div>

          {/* Pro Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingPlanTitle}>Pro</h3>
            <p className={styles.pricingPlanPrice}>$20</p>
            <p className={styles.pricingPlanDescription}>Ideal for professionals needing advanced features</p>
            <a href="/signup" className={styles.pricingButton}>Get Started</a>
          </div>
        </div>
      </div>
    </main>
  );
}
