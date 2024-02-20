import React from "react";
import styles from "./Loading.module.scss"

export default function Loading() {
  return (
    <div className={styles.loadingSection}>
      <span className={styles.loader}></span>
    </div>
  );
}
