import React, { useState } from "react"
import styles from './main.module.css';

import { Keyboard, keyNames, KeyboardRow } from 'src/components/Keyboard';
import { WordTable } from 'src/components/WordTable';

interface iProps {}

const Main = ({}:iProps): JSX.Element => {
  const [word, setWord] = useState<string[]>([])
  const [previousWords, setPreviousWords] = useState<string[]>([])

  const addLetter = (letter: string):void => {

  }

  const removeLetter = (): void => {

  }

  const submit = (): void => {

  }

  return (
    <div className={styles.main}>
      <WordTable />
      <Keyboard>{
        keyNames.map((row: string[], index: number) => {
          return <KeyboardRow key={index} keys={row} />
        })
      }</Keyboard>
    </div>
  )
};

export { Main }
