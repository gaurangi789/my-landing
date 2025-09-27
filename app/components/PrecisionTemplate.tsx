'use client';

import React from 'react';
import PrecisionCard from './PrecisionCard';
import styles from './PrecisionTemplate.module.css';

export default function PrecisionTemplate() {
  const cards = [
    {
      title: 'Wake up to your sleep insights',
      description: 'The Sleep Index, intelligently designed to be your sole metric for sleep health, assesses.',
      learnMoreLink: '/sleep-insights',
      imageSrc: '/sleep-tracker.svg',
      imageAlt: 'Sleep tracking visualization',
      backgroundColor: '#f8f9fa'
    },
    {
      title: 'Temperature tracking made easy',
      description: "Skin temperature is vital for measuring your body's physiological states and...",
      learnMoreLink: '/temperature-tracking',
      imageSrc: '/temperature-tracker.svg',
      imageAlt: 'Temperature tracking interface',
      backgroundColor: '#f8f9fa'
    }
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Precision in miniature</h2>
      <div className={styles.cardsGrid}>
        {cards.map((card, index) => (
          <PrecisionCard
            key={index}
            title={card.title}
            description={card.description}
            learnMoreLink={card.learnMoreLink}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            backgroundColor={card.backgroundColor}
          />
        ))}
      </div>
    </section>
  );
}