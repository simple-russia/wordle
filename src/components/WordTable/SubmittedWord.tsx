import React from "react"
import styles from './lettercells.module.css';
import { concatClassnames as p } from 'src/utils/other';

const letterTest = (guessedWord: string, letter: string, index: number): string => {
  if (guessedWord[index] === letter) {
    return styles.right_place;
  }
  if (guessedWord.includes(letter)) {
    return styles.contains;
  }
  return styles.wrong
}

interface iProps {
    word: string,
    guessedWord: string,
}

const SubmittedWord = ({guessedWord, word}: iProps): JSX.Element => {
  return (
    <div data-word={word} className={styles.letter_row}>
    {
        Array.from(word).map( (i, index) => {
            return <span className={p(styles.letter_cell, letterTest(guessedWord, i, index))} key={index}>{i}</span>
        })
    }
    </div>
  )
};

export { SubmittedWord }
