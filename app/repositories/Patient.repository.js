import { sql } from "../../config/db.js";
import Therapist from "../models/Therapist.model.js";
import Patient from "../models/Patient.model.js";
import TherapistPatient from "../models/TherapistPatient.model.js";
import Activity from "../models/Activity.model.js";
import ActivityPatient from "../models/ActivityPatient.model.js";
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

// get therapists by patient id from therapistPatient
async function getTherapistByPatientId(patientId) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("patientId", sql.Int, patientId)
        .query("SELECT * FROM therapistPatient WHERE patientId = @patientId");
    const therapistsList = result.recordset.map((record) => {
        return new TherapistPatient(record.id, record.therapistId, record.patientId);
    });
    // get therapists by therapistId from therapist
    const therapists = [];
    for (let i = 0; i < therapistsList.length; i++) {
        const result = await pool
            .request()
            .input("id", sql.Int, therapistsList[i].therapistId)
            .query("SELECT * FROM therapist WHERE id = @id");
        const record = result.recordset[0];
        therapists.push(new Therapist(record.id, record.fName, record.lName, record.email, record.contactNo, record.password));
    }
    return therapists;
}

// get activities by patient id from activityPatient and activity
async function getActivitiesByPatientId(patientId) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("patientId", sql.Int, patientId)
        .query("SELECT * FROM activityPatient WHERE patientId = @patientId");
    const activitiesList = result.recordset.map((record) => {
        return new ActivityPatient(record.id, record.activityId, record.patientId);
    });
    // get activities by activityId from activity
    const activities = [];
    for (let i = 0; i < activitiesList.length; i++) {
        const result = await pool
            .request()
            .input("id", sql.Int, activitiesList[i].activityId)
            .query("SELECT * FROM activity WHERE id = @id");
        const record = result.recordset[0];
        activities.push(new Activity(record.id, record.name, record.description, record.url, record.type));
    }
    return activities;
}


export default {
    getAll,
    getById,
    create,
    update,
    remove,
    login,
    getTherapistByPatientId,
    getActivitiesByPatientId
};