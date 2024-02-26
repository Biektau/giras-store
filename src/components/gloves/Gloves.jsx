import React from "react";
import styles from "./Gloves.module.scss";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";

import Loading from "../loading/Loading";
import Card from "../card/Card";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Gloves() {
  const currentURL = window.location.href;
  const { height } = useWindowDimensions();
  const cardsHeight = height - 80 - 60;
  const [searchValue, setSearchValue] = useState("");
  const categories = [
    "Любая",
    "Трикотажные",
    "От пониженных температур",
    "Рукавицы / Вачеги",
    "От механических воздействий",
    "Краги",
    "Спилковые",
  ];

  const [selectedCategory, setSelectedCategory] = useState("Любая");

  const getSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("https://giras-backend-ruzal-02.amvera.io/gloves/get");
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
              case "Трикотажные":
                return card.category === "Трикотажные";
              case "От пониженных температур":
                return card.category === "От пониженных температур";
              case "Рукавицы / Вачеги":
                return card.category === "Рукавицы / Вачеги";
              case "От механических воздействий":
                return card.category === "От механических воздействий";
              case "Краги":
                return card.category === "Краги";
              case "Спилковые":
                return card.category === "Спилковые";
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
