import styles from "./page.module.css";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar/>
      <main className={styles.main}>
        <article className={styles.article}>
          <h2>ООО «ТТЦ Энергосервис»</h2>
          <h3>Создание телекоммуникационных систем для промышленных и городских объектов</h3>
          <ul>
            <li>Передача информации по ВЛ</li>
            <li>Диспетчерская связь</li>
            <li>Передача информации по ВОЛС</li>
            <li>Мультиспектральный комплекс</li>
            <li>Внутриобъектовая связь</li>
          </ul>
        </article>
      </main>
    </div>
  );
}
