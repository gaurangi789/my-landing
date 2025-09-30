"use client";
import React, { useEffect, useRef } from 'react'; // Import hooks
import Image from "next/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger for Next.js
import styles from "../../page.module.css";
import { useIsMobile } from "../../hooks/useIsMobile";


if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxRing() {

  const ringRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const ringElement = ringRef.current;
    if (!ringElement) return;
    
    const MAX_PARALLAX_Y_MOVEMENT = isMobile ? -300 : -400;
    const START_POSITION = isMobile ? "top bottom" : "top 80%";
    const END_DISTANCE = isMobile ? "+=800" : "+=1000";



    gsap.to(ringElement, {

      y: MAX_PARALLAX_Y_MOVEMENT, 
      ease: "none", // Use linear easing for a direct 1:1 link to scroll speed
      
      scrollTrigger: {
        trigger: ringElement, // The element that defines the scroll bounds
        
        // Start: Different start position for mobile
        start: START_POSITION, 
        
        // End: The animation completes after scrolling this distance
        end: END_DISTANCE,
        
        scrub: true, 
     
      },
    });


    return () => {
      
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger === ringElement) {
          trigger.kill();
        }
      });
    };
  }, [isMobile]); 

  return (
 
    <div ref={ringRef} className={isMobile ? styles.ringAbsoluteWrapperMobile : styles.ringAbsoluteWrapper} suppressHydrationWarning>
      <Image
        src="/ring.svg" 
        alt="Ultrahuman Ring AIR"
        width={433}
        height={394}
        sizes="(max-width: 768px) 50vw, 433px"
        className={styles.ring}
        priority
      />
    </div>
  );
}