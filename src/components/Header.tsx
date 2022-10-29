import React from "react";

import styles from "./Header.module.css";
import todoLogo from "../components/assets/Logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={todoLogo} alt="Logo-tipo da aplicação" />
    </div>
  );
}
