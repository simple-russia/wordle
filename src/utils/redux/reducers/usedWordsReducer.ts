type wordsState = string[];
const initialState: wordsState = [];

const WORDS_LIMIT = 50;
const ADD_CACHED_WORD = 'ADD_CACHED_WORD';

type AddCachedWordAction = {
    type: typeof ADD_CACHED_WORD,
    payload: string,
}

const AddCachedWord = (word: string): AddCachedWordAction => {
    return {type: ADD_CACHED_WORD, payload: word};
}

type actions = AddCachedWordAction;

const usedWordsReducer = (state:wordsState = initialState, action: actions) => {
    if (action.type === ADD_CACHED_WORD) {
        return [action.payload, ...state].slice(0, WORDS_LIMIT - 1);
    }
    return state
}

export { usedWordsReducer, AddCachedWord }