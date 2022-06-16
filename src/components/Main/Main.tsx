import React, { useEffect, useState } from "react"
import styles from './main.module.css';

import { Keyboard, keyNames, KeyboardRow } from 'src/components/Keyboard';
import { WordTable, SubmittedWord, ActiveWord, EmptyWord } from 'src/components/WordTable';
import { getRandomWord } from "src/utils";


const MAX_WORD_LETTERS = 5;
const MAX_WORD_ROWS = 6;

enum gameStatuses {
  LOADING = 'loading',
  PLAYING = 'playing',
  LOST = 'lost',
  WON = 'won',
}


interface iProps {}

const Main = ({}:iProps): JSX.Element => {
  const [word, setWord] = useState<string[]>([])
  const [previousWords, setPreviousWords] = useState<string[]>([])
  const [guessedWord, setGuessedWord] = useState<string>('');
  const [gameStatus, setGameStatus] = useState<gameStatuses>(gameStatuses.LOADING);

  const isLoading = gameStatus === gameStatuses.LOADING;
  const isLost = gameStatus === gameStatuses.LOST;
  const isWon = gameStatus === gameStatuses.WON;
  const isPlaying = gameStatus === gameStatuses.PLAYING;
  const activeWords = isPlaying ? 1 : 0;

  let EMPTY_ROWS = MAX_WORD_ROWS - (activeWords) - previousWords.length;
  EMPTY_ROWS = EMPTY_ROWS < 0 ? 0 : EMPTY_ROWS; 


  useEffect( () => {
    console.log('game status is now', gameStatus)
  }, [gameStatus])

  useEffect( () => {
    setNewGuessedWord();
  }, [])

  const setNewGuessedWord = (): void => {
    const newGuessedWord = getRandomWord();
    console.log(newGuessedWord);
    
    setGuessedWord(newGuessedWord);
    setGameStatus(gameStatuses.PLAYING);
  }

  const addLetter = (letter: string): void => {
    if (!isPlaying) {
      return ;
    }

    setWord( (prev) => {
      const newWord = [...prev]
      newWord.push(letter);
      return newWord.length > MAX_WORD_LETTERS ? prev : newWord;
    })
  }

  const removeLetter = (): void => {
    if (!isPlaying) {
      return ;
    }

    setWord( prev => {
      const newWord = [...prev];
      newWord.pop();
      return newWord;
    })
  }

  const submitWord = (): void => {
    if (!isPlaying) {
      return ;
    }

    if (word.length !== MAX_WORD_LETTERS) {
      console.error('can\'t submit');
      return ;
    }
    
    // console.log('submited!')
    setPreviousWords( prev => {
      const newWords = [...prev];
      const newWord = word.join('');
      newWords.push(newWord);

      return newWords;
    })
    setWord([]);

    if (word.join('') === guessedWord) {
      setGameStatus(gameStatuses.WON);
    } else if (previousWords.length === MAX_WORD_ROWS - 1) {
      setGameStatus(gameStatuses.LOST);
      console.log('you lost!')
    }
  }

  const callKeyHandler = (key: string): void => {
    if (!isPlaying) {
      return ;
    }

    if (key === null) {
      return ;
    }
    if (key === 'enter') {
      submitWord();
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
      <WordTable>
        {previousWords.map( (i, index) => {
          return <SubmittedWord guessedWord={guessedWord} key={Math.random()} word={i} />
        })}
        {isPlaying && <ActiveWord word={word} key={Math.random()} />}
        {
        !!EMPTY_ROWS && Array.from<string>({ length: EMPTY_ROWS }).map( _ => {
          return <EmptyWord key={Math.random()} />
        })
        }
      </WordTable>
      <Keyboard onClick={handleKeyPress}>{
        keyNames.map((row: string[], index: number) => {
          return <KeyboardRow key={index} keys={row} />
        })
      }</Keyboard>
    </div>
  )
};

export { Main, MAX_WORD_LETTERS, MAX_WORD_ROWS }
