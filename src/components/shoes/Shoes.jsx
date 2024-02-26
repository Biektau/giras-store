import React from "react";
import styles from "./Shoes.module.scss";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { RiDeleteBack2Line } from "react-icons/ri";

import Loading from "../loading/Loading";
import Card from "../card/Card";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Shoes() {
  const currentURL = window.location.href;
  const { height } = useWindowDimensions();
  const cardsHeight = height - 80 - 60;

  const [searchValue, setSearchValue] = useState("");
  const categories = ["Любая", "Повседневная", "Теромстойкая", "Влагостойкая"];
  const seasons = ["Любой", "Летний", "Зимний"];
  const genders = ["Любой", "Мужской", "Женский"];

  const [selectedCategory, setSelectedCategory] = useState("Любая");
  const [selectedGender, setSelectedGender] = useState("Любой");
  const [selectedSeason, setSelectedSeason] = useState("Любой");

  const getSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };
  const getSelectedGender = (e) => {
    setSelectedGender(e.target.value);
  };
  const getSelectedSeason = (e) => {
    setSelectedSeason(e.target.value);
  };

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData("https://giras-backend-ruzal-02.amvera.io/shoes/get");
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
          <label className={styles.selectLabel}>
            Сезон:
            <select
              onChange={(e) => getSelectedSeason(e)}
              value={selectedSeason}
            >
              {seasons.map((season, index) => (
                <option key={index}>{season}</option>
              ))}
            </select>
          </label>
          <label className={styles.selectLabel}>
            Пол:
            <select
              onChange={(e) => getSelectedGender(e)}
              value={selectedGender}
            >
              {genders.map((gender, index) => (
                <option key={index}>{gender}</option>
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
              case "Повседневная":
                return card.category === "Повседневная";
              case "Теромстойкая":
                return card.category === "Теромстойкая";
              case "Влагостойкая":
                return card.category === "Влагостойкая";

              default:
                return card;
            }
          })
          .filter(function (card) {
            switch (selectedSeason) {
              case "Зимний":
                return card.season === "Зимний";

              case "Летний":
                return card.season === "Летний";

              default:
                return card;
            }
          })
          .filter(function (card) {
            switch (selectedGender) {
              case "Мужской":
                return card.gender === "Мужской";

              case "Женский":
                return card.gender === "Женский";

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
