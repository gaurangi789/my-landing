import PrecisionTemplate from './components/PrecisionTemplate';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <PrecisionTemplate />
      </main>
    </div>
  );
}