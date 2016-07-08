export default function(app){
  app.get('/__engine/1/ping', (req, res) => {
    res.end(JSON.stringify({
      "runtime": "nodejs-" + process.version,
      "version": "custom"
    }))
  })

  app.get('/1.1/functions/_ops/metadatas', (req, res) => {
    res.end(JSON.stringify([]))
  })
}
