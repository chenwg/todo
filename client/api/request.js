import 'isomorphic-fetch'

export default function(baseUrl){
  const doRequest = (verb, url, data) => {
    let absUrl = `${baseUrl}/`.replace(/\/+$/g, '/') + `/${url}`.replace(/^\/+/g, '')

    if(verb === 'GET'){
      return fetch(absUrl)
    }

    const options = {method: verb.toUpperCase()}
    if(data){
      options.body = JSON.stringify(data)
    }
    return fetch(absUrl, options)
  }

  return {
    get(url){
      return doRequest('GET', url)
    },

    post(url, data){
      return doRequest('POST', url, data)
    },

    put(url, data){
      return doRequest('PUT', url, data)
    },

    delete(url, data){
      return doRequest('DELETE', url, data)
    }
  }
}
