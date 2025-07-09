import { FeedbackForm } from "@/components/feedbackForm";
import styles from "./page.module.css";
import { Navbar } from "@/components/navbar";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div>
          <h1>Обратная связь</h1>
          <FeedbackForm></FeedbackForm>
        </div>
        <div className={styles.contacts}>
          <h1>Контакты</h1>
          <article className={styles.article}>
            <h2>Офис "ТВЕРСКАЯ"</h2>
            <p>Адрес:</p>
            <p>125047, г. Москва, 1-я Тверская-Ямская ул., д. 23, корп. 1, офис 705.</p>
            <p>Телефон:</p>
            <p>+7 (495) 789 20 90</p>
            <p>Почта:</p>
            <p>info@ttc-es.com</p>
          </article>
        </div>
      </main>
    </div>
  );
}
