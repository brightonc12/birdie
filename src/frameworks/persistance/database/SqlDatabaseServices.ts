const DatabaseServices = require('../../../application/contracts/DatabaseServices')
const SqlEventRepository = require('./EventRepository')
import mysql = require('mysql')



class MysqlCon {
    private static connection = null
    constructor() {
    }
    static getConnection = async () => {
        if (!MysqlCon.connection) {
            const con = mysql.createConnection({
                host     : process.env.MYSQL_HOST || 'localhost',
                user     : process.env.MYSQL_USER || 'root',
                password : process.env.MYSQL_PASSWORD || 'root',
                database : process.env.MYSQL_DB || 'db'
            })

            con.connect((err) => {
                if (err) {
                    console.log(`Failed to connect to the database: ${err}`)
                    throw err
                }

                console.log('Connected to the database successfully')
            })

            con.end((err) => {
                console.log('Database terminated')
            })

            MysqlCon.connection = con

            return MysqlCon.connection
        }
    }
}

module.exports = class SqlDatabaseServices extends DatabaseServices {
    constructor() {
        super()
    }

    async initDatabase() {
        const con = await MysqlCon.getConnection()
        if (!con) {
            throw new Error('failed to connect to the database')
        }

        this.eventRepository = new SqlEventRepository(con)

        return this
    }



}