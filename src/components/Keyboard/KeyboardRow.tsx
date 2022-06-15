import React from "react";
import styles from './keyboardrow.module.css';


interface iProps {
    keys: string[];
}

const KeyboardRow = ({ keys }:iProps): JSX.Element => {
  return (
    <div className={styles.main}>
    {
        keys.map((i, index) => {
            return <span data-key={i} key={index}>{i}</span>
        })
    }
    </div>
  )
};

export { KeyboardRow }
