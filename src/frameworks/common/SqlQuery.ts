export const SqlQuery = (pool, query: string) => new Promise(((resolve: (value: { rows: any, fields: any }) => void, reject: (reason) => void) => {
    pool.query(query, function (err, rows, fields) {
        if (err || !rows) {
            reject(err)
        }
        resolve({rows, fields})
    })
}))

