import Image from "next/image";
import styles from "./page.module.css";
import AccuracySection from "./components/AccuracySection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Your existing landing page content would go here */}
        {/* For now, I'm just adding the AccuracySection */}
        <AccuracySection />
      </main>
    </div>
  );
}
