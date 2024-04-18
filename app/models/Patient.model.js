import bcrypt from 'bcrypt';

class Patient {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    fname;

    /**
     * @type {string}
     */
    lName;

    /**
     * @type {Date}
     */
    dob;

    /**
     * @type {string}
     */
    gender;

    /**
     * @type {number}
     */
    isImplanted;

    /**
     * @type {number}
     */
    avtLevel;

    /**
     * @type {string}
     */
    email;

    /**
     * @type {string}
     */
    contactNo;

    /**
     * @type {string}
     */
    password;

    /**
     * Creates a Patient object.
     * @param {number} id - The ID of the patient.
     * @param {string} fname - The first name of the patient.
     * @param {string} lName - The last name of the patient.
     * @param {Date} dob - The date of birth of the patient.
     * @param {string} gender - The gender of the patient.
     * @param {number} isImplanted - Indicates if the patient is implanted.
     * @param {number} avtLevel - The AVT level of the patient.
     * @param {string} email - The email of the patient.
     * @param {string} contactNo - The contact number of the patient.
     * @param {string} password - The password of the patient.
     */
    constructor(id, fname, lName, dob, gender, isImplanted, avtLevel, email, contactNo, password) {
        this.id = id;
        this.fname = fname;
        this.lName = lName;
        this.dob = dob;
        this.gender = gender;
        this.isImplanted = isImplanted;
        this.avtLevel = avtLevel;
        this.email = email;
        this.contactNo = contactNo;
        this.password = password;
    }

    /**
     * Hashes the patient's password.
     * @returns {string} - The hashed password.
     */
    handlePassword() {
        return bcrypt.hashSync(this.password, process.env.SALT_ROUNDS);
    }

    /**
     * Compares the provided password with the patient's hashed password.
     * @param {string} password - The password to compare.
     * @returns {boolean} - True if the password matches, false otherwise.
     */
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

export default Patient;
