import { sql } from "../../config/db.js";
import Patient from "../models/Patient.model.js";
import { createTokan } from "../middleware/user.middleware.js";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM patient");
    const children = result.recordset.map((record) => {
        return new Patient(record.id, record.fName, record.lName, record.dob, record.gender, record.isImplanted, record.avtLevel, record.email, record.contactNo, record.password)
    });
    return children;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM patient WHERE id = @id");
    const record = result.recordset[0];
    return new Patient(record.id, record.fName, record.lName, record.dob, record.gender, record.isImplanted, record.avtLevel, record.email, record.contactNo, record.password)
}

async function create(patient) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("fName", sql.VarChar, patient.fName)
        .input("lName", sql.VarChar, patient.lName)
        .input("dob", sql.Date, patient.dob)
        .input("gender", sql.VarChar, patient.gender)
        .input("isImplanted", sql.Int, patient.isImplanted)
        .input("avtLevel", sql.VarChar, patient.avtLevel)
        .input("email", sql.VarChar, patient.email)
        .input("contactNo", sql.VarChar, patient.contactNo)
        .input("password", sql.VarChar, bcrypt.hashSync(patient.password, 10))
        .query(
            "INSERT INTO patient (fName, lName, dob, gender, isImplanted, avtLevel, email, contactNo, password) VALUES (@fName, @lName, @dob, @gender, @isImplanted, @avtLevel, @email, @contactNo, @password)"
        );
    return result;
}

async function update(id, patient) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("fName", sql.VarChar, patient.fName)
        .input("lName", sql.VarChar, patient.lName)
        .input("dob", sql.Date, patient.dob)
        .input("gender", sql.VarChar, patient.dob)
        .input("isImplanted", sql.Int, patient.isImplanted)
        .input("avtLevel", sql.VarChar, patient.avtLevel)
        .input("email", sql.VarChar, patient.email)
        .input("contactNo", sql.VarChar, patient.contactNo)
        .input("password", sql.VarChar, bcrypt.hashSync(patient.password, 10))
        .query(
            "UPDATE patient SET fName = @fName, lName = @lName, dob = @dob, gender = @gender, isImplanted = @isImplanted, avtLevel = @avtLevel, email = @email, contactNo = @contactNo, password = @password WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM patient WHERE id = @id");
    return result;
}

async function login(email, password) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("email", sql.VarChar, email)
        .query("SELECT * FROM patient WHERE email = @email");
    const record = result.recordset[0];
    const patient = new Patient(record.id, record.fName, record.lName, record.dob, record.gender, record.isImplanted, record.avtLevel, record.email, record.contactNo, record.password);
    if (patient.comparePassword(password)) {
        const token = createTokan(patient);
        return token;
    }
    return null;
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    login
};
