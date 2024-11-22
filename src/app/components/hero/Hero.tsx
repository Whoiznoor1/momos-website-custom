"use client";
import Image from "next/image";
import styles from "./page.module.css";

const Hero = () => {
  return (
    <div id="/" className={styles.hero}>
      <div className={styles.heroTextContainer}>
        <h1 className={styles.heroTitle}>From Our Steamer To Your Soul</h1>
        <p className={styles.heroSubtitle}>Momos You Cannot Resist!</p>
      </div>

      <div className={styles.heroImageContainer}>
        <Image
          src={"/momo4.jpg"}
          alt="Plate of delicious momos"
          className={styles.heroImage}
          width={300}
          height={300}
        />
      </div>

      <div className={styles.heroContent}>
        <h2 className={styles.heroHeading}>
          I Love <span className={styles.highlight}>MOMOries!</span>
        </h2>
        <p className={styles.heroDescription}>
          Feel the WOW with our{" "}
          <span className={styles.highlight}>BURSTING FLAVOR</span>
        </p>
      </div>
    </div>
  );
};

export default Hero;
