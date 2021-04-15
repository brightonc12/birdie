import express = require('express');

const eventController = require('../../../controllers/events/EventController');

const eventsRouter = (dependencies) => {
    const router = express.Router()

    const  controller = eventController(dependencies)


    router.route('/:eventId')
        .get(controller.getEvent)

    router.route('/')
        .get(controller.getAllEvents)

    return router
}

module.exports = eventsRouter