import { sql } from "../../config/db.js";
import Question from "../models/Question.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM question");
    const questions = result.recordset.map((record) => {
        return new Question(record.id, record.activityId, record.question);
    });
    return questions;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM question WHERE id = @id");
    const record = result.recordset[0];
    return new Question(record.id, record.activityId, record.question);
}

async function create(question) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("activityId", sql.Int, question.activityId)
        .input("question", sql.NVarChar, question.question)
        .query(
            "INSERT INTO question (activityId, question) VALUES (@activityId, @question)"
        );
    return result;
}

async function update(id, question) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("activityId", sql.Int, question.activityId)
        .input("question", sql.NVarChar, question.question)
        .query(
            "UPDATE question SET activityId = @activityId, question = @question WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM question WHERE id = @id");
    return result;
}

// get questions by activityId
async function getByActivityId(activityId) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("activityId", sql.Int, activityId)
        .query("SELECT * FROM question WHERE activityId = @activityId");
    const questions = result.recordset.map((record) => {
        return new Question(record.id, record.activityId, record.question);
    });
    return questions;
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    getByActivityId
};