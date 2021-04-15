const AddEvent = require('../../application/user_cases/AddEvent')
const GetAllEvents = require('../../application/user_cases/GetAllEvents')
const GetEvent = require('../../application/user_cases/GetEvent')


module.exports = (dependencies) => {
    const {eventRepository} = dependencies.DatabaseServices

    const getAllEvents = (req, res, next) => {
        const GetAllEventQuery = GetAllEvents(eventRepository)

        GetAllEventQuery.Execute().then((events) => {
            res.json(events)
        }, (err) => {
            next(err)
        })

    }
    const getEvent = (req, res, next) => {
        const GetEventQuery = GetEvent(eventRepository)

        GetEventQuery.Execute(req.params.id).then((event) => {
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