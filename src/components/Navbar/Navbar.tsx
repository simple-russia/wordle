import React from "react"
import styles from "./navbar.module.css";
import Logo from "src/assets/images/logo.png";

interface iProps {}

const Navbar = ({}:iProps): JSX.Element => {
  return (
    <div className={styles.main}>
      <img draggable="false" src={Logo}></img>
    </div>
  )
};

export { Navbar }
