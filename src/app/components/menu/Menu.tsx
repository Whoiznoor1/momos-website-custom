import React from "react";
import Image from "next/image";
import styles from "./page.module.css";

const momos = [
  {
    name: "Classic Chicken Momos",
    description: "Juicy chicken momos with a mix of spices.",
    price: "350",
    imageUrl: "/chicken.jpg",
  },
  {
    name: "Paneer Momos",
    description: "Delicious vegetarian momos stuffed with paneer.",
    price: "350",
    imageUrl: "/paneer.jpg",
  },
  {
    name: "Spicy Schezwan Momos",
    description: "Hot and spicy momos for a fiery experience.",
    price: "400",
    imageUrl: "/schezwan.jpg",
  },
  {
    name: "Veg Momos",
    description: "Healthy and fresh vegetables wrapped in momo goodness.",
    price: "300",
    imageUrl: "/veg.jpg",
  },
  {
    name: "Tandoori Momos",
    description: "Smoky and flavorful tandoori momos.",
    price: "400",
    imageUrl: "/tandoori.jpg",
  },
];

const smoothies = [
  {
    name: "Cherry Vanilla Smoothie",
    description:
      "Indulge in the delightful flavors of a creamy, vanilla-infused Cherry Vanilla Smoothie.",
    price: "180",
    imageUrl: "/cherry.jpg",
  },
  {
    name: "Peach Smoothie",
    description:
      "Indulge in a sweet, creamy Peach Smoothie. A refreshing, smooth, and flavor-filled treat.",
    price: "150",
    imageUrl: "/peach.jpg",
  },
  {
    name: "Chocolate Smoothie",
    description: "Creamy chocolate Smoothie with whipped cream.",
    price: "200",
    imageUrl: "/choco.jpg",
  },
];

const Menu = () => {
  return (
    <div id="menu" className={styles.menu}>
      <h1 className={styles.sectionTitle}>Our Momo Menu</h1>

      <div className={styles.grid}>
        {momos.map((momo, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={momo.imageUrl}
              alt={momo.name}
              width={200}
              height={200}
              className={styles.cardImage}
            />
            <h2 className={styles.cardTitle}>{momo.name}</h2>
            <p className={styles.cardDescription}>{momo.description}</p>
            <p className={styles.cardPrice}>{momo.price} Rs.</p>
          </div>
        ))}
      </div>

      <h1 className={`${styles.sectionTitle} ${styles.spacingTop}`}>
        Smoothies
      </h1>
      <div className={styles.grid}>
        {smoothies.map((smoothie, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={smoothie.imageUrl}
              alt={smoothie.name}
              width={200}
              height={200}
              className={styles.cardImage}
            />
            <h2 className={styles.cardTitle}>{smoothie.name}</h2>
            <p className={styles.cardDescription}>{smoothie.description}</p>
            <p className={styles.cardPrice}>{smoothie.price} Rs.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
