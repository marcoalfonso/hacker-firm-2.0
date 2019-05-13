const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const mailer = require('./mailer')

app.prepare().then(() => {
  const server = express()

  server.use(bodyParser.json())

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.post('/api/contact', (req, res) => {
    const { email = '', name = '', message = '' } = req.body

    mailer({ email, name, text: message }).then(() => {
      console.log('success')
      res.send('success')
    }).catch((error) => {
      console.log('failed', error)
      res.send(error)
    })
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Read on http://localhost:${port}`)
  })
})
