import sql from 'mssql'
import dotenv from 'dotenv'

dotenv.config()

const config = {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    server: process.env.DATABASE_SERVER,
    database: process.env.DATABASE,
    options: {
        encrypt: true
    }
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Pool Created!')
        return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

const connection = sql.connect(config, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('MSSQL Connection Successful!')
    }
})

export { sql, poolPromise, connection }