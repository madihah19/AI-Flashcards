import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
 

      <div className={styles.card}>
        <h1 className={styles.title}>DrawCards</h1>
        <p className={styles.subtitle}>Revolutionize learning one card at a time.</p>
        <a href="/sign-up" className={styles.getStartedButton}>
          Join us
        </a>
        <div className={styles.loginPrompt}>
          <p>Already a member? <Link href="/sign-in" className={styles.loginLink}>click here</Link></p>
        </div>
      </div>

  <div id="Features" className={styles.featuresSection}>
  <h2 className={styles.featureTitle}>Why us?</h2>
  <div className={styles.featureGrid}>
    <div className={styles.featureCard}>
    <h3 className={styles.featurePlanTitle}> 1 </h3>
    
      <p className={styles.featurePlanPrice}>Efficiency</p>
      <p className={styles.featurePlanDescription}>Quick and Easy to use, Learn as you prompt!</p>
    </div>

    <div className={styles.featureCard}>
      <h3 className={styles.featurePlanTitle}> 2 </h3>
      <p className={styles.featurePlanPrice}> Realiablility</p>
      <p className={styles.featurePlanDescription}>
        Open 24x7 , available whenever you need us!
      </p>
    </div>

    <div className={styles.featureCard}>
      <h3 className={styles.featurePlanTitle}> 3 </h3>
      <p className={styles.featurePlanPrice}>Flexibility</p>
      <p className={styles.featurePlanDescription}>Various pricing plans, inclusive of all users</p>
    </div>
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
            <a href="/sign-up" className={styles.pricingButton}>Get Started</a>
          </div>

          {/* Hobbyist Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingPlanTitle}>Hobbyist</h3>
            <p className={styles.pricingPlanPrice}>$8</p>
            <p className={styles.pricingPlanDescription}>Perfect for students and exam aspirants</p>
            <a href="/sign-up" className={styles.pricingButton}>Get Started</a>
          </div>

          {/* Pro Plan */}
          <div className={styles.pricingCard}>
            <h3 className={styles.pricingPlanTitle}>Pro</h3>
            <p className={styles.pricingPlanPrice}>$20</p>
            <p className={styles.pricingPlanDescription}>Ideal for professionals needing advanced features</p>
            <a href="/sign-up" className={styles.pricingButton}>Get Started</a>
          </div>
        </div>
      </div>
    </main>
  );
}