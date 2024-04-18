class Answer {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {number}
     */
    questionId;

    /**
     * @type {string}
     */
    text;

    /**
     * @type {number}
     */
    isCorrect;

    /**
     * Creates an Answer object.
     * @param {number} id - The ID of the answer.
     * @param {number} questionId - The ID of the question associated with the answer.
     * @param {string} text - The text content of the answer.
     * @param {number} isCorrect - Indicates whether the answer is correct or not.
     */
    constructor(id, questionId, text, isCorrect) {
        this.id = id;
        this.questionId = questionId;
        this.text = text;
        this.isCorrect = isCorrect;
    }
}

export default Answer;
