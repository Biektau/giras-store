import React from "react";
import styles from "./Ppe.module.scss";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";

import Loading from "../loading/Loading";
import Card from "../card/Card";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Ppe() {
  const currentURL = window.location.href;
  const { height } = useWindowDimensions();
  const cardsHeight = height - 80 - 60;
  const [searchValue, setSearchValue] = useState("");
  const categories = [
    "Любая",
    "Защита головы",
    "Защита глаз и лица",
    "Защита органов дыхания",
    "Защита органов слуха",
    "При высотных работах",
    "Диэлектрические",
    "Дерматологические",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Любая");

  const getSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("https://girasbackend.onrender.com/ppe/get");
  }, []);

  async function fetchData(url) {
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  if (loading) return <Loading />;
  if (error) {
    alert(error);
  }
  return (
    <div className={styles.container}>
      <div className={styles.controllerBox}>
        <div className={styles.labels}>
          <label className={styles.selectLabel}>
            Категория:
            <select
              onChange={(e) => getSelectedCategory(e)}
              value={selectedCategory}
            >
              {categories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
          </label>
        </div>
        <div className={styles.searchBlock}>
          <FaSearch className={styles.searchIcon} />
          <input
            placeholder="Поиск по товарам..."
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue ? (
            <RiDeleteBack2Line
              className={styles.deleteIcon}
              onClick={() => setSearchValue("")}
            />
          ) : null}
        </div>
      </div>
      <div style={{ height: `${cardsHeight}px` }} className={styles.cards}>
        {data
          .filter(function (card) {
            switch (selectedCategory) {
              case "Защита головы":
                return card.category === "Защита головы";
              case "Защита глаз и лица":
                return card.category === "Защита глаз и лица";
              case "Защита органов дыхания":
                return card.category === "Защита органов дыхания";
              case "Защита органов слуха":
                return card.category === "Защита органов слуха";
              case "При высотных работах":
                return card.category === "При высотных работах";
              case "Диэлектрические":
                return card.category === "Диэлектрические";
              case "Дерматологические":
                return card.category === "Дерматологические";
              default:
                return card;
            }
          })
          .filter(function (card) {
            return card.name.toLowerCase().includes(searchValue.toLowerCase());
          })
          .map((card) => (
            <Card data={card} to={currentURL + "/" + card._id} key={card._id} />
          ))}
      </div>
    </div>
  );
}
