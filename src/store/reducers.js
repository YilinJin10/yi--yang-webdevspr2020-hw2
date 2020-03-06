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

// use list.random() to return a random element from the list
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
};

// get word list, find a target, store as an object
export const wordList = (state = [], action) => {
  if(action.type === C.PICK_LEVEL) {
    return require('../AllLevelWordList.js').easy.list;
    // return {
    //         target: easyWordList.random(),
    //         list: easyWordList
    //       };
    // switch (action.payload.level) {
    //   case 'easy':
    //     let easyWordList = require('../AllLevelWordList.js').easy.list;
    //     return {
    //       target: easyWordList.random(),
    //       list: easyWordList
    //     };
    //   case 'medium':
    //     let mediumWordList = require('../AllLevelWordList.js').medium.list;
    //     return {
    //       target: mediumWordList.random(),
    //       list: mediumWordList
    //     };
    //   case 'hard':
    //     let hardWordList = require('../AllLevelWordList.js').hard.list;
    //     return {
    //       target: hardWordList.random(),
    //       list: hardWordList
    //     };
    //   default:
    //     return state;
    // }
  } else if (action.type === C.RESTART) {
    return {}
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
  } else if (action.type === C.RESTART || action.type === C.PICK_LEVEL) {
    return C.TOTAL_CHANCES;
  }
  return state
};

// not needed anymore, target word is stored in the wordList object
export const targetWords = (state = '', action) => {
  if (action.type === C.PICK_LEVEL) {
    switch (action.payload.level) {
      case 'easy':
        let easyWordList = require('../AllLevelWordList.js').easy.list;
        return easyWordList.random();
      case 'medium':
        let mediumWordList = require('../AllLevelWordList.js').medium.list;
        return mediumWordList[Math.floor((Math.random() * mediumWordList.length))];
      case 'hard':
        let hardWordList = require('../AllLevelWordList.js').hard.list;
        return hardWordList[Math.floor((Math.random() * hardWordList.length))];
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
    } else if (action.type === C.RESTART || action.type === C.PICK_LEVEL) {
      return [];
    }

  return state
}

export const wordGuessing = (state = null, action) => {
  if (action.type === C.GUESS_WORD) {
    return action.payload.wordGuessing
  } else if (action.type === C.RESTART || action.type === C.PICK_LEVEL) {
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
};

// helper function, return correct positions, comparing two strings
let compare = function (guess, target) {
  let minLength = Math.min(guess.length, target.length);
  let correctPos = 0;
  for (var i = 0; i < minLength; i++) {
    if (target.charAt(i) === guess.charAt(i)) {
      correctPos++;
    }
  }
  return correctPos + " / " + target.length;
};

export const correctPosition = (state = '', action) => {
  if (action.type === C.GUESS_WORD) {
    let guessing = action.payload.wordGuessing;
    let target =  action.payload.targetWord;
    return compare(guessing, target);
  } else {
    return state;
  }
};

export default combineReducers({
  level: level,
  wordList: wordList,
  chanceLeft: chanceLeft,
  targetWords: targetWords,
  guessingHistory:guessingHistory,
  wordGuessing: wordGuessing,
  restart: restart,
  correctPosition: correctPosition,
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




