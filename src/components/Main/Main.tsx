import React from "react"
import styles from './main.module.css';

import { Keyboard } from 'src/components/Keyboard';
import { WordTable } from 'src/components/WordTable';

interface iProps {}

const Main = ({}:iProps): JSX.Element => {
  return (
    <div className={styles.main}>
      <WordTable />
      <Keyboard />
    </div>
  )
};

export { Main }
