import React from "react";
import styles from "./Card.module.scss";

import { Link } from "react-router-dom";

export default function Card({ data, to }) {
  return (
    <Link to={to} className={styles.container}>
      <div className={styles.price}>{data.price} ₽</div>
      {data.mainImg !=="Пусто" ? (
        <img className={styles.mainImg} src={data.mainImg} alt="mainImg" />
      ) : (
        <div className={styles.empty}>Нет изображения</div>
      )}
      <div className={styles.title}>{data.name}</div>
    </Link>
  );
}
