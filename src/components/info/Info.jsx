import React, { useState } from "react";
import styles from "./Info.module.scss";
import img from "../../assets/section1Img.jpg";
import Modal from "../modal/Modal";

export default function Info() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function ModalController() {
    setModalIsOpen((prev) => !prev);
  }
  return (
    <>
      {modalIsOpen && <Modal ModalController={ModalController} />}
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div className={styles.title}>Защита на производстве</div>
          <div className={styles.line}></div>
          <div className={styles.text}>
            Компания ГИРАС занимает одно из лидирующих положений на рынке
            продажи спецодежды в России благодаря наиболее широкому ассортименту
            товаров, гибкой ценовой политике и высокому качеству продукции.
          </div>
          <div className={styles.btn} onClick={() => ModalController()}>Наши контакты</div>
        </div>
        <div className={styles.rightSide}>
          <img src={img} alt="infoImg" />
        </div>
      </div>
    </>
  );
}
