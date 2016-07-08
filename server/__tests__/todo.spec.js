jest.unmock('../todo');

import * as Todo from '../todo'

describe('TODO model', () => {
  beforeEach((done) => {
    Todo.destroy().then(done)
  })

  describe('create', () => {
    it('should create a new TODO', () => {
      return Todo.create({title: 'title of todo'}).then(todo => {
        expect(todo.title).toEqual('title of todo')
        expect(todo.status).toEqual('active')
      })
    })
  })

  describe('find', () => {
    beforeEach(done => {
      Todo.create({title: 'title of todo'}).then(done)
    })

    it('should found all todos', () => {
      return Todo.find().then(todos => {
        expect(todos.length).toEqual(1)
      })
    })

    it('should found todos with specified status', () => {
      return Todo.find({status: 'active'}).then(todos => {
        expect(todos.length).toEqual(1)
      })
    })
  })
})
