import { Link } from "react-router-dom";

import "./Header.css";

function Header({ children }) {
  return (
    <>
      <header className="headerContainer">
        <div className="imgContainer">
          <Link to="/">
            <img src="/logo.png" alt="Gofind" />
          </Link>
        </div>
      </header>
      <body>{children}</body>
    </>
  );
}

export default Header;
