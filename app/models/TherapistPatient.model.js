class TherapistPatient {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {number}
     */
    therapistId;

    /**
     * @type {number}
     */
    patientId;

    /**
     * Creates a TherapistPatient object.
     * @param {number} id - The ID of the therapist-patient relationship.
     * @param {number} therapistId - The ID of the therapist.
     * @param {number} patientId - The ID of the patient.
     */
    constructor(id, therapistId, patientId) {
        this.id = id;
        this.therapistId = therapistId;
        this.patientId = patientId;
    }
}

export default TherapistPatient;
