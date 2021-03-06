import 'babel-polyfill'
import './assets/app.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import TodoList from './containers/TodoList'

const initialState = {};
const store = configureStore(initialState)

render(
  <Provider store={store}>
    <TodoList/>
  </Provider>
  , document.getElementById('app')
)
