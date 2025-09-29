"use client";
import React, { useEffect, useRef } from 'react'; // Import hooks
import Image from "next/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger for Next.js
import styles from "./page.module.css";
import { useIsMobile } from "../hooks/useIsMobile";

// 1. Register plugins once globally (best practice)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxRing() {
  // 2. Create a ref to attach to the element we want to move
  const ringRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const ringElement = ringRef.current;
    if (!ringElement) return;
    
    // Define different movement values for mobile and desktop
    const MAX_PARALLAX_Y_MOVEMENT = isMobile ? -300 : -400;
    const START_POSITION = isMobile ? "top bottom" : "top 80%";
    const END_DISTANCE = isMobile ? "+=800" : "+=1000";

    // 3. Set up the GSAP animation linked to the scroll
    // We use .to() to animate from the current state (defined by CSS 'bottom: -150px') 
    // to the destination state (y: -150px)
    gsap.to(ringElement, {
      // The destination state: move up (negative Y)
      y: MAX_PARALLAX_Y_MOVEMENT, 
      ease: "none", // Use linear easing for a direct 1:1 link to scroll speed
      
      scrollTrigger: {
        trigger: ringElement, // The element that defines the scroll bounds
        
        // Start: Different start position for mobile
        start: START_POSITION, 
        
        // End: The animation completes after scrolling this distance
        end: END_DISTANCE,
        
        scrub: true, // IMPORTANT: Links the animation's progress directly to the scrollbar
        // markers: true, // Uncomment for debugging the start/end points
      },
    });

    // 4. Cleanup function
    return () => {
      // Find the specific ScrollTrigger instance associated with this element and kill it
      const triggers = ScrollTrigger.getAll();
      triggers.forEach(trigger => {
        if (trigger.trigger === ringElement) {
          trigger.kill();
        }
      });
    };
  }, [isMobile]); // Re-run when isMobile changes

  return (
    // 5. Attach the ref here
    <div ref={ringRef} className={isMobile ? styles.ringAbsoluteWrapperMobile : styles.ringAbsoluteWrapper}> 
      <Image
        src="/ring.svg" // Keep the image source as you provided
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