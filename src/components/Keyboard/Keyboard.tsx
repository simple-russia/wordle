import React from "react"
import styles from './keyboard.module.css';
import { KeyboardRow } from './KeyboardRow';
import { keyNames } from './keys';

 
interface iProps {}

const Keyboard = ({}:iProps): JSX.Element => {

  

  return (
    <div className={styles.main}>
    {
      keyNames.map((row, index) => {
        return <KeyboardRow key={index} keys={row} />
      })
    }      
    </div>
  )
};

export { Keyboard }
