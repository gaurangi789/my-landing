// components/FeatureCard/FeatureCard.tsx
import React from 'react';
import Image from 'next/image';
// Note: You must create and import a corresponding CSS module for styling
import styles from './AccuracyCard.module.css'; 

interface AccuracyCardProps {
  title: string;
  description: string;
  tag?: string; 
  imageSrc: string; 
  imageAlt: string;
  hasBorder?: boolean;
}

export default function AccuracyCard({ 
  title, 
  description,  
  imageSrc, 
  imageAlt,
  hasBorder = false
}: AccuracyCardProps) {
  const handleClick = () => {
    // Add any click functionality here
    console.log(`Card clicked: ${title}`);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={60}
          height={60}
          className={styles.image}
        />
      </div>
      
      <div className={styles.textContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}