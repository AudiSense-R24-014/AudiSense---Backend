import bcrypt from 'bcrypt';

class Therapist {
    /**
     * @type {number}
     */
    id;

    /**
     * @type {string}
     */
    fName;

    /**
     * @type {string}
     */
    lName;

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
     * Creates a Therapist object.
     * @param {number} id - The ID of the therapist.
     * @param {string} fName - The first name of the therapist.
     * @param {string} lName - The last name of the therapist.
     * @param {string} email - The email of the therapist.
     * @param {string} contactNo - The contact number of the therapist.
     * @param {string} password - The password of the therapist.
     */
    constructor(id, fName, lName, email, contactNo, password) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.email = email;
        this.contactNo = contactNo;
        this.password = password;
    }

    /**
     * Hashes the therapist's password.
     * @returns {string} - The hashed password.
     */
    handlePassword() {
        return bcrypt.hashSync(this.password, process.env.SALT_ROUNDS);
    }

    /**
     * Compares the provided password with the therapist's hashed password.
     * @param {string} password - The password to compare.
     * @returns {boolean} - True if the password matches, false otherwise.
     */
    comparePassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

export default Therapist;
