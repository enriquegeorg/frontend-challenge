import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

function Header({ children }) {
  return (
    <React.Fragment>
      <header className="headerContainer">
        <div className="imgContainer">
          <Link to="/">
            <img src="/logo.png" alt="Gofind" />
          </Link>
        </div>
      </header>
      {children}
    </React.Fragment>
  );
}

export default Header;
