class ReponseToQnA {
    constructor(id, patientId, questionId, activityId, response, status) {
        this.id = id;
        this.patientId = patientId;
        this.questionId = questionId;
        this.activityId = activityId;
        this.response = response;
        this.status = status;
    }
}

export default ReponseToQnA;