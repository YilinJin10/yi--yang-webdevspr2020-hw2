import C from './constants'
import {chanceLeft} from "./store/reducers";


export function pickLevel(level) {
    return {
        type: C.PICK_LEVEL,
        payload: {level}
	}
}

// store.dispatch({
// 	type: C.ADD_TO_HISTORY,
// 	payload: {
// 		"wordGuessing": "a"
// 	}
// })

// store.dispatch({
// 	type: C.GUESS_WORD,
// 	payload: {
// 		"wordGuessing": "a",
// 		"targetWord": store.getState()['targetWords']
// 	}
// })
export function guessWord(wordGuessing, targetWord) {
    return {
        type: C.GUESS_WORD,
        payload: {wordGuessing, targetWord}
    }
}

export function addToHistory(wordGuessing, chanceLeft) {
    console.log('chance' + chanceLeft);
    if(chanceLeft === C.TOTAL_CHANCES || chanceLeft === 0) {
        return {
            type: C.CLEAR_HISTORY
        }
    } else {
        return {
            type: C.ADD_TO_HISTORY,
            payload: {wordGuessing}
        }
    }
}
