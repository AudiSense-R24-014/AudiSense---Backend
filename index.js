import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

import { options } from './config/swagger.js'


import { poolPromise } from './config/db.js'
import router from './app/routers/index.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())

router(app)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)))

poolPromise.then(pool => {
    app.set('pool', pool)
}
).catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
    console.log('Swagger is running on http://localhost:3000/api-docs')
})