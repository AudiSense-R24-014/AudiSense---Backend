import therapistRouter from "./routes/Therapist.routes.js"
import patientRouter from "./routes/Patient.routes.js"
import therapistPatientRouter from "./routes/TherapistPatient.routes.js"

function router(app) {
    app.use('/api/therapist', therapistRouter)
    app.use('/api/patient', patientRouter)
    app.use('/api/therapist-patient', therapistPatientRouter)
}

export default router