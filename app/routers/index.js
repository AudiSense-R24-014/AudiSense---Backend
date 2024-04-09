import therapistRouter from "./routes/Therapist.routes.js"
import patientRouter from "./routes/Patient.routes.js"
import therapistPatientRouter from "./routes/TherapistPatient.routes.js"
import PatientHearingLevelRouter from "./routes/PatientHearingLevel.routes.js"
import ActivityRouter from "./routes/Activity.routes.js"
import ActivityPatientRouter from "./routes/ActivityPatient.routes.js"
import PatientCompletedTaskRouter from "./routes/PatientCompletedTask.routes.js"
import PerformanceForTaskRouter from "./routes/PerformanceForTask.routes.js"

function router(app) {
    app.use('/api/therapist', therapistRouter)
    app.use('/api/patient', patientRouter)
    app.use('/api/therapist-patient', therapistPatientRouter)
    app.use('/api/patient-hearing-level', PatientHearingLevelRouter)
    app.use('/api/activity', ActivityRouter)
    app.use('/api/activity-patient', ActivityPatientRouter)
    app.use('/api/patient-completed-task', PatientCompletedTaskRouter)
    app.use('/api/performance-for-task', PerformanceForTaskRouter)
}

export default router