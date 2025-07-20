"use client";
import Image from "next/image";
import styles from "./catalogCard.module.css";
import { Props } from "./index.types";
import { FC } from "react";

export const CatalogCard: FC<Props> = ({
  img,
  product_name,
  product_short_name,
  product_cost,
}) => {
  return (
    <div className={styles.card_container}>
      <div className={styles.image_container}>
        <Image
          className={styles.image}
          src={img || "/product.png"}
          alt="product"
          fill={true}
          priority
        />
      </div>
      <p className={styles.product}>
        <span className={styles.product_name}>{product_name || "Цифровые системы передачи информации по ВОЛС"}</span>
        <span className={styles.product_short_name}>
          {product_short_name || "PCM30U-OCH"}
        </span>
      </p>
      <div className={styles.cost_container}>
        <span className={styles.product_cost}>{product_cost || 0} руб./шт.</span>
        <Image
          className={styles.cart_logo}
          src="/cart_logo.svg"
          alt="cart"
          width={27}
          height={23}
        />
      </div>
    </div>
  );
};