import React from "react"
import styles from './lettercells.module.css';
import {MAX_WORD_LETTERS} from 'src/components/Main';

interface iProps {
    word: string[];
}

const ActiveWord = ({word}:iProps): JSX.Element => {

  word = (word.concat(['', '', '', '', ''])).slice(0, 5)

  return (
    <div className={styles.letter_row}>
    {
        word.map( (i, index) => {
            return <span className={styles.letter_cell} key={index}>{i}</span>
        })
    }
    </div>
  )
};

export { ActiveWord }
