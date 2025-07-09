"use client";
import { useState } from "react";
import styles from "./feedbackForm.module.css";

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
    agree: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь можно добавить отправку данных на сервер
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Оставить заявку сейчас</h2>
      <p className={styles.subtitle}>
        Получите индивидуальное предложение по отличной цене!
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Имя"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            required
          />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Почта"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />

        <div className={styles.formGroup}>
          <label htmlFor="comment" className={styles.label}>
            Ваш комментарий:
          </label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            className={styles.textarea}
            rows={3}
          />
        </div>

        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className={styles.checkbox}
            required
          />
          <label htmlFor="agree" className={styles.checkboxLabel}>
            Согласен на обработку персональных данных, в соответствии с{" "}
            <a href="/privacy-policy" className={styles.link}>
              Политикой конфиденциальности
            </a>
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          Отправить
        </button>
      </form>
    </div>
  );
};
