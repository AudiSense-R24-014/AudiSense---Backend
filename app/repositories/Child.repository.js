import { sql } from "../../config/db.js";
import Child from "../models/Child.model.js";
import { createTokan } from "../middleware/user.middleware.js";
import bcrypt from "bcrypt";
import dotenv from 'dotenv'

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM child");
    const children = result.recordset.map((record) => {
        return new Child(record.id, record.fName, record.lName, record.dob, record.gender, record.isImplanted, record.avtLevel, record.email, record.contactNo, record.password)
    });
    return children;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM child WHERE id = @id");
    const record = result.recordset[0];
    return new Child(record.id, record.fName, record.lName, record.dob, record.gender, record.isImplanted, record.avtLevel, record.email, record.contactNo, record.password)
}

async function create(child) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("fName", sql.VarChar, child.fName)
        .input("lName", sql.VarChar, child.lName)
        .input("dob", sql.Date, child.dob)
        .input("gender", sql.VarChar, child.gender)
        .input("isImplanted", sql.Int, child.isImplanted)
        .input("avtLevel", sql.VarChar, child.avtLevel)
        .input("email", sql.VarChar, child.email)
        .input("contactNo", sql.VarChar, child.contactNo)
        .input("password", sql.VarChar, bcrypt.hashSync(child.password, 10))
        .query(
            "INSERT INTO child (fName, lName, dob, gender, isImplanted, avtLevel, email, contactNo, password) VALUES (@fName, @lName, @dob, @gender, @isImplanted, @avtLevel, @email, @contactNo, @password)"
        );
    return result;
}

async function update(id, child) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("fName", sql.VarChar, child.fName)
        .input("lName", sql.VarChar, child.lName)
        .input("dob", sql.Date, child.dob)
        .input("gender", sql.VarChar, child.dob)
        .input("isImplanted", sql.Int, child.isImplanted)
        .input("avtLevel", sql.VarChar, child.avtLevel)
        .input("email", sql.VarChar, child.email)
        .input("contactNo", sql.VarChar, child.contactNo)
        .input("password", sql.VarChar, bcrypt.hashSync(child.password, 10))
        .query(
            "UPDATE child SET fName = @fName, lName = @lName, dob = @dob, gender = @gender, isImplanted = @isImplanted, avtLevel = @avtLevel, email = @email, contactNo = @contactNo, password = @password WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM child WHERE id = @id");
    return result;
}

async function login(email, password) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("email", sql.VarChar, email)
        .query("SELECT * FROM child WHERE email = @email");
    const record = result.recordset[0];
    const child = new Child(record.id, record.fName, record.lName, record.dob, record.gender, record.isImplanted, record.avtLevel, record.email, record.contactNo, record.password);
    if (child.comparePassword(password)) {
        const token = createTokan(child);
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
