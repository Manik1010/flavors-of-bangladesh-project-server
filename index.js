const express = require('express')
const app = express()
const port = 6000
const cors = require('cors');
app.use(cors());

const chafs = require('./data/chafData.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chafs', (req, res) => {
    res.send(chafs)
})

app.listen(port, () => {
  console.log(`Flavors of Bangladesh Project on port ${port}`)
})