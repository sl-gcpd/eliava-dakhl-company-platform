import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>ELIAVA DAKHL</h4>
            <h1 className="list-unstyled">
              <li>533-32-43-54</li>
              <li>Tbilisi, Georgia</li>
              <li>Baratashvili str</li>
            </h1>
          </div>
          
          <div className="col">
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>about</li>
              <li>contact</li>
              <li>help</li>
            </ui>
          </div>
          
          <div className="col">
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>about</li>
              <li>contact</li>
              <li>help</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} ELIAVA DAKHL | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
