import findIndex from 'lodash/findIndex'

const todos = (state = [], action) => {
  switch (action.type) {
    case 'FIND_TODO_SUCCESS':
      const todos = action.response
      return todos

    case 'CREATE_TODO_SUCCESS':
      const todo = action.response
      return state.concat([todo])

    default:
      return state
  }
}

export default todos
