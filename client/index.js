import 'babel-polyfill'
import './assets/app.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'

const initialState = {};
const store = configureStore(initialState)

render(
  <Provider store={store}>
    <h1>TODO APP</h1>
  </Provider>
  , document.getElementById('app')
)
