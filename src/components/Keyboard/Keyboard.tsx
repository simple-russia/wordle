import React from "react"
import styles from './keyboard.module.css';
import { KeyboardRow } from './KeyboardRow';
import { keyNames } from './keys';

 
interface iProps {
  children: JSX.Element[];
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

const Keyboard = ({children, onClick}: iProps): JSX.Element => {
  return (
    <div className={styles.main} onClick={onClick}>{children}</div>
  )
};

export { Keyboard }
