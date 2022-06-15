import React from "react"
import styles from './keyboard.module.css';
import { KeyboardRow } from './KeyboardRow';
import { keyNames } from './keys';

 
interface iProps {
  children: JSX.Element[];
}

const Keyboard = ({children}: iProps): JSX.Element => {
  return (
    <div className={styles.main}>{children}</div>
  )
};

export { Keyboard }
