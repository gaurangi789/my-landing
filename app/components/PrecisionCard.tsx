'use client';

import React from 'react';
import Image from 'next/image';
import styles from './PrecisionCard.module.css';

interface PrecisionCardProps {
  title: string;
  description: string;
  learnMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  backgroundColor?: string;
}

export default function PrecisionCard({
  title,
  description,
  learnMoreLink,
  imageSrc,
  imageAlt,
  backgroundColor = '#f5f5f5'
}: PrecisionCardProps) {
  return (
    <div className={styles.card} style={{ backgroundColor }}>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <a href={learnMoreLink} className={styles.learnMore}>
          LEARN MORE
          <span className={styles.arrow}>→</span>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          width={458}
          height={200}
          className={styles.image}
          priority
        />
      </div>
    </div>
  );
}