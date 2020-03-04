import C from '../constants'
import { combineReducers } from 'redux'
import wordList from '../wordList.json'


export const level = (state= null, action) => {
  if(action.type === C.PICK_LEVEL) {
    return action.payload.level
    //todo: return the correct level
  }
  return state;
};

export const chanceLeft = (state = C.TOTAL_CHANCES, action) => {
  if (action.type === C.GUESS_WORD) {
    if (action.payload.wordGuessing === action.payload.targetWord) {
      return C.TOTAL_CHANCES;
    } else {
      state = state - 1;
      return state
    }
  }
  return state
}

export const targetWords = (state = '', action) => {
  let wordListArray = JSON.parse(JSON.stringify(wordList));
  if (action.type === C.PICK_LEVEL) {
    if (action.payload.level === 'easy') {
      //state = wordListArray['easy'][1];
      return 'b';
    } else if (action.payload.level === 'medium') {
      //return state = wordListArray['medium'][1];
      return 'c';
    }
  }
  return state;
}

export const guessingHistory = (state = [], action) => {
  console.log(action.type)
    if (action.type === C.ADD_TO_HISTORY) {
      return [...state, action.payload.wordGuessing]
    } else if (action.type === C.CLEAR_HISTORY) {
      return [];
    }

  return state
}

export const wordGuessing = (state = '', action) => {
  if (action.type === C.GUESS_WORD) {
    return action.payload.wordGuessing
  }
  return state
}

export default combineReducers({
  level: level,
  chanceLeft: chanceLeft,
  targetWords: targetWords,
  guessingHistory:guessingHistory,
  wordGuessing: wordGuessing
})

// export const goal = (state=10, action) =>
// 	(action.type === C.SET_GOAL) ?
// 		 parseInt(action.payload) :
// 		 state
//
// export const skiDay = (state=null, action) =>
//   (action.type === C.ADD_DAY) ?
//   	action.payload :
//   	state
//
// export const errors = (state=[], action) => {
//   switch(action.type) {
//     case C.ADD_ERROR :
//     	return [
//          ...state,
//          action.payload
//     	]
//     case C.CLEAR_ERROR :
//       return state.filter((message, i) => i !== action.payload)
//   	default:
//   		return state
//   }
// }
//
// export const allSkiDays = (state=[], action) => {
//
//   switch(action.type) {
//
//     case C.ADD_DAY :
//
//       const hasDay = state.some(skiDay => skiDay.date === action.payload.date)
//
//       return (hasDay) ?
//          state :
//          [
//            ...state,
//            skiDay(null, action)
//          ].sort((a, b) => new Date(b.date) - new Date(a.date))
//
//     case C.REMOVE_DAY :
//
//       return state.filter(skiDay => skiDay.date !== action.payload)
//
//     default:
//       return state
//   }
//
// }
//
// export const fetching = (state=false, action) => {
//
//   switch(action.type) {
//
//     case C.FETCH_RESORT_NAMES :
//       return true
//
//     case C.CANCEL_FETCHING :
//       return false
//
//     case C.CHANGE_SUGGESTIONS :
//       return false
//
//     default:
//       return state
//   }
//
// }
//
// export const suggestions = (state=[], action) => {
//
//   switch(action.type) {
//
//     case C.CLEAR_SUGGESTIONS :
//       return []
//
//     case C.CHANGE_SUGGESTIONS :
//       return action.payload
//
//     default :
//       return state
//   }
//
// }
//
// export default combineReducers({
//   allSkiDays,
//   goal,
//   errors,
//   resortNames: combineReducers({
//     fetching,
//     suggestions
//   })
// })




