import React from "react";
import styles from "./modal.module.scss";
import { IoIosCloseCircleOutline } from "react-icons/io";

export default function Modal({ ModalController }) {
  return (
    <section className={styles.overlay}>
      <div className={styles.modal}>
        <IoIosCloseCircleOutline onClick={() => ModalController()}/>
        <div className={styles.infoBlock}>
          <div className={styles.field}>
            <span className={styles.fieldName}>Электронная почта:</span>
            <span className={styles.fieldValue}>giras.rf@mail.ru</span>
          </div>
          <div className={styles.field}>
            <span className={styles.fieldName}>Номер телефона:</span>
            <span className={styles.fieldValue}>{"8(917)865-23-03"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
