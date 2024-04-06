import therapistRouter from "./routes/Therapist.routes.js"
import childRouter from "./routes/Child.routes.js"

function router(app) {
    app.use('/api/therapist', therapistRouter)
    app.use('/api/child', childRouter)
}

export default router