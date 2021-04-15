module.exports = (eventRepository) => {
    async function Execute(eventId: number) {
        return eventRepository.getById(eventId)
    }
    return { Execute }
}