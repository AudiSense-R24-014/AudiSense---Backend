class ActivityPatient {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {number}
     */
    activity_id;

    /**
     * @type {number}
     */
    patient_id;

    /**
     * @type {string}
     */
    status;

    /**
     * Creates an ActivityPatient object.
     * @param {number} id - The ID of the activity-patient.
     * @param {number} activity_id - The ID of the activity associated with the patient.
     * @param {number} patient_id - The ID of the patient associated with the activity.
     * @param {string} status - The status of the activity-patient.
     */
    constructor(id, activity_id, patient_id, status) {
        this.id = id;
        this.activity_id = activity_id;
        this.patient_id = patient_id;
        this.status = status;
    }
}

export default ActivityPatient;
