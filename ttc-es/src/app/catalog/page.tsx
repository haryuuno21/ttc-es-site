import { FeedbackForm } from "@/components/feedbackForm";
import styles from "./catalog_page.module.css";
import { Navbar } from "@/components/navbar";

export default function Contact() {
  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.feedbackBlock}>
          <h1>Обратная связь</h1>
          <FeedbackForm></FeedbackForm>
        </div>
        <div className={styles.contacts}>
          <h1>Контакты</h1>
          <article className={styles.article}>
            <h2>Офис "ТВЕРСКАЯ"</h2>
            <div>
              <p>Адрес:</p>
              <p>
                125047, г. Москва, 1-я Тверская-Ямская ул., д. 23, корп. 1, офис
                705.
              </p>
            </div>
            <div>
              <p>Телефон:</p>
              <p>+7 (495) 789 20 90</p>
            </div>
            <div>
              <p>Почта:</p>
              <p>info@ttc-es.com</p>
            </div>
          </article>
          <article className={styles.article}>
            <h2>Производственное подразделение</h2>
            <div>
              <p>Адрес:</p>
              <p>105486, Россия, г. Москва, 16-я Парковая ул., д. 26, корп.1</p>
            </div>
            <div>
              <p>Телефон:</p>
              <p>+7 (495) 789 20 90</p>
            </div>
            <div>
              <p>Почта:</p>
              <p>info@ttc-es.com</p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
