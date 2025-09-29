"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { useState } from "react";
// when we use useState, we need to import it from react and the change in that state actually re-renders the entire component
// each component has its own state
// when we use a state, we need to use the useState hook
// hook should be used at the top level of the component
// hook cannot be used inside a loop, function or a condition
//initialisation, mounting, updating, unmounting are components lifecycle methods
// initialisation is when the component is created
// mounting is when the component is added to the DOM
// updating is when the component is updated
// unmounting is when the component is removed from the DOM
// useEffect is a hook that is called when the component is mounted only when there is no dependency array
// i can add a state in useEffect and it will be called when the state is updated
// server side component is on backend and client side component is on frontend
// server side component is not re-rendered when the state is updated
// client side component is re-rendered when the state is updated


export default function Home() {
 
  const [count, setCount] = useState(0);
  const router = useRouter();
  const newCount = count + 1; // this is not a state, it is a regular variable
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>NovaSphere</h1>
          <p>Launch beautiful web experiences with speed, clarity, and impact.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#features">Get Started</a>
            <a className={styles.secondary} href="#contact">Contact Sales</a>
          </div>
        </div>
        <div className={styles.heroArt}>
          <Image src="/next.svg" alt="Decorative" width={160} height={34} priority />
        </div>
      </header>

      <main className={styles.main}>
       
        <div style={{display: "flex"}}>
        <div style={{padding: "10px"}}>
          <button onClick={()=> router.push("/buyRing")} style={{padding: "10px", backgroundColor: "blue"}}>buy ring</button>
      
        </div>

        <div style={{padding: "10px"}}>
          <button onClick={()=> router.push("/landingPage")} style={{padding: "10px", backgroundColor: "red"}}>landingPage</button>
       
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} NovaSphere</span>
      </footer>
    </div>
  );
}
