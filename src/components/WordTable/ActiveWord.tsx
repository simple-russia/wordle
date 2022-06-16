import React from "react"
import styles from './lettercells.module.css';
import {MAX_WORD_LETTERS} from 'src/components/Main';
import { concatClassnames as p } from 'src/utils';

interface iProps {
    word: string[];
    activeWordRef: null;
    
}

const ActiveWord = ({word, activeWordRef}:iProps): JSX.Element => {

  word = (word.concat(['', '', '', '', ''])).slice(0, 5)

  return (
    <div ref={activeWordRef} className={styles.letter_row}>
    {
        word.map( (i, index) => {
            return <span className={p(styles.letter_cell, styles.unsubmitted)} key={index}>{i}</span>
        })
    }
    </div>
  )
};

export { ActiveWord }
