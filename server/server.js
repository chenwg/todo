const path = require('path')
const express = require('express')

const prod = process.env.NODE_ENV === 'production'

const app = express()

if(prod){
  //leancloud deploy APIs
  require('./leancloud')(app)

  // favicon response
  app.use(require('serve-favicon')(path.join(__dirname, 'public', 'favicon.ico')))

  // handle static files
  app.use(express.static('public'))
}else{
  //webpack dev and hot reload
  require('./webpack')(app)
}

// simple rewrite for production
if(prod){
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
  })
}

const port = parseInt(process.env.LEANCLOUD_APP_PORT || process.env.APP_PORT, 10) || 3000
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("Runtime version = %s", process.version)
    console.info("LEANCLOUD_APP_PORT = %s", process.env.LEANCLOUD_APP_PORT)
    console.info("LEANCLOUD_APP_ID = %s", process.env.LEANCLOUD_APP_ID)
    console.info("LEANCLOUD_APP_ENV = %s", process.env.LEANCLOUD_APP_ENV)
    console.info("LEANCLOUD_REGION = %s", process.env.LEANCLOUD_REGION)
    console.info("Listening on port %s", port)
  }
})
