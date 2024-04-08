import { sql } from "../../config/db.js";
import PatientHearingLevel from "../models/PatientHearingLevel.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM patientHearingLevel");
    const patientHearingLevels = result.recordset.map((record) => {
        return new PatientHearingLevel(record.id, record.patientId, record.hearingLevelId);
    });
    return patientHearingLevels;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM patientHearingLevel WHERE id = @id");
    const record = result.recordset[0];
    return new PatientHearingLevel(record.id, record.patientId, record.hearingLevelId);
}

async function create(patientHearingLevel) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("patientId", sql.Int, patientHearingLevel.patientId)
        .input("hearingLevelId", sql.Int, patientHearingLevel.hearingLevelId)
        .query(
            "INSERT INTO patientHearingLevel (patientId, hearingLevelId) VALUES (@patientId, @hearingLevelId)"
        );
    return result;
}

async function update(id, patientHearingLevel) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("patientId", sql.Int, patientHearingLevel.patientId)
        .input("hearingLevelId", sql.Int, patientHearingLevel.hearingLevelId)
        .query(
            "UPDATE patientHearingLevel SET patientId = @patientId, hearingLevelId = @hearingLevelId WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM patientHearingLevel WHERE id = @id");
    return result;
}

export default { getAll, getById, create, update, remove };