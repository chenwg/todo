/** mock todo model */
import {default as Find} from 'lodash/find'
import remove from 'lodash/remove'

const TODOS = []

const nextId = () => {
  return Date.now().toString()
}

export function create(data){
  const {title} = data
  const todo = {id: nextId(), title: title, status: 'active'}
  TODOS.push(todo)
  return Promise.resolve(todo)
}

export function count(){
  return Promise.resolve(TODOS.length)
}

export function find(filter){
  if('string' === typeof filter){
    return Promise.resolve(Find(TODOS, {id: filter}))
  }
  return Promise.resolve(TODOS)
}

export function update(id, data){
  const todo = Find(TODOS, {id: id})
  if(!todo){
    return Promise.reject('not found')
  }
  const {status} = data
  todo.status = status
  return Promise.resolve(todo)
}

export function destroy(id){
  if(id){
    return Promise.resolve(remove(TODOS, {id: id}))
  }
  return Promise.resolve(remove(TODOS))
}
