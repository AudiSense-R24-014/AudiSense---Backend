import bcrypt from 'bcrypt';

class Therapist {
    constructor(id, fName, lName, email, contactNo, password) {
        this.id = id
        this.fName = fName
        this.lName = lName
        this.email = email
        this.contactNo = contactNo
        this.password = password
    }

    handlePassword() {
        return bcrypt.hashSync(this.password, process.env.SALT_ROUNDS)
    }

    comparePassword(password) {
        return bcrypt.compareSync(password, this.password)
    }
}

export default Therapist