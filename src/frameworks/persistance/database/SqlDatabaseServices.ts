const DatabaseServices = require('../../../application/contracts/DatabaseServices')
const SqlEventRepository = require('./EventRepository')
import mysql = require('mysql2')


class MysqlCon {
    private static pool = null

    constructor() {
    }

    static getConnection = async () => {
        if (!MysqlCon.pool) {
            const dbPool = mysql.createPool({
                host: process.env.MYSQL_HOST || 'localhost',
                user: process.env.MYSQL_USER || 'root',
                password: process.env.MYSQL_PASSWORD || 'root',
                database: process.env.MYSQL_DB || 'db',
                waitForConnections: true,
            })

            // pool.connect((err) => {
            //     if (err) {
            //         console.log(`Failed to connect to the database: ${err}`)
            //         throw err
            //     }
            //
            //     console.log('Connected to the database successfully')
            // })
            //
            // pool.end((err) => {
            //     console.log('Database terminated')
            // })

            MysqlCon.pool = dbPool
        }

        return MysqlCon.pool
    }
}

module.exports = class SqlDatabaseServices extends DatabaseServices {
    public eventRepository

    constructor() {
        super()
    }

    async initDatabase() {
        const pool = await MysqlCon.getConnection()
        if (!pool) {
            throw new Error('failed to connect to the database')
        }

        this.eventRepository = new SqlEventRepository(pool)

        return this
    }


}