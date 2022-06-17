import React, { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux";
import styles from './main.module.css';

import { Keyboard, keyNames, KeyboardRow } from 'src/components/Keyboard';
import { WordTable, SubmittedWord, ActiveWord, EmptyWord } from 'src/components/WordTable';
import { getRandomWord } from "src/utils";
import { shake } from "src/utils/animations";
import { fetchWordExists } from "src/utils/redux/thunks/wordExists";

const LOG_CSS_COMMON = 'font-family: arial; text-transform: uppercase; font-size: 16px; background: #222;';
const YOU_LOST_LOG_CSS = 'color: #b00;' + LOG_CSS_COMMON;
const YOU_WON_LOG_CSS = 'color: #bada55;' + LOG_CSS_COMMON;
const INITIAL_WORD_LOG_CSS = 'color: #fff;' + LOG_CSS_COMMON;
const GAME_STATUS_LOG_CSS = 'color: #999;' + LOG_CSS_COMMON;

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
  const dispatch = useDispatch();

  const activeWordRef = useRef(null);

  const isLoading = gameStatus === gameStatuses.LOADING;
  const isLost = gameStatus === gameStatuses.LOST;
  const isWon = gameStatus === gameStatuses.WON;
  const isPlaying = gameStatus === gameStatuses.PLAYING;
  const activeWords = isPlaying ? 1 : 0;

  let EMPTY_ROWS = MAX_WORD_ROWS - (activeWords) - previousWords.length;
  EMPTY_ROWS = EMPTY_ROWS < 0 ? 0 : EMPTY_ROWS; 


  useEffect( () => {
    console.log(`%cgame status is: ${gameStatus}`, GAME_STATUS_LOG_CSS)
  }, [gameStatus])

  useEffect( () => {
    setNewGuessedWord();
  }, [])

  const setNewGuessedWord = (): void => {
    const newGuessedWord = getRandomWord();
    console.log(`%cGuessed word is: ${newGuessedWord}`, INITIAL_WORD_LOG_CSS);
    
    setGuessedWord(newGuessedWord);
    setGameStatus(gameStatuses.PLAYING);
  }

  const addLetter = (letter: string): void => {
    if (!isPlaying) {
      return ;
    }

    const shakeAnimation = shake(activeWordRef.current);
    word.length === 5 ? shakeAnimation.play() : null;

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

    const shakeAnimation = shake(activeWordRef.current);
    word.length === 0 ? shakeAnimation.play() : null;

    setWord( prev => {
      const newWord = [...prev];
      newWord.pop();
      return newWord;
    })
  }

  const submitWord = async () => {
    if (!isPlaying) {
      return ;
    }

    const shakeAnimation = shake(activeWordRef.current);
    const activeWord = word.join('')

    if (word.length !== MAX_WORD_LETTERS) {
      shakeAnimation.play();

      console.error(`can\'t submit: the word has to be 5 letters long, not ${word.length}.`);
      
      return ;
    }

    if (previousWords.includes(activeWord)) {
      shakeAnimation.play();

      console.error(`You have submitted this word (${activeWord})`);

      return ;
    }
    
    const doesExist = await dispatch(fetchWordExists(activeWord));
    if (!doesExist) {
      shakeAnimation.play();

      console.error(`The word (${activeWord}) does not exist!`);

      return ;
    }

    // console.log('submited!')
    setPreviousWords( prev => {
      const newWords = [...prev];
      const newWord = activeWord;
      newWords.push(newWord);

      return newWords;
    })
    setWord([]);

    if (activeWord === guessedWord) {
      setGameStatus(gameStatuses.WON);
      console.log('%cyou won!', YOU_WON_LOG_CSS)
    } else if (previousWords.length === MAX_WORD_ROWS - 1) {
      setGameStatus(gameStatuses.LOST);
      console.log('%cyou lost!', YOU_LOST_LOG_CSS)
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
        {isPlaying && <ActiveWord activeWordRef={activeWordRef} word={word} key={Math.random()} />}
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
