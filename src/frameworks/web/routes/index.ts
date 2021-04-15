import express = require('express');
const events = require('./events')


const apiRouter = (dependencies) => {
    const routes = express.Router()

    const eventRouter = events(dependencies)

    routes.use('/events', eventRouter)
    return routes
}

module.exports = apiRouter