"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    // Create a message that will be sent via WhatsApp
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nOrder: ${message}`;

    // WhatsApp API URL
    const whatsappURL = `https://wa.me/<923141340432>?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <h1 className={styles.mainHeading}>
        Dost kehne se dost nahin ban jata Pardhan Ji,
        <br /> Momos khilane parte hain!
      </h1>
      <h1 className={styles.subHeading}>So what are you waiting for?</h1>

      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Just order it!</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>
              Your Order
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
