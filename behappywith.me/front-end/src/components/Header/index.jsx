import React from "react";
import "./style.css";
import "../../img/logo.png";

export function Header() {
  return (
    <div className="header pure-menu	pure-menu-horizontal	pure-menu-fixed">
      <a href="/">
        <img className="logo" src="img/logo.png" />
      </a>
      <h4 className="label">Agenda de Gentilezas</h4>
    </div>
  );
}
