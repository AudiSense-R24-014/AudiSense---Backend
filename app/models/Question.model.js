class Question {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {number}
     */
    activityId;

    /**
     * @type {string}
     */
    question;

    /**
     * Creates a Question object.
     * @param {number} id - The ID of the question.
     * @param {number} activityId - The ID of the activity associated with the question.
     * @param {string} question - The text of the question.
     */
    constructor(id, activityId, question) {
        this.id = id;
        this.activityId = activityId;
        this.question = question;
    }
}

export default Question;
