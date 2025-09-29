"use client";
import React, { useEffect, useRef } from 'react'; // Import hooks
import Image from "next/image";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger for Next.js
import styles from "./page.module.css";

// 1. Register plugins once globally (best practice)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ParallaxRing() {
  // 2. Create a ref to attach to the element we want to move
  const ringRef = useRef<HTMLDivElement>(null);
  
  // Define the maximum distance (in pixels) the ring should move up
  const MAX_PARALLAX_Y_MOVEMENT = -400; 

  useEffect(() => {
    const ringElement = ringRef.current;
    if (!ringElement) return;

    // 3. Set up the GSAP animation linked to the scroll
    // We use .to() to animate from the current state (defined by CSS 'bottom: -150px') 
    // to the destination state (y: -150px)
    gsap.to(ringElement, {
      // The destination state: move 150 pixels up (negative Y)
      y: MAX_PARALLAX_Y_MOVEMENT, 
      ease: "none", // Use linear easing for a direct 1:1 link to scroll speed
      
      scrollTrigger: {
        trigger: ringElement, // The element that defines the scroll bounds
        
        // Start: When the top of the ring's wrapper hits 80% of the viewport height (near the bottom)
        start: "top 80%", 
        
        // End: The animation completes when the top of the ring's wrapper hits the center of the viewport
        end: "+=1000",
        
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
  }, []); // Empty dependency array means it runs only ONCE on mount

  return (
    // 5. Attach the ref here
    <div ref={ringRef} className={styles.ringAbsoluteWrapper}> 
      <Image
        src="/ring.svg" // Keep the image source as you provided
        alt="Ultrahuman Ring AIR"
        width={433}
        height={394}
        sizes="(max-width: 768px) 30vw, (max-width: 480px) 35vw, 25vw"
        className={styles.ring}
        priority
      />
    </div>
  );
}