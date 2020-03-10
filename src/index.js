import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'
import App from './app'
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = (localStorage["redux-store"]) ?
	JSON.parse(localStorage["redux-store"]) :
	sampleData

const store = storeFactory(initialState)

window.React = React
window.store = store

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'))



