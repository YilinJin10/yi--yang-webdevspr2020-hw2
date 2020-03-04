import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'
import App from './app'

const initialState = (localStorage["redux-store"]) ?
	JSON.parse(localStorage["redux-store"]) :
	sampleData

// const saveState = () =>
// 	localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
//store.subscribe(saveState)

window.React = React
window.store = store

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))

// store.dispatch(
// 	pickLevel("easy")
// )
// store.dispatch(
// 	guessWord("a", store.getState()['targetWords'])
// )
// store.dispatch(
// 	addToHistory("a", store.getState()['chanceLeft'])
// )
// store.dispatch(
// 	guessWord("c", store.getState()['targetWords'])
// )
// store.dispatch(
// 	addToHistory("c", store.getState()['chanceLeft'])
// )
// store.dispatch(
// 	guessWord("d", store.getState()['targetWords'])
// )
// store.dispatch(
// 	addToHistory("d",store.getState()['chanceLeft'])
// )
// store.dispatch(
// 	guessWord("e", store.getState()['targetWords'])
// )
// store.dispatch(
// 	addToHistory("e", store.getState()['chanceLeft'])
// )
// store.dispatch(
// 	guessWord("a", store.getState()['targetWords'])
// )
// store.dispatch(
// 	addToHistory("a", store.getState()['chanceLeft'])
// )


