import Todo from '../api/todo'

export function find(){
  return (dispatch) => {
    dispatch({type: 'FIND_TODO_REQUEST'})
    Todo.find().then((todos) => {
      dispatch({type: 'FIND_TODO_SUCCESS', response: todos})
    }).catch(() => {
      dispatch({type: 'FIND_TODO_FAILURE'})
    })
  }
}

export function create(title){
  return (dispatch) => {
    dispatch({type: 'CREATE_TODO_REQUEST'})
    Todo.create(title).then((todo) => {
      dispatch({type: 'CREATE_TODO_SUCCESS', response: todo})
    }).catch(() => {
      dispatch({type: 'CREATE_TODO_FAILURE'})
    })
  }
}

export function update(id, status){
  return {
    type: 'UPDATE_TODO',
    id,
    status
  }
}

export function destroy(id){
  return {
    type: 'DESTROY_TODO',
    id
  }
}
