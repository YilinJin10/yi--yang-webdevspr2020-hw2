import C from './constants'

export function pickLevel(level) {
    return {
        type: C.PICK_LEVEL,
        payload: {level}
	}
}

export function guessWord(wordGuessing, targetWord, chanceLeft) {
        return {
            type: C.GUESS_WORD,
            payload: {wordGuessing, targetWord}

    }
}

export function addToHistory(wordGuessing, targetWord) {
    if(wordGuessing === targetWord) {
        return {
            type: C.RESTART
        }
    } else {
        return {
            type: C.ADD_TO_HISTORY,
            payload: {wordGuessing}
        }
    }
}

export function restart() {
    return {
        type: C.RESTART
    }
}

