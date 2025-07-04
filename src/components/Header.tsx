"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTruck, faBuilding, faImages, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/", icon: faHome },
  { name: "Services", href: "/services", icon: faTruck },
  { name: "About", href: "/about", icon: faBuilding },
  { name: "Gallery", href: "/gallery", icon: faImages },
  { name: "Contact", href: "/contact", icon: faEnvelope },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <Link href="/">
          <Image src="/logo2.png" alt="Hilwan Logo" width={170} height={110} priority />
        </Link>
      </div>
      <button
        className={styles.burger}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
      <nav
        className={
          menuOpen
            ? `${styles.nav} ${styles.navMobile} ${styles.navOpen}`
            : `${styles.nav} ${styles.navMobile}`
        }
        id="main-nav"
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={styles.navLink}
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={link.icon} className={styles.icon} /> {link.name}
          </Link>
        ))}
      </nav>
      <nav className={styles.navDesktop}>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className={styles.navLink}>
            <FontAwesomeIcon icon={link.icon} className={styles.icon} /> {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
} 