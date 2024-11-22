import React from "react";
import Link from "next/link";
import styles from "./page.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.brandName}>Momo Mania</h1>
          <p className={styles.tagline}>
            Enjoy the finest momos and smoothies with us!
          </p>
        </div>

        <div className={styles.navLinks}>
          <Link href="/" passHref>
            <span className={styles.link}>Home</span>
          </Link>
          <Link href="#menu" passHref>
            <span className={styles.link}>Menu</span>
          </Link>
          <Link href="#contact" passHref>
            <span className={styles.link}>Contact</span>
          </Link>
        </div>
      </div>

      <div className={styles.footerBottom}>
        © {new Date().getFullYear()} Momo Mania. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
