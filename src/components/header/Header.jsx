import React from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Header() {
  const links = [
    { title: "О нас", route: "/" },
    { title: "Одежда", route: "/workWear" },
    { title: "Обувь", route: "/shoes" },
    { title: "Перчатки", route: "/gloves" },
    { title: "СИЗ", route: "/ppe" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <img src={logo} alt="logo" />
        <span className={styles.logo}>ГИРАС</span>
      </div>

      <div className={styles.links}>
        {links.map((item, index) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.link
            }
            to={item.route}
            key={index}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
