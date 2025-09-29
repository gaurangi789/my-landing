// components/FeatureCard/FeatureCard.tsx
import React from 'react';
import Image from 'next/image';
// Note: You must create and import a corresponding CSS module for styling
import styles from './FeatureCard.module.css'; 

interface FeatureCardProps {
  title: string;
  description: string;
  tag?: string; 
  imageSrc: string; 
  imageAlt: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  tag, 
  imageSrc, 
  imageAlt 
}: FeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {tag && <span className={styles.tag}>{tag}</span>}
        
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={433}
          height={394}
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