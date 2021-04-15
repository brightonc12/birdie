module.exports = (eventRepository) => {
    async function Execute(size: number, page: number) {
        return eventRepository.getAll(size, page)
    }
    return { Execute }
}