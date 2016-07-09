import * as Todo from './todo'

export default function(options){
  const express = require('express')
  const api = express()
  const jsonParser = require('body-parser').json()

  const serverError = (res) => () => {
    res.status(500).end()
  }

  api.get('/todos', (req, res) => {
    Todo.find().then(todos => {
      res.json(todos)
    }).catch(serverError(res))
  })

  api.post('/todos', jsonParser, (req, res) => {
    const {title} = req.body
    Todo.create({title}).then(todo => {
      res.json(todo)
    }).catch(serverError(res))
  })

  api.put('/todos/:id', jsonParser, (req, res) => {
    const {id} = req.params
    const {status} = req.body
    Todo.update(id, {status})
      .then(todo => {
        res.json(todo)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  })

  api.delete('/todos/:id', (req, res) => {
    const {id} = req.params
    Todo.destroy(id).then(() => {
      res.end()
    }).catch(serverError(res))
  })

  return api
}
