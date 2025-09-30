
"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register plugins once
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface FadeTextProps {
  className: string;
  children: string; 
}

const FadeText: React.FC<FadeTextProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  
  const words = children.split(/\s+/).map((word, index) => (
    <span key={index} className="word-wrapper" style={{ display: 'inline-block' }}>
      {word}
      &nbsp; 
    </span>
  ));
 

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    console.log(el,'el');

    gsap.set(el.querySelectorAll('.word-wrapper'), { 
      color: '#999' // Initial grayed-out color
    });


    gsap.to(el.querySelectorAll('.word-wrapper'), {
     
      color: '#000000', 
      ease: "power1.inOut", 
      
 
      stagger: 0.02, 
      
      scrollTrigger: {
        trigger: el, 
       
        start: "top center", 
        
        end: "+=500",  // The animation lasts for 1500 pixels of scrolling
        scrub: true, 
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }); 

  return (
    <span ref={containerRef} className={className} style={{ display: 'block', textAlign: 'justify'  }}>
      {words}
    </span>
  );
};

export default FadeText;