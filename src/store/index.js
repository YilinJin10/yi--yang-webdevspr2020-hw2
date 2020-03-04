import C from '../constants'
import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

const consoleMessages = store => next => action => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('LEVEL', store.getState().level)
    console.log('chanceleft', store.getState().chanceLeft)
    console.log('history', store.getState().guessingHistory)
    console.log('targetWords', store.getState().targetWords)
    console.log('wordGuessing', store.getState().wordGuessing)



    result = next(action)

    let { level} = store.getState()
    let {chanceLeft} = store.getState()
    let {guessingHistory} = store.getState()
    let {targetWords} = store.getState()
    let {wordGuessing} = store.getState()

    console.log(`

		level: ${level}
		chanceLeft: ${chanceLeft}
		history: ${guessingHistory}
		targetWords: ${targetWords}
		wordGuessing: ${wordGuessing}
	`)

    console.groupEnd()

    return result

}

export default (initialState={}) => {
    return applyMiddleware(consoleMessages)(createStore)(appReducer, initialState)
}

