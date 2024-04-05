import personRouter from "./routes/Person.routes.js"
import therapistRouter from "./routes/Therapist.routes.js"

function router(app) {
    app.use('/api/person', personRouter)
    app.use('/api/therapist', therapistRouter)
}

export default router