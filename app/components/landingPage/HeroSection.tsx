"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import ParallaxRing from "./ParallaxRing";

interface HeroSectionProps {
  isMobile: boolean;
}

export default function HeroSection({ isMobile }: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroFrame}>
        <Image
          src="/ultrahumanBG.svg"
          alt="Ultrahuman hero background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
          className={styles.heroImg}
        />
        <div className={styles.overlay}>
          <div style={{maxWidth:"464px", width:"100%"}}>
            <div className={styles.eyebrow}>WORLD'S MOST COMFORTABLE SLEEP TRACKER</div>
            <div className={styles.title}>Ultrahuman Ring AIR</div>
            <p className={styles.subtitle}>
              Accurately tracks sleep, HRV, temperature, and movement with daily, actionable insights.
            </p>
          </div>
          <Link href="/buyRing" className={styles.cta}>
            Buy Now
          </Link>
          <div suppressHydrationWarning>
            {!isMobile && <ParallaxRing />}
          </div>
        </div>
        <div suppressHydrationWarning>
          {isMobile && <ParallaxRing />}
        </div>
      </div>    
    </section>
  );
}
