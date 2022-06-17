import { combineReducers } from "redux";
import { usedWordsReducer } from "./usedWordsReducer";

const rootReducer = combineReducers({
    usedWords: usedWordsReducer,
})

export { rootReducer }