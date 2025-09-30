import React, { useRef, useState, useEffect } from 'react';
import styles from '../../page.module.css';

const carouselData = [
  { 
    title: "PPG sensor", 
    description: "The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.",
    tag: "PPG SENSORS",
  },
  { 
    title: "6-axis motion sensor", 
    description: "The 6-Axis Motion Sensor accurately tracks movement, including steps, activity levels, and workout sessions.",
    tag: "6-AXIS SENSORS",
  },
  { 
    title: "hypoallergenic smooth inner shell", 
    description: "Engineered with a hypoallergenic shell for maximum comfort and skin-friendly wearability.",
    tag: "COMFORT",
  },
  { 
    title: "Strong from the outside", 
    description: "The durable titanium outer shell is built to withstand daily wear and tear with a premium finish.",
    tag: "DURABILITY",
  },
];

export default function CarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const activeData = carouselData[activeIndex];

  // Auto-advance timer
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2; 
        if (newProgress >= 100) {
          const nextIndex = (activeIndex + 1) % carouselData.length;
          setActiveIndex(nextIndex);
          return 0; 
        }
        return newProgress;
      });
    }, 50); // Update every 50ms for smooth animation

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSlideClick = (index: number) => {
    setActiveIndex(index);
    setProgress(0);
  };
  return (
    <section className={styles.carouselSection}>
      <div className={styles.currentSlideContainer}>
        <div className={styles.activeTitleRow}>
          <div className={styles.slideTitleText} data-active="true">
            {activeData.title}
          </div>
        </div>
        
       
        <div className={styles.progressBarWrapper}>
          <div 
            ref={progressBarRef} 
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className={styles.descriptionBox}>
          <p className={styles.slideDescription}>{activeData.description}</p>
        </div>
      </div>

      {/* Remaining Slides - Vertical List */}
      <div className={styles.remainingSlidesContainer}>
        <div className={styles.remainingSlidesList}>
          {carouselData.map((data, index) => {
            if (index === activeIndex) return null; // Skip current slide
            return (
              <div 
                key={index} 
                className={styles.remainingSlideItem}
                onClick={() => handleSlideClick(index)}
              >
                <div className={styles.remainingSlideTitle}>
                  {data.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
