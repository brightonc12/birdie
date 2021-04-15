const SqlDatabaseService = require('../frameworks/persistance/database/SqlDatabaseServices')

module.exports = (() => {
    return {
        DatabaseServices: new SqlDatabaseService()
    }
})()