import React from 'react'
import { storiesOf, action } from '@kadira/storybook'

import TodoList from 'containers/TodoList/TodoList'

const actions = {
  find: action('find'),
  create: action('create'),
  update: action('update'),
  destroy: action('destroy')
}

const todos = [
  {id: '1', title: 'Todo 1', status: 'active'}
]

storiesOf('TodoList', module)
  .add('default view', ()=>{
    return (
      <TodoList todos={todos} actions={actions}/>
    )
  })
