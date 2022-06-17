import React from "react";
import { concatClassnames as c } from "src/utils/other";
import styles from './keyboardrow.module.css';


interface iProps {
    keys: string[];
    word: string;
    previousWords: string[];
}

const buttonKeyTest = (word: string, key: string, usedKeys: string[]): string => {
  if (!usedKeys.includes(key)) {
    return null
  }

  if (word.includes(key)) {
    return styles.right;
  }
  return styles.wrong;
}

const KeyboardRow = ({ keys, word, previousWords }:iProps): JSX.Element => {
  const usedKeys = Array.from(new Set(previousWords.join('')));
  
  return (
    <div className={styles.main}>
    {
        keys.map((i, index) => {
          const wordContainsClass = buttonKeyTest(word, i, usedKeys);
          return <span data-key={i} key={index} className={c(wordContainsClass)}>{i}</span>
        })
    }
    </div>
  )
};

export { KeyboardRow }
