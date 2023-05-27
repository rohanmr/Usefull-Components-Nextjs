import React from "react";
import Styles from "../styles/card.module.css";

const Card = () => {
  return (
    <>
      <h1>Card With Some Style</h1>
      <div className={Styles.card}>
        <img
          src="https://images.pexels.com/photos/2631613/pexels-photo-2631613.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="image with tree"
          className={Styles.card_img}
        />
        <div className={Styles.card_body}>
          <h2 className={Styles.card_title}>Card Fro Style</h2>
          <p className={Styles.card_desc}>Taravle is good for the soul</p>
        </div>
      </div>
    </>
  );
};

export default Card;
