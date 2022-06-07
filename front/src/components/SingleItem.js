import React, { useState } from "react";
import "../styles/SingleItem.css";
import "../styles/Shared/Shared.css";
export const SingleItem = ({ Item }) => {
  const [Height, setHeight] = useState("0px");

  const handleClickDescription = () =>
    Height == "0px" ? setHeight("300px") : setHeight("0px");

  return (
    <div className="single-item-box">
      <section className="single-item-main">
        <div className="single-item-img">
          <img alt="" src={Item.img} />
        </div>
        <div className="single-item-general">
          <h6>{Item.name}</h6>
          <h6>{Item.location}</h6>
          <h6>{Item.price}</h6>
          <button>Book Trip</button>
        </div>
      </section>
      <section className="single-item-description" style={{ height: Height }}>
        <p multiline={true} className="item-description scroll">
          {Item.description}
        </p>
        <div className="item-miscelanious">
          <ul className="item-categories scroll">
            {Item.categories.map(function (each) {
              return <li>{each}</li>;
            })}
          </ul>
          <h5 className="item-rating">{Item.rating}</h5>
        </div>
      </section>
      <button
        className="item-description-button button"
        onClick={handleClickDescription}
      >
        V
      </button>
    </div>
  );
};
