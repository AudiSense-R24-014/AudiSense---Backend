import therapistRouter from "./routes/Therapist.routes.js"
import patientRouter from "./routes/Patient.routes.js"
import therapistPatientRouter from "./routes/TherapistPatient.routes.js"
import PatientHearingLevelRouter from "./routes/PatientHearingLevel.routes.js"
import ActivityRouter from "./routes/Activity.routes.js"

function router(app) {
    app.use('/api/therapist', therapistRouter)
    app.use('/api/patient', patientRouter)
    app.use('/api/therapist-patient', therapistPatientRouter)
    app.use('/api/patient-hearing-level', PatientHearingLevelRouter)
    app.use('/api/activity', ActivityRouter)
}

export default router