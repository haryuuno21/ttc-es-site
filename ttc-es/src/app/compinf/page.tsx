import styles from "./page.module.css";
import { Navbar } from "@/components/navbar";

export default function compinf() {
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.compinf}>
        <h1>ООО «ТТЦ Энергосервис»</h1>
        <h2>О компании</h2>
        <div className={styles.compinf}>
            <article className={styles.article}>
            <p>Была создана в апреле 2011 года</p>
            <p>как комплексный системный интегратор, </p>
            <p>разработчик системы связи в сфере-IT </p>
            <p>и реализации телекоммуникационных</p>
            <p>проектов в энергетическом секторе России. </p>
            </article>
        </div>
        
      </main>
    </div>
  );
}