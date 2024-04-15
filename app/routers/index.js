import TherapistRouter from "./routes/Therapist.routes.js"
import PatientRouter from "./routes/Patient.routes.js"
import TherapistPatientRouter from "./routes/TherapistPatient.routes.js"
import PatientHearingLevelRouter from "./routes/PatientHearingLevel.routes.js"
import ActivityRouter from "./routes/Activity.routes.js"
import ActivityPatientRouter from "./routes/ActivityPatient.routes.js"
import PatientCompletedTaskRouter from "./routes/PatientCompletedTask.routes.js"
import PerformanceForTaskRouter from "./routes/PerformanceForTask.routes.js"
import QuestionRouter from "./routes/Question.routes.js"
import AnswerRouter from "./routes/Answer.routes.js"
import ReponseToQnARouter from "./routes/ReponseToQnA.routes.js"

function router(app) {
    app.use('/api/therapist', TherapistRouter)
    app.use('/api/patient', PatientRouter)
    app.use('/api/therapist-patient', TherapistPatientRouter)
    app.use('/api/patient-hearing-level', PatientHearingLevelRouter)
    app.use('/api/activity', ActivityRouter)
    app.use('/api/activity-patient', ActivityPatientRouter)
    app.use('/api/patient-completed-task', PatientCompletedTaskRouter)
    app.use('/api/performance-for-task', PerformanceForTaskRouter)
    app.use('/api/question', QuestionRouter)
    app.use('/api/answer', AnswerRouter)
    app.get('/api/reponseToQnA', ReponseToQnARouter)
}

export default router