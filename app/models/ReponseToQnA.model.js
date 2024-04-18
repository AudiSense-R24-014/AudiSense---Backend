class ReponseToQnA {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {number}
     */
    patientId;

    /**
     * @type {number}
     */
    questionId;

    /**
     * @type {number}
     */
    activityId;

    /**
     * @type {string}
     */
    response;

    /**
     * @type {string}
     */
    status;

    /**
     * Creates a ReponseToQnA object.
     * @param {number} id - The ID of the response to QnA.
     * @param {number} patientId - The ID of the patient associated with the response.
     * @param {number} questionId - The ID of the question associated with the response.
     * @param {number} activityId - The ID of the activity associated with the response.
     * @param {string} response - The response to the question.
     * @param {string} status - The status of the response.
     */
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
