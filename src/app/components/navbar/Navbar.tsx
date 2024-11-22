"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={styles.header}>
      <div className={styles.headercontainer}>
        <h1 className={styles.logo}>MomoMania</h1>

        {/* Menu Toggle Button */}
        <div className={styles.menutoggle}>
          <button onClick={toggleMenu} className={styles.menubutton}>
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <div className={`${styles.desktopmenu} ${isMenuOpen ? styles.show : ""}`}>
          <Link href="/" className={`${styles.menulink} ${styles.menuitem}`}>
            Home
          </Link>
          <Link href="#menu" className={`${styles.menulink} ${styles.menuitem}`}>
            Menu
          </Link>
          <Link href="#contact" className={`${styles.menulink} ${styles.menuitem}`}>
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobilemenu}>
          <ul className={styles.mobilemenulist}>
            <li className={styles.mobilemenuitem}>
              <Link href="/" className={styles.mobilemenulink}>
                Home
              </Link>
            </li>
            <li className={styles.mobilemenuitem}>
              <Link href="#menu" className={styles.mobilemenulink}>
                Menu
              </Link>
            </li>
            <li className={styles.mobilemenuitem}>
              <Link href="#contact" className={styles.mobilemenulink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
