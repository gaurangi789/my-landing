
import { useState, useEffect } from 'react';

const MOBILE_BREAKPOINT = 768; 

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  );

  useEffect(() => {
    // Check if we are running in the browser
    if (typeof window === 'undefined') {
      return;
    }

    const handleResize = () => {
      // Update the state based on the new innerWidth
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Initial check (in case the state was initialized to 'false' during SSR)
    handleResize(); 

    // 3. Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return isMobile;
};