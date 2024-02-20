import React, { useState } from "react";
import styles from "./carousel.module.scss";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Carousel({ slides }) {
  const [imageIndex, setImageIndex] = useState(0);

  const nextBtn = () => {
    setImageIndex((index) => {
      if (index === slides.length - 1) return 0;
      return index + 1;
    });
  };
  const prevBtn = () => {
    setImageIndex((index) => {
      if (index === 0) return slides.length - 1;
      return index - 1;
    });
  };

  return (
    <div className={styles.sliderContainer}>
      <button className={styles.btn} onClick={prevBtn}>
        <GrFormPrevious />
      </button>
      <img
        className={styles.slideImg}
        src={slides[imageIndex]}
        alt="slideImg"
      />
      <button className={styles.btn} onClick={nextBtn}>
        <GrFormNext />
      </button>
    </div>
  );
}
