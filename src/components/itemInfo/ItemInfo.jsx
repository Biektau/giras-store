import React, { useEffect, useState } from "react";
import styles from "./ItemInfo.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import Carousel from "../carousel/Carousel";

import axios from "axios";

export default function ItemInfo() {
  const { type, id } = useParams();
  const { height } = useWindowDimensions();

  const [item, setItem] = useState();

  useEffect(() => {
    try {
      axios
        .get(`https://giras-backend-ruzal-02.amvera.io/${type}/getOne/${id}`)
        .then((res) => {
          setItem(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  switch (type) {
    case "workWear":
      return (
        item && (
          <div
            style={{ height: `${height - 80}px` }}
            className={styles.container}
          >
            <Carousel slides={[item.mainImg, ...item.allImages]} />
            <div className={styles.fields}>
              <Link className={styles.backBtn} to={"/" + type}>
                {"<"} Назад
              </Link>
              {item.name !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Наименование:</span>
                  <span className={styles.fieldValue}>{item.name}</span>
                </div>
              )}
              {item.price !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Цена:</span>
                  <span className={styles.fieldValue}>{item.price}</span>
                </div>
              )}
              {item.color !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Цвет:</span>
                  <span className={styles.fieldValue}>{item.color}</span>
                </div>
              )}
              {item.standard !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>ГОСТ:</span>
                  <span className={styles.fieldValue}>{item.standard}</span>
                </div>
              )}
              {item.set !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Комплектация:</span>
                  <span className={styles.fieldValue}>{item.set}</span>
                </div>
              )}
              {item.series !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Коллекция:</span>
                  <span className={styles.fieldValue}>{item.series}</span>
                </div>
              )}
              {item.protectionClass !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Класс защиты:</span>
                  <span className={styles.fieldValue}>
                    {item.protectionClass}
                  </span>
                </div>
              )}
              {item.material !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Материал:</span>
                  <span className={styles.fieldValue}>{item.material}</span>
                </div>
              )}
              {item.veryfied !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Минпромторг:</span>
                  <span className={styles.fieldValue}>{item.veryfied}</span>
                </div>
              )}
              {item.sizes !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Размеры:</span>
                  <span className={styles.fieldValue}>{item.sizes}</span>
                </div>
              )}
              {item.heights !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Ростовки:</span>
                  <span className={styles.fieldValue}>{item.heights}</span>
                </div>
              )}
              {item.averageVolume !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Средний объем:</span>
                  <span className={styles.fieldValue}>
                    {item.averageVolume}
                  </span>
                </div>
              )}
              {item.averageWeight !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Средний вес:</span>
                  <span className={styles.fieldValue}>
                    {item.averageWeight}
                  </span>
                </div>
              )}
              {item.packing !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Упаковка:</span>
                  <span className={styles.fieldValue}>{item.packing}</span>
                </div>
              )}
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Категория:</span>
                <span className={styles.fieldValue}>{item.category}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Сезон:</span>
                <span className={styles.fieldValue}>{item.season}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Пол:</span>
                <span className={styles.fieldValue}>{item.gender}</span>
              </div>
            </div>
          </div>
        )
      );
    case "shoes":
      return (
        item && (
          <div
            style={{ height: `${height - 80}px` }}
            className={styles.container}
          >
            <Carousel slides={[item.mainImg, ...item.allImages]} />
            <div className={styles.fields}>
              <Link className={styles.backBtn} to={"/" + type}>
                {"<"} Назад
              </Link>
              {item.name !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Наименование:</span>
                  <span className={styles.fieldValue}>{item.name}</span>
                </div>
              )}
              {item.price !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Цена:</span>
                  <span className={styles.fieldValue}>{item.price}</span>
                </div>
              )}
              {item.color !== "Пусто" && (
                <div className={styles.dataLine}>
                  <span className={styles.fieldName}>Цвет:</span>
                  <span className={styles.fieldValue}>{item.color}</span>
                </div>
              )}
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>ГОСТ:</span>
                <span className={styles.fieldValue}>{item.standard}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Материал:</span>
                <span className={styles.fieldValue}>{item.material}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Подкладка:</span>
                <span className={styles.fieldValue}>{item.pad}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Носок:</span>
                <span className={styles.fieldValue}>{item.toeCap}</span>
              </div>

              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Стелька:</span>
                <span className={styles.fieldValue}>{item.insole}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Подошва:</span>
                <span className={styles.fieldValue}>{item.sole}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Способ крепления:</span>
                <span className={styles.fieldValue}>
                  {item.fasteningMethod}
                </span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Размеры:</span>
                <span className={styles.fieldValue}>{item.sizes}</span>
              </div>

              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Средний объем:</span>
                <span className={styles.fieldValue}>{item.averageVolume}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Средний вес:</span>
                <span className={styles.fieldValue}>{item.averageWeight}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Упаковка:</span>
                <span className={styles.fieldValue}>{item.packing}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Категория:</span>
                <span className={styles.fieldValue}>{item.category}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Сезон:</span>
                <span className={styles.fieldValue}>{item.season}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Пол:</span>
                <span className={styles.fieldValue}>{item.gender}</span>
              </div>
            </div>
          </div>
        )
      );
    case "gloves":
      return (
        item && (
          <div
            style={{ height: `${height - 80}px` }}
            className={styles.container}
          >
            <Carousel slides={[item.mainImg, ...item.allImages]} />
            <div className={styles.fields}>
              <Link className={styles.backBtn} to={"/" + type}>
                {"<"} Назад
              </Link>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Наименование:</span>
                <span className={styles.fieldValue}>{item.name}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Цена:</span>
                <span className={styles.fieldValue}>{item.price}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Цвет:</span>
                <span className={styles.fieldValue}>{item.color}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>ГОСТ:</span>
                <span className={styles.fieldValue}>{item.standard}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Материал:</span>
                <span className={styles.fieldValue}>{item.material}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Основа:</span>
                <span className={styles.fieldValue}>{item.base}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Покрытие:</span>
                <span className={styles.fieldValue}>{item.coating}</span>
              </div>

              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Манжет:</span>
                <span className={styles.fieldValue}>{item.cuff}</span>
              </div>

              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Размеры:</span>
                <span className={styles.fieldValue}>{item.sizes}</span>
              </div>

              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Средний объем:</span>
                <span className={styles.fieldValue}>{item.averageVolume}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Средний вес:</span>
                <span className={styles.fieldValue}>{item.averageWeight}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Упаковка:</span>
                <span className={styles.fieldValue}>{item.packing}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Категория:</span>
                <span className={styles.fieldValue}>{item.category}</span>
              </div>
            </div>
          </div>
        )
      );
    case "ppe":
      return (
        item && (
          <div
            style={{ height: `${height - 80}px` }}
            className={styles.container}
          >
            <Carousel slides={[item.mainImg, ...item.allImages]} />
            <div className={styles.fields}>
              <Link className={styles.backBtn} to={"/" + type}>
                {"<"} Назад
              </Link>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Наименование:</span>
                <span className={styles.fieldValue}>{item.name}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Цена:</span>
                <span className={styles.fieldValue}>{item.price}</span>
              </div>

              <div className={styles.dataLine}>
                <span className={styles.fieldName}>ГОСТ:</span>
                <span className={styles.fieldValue}>{item.standard}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Коллекция:</span>
                <span className={styles.fieldValue}>{item.series}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Минпромторг:</span>
                <span className={styles.fieldValue}>{item.veryfied}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Средний объем:</span>
                <span className={styles.fieldValue}>{item.averageVolume}</span>
              </div>
              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Средний вес:</span>
                <span className={styles.fieldValue}>{item.averageWeight}</span>
              </div>

              <div className={styles.dataLine}>
                <span className={styles.fieldName}>Категория:</span>
                <span className={styles.fieldValue}>{item.category}</span>
              </div>
            </div>
          </div>
        )
      );
    default:
      return <span>Ошибка</span>;
  }
}
