import React from "react";
import "../styles/ListItem.css";
import { Button } from "./Button";
export const ListItem = ({ Item }) => {
  return (
    <div className="list-item-box">
      <img alt="" src={Item.img} />
      <h3>{Item.name}</h3>
      <h6>${Item.price}</h6>
      <p>{Item.description}</p>
      <div className="list-item-btn-box">
        <button className="list-item-read-more">read more</button>
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <button className="list-item-add-to-cart">add to cart</button>
      </div>
    </div>
  );
};
