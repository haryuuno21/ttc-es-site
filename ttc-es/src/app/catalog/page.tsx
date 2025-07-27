import { CatalogCard } from "@/components/catalogCard";
import styles from "./catalog_page.module.css";
import { Navbar } from "@/components/navbar";

export default function Contact() {
  // Пример данных для карточек (можно заменить на реальные данные)
  const products = [
    { id: 1, img: "/product.png", product_name: "Продукт 1", product_short_name: "PCM30U-1", product_cost: '10000' },
    { id: 2, img: "/product.png", product_name: "Продукт 2", product_short_name: "PCM30U-2", product_cost: '15000' },
    { id: 3, img: "/product.png", product_name: "Прукощпиукргшпиujrgbhuiedrbgvetighaeuiogvhni1290378423784652347856", product_short_name: "PCM30U-3", product_cost: '20000' },
    { id: 4, img: "/product.png", product_name: "Продукт 4", product_short_name: "PCM30U-4", product_cost: '25000' },
    { id: 5, img: "/product.png", product_name: "Продукт 5", product_short_name: "PCM30U-5", product_cost: '30000' },
    { id: 6, img: "/product.png", product_name: "Продукт 6", product_short_name: "PCM30U-6", product_cost: '35000' },
    // Добавьте больше продуктов по необходимости
  ];

  return (
    <div className={styles.page}>
      <Navbar></Navbar>
      <main className={styles.main}>
        <div className={styles.feedbackBlock}>
          <h1>Каталог</h1>
          <h1>продукции</h1>
          <div className={styles.cardsGrid}>
            {products.map(product => (
              <CatalogCard
                key={product.id}
                img={product.img}
                product_name={product.product_name}
                product_short_name={product.product_short_name}
                product_cost={product.product_cost}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}