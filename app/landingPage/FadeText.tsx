
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// we use interface word to define the structure of the props
interface FadeTextProps {
  className: string;
  children: string; // Ensure children is treated as a string
}

const FadeText: React.FC<FadeTextProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  
  const words = children.split(/\s+/).map((word, index) => (
    <span key={index} className="word-wrapper" style={{ display: 'inline-block' }}>
      {word}
      &nbsp; {/* Add a space after each word */}
    </span>
  ));
  //Spacing: The &nbsp; added inside each <span> ensures the words don't run together on the screen.
 

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    console.log(el,'el');
    // 1. Set the initial state for ALL words: fully transparent
    gsap.set(el.querySelectorAll('.word-wrapper'), { 
      color: '#999' // Initial grayed-out color
    });

    // 2. Create the scroll-driven animation
    gsap.to(el.querySelectorAll('.word-wrapper'), {
     // Animate to fully visible
      color: '#000000', // Animate to black (or your final text color)
      ease: "power1.inOut", 
      
      // 🔥 THE STAGGER EFFECT
      stagger: 0.02, // Delay between the start of each word's animation (0.05 seconds)
      
      scrollTrigger: {
        trigger: el, 
        // Start: When the top of the container hits the center of the viewport
        start: "top center", 
        // End: Adjust this duration to control how fast the entire sequence plays out
        end: "+=500",  // The animation lasts for 1500 pixels of scrolling
        scrub: true, // Links the sequence's progress to the scroll
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }); // Re-run effect if children text changes

  return (
    <span ref={containerRef} className={className} style={{ display: 'block', textAlign: 'justify'  }}>
      {words}
    </span>
  );
};

export default FadeText;