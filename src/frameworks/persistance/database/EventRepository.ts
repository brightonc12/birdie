const EventRepository = require('../../../application/contracts/EventRepository')

module.exports = class SqlEventRepository extends EventRepository {
    constructor(props) {
        super(props);

    }

    getById(eventId) {
        console.log(this.props)
        console.log(eventId)
        return Promise.reject(new Error('Not Implemented'))
    }

    getAll() {
        console.log(this.props)
        return Promise.reject(new Error('Not Implemented'))
    }

}