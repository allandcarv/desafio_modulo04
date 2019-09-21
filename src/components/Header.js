import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <span className="main-logo">facebook.</span>
      <span>
        Meu perfil <FontAwesomeIcon icon={faUserCircle} />
      </span>
    </header>
  );
}

export default Header;
