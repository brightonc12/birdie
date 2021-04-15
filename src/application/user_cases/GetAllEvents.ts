module.exports = (eventRepository) => {
    async function Execute() {
        return eventRepository.getAll()
    }

    return { Execute }
}