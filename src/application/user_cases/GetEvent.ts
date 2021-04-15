module.exports = (eventRepository) => {
    async function Execute(eventId) {
        return eventRepository.getById(eventId)
    }
    return { Execute }
}