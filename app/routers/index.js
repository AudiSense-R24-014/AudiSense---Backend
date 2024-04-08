import therapistRouter from "./routes/Therapist.routes.js"
import patientRouter from "./routes/Patient.routes.js"

function router(app) {
    app.use('/api/therapist', therapistRouter)
    app.use('/api/patient', patientRouter)
}

export default router