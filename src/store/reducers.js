import C from '../constants'
import { combineReducers } from 'redux'


export const level = (state= null, action) => {
  if(action.type === C.PICK_LEVEL) {
    return action.payload.level
    //todo: return the correct level
  } else if (action.type === C.RESTART) {
    return null
  }
  return state;
};

export const wordList = (state = [], action) => {
  if(action.type === C.PICK_LEVEL) {
    switch (action.payload.level) {
      case 'easy':
        return ['a', 'b', 'c', 'd']
        break;
      case 'medium':
        return ['e', 'f', 'g', 'h']
        break;
      case 'hard':
        return ['i', 'j']
      default:
        return state;
    }
  } else if (action.type === C.RESTART) {
    return []
  }
  return state;
}

export const chanceLeft = (state = C.TOTAL_CHANCES, action) => {
  if (action.type === C.GUESS_WORD) {
    if (action.payload.wordGuessing === action.payload.targetWord) {
      return C.TOTAL_CHANCES;
    } else {
      state = state - 1;
      return state
    }
  } else if (action.type === C.RESTART) {
    return C.TOTAL_CHANCES;
  }
  return state
}

// export const correctLocation (state = null,  action(guess, target) => {
//   if (action.type === C.GUESS_WORD) {
//     if position
//   }
//   return state;
// }

export const targetWords = (state = '', action) => {
  // let wordListArray = JSON.parse(JSON.stringify(wordList));
  if (action.type === C.PICK_LEVEL) {
    switch (action.payload.level) {
      case 'easy':
        return 'hi'
        break;
      case 'medium':
        return 'hello'
        break;
      case 'hard':
        return 'great'
      default:
        return state;
    }
  } else if (action.type === C.RESTART) {
    return '';
  }
  return state;

}

export const guessingHistory = (state = [], action) => {
    if (action.type === C.ADD_TO_HISTORY) {
      return [...state, action.payload.wordGuessing]
    } else if (action.type === C.RESTART) {
      return [];
    }
  return state
}

export const wordGuessing = (state = null, action) => {
  if (action.type === C.GUESS_WORD) {
    return action.payload.wordGuessing
  } else if (action.type === C.RESTART) {
    return null;
  }
  return state;
}

export const restart = (state = true, action) => {
  if (action.type === C.RESTART) {
    return true;
  } else {
    return false;
  }
}


export default combineReducers({
  level: level,
  wordList: wordList,
  chanceLeft: chanceLeft,
  targetWords: targetWords,
  guessingHistory:guessingHistory,
  wordGuessing: wordGuessing,
  restart: restart,
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




