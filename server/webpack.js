export default function(app){
  const webpack = require('webpack')
  const config = require('../webpack/config.dev')
  const compiler = webpack(config)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}
