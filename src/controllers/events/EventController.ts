const AddEvent = require('../../application/user_cases/AddEvent')
const GetAllEvents = require('../../application/user_cases/GetAllEvents')
const GetEvent = require('../../application/user_cases/GetEvent')


module.exports = (dependencies) => {
    const {eventRepository} = dependencies

    const getAllEvents = (req, res, next) => {
        const GetAllEventQuery = GetAllEvents(eventRepository)

        console.log(req.query)

        const size = parseInt(req.query.size, 10)
        const page = parseInt(req.query.page, 10)

        GetAllEventQuery.Execute(size, page).then((events) => {
            res.json(events)
        }, (err) => {
            next(err)
        })

    }
    const getEvent = (req, res, next) => {
        const GetEventQuery = GetEvent(eventRepository)

        GetEventQuery.Execute(+req.params.eventId).then((event) => {
            res.json(event)
        }, (err) => {
            next(err)
        })
    }

    return {
        getAllEvents,
        getEvent,
    }
}