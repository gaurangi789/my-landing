import React from 'react';
import Image from 'next/image';
import styles from './PrecisionTemplate.module.css'; 

interface PrecisionTemplateProps {
    title: string;
    description: string;
    imageSrc: string; 
    imageAlt: string;
  }

  const PrecisionTemplate: React.FC<PrecisionTemplateProps> = ({ 
    title, 
    description, 
    imageSrc, 
    imageAlt 
  }) => {
    return (
      <div className={styles.card}>
        <div className={styles.textContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
          <div className={styles.learnMore}>Learn more</div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={imageSrc} alt={imageAlt} width={458} height={272} 
          className={styles.image}/>
        </div>

        
      </div>
    );
  };
  
  export default PrecisionTemplate;