module.exports = class EventRepository {
    private connection: null;
    constructor(connection) {
        this.connection = connection
    }

    getById(eventId) {
        return Promise.reject(new Error('Not Implemented'))
    }

    getAll() {
        return Promise.reject(new Error('Not Implemented'))
    }
}