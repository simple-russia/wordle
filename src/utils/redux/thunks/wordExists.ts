import { ThunkDispatch } from "redux-thunk"
import { AddCachedWord } from "src/utils/redux/reducers/usedWordsReducer";

// this function requires serious refactoring with "any"
const fetchWordExists = (word: string) => async (dispatch: ThunkDispatch<any, void, any>, getState: ()=>any) => {
    const usedWords = getState().usedWords;
    
    console.log(`cached word list: ${usedWords}`)
    if (usedWords.includes(word)) {
        console.warn('this word is cached!')
        return true;
    }

    const result = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(resp => resp.json());
    const doesExist = result.title ? false : true;

    if (doesExist) {
        dispatch(AddCachedWord(word));
    }

    return doesExist;
}

export { fetchWordExists }