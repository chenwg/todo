jest.unmock('../todo')

import * as Todo from '../todo'

describe('Todo', () => {
  beforeEach((done) => {
    Todo.destroy().then(() => {
      done()
    })
  })

  it('create', () => {
    return Todo.create({title: 'title'}).then(todo => {
      expect(todo.title).toEqual('title')
      expect(todo.status).toEqual('active')
    })
  })

  describe('find', () => {
    let todoId
    beforeEach((done) => {
      Todo.create({title: 'title'}).then(todo => {
        todoId = todo.id
        done()
      })
    })

    it('find all', () => {
      return Todo.find().then(todos => {
        expect(todos.length).toEqual(1)
      })
    })

    it('find by id', () => {
      return Todo.find(todoId).then(todo => {
        expect(todo.id).toEqual(todoId)
      })
    })

    it('find by filter', () => {
      return Todo.find({status: 'active'}).then(todos => {
        expect(todos.length).toEqual(1)
      })
    })

    it('should not found by filter', () => {
      return Todo.find({status: 'missing_status'}).then(todos => {
        expect(todos.length).toEqual(0)
      })
    })

  })

  describe('update', () => {
    let subject
    beforeEach((done) => {
      Todo.create({title: 'title'}).then(todo => {
        subject = todo
        done()
      })
    })

    it('should updated', () => {
      return Todo.update(subject.id, {status: 'completed'}).then(todo => {
        expect(todo.status).toEqual('completed')
      })
    })
  })

  describe('destroy', () => {
    let subject
    beforeEach((done) => {
      Todo.create({title: 'title'}).then(todo => {
        subject = todo
        done()
      })
    })

    it('should destroy', () => {
      return Todo.destroy(subject.id)
        .then((success) => {
          expect(success).toBe(true)
          return Todo.find(subject.id)
        })
        .then(todo => {
          expect(todo).toBeUndefined()
        })
    })
  })
})
