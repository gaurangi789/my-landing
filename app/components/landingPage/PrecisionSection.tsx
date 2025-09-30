"use client";
import styles from "./page.module.css";
import PrecisionTemplate from "../precision/PrecisionTemplate";

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

export default function PrecisionSection() {
  return (
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
  );
}
