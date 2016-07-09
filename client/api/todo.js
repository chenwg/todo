import Request from './request'

const request = Request(process.env.APIENDPOINT)

export default {
  find(){
    return request.get('/todos')
  },

  create(title){
    return request.post('/todos', {title})
  },

  update(id, status){
    return request.put(`/todos/${id}`, {status})
  },

  destroy(id){
    return request.delete(`/todos/${id}`)
  }
}
