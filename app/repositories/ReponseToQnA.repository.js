import { sql } from "../../config/db.js";
import ReponseToQnA from "../models/ReponseToQnA.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM reponseToQnA");
    const reponseToQnAs = result.recordset.map((record) => {
        return new ReponseToQnA(record.id, record.patientId, record.questionId, record.activityId, record.response, record.status);
    });
    return reponseToQnAs;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM reponseToQnA WHERE id = @id");
    const record = result.recordset[0];
    return new ReponseToQnA(record.id, record.patientId, record.questionId, record.activityId, record.response, record.status);
}

async function create(reponseToQnA) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("patientId", sql.Int, reponseToQnA.patientId)
        .input("questionId", sql.Int, reponseToQnA.questionId)
        .input("activityId", sql.Int, reponseToQnA.activityId)
        .input("response", sql.NVarChar, reponseToQnA.response)
        .input("status", sql.NVarChar, reponseToQnA.status)
        .query(
            "INSERT INTO reponseToQnA (patientId, questionId, activityId, response, status) VALUES (@patientId, @questionId, @activityId, @response, @status)"
        );
    return result;
}

async function update(id, reponseToQnA) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("patientId", sql.Int, reponseToQnA.patientId)
        .input("questionId", sql.Int, reponseToQnA.questionId)
        .input("activityId", sql.Int, reponseToQnA.activityId)
        .input("response", sql.NVarChar, reponseToQnA.response)
        .input("status", sql.NVarChar, reponseToQnA.status)
        .query(
            "UPDATE reponseToQnA SET patientId = @patientId, questionId = @questionId, activityId = @activityId, response = @response, status = @status WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM reponseToQnA WHERE id = @id");
    return result;
}

// get reponseToQnAs by patientId
async function getByPatientId(patientId) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("patientId", sql.Int, patientId)
        .query("SELECT * FROM reponseToQnA WHERE patientId = @patientId");
    const reponseToQnAs = result.recordset.map((record) => {
        return new ReponseToQnA(record.id, record.patientId, record.questionId, record.activityId, record.response, record.status);
    });
    return reponseToQnAs;
}

// get reponseToQnAs by questionId
async function getByQuestionId(questionId) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("questionId", sql.Int, questionId)
        .query("SELECT * FROM reponseToQnA WHERE questionId = @questionId");
    const reponseToQnAs = result.recordset.map((record) => {
        return new ReponseToQnA(record.id, record.patientId, record.questionId, record.activityId, record.response, record.status);
    });
    return reponseToQnAs;
}

// get reponseToQnAs by activityId
async function getByActivityId(activityId) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("activityId", sql.Int, activityId)
        .query("SELECT * FROM reponseToQnA WHERE activityId = @activityId");
    const reponseToQnAs = result.recordset.map((record) => {
        return new ReponseToQnA(record.id, record.patientId, record.questionId, record.activityId, record.response, record.status);
    });
    return reponseToQnAs;
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    getByActivityId
};
