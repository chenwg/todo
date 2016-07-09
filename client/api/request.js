import axios from 'axios'

export default function(baseUrl){
  const buildUrl = (url) => {
    return `${baseUrl}/`.replace(/\/+$/g, '/') + `/${url}`.replace(/^\/+/g, '')
  }

  const onSuccess = (response) => {
    return response.data
  }

  return {
    get(url){
      return axios.get(buildUrl(url)).then(onSuccess)
    },

    post(url, data){
      return axios.post(buildUrl(url), data).then(onSuccess)
    },

    put(url, data){
      return axios.put(buildUrl(url), data).then(onSuccess)
    },

    delete(url, data){
      return axios.delete(buildUrl(url), data).then(onSuccess)
    }
  }
}
