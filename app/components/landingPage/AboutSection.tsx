"use client";
import styles from "./page.module.css";
import FadeText from "./FadeText";

export default function AboutSection() {
  return (
    <section>
      <div className={styles.beautifulTextOuterWrapper}>
        <div className={styles.aboutWrapper}>
          <div className={styles.smallBlackBox}></div>
          <div className={styles.about}>
            ABOUT
          </div>
        </div>
        <FadeText className={styles.beautifulText}> 
          Beautiful from the inside. Dive into the realm of design ingenuity. Take a closer look at the stunning interiors, meticulously engineered for a seamless integration of form and function.
        </FadeText>
      </div>
    </section>
  );
}
