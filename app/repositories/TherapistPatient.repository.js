import { sql } from "../../config/db.js";
import TherapistPatient from "../models/TherapistPatient.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM therapistPatient");
    const therapistPatients = result.recordset.map((record) => {
        return new TherapistPatient(record.id, record.therapistId, record.patientId);
    });
    return therapistPatients;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM therapistPatient WHERE id = @id");
    const record = result.recordset[0];
    return new TherapistPatient(record.id, record.therapistId, record.patientId);
}

async function create(therapistPatient) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("therapistId", sql.Int, therapistPatient.therapistId)
        .input("patientId", sql.Int, therapistPatient.patientId)
        .query(
            "INSERT INTO therapistPatient (therapistId, patientId) VALUES (@therapistId, @patientId)"
        );
    return result;
}

async function update(id, therapistPatient) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("therapistId", sql.Int, therapistPatient.therapistId)
        .input("patientId", sql.Int, therapistPatient.patientId)
        .query(
            "UPDATE therapistPatient SET therapistId = @therapistId, patientId = @patientId WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM therapistPatient WHERE id = @id");
    return result;
}

export default { getAll, getById, create, update, remove };