"use client";
import Image from "next/image";
import styles from "./page.module.css";
import CarouselSection from "./CarouselSection";
import MobileCarouselSection from "./MobileCarouselSection";

interface BeautifulInsideSectionProps {
  isMobile: boolean;
}

export default function BeautifulInsideSection({ isMobile }: BeautifulInsideSectionProps) {
  return (
    <section>
      <div className={styles.precisionFrame}>
        <div className={styles.heading}>Beautiful from the inside</div>
        <div suppressHydrationWarning>
          {isMobile ? (
            <MobileCarouselSection />
          ) : (
            <div className={styles.carousalContainer}>
              <div className={styles.carousalLeft}>
                <CarouselSection />
              </div>
              <div className={styles.carousalRight}>
                <div className={styles.fixedImageWrapper}>
                  <Image
                    src="/ring2.svg" 
                    alt="Ultrahuman Ring AIR"
                    width={630}
                    height={440}
                    className={styles.fixedImage}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
