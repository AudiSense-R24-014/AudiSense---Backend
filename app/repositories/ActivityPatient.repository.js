import { sql } from "../../config/db.js";
import ActivityPatient from "../models/ActivityPatient.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM activityPatient");
    const activityPatients = result.recordset.map((record) => {
        return new ActivityPatient(record.id, record.activityId, record.patientId, record.status);
    });
    return activityPatients;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM activityPatient WHERE id = @id");
    const record = result.recordset[0];
    return new ActivityPatient(record.id, record.activityId, record.patientId, record.status);
}

async function create(activityPatient) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("activityId", sql.Int, activityPatient.activityId)
        .input("patientId", sql.Int, activityPatient.patientId)
        .input("status", sql.VarChar, activityPatient.status)
        .query(
            "INSERT INTO activityPatient (activityId, patientId, status) VALUES (@activityId, @patientId, @status)"
        );
    return result;
}

async function update(id, activityPatient) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("activityId", sql.Int, activityPatient.activityId)
        .input("patientId", sql.Int, activityPatient.patientId)
        .input("status", sql.VarChar, activityPatient.status)
        .query(
            "UPDATE activityPatient SET activityId = @activityId, patientId = @patientId, status = @status WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM activityPatient WHERE id = @id");
    return result;
}

export default { getAll, getById, create, update, remove };