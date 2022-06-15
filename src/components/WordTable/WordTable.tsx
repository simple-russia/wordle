import React from "react"
import styles from './wordtable.module.css';

interface iProps {
  children: JSX.Element[];
}

const WordTable = ({children}: iProps): JSX.Element => {
  return (
    <div className={styles.main}>{children}</div>
  )
};

export { WordTable }
