// components/FeatureCard/FeatureCard.tsx
import React from 'react';
import Image from 'next/image';
import styles from './AccuracyCard.module.css'; 

interface AccuracyCardProps {
  title: string;
  description: string;
  tag?: string; 
  imageSrc: string; 
  imageAlt: string;
}

export default function AccuracyCard({ 
  title, 
  description,  
  imageSrc, 
  imageAlt,
}: AccuracyCardProps) {

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