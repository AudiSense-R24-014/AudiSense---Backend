import bcrypt from 'bcrypt';

class Child {
    constructor(id, fname, lName, dob, gender, isImplanted, avtLevel, email, contactNo, password) {
        this.id = id
        this.fname = fname
        this.lName = lName
        this.dob = dob
        this.gender = gender
        this.isImplanted = isImplanted
        this.avtLevel = avtLevel
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

export default Child