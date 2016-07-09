import remove from 'lodash/remove'
import Find from 'lodash/find'
import Filter from 'lodash/filter'

const TODOS = []

const nextId = () => {
  return Date.now().toString()
}

export function create(data){
  const {title} = data
  const todo = {
    id: nextId(),
    title,
    status: 'active'
  }
  TODOS.push(todo)
  return Promise.resolve(todo)
}

export function destroy(filter){
  if('string' === typeof filter){
    remove(TODOS, {id: filter})
  }else{
    remove(TODOS, filter)
  }
  return Promise.resolve(true)
}

export function find(filter){
  if(!filter){
    return Promise.resolve(TODOS)
  }
  if('string' === typeof filter){
    return Promise.resolve(Find(TODOS, {id: filter}))
  }
  return Promise.resolve(Filter(TODOS, filter))
}

export function update(id, data){
  const {status} = data
  const todo = Find(TODOS, {id})
  if(!todo){
    return Promise.reject('not found')
  }
  todo.status = status
  return Promise.resolve(todo)
}
