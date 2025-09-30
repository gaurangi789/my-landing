"use client";
import styles from "./page.module.css";
import { useIsMobile } from "./hooks/useIsMobile";
import HeroSection from "./components/landingPage/HeroSection";
import AboutSection from "./components/landingPage/AboutSection";
import BeautifulInsideSection from "./components/landingPage/BeautifulInsideSection";
import PrecisionSection from "./components/landingPage/PrecisionSection";
import AccuracySection from "./components/landingPage/AccuracySection";

export default function LandingPage() {
  const isMobile = useIsMobile();
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <HeroSection isMobile={isMobile} />
        
        <div style={{width: isMobile ? "100%" : "82%"}} suppressHydrationWarning>
          <AboutSection />
          <BeautifulInsideSection isMobile={isMobile} />
          <PrecisionSection />
          <AccuracySection />
        </div>
      </main>
    </div>
  );
}