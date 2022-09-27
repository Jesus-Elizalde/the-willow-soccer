import React from "react";

import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar fr">
      <div className="fr">
        <p>The Willow Soccer</p>
      </div>
      <ul className="fr navbarlist">
        <li>New & Feature</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
      </ul>
      <div className="fr">
        <input />
      </div>
    </header>
  );
};

export default NavBar;
