import React, { useEffect, useState } from "react"
import styles from './main.module.css';

import { Keyboard, keyNames, KeyboardRow } from 'src/components/Keyboard';
import { WordTable } from 'src/components/WordTable';

const MAX_WORD_LETTERS = 5;

interface iProps {}

const Main = ({}:iProps): JSX.Element => {
  const [word, setWord] = useState<string[]>([])
  const [previousWords, setPreviousWords] = useState<string[]>([])

  const addLetter = (letter: string): void => {
    setWord( (prev) => {
      const newWord = [...prev]
      newWord.push(letter);
      return newWord.length > MAX_WORD_LETTERS ? prev : newWord;
    })
  }

  const removeLetter = (): void => {
    setWord( prev => {
      const newWord = [...prev];
      newWord.pop();
      return newWord;
    })
  }

  const callKeyHandler = (key: string): void => {
    if (key === null) {
      return ;
    }
    if (key === 'enter') {
      return ; 
    }
    if (key === 'delete') {
      removeLetter();
      return ;
    }
    addLetter(key);
  }

  // handle keyboard press
  const handleKeyPress = (e: React.MouseEvent<HTMLSpanElement>): void => {
    const element = e.target as HTMLSpanElement;
    const key = element.getAttribute('data-key');

    callKeyHandler(key);
  }

  return (
    <div className={styles.main}>
      <WordTable />
      <Keyboard onClick={handleKeyPress}>{
        keyNames.map((row: string[], index: number) => {
          return <KeyboardRow key={index} keys={row} />
        })
      }</Keyboard>
    </div>
  )
};

export { Main }
