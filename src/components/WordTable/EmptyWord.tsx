import React from "react"
import styles from './lettercells.module.css';
import {MAX_WORD_LETTERS} from 'src/components/Main';
import { concatClassnames as p } from 'src/utils';

interface iProps {}

const EmptyWord = ({}:iProps): JSX.Element => {

  return (
    <div className={styles.letter_row}>
    {
        Array.from({length: MAX_WORD_LETTERS}).map( (_, index) => {
            return <span className={p(styles.letter_cell, styles.unsubmitted)} key={index}></span>
        })
    }
    </div>
  )
};

export { EmptyWord }
