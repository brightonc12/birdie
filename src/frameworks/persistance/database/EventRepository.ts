const EventRepository = require('../../../application/contracts/EventRepository')
const {SqlQuery} = require('../../common/SqlQuery');
const {AppError} = require('../../common/exceptions/AppError')


module.exports = class SqlEventRepository implements InstanceType<typeof EventRepository> {
    private readonly pool

    constructor(pool) {
        this.pool = pool;
    }

    async getById(eventId: number) {
        try {
            const res = await SqlQuery(this.pool, `SELECT * FROM events WHERE id=${eventId} LIMIT 1`)
            return res.rows[0]
        } catch (e) {
            console.log(e)
            throw new AppError('Event not found', 404)
        }
    }

    async getAll(size: number = 0, page: number = 1) {
        let total: number = 0
        let offset: number = 0

        if (size > 50) {
            size = 50
        }

        if (page <= 0) {
            size = 0
            offset = 0
        } else if (page > 1) {
            offset = ((page - 1) * size)
        }

        try {
            const res = await SqlQuery(this.pool, 'SELECT COUNT(id) AS total FROM events')
            total = parseInt(res.rows[0].total, 10)
            if (total > 0) {
                console.log(size, offset)
                const result = await SqlQuery(this.pool, `SELECT * FROM events LIMIT ${size} OFFSET ${offset}`)
                return result.rows
            }

            return []

        } catch (e) {
            console.log(e)
            throw new Error('Failure fetch events')
        }
    }

}