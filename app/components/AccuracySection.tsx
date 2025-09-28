import styles from './AccuracySection.module.css';

export default function AccuracySection() {
  return (
    <section className={styles.accuracySection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.header}>
            <span className={styles.subtitle}>● A SUBLIME DESIGN WONDER</span>
            <h2 className={styles.title}>
              Accuracy at<br />
              its core
            </h2>
          </div>

          <div className={styles.specsContainer}>
            <div className={styles.specCard} style={{ backgroundColor: '#4169E1' }}>
              <div className={styles.specNumber}>4-6</div>
              <div className={styles.specLabel}>Days Battery life</div>
            </div>
            <div className={styles.specCard} style={{ backgroundColor: '#C4D94A' }}>
              <div className={styles.specNumber}>2.4</div>
              <div className={styles.specLabel}>Grams Light</div>
            </div>
          </div>

          <div className={styles.engineeringText}>
            <h3 className={styles.engineeringTitle}>
              Precision engineering<br />
              at the UltraFactory
            </h3>
            <p className={styles.engineeringDescription}>
              Ultrahuman's integrated production<br />
              facility ensures gold-standard<br />
              performance testing, providing<br />
              complete control.
            </p>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.visualContainer}>
            <div className={styles.barsVisual}>
              <div className={styles.barGroup}>
                <div className={styles.bar} style={{ height: '40%' }}></div>
                <div className={styles.bar} style={{ height: '60%' }}></div>
                <div className={styles.bar} style={{ height: '80%' }}></div>
                <div className={styles.bar} style={{ height: '100%' }}></div>
              </div>
              <div className={styles.barGroup}>
                <div className={styles.bar} style={{ height: '100%' }}></div>
                <div className={styles.bar} style={{ height: '80%' }}></div>
                <div className={styles.bar} style={{ height: '60%' }}></div>
                <div className={styles.bar} style={{ height: '40%' }}></div>
              </div>
            </div>

            <div className={styles.infoCard}>
              <h4 className={styles.infoTitle}>
                More accurate from the<br />
                Finger than the Wrist
              </h4>
              <p className={styles.infoDescription}>
                The finger, with its higher perfusion<br />
                index and arterioles, serves as a<br />
                richer and more accurate source of<br />
                biomarker information.
              </p>
            </div>

            <div className={styles.trustedSection}>
              <h3 className={styles.trustedTitle}>
                Precision engineering<br />
                at the UltraFactory
              </h3>
              <p className={styles.trustedDescription}>
                Ultrahuman's integrated production<br />
                facility ensures gold-standard<br />
                performance testing, providing<br />
                complete control.
              </p>
              
              <div className={styles.trustBadge}>
                <h4 className={styles.trustTitle}>
                  Trusted by the World's #1<br />
                  Ranked Cycling Team and<br />
                  more
                </h4>
                <p className={styles.trustTeams}>
                  UAE Team Emirates, Team ADQ, and<br />
                  many other high-performance<br />
                  teams worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}