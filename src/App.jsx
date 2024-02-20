import React from "react";
import styles from "./App.module.scss";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";

import Info from "./components/info/Info";
import WorkWear from "./components/workwear/WorkWear";
import Shoes from "./components/shoes/Shoes";
import Gloves from "./components/gloves/Gloves";
import Ppe from "./components/ppe/Ppe";
import ItemInfo from "./components/itemInfo/ItemInfo";

export default function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/workwear" element={<WorkWear />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/gloves" element={<Gloves />} />
        <Route path="/ppe" element={<Ppe />} />
        <Route path="/:type/:id" element={<ItemInfo />} />
      </Routes>
    </div>
  );
}
