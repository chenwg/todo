import * as Todo from './todo'

export default function(){
  const path = require('path')
  const express = require('express')
  const jsonParser = require('body-parser').json()

  const api = express()

  api.get('/todos', (req, res) => {
    Todo.find()
      .then(todos => {
        res.json(todos)
      })
      .catch(err => {
        res.status(404).json(err)
      })
  })

  api.post('/todos', jsonParser, (req, res) => {
    const {title} = req.body
    Todo.create({title}).then(todo => {
      res.json(todo)
    })
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
    })
  })

  api.delete('/todos', jsonParser, (req, res) => {
    const {status} = req.body
    Todo.destroy({status}).then(() => {
      res.status(200).end()
    })
  })

  return api
}
