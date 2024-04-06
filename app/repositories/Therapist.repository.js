import { sql } from "../../config/db.js";
import Therapist from "../models/Therapist.model.js";
import { createTokan } from "../middleware/user.middleware.js";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM therapist");
    const therapists = result.recordset.map((record) => {
        return new Therapist(record.id, record.fName, record.lName, record.email, record.contactNo, record.password);
    });
    return therapists;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM therapist WHERE id = @id");
    const record = result.recordset[0];
    return new Therapist(record.id, record.fName, record.lName, record.email, record.contactNo, record.password);
}

async function create(therapist) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("fName", sql.VarChar, therapist.fName)
        .input("lName", sql.VarChar, therapist.lName)
        .input("email", sql.VarChar, therapist.email)
        .input("contactNo", sql.VarChar, therapist.contactNo)
        .input("password", sql.VarChar, bcrypt.hashSync(therapist.password, 10))
        .query(
            "INSERT INTO therapist (fName, lName, email, contactNo, password) VALUES (@fName, @lName, @email, @contactNo, @password)"
        );
    return result;
}

async function update(id, therapist) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("fName", sql.VarChar, therapist.fName)
        .input("lName", sql.VarChar, therapist.lName)
        .input("email", sql.VarChar, therapist.email)
        .input("contactNo", sql.VarChar, therapist.contactNo)
        .input("password", sql.VarChar, bcrypt.hashSync(therapist.password, 10))
        .query(
            "UPDATE therapist SET fName = @fName, lName = @lName, email = @email, contactNo = @contactNo, password = @password WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM therapist WHERE id = @id");
    return result;
}

async function login(email, password) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("email", sql.VarChar, email)
        .query("SELECT * FROM therapist WHERE email = @email");
    const record = result.recordset[0];
    const therapist = new Therapist(record.id, record.fName, record.lName, record.email, record.contactNo, record.password);
    if (therapist.comparePassword(password)) {
        const token = createTokan(therapist);
        return token;
    } else {
        return null;
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    login
};


