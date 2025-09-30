"use client";
import styles from "./page.module.css";
import Box from "../coloredBoxes/Box";
import AccuracyCard from "../accuracyCard/AccuracyCard";

const coloredBoxesData = [
  {
    id: 1,
    value: "4-6",
    label: "Days Battery life",
    backgroundColor: "#193CBF",
    textColor: "#FFFFFF"
  },
  {
    id: 2,
    value: "2.4",
    label: "Grams Light", 
    backgroundColor: "#E1EA72",
    textColor: "#000000"
  }
];

const accuracyCardsData = [
  {
    title: "Precision engineering at the UltraFactory",
    description: "Ultrahuman's integrated production facility ensures gold-standard performance testing, providing complete control.",
    imageSrc: "/accuracy.svg",
    imageAlt: "Precision engineering facility",
    hasBorder: true
  },
  {
    title: "More accurate from the Finger than the Wrist",
    description: "The finger, with its higher perfusion index and arterioles, serves as a richer and more accurate source of biomarker information.",
    imageSrc: "/accuracy2.svg",
    imageAlt: "Finger accuracy measurement",
    hasBorder: false
  },
  {
    title: "Trusted by the World's #1 Ranked Cycling Team and more",
    description: "UAE Team Emirates, Team ADQ, and many other high-performance teams worldwide.",
    imageSrc: "/accuracy3.svg",
    imageAlt: "Professional cycling teams",
    hasBorder: false
  },
  {
    title: "Precision engineering at the UltraFactory",
    description: "Ultrahuman's integrated production facility ensures gold-standard performance testing, providing complete control.",
    imageSrc: "/accuracy4.svg",
    imageAlt: "Precision engineering facility",
    hasBorder: false
  }
];

export default function AccuracySection() {
  return (
    <section>
      <div className={styles.accuracyWrapper}>
        <div className={styles.accuracyLeft}>
          <div className={styles.accuracyAboutWrapper}>
            <div className={styles.smallBlackBox}></div>
            <div className={styles.sublimeDesignWonder}>
              A sublime design wonder
            </div>
          </div>
          <div className={styles.heading}>
            Accuracy at its core
          </div>
          <div className={styles.coloredBoxes}>
            {coloredBoxesData.map((box) => (
              <Box
                key={box.id}
                value={box.value}
                label={box.label}
                backgroundColor={box.backgroundColor}
                textColor={box.textColor}
              />
            ))}
          </div>
        </div>
        <div className={styles.accuracyRight}>
          <div className={styles.accuracyCard1} style={{marginTop: "110px"}}>
            <AccuracyCard
              title={accuracyCardsData[0].title}
              description={accuracyCardsData[0].description}
              imageSrc={accuracyCardsData[0].imageSrc}
              imageAlt={accuracyCardsData[0].imageAlt}
            />
            <AccuracyCard
              title={accuracyCardsData[2].title}
              description={accuracyCardsData[2].description}
              imageSrc={accuracyCardsData[2].imageSrc}
              imageAlt={accuracyCardsData[2].imageAlt}
            />
          </div>
          <div className={styles.accuracyCard2}>
            <AccuracyCard
              title={accuracyCardsData[1].title}
              description={accuracyCardsData[1].description}
              imageSrc={accuracyCardsData[1].imageSrc}
              imageAlt={accuracyCardsData[1].imageAlt}
            />
            <AccuracyCard
              title={accuracyCardsData[3].title}
              description={accuracyCardsData[3].description}
              imageSrc={accuracyCardsData[3].imageSrc}
              imageAlt={accuracyCardsData[3].imageAlt}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
