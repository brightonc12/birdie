import express = require('express')
import bodyParser = require('body-parser')
const routes = require('./frameworks/web/routes')
const dependencies = require('./config/dependencies')
const ErrorHandler = require('./frameworks/common/ErrorHandler')

const app = express()
const port = process.env.PORT || 4000

dependencies.DatabaseServices.initDatabase().then((dependencyInstant) => {
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())

    app.use('/v1', routes(dependencyInstant))

    app.use(ErrorHandler)

    app.listen(port, () => console.log(`http://localhost:${port}`))
}, (err) => {
    console.log(`Database is not ready: error: ${err}`)
})