class PerformanceForTask {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {number}
     */
    apId;

    /**
     * @type {number}
     */
    noOfAttempts;

    /**
     * Creates a PerformanceForTask object.
     * @param {number} id - The ID of the performance for task.
     * @param {number} apId - The ID of the associated activity-patient.
     * @param {number} noOfAttempts - The number of attempts for the task.
     */
    constructor(id, apId, noOfAttempts) {
        this.id = id;
        this.apId = apId;
        this.noOfAttempts = noOfAttempts;
    }
}

export default PerformanceForTask;
