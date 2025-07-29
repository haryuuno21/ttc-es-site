"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, FC } from "react";
import { Props } from "./index.types";

export const Navbar :FC<Props> = ({staticColor}) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (href: string) => pathname === href;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${staticColor ? styles.staticColor : ""}`}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="ttc es logo"
        width={391}
        height={81.72}
        priority
      />
      
      <button className={styles.menuButton} onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>
      
      <nav className={`${styles.navigation} ${isMenuOpen ? styles.active : ""}`}>
        <Link 
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`} 
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          Главная
        </Link>
        <Link 
          className={`${styles.link} ${isActive("/about") ? styles.active : ""}`} 
          href="/about"
          onClick={() => setIsMenuOpen(false)}
        >
          О компании
        </Link>
        <Link 
          className={`${styles.link} ${isActive("/catalog") ? styles.active : ""}`} 
          href="/catalog"
          onClick={() => setIsMenuOpen(false)}
        >
          Каталог
        </Link>
        <Link 
          className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`} 
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
        >
          Обратная связь
        </Link>
      </nav>
    </header>
  );
};