import { CatalogCard } from "@/components/catalogCard";
import styles from "./catalog_page.module.css";
import { Navbar } from "@/components/navbar";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.feedbackBlock}>
          <h1>Каталог Продукции</h1>
          <CatalogCard></CatalogCard>
        </div>
      </main>
    </div>
  );
}
