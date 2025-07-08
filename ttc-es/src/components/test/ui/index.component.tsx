"use client";
import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const test = () => {
  const pathname = usePathname();
  
  // Проверяем, активна ли ссылка
  const isActive = (href: string) => pathname === href;

  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo.svg"
        alt="ttc es logo"
        width={391}
        height={81.72}
        priority
      />
      <nav className={styles.navigation}>
        <Link 
          className={`${styles.link} ${isActive("/") ? styles.active : ""}`} 
          href="/"
        >
          Главная
        </Link>
        <Link 
          className={`${styles.link} ${isActive("/about") ? styles.active : ""}`} 
          href="/about"
        >
          О компании
        </Link>
        <Link 
          className={`${styles.link} ${isActive("/catalog") ? styles.active : ""}`} 
          href="/catalog"
        >
          Каталог
        </Link>
        <Link 
          className={`${styles.link} ${isActive("/contact") ? styles.active : ""}`} 
          href="/contact"
        >
          Обратная связь
        </Link>
      </nav>
    </header>
  );
};