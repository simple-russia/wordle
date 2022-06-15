import React from "react"
import styles from './lettercells.module.css';

interface iProps {
    word: string,
    guessedWord: string,
}

const SubmittedWord = ({guessedWord, word}: iProps): JSX.Element => {
  return (
    <div className={styles.letter_row}>
    {
        Array.from(word).map( (i, index) => {
            return <span className={styles.letter_cell} key={index}>{i}</span>
        })
    }
    </div>
  )
};

export { SubmittedWord }
