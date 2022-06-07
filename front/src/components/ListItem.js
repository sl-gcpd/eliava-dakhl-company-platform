import React from "react";
import "../styles/ListItem.css";
import "../styles/Shared/Shared.css";
export const ListItem = ({ Item }) => {
  return (
    <div className="list-item-box">
      <div className="list-item-header">
        <label>{Item.name}</label>
      </div>
      <div className="list-item-body">
        <div className="list-item-image">
          <img alt="" src={Item.img} />
        </div>
        <div className="list-item-categories scroll">
          <ul>
            {Item.categories.map(function (each) {
              return <li>{each}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="list-item-footer">
        <a href="somelink.org">{Item.description}</a>
      </div>
    </div>
  );
};
