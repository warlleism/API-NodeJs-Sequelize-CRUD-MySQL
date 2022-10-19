const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Router = require('./controller/routes')

require('./database')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Router)

app.listen(3001, () => {
    console.log('Connect Express')
})