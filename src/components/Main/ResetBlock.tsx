import React from "react"
import styles from "./resetblock.module.css";

interface iProps {
  onClick: () => void;
}

const ResetBlock = ({onClick}: iProps): JSX.Element => {
  return (
    <div className={styles.main}>
      <button onClick={onClick}>Reset the game</button>
    </div>
  )
};

export { ResetBlock }
