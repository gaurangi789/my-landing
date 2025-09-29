import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const featureData = [
  { 
    title: "PPG Sensor", 
    description: "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    tag: "PPG SENSORS",
    imageSrc: "/ring2.svg",
  },
  { 
    title: "6-Axis Motion Sensor", 
    description: "The 6-Axis Motion Sensor accurately tracks movement, including steps, activity levels, and workout sessions.",
    tag: "6-AXIS SENSORS",
    imageSrc: "/ring2.svg",
  },
  { 
    title: "Hypoallergenic Smooth Inner Shell", 
    description: "Engineered with a hypoallergenic shell for maximum comfort and skin-friendly wearability.",
    tag: "COMFORT",
    imageSrc: "/ring2.svg",
  },
  { 
    title: "Strong From The Outside", 
    description: "The durable titanium outer shell is built to withstand daily wear and tear with a premium finish.",
    tag: "DURABILITY",
    imageSrc: "/ring2.svg",
  },
];

export default function MobileCarouselSection() {
  return (
    <section className={styles.mobileCarouselSection}>
      <div className={styles.mobileFeatureBlocks}>
        {featureData.map((feature, index) => (
          <div key={index} className={styles.mobileFeatureBlock}>
            {/* Image Section */}
            <div className={styles.mobileFeatureImage}>
              <div className={styles.mobileImageWrapper}>
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  width={300}
                  height={200}
                  className={styles.mobileRingImage}
                />
               
              </div>
            </div>
            
            {/* Text Section */}
            <div className={styles.mobileFeatureText}>
              <h3 className={styles.mobileFeatureTitle}>
                {feature.title}
              </h3>
              <p className={styles.mobileFeatureDescription}>
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
