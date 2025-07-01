import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTruck, faBuilding, faImages, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Home", href: "/", icon: faHome },
  { name: "Services", href: "/services", icon: faTruck },
  { name: "About", href: "/about", icon: faBuilding },
  { name: "Gallery", href: "/gallery", icon: faImages },
  { name: "Contact", href: "/contact", icon: faEnvelope },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrap}>
        <Link href="/">
          <Image src="/logo.png" alt="Hilwan Logo" width={150} height={85} priority />
        </Link>
      </div>
      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <Link key={link.name} href={link.href} className={styles.navLink}>
            <FontAwesomeIcon icon={link.icon} className={styles.icon} /> {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
} 