"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import FadeText from "./FadeText";
import ParallaxRing from "./ParallaxRing";
import PrecisionTemplate from "../components/precision/PrecisionTemplate";
import Box from "../components/coloredBoxes/Box";
import CarouselSection from "./CarouselSection";
import MobileCarouselSection from "./MobileCarouselSection";
import { useIsMobile } from "../hooks/useIsMobile";

export default function LandingPage() {
  const isMobile = useIsMobile();
  const cards = [
    {
      title: 'Wake up to your sleep insights',
      description: 'The Sleep Index, intelligently designed to be your sole metric for sleep health, assesses.',
      learnMoreLink: '/sleep-insights',
      imageSrc: '/precision1.svg',
      imageAlt: 'Sleep tracking visualization',
      backgroundColor: '#f8f9fa'
    },
    {
      title: 'Temperature tracking made easy',
      description: "Skin temperature is vital for measuring your body's physiological states and...",
      learnMoreLink: '/temperature-tracking',
      imageSrc: '/precision2.svg',
      imageAlt: 'Temperature tracking interface',
      backgroundColor: '#f8f9fa'
    }
  ];

  const coloredBoxesData = [
    {
      id: 1,
      value: "4-6",
      label: "Days Battery life",
      backgroundColor: "#193CBF", // Dark blue
      textColor: "#FFFFFF"
    },
    {
      id: 2,
      value: "2.4",
      label: "Grams Light", 
      backgroundColor: "#E1EA72", // Light yellow-green
      textColor: "#000000"
    }
  ];
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>
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
              {!isMobile && <ParallaxRing />}
            </div>
            {isMobile && <ParallaxRing />}
          </div>    
        </section>

        
        <div style={{width: isMobile ? "100%" : "82%"}}>
          <section>
            <div className={styles.beautifulTextOuterWrapper}>
              <div className={styles.aboutWrapper}>
                <div className={styles.smallBlackBox}></div>
                <div className={styles.about}>
                  ABOUT
                </div>
              </div>
              <FadeText className={styles.beautifulText}> 
                Beautiful from the inside. Dive into the realm of design ingenuity. Take a closer look at the stunning interiors, meticulously engineered for a seamless integration of form and function.
              </FadeText>
            </div>
          </section>
          <section>
            {/* <section>
                <CarouselSection />
            </section> */}
            <section>
              <div className={styles.precisionFrame}>
                <div className={styles.heading}>Beautiful from the inside</div>
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
                          src="/ring2.svg" // Constant ring image
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
            </section>
          </section>
          <section>
            <div className={styles.precisionFrame}>
              <div className={styles.heading}>Precision in miniature</div>
              <div className={styles.cardsContainer}>
                {cards.map((card, index) => (
                  <PrecisionTemplate 
                    key={index}
                    title={card.title}
                    description={card.description}
                    imageSrc={card.imageSrc}
                    imageAlt={card.imageAlt}
                  />
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className={styles.accuracyWrapper}>
              <div className={styles.accuracyLeft}>
                <div className={styles.accuracyAboutWrapper}>
                  <div className={styles.smallBlackBox}></div>
                  <div className={styles.sublimeDesignWonder}>
                    A sublime design wonder
                  </div>
                </div>
                <div className={styles.heading}>
                  Accuracy at its core
                </div>
                <div className={styles.coloredBoxes}>
                  {coloredBoxesData.map((box) => (
                    <Box
                      key={box.id}
                      value={box.value}
                      label={box.label}
                      backgroundColor={box.backgroundColor}
                      textColor={box.textColor}
                    />
                  ))}
                </div>
              </div>
              <div className={styles.accuracyRight}></div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


