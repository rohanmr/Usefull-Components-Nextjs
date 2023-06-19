import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Styles from "../page.module.css";

const Cards = () => {
  return (
    <>
      <Navbar />
      <h1 className={Styles.main}>Card With Some Style</h1>

      <Card />
    </>
  );
};

export default Cards;
