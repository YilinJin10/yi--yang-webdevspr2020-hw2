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

// helper function, get a specific num of words for that level within the list of that level
let getList = function (level = '', numOfWords = 0) {
  let wordList =  require('../AllLevelWordList.js')[level].list;
  let result = [];
  for (let i = 0; i < numOfWords; i++) {
    result.push(wordList.random());
  }
  return result;
};

// get word list, find a target, store as an object
export const wordList = (state = {'target': '', 'list':[]}, action) => {
  if(action.type === C.PICK_LEVEL) {
    switch (action.payload.level) {
      case 'very_easy':
        //let easyWordList = require('../AllLevelWordList.js').easy.list;
        let very_easyWordList = getList('very_easy', C.VERY_EASY);
        return {
          target: very_easyWordList.random(),
          list: very_easyWordList
        };
      case 'easy':
        //let easyWordList = require('../AllLevelWordList.js').easy.list;
        let easyWordList = getList('easy', C.EASY);
        return {
          target: easyWordList.random(),
          list: easyWordList
        };
      case 'average':
        //let mediumWordList = require('../AllLevelWordList.js').medium.list;
        let averageWordList = getList('average', C.AVERAGE);
        return {
          target: averageWordList.random(),
          list: averageWordList
        };
      case 'hard':
        //let hardWordList = require('../AllLevelWordList.js').hard.list;
        let hardWordList = getList('hard', C.HARD);
        return {
          target: hardWordList.random(),
          list: hardWordList
        };
      case 'very_hard':
        //let easyWordList = require('../AllLevelWordList.js').easy.list;
        let very_hardWordList = getList('very_hard', C.VERY_HARD);
        return {
          target: very_hardWordList.random(),
          list: very_hardWordList
        };
      default:
        return state;
    }
  } else if (action.type === C.RESTART) {
    return {
      'target': '',
      'list':[]
    }
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




