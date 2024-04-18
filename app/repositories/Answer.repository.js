import { sql } from "../../config/db.js";
import Answer from "../models/Answer.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM answer");
    const answers = result.recordset.map((record) => {
        return new Answer(record.id, record.questionId, record.text, record.isCorrect);
    });
    return answers;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM answer WHERE id = @id");
    const record = result.recordset[0];
    return new Answer(record.id, record.questionId, record.text, record.isCorrect);
}

async function create(answer) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("questionId", sql.Int, answer.questionId)
        .input("text", sql.NVarChar, answer.text)
        .input("isCorrect", sql.Bit, answer.isCorrect)
        .query(
            "INSERT INTO answer (questionId, text, isCorrect) VALUES (@questionId, @text, @isCorrect)"
        );
    return result;
}

async function update(id, answer) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("questionId", sql.Int, answer.questionId)
        .input("text", sql.NVarChar, answer.text)
        .input("isCorrect", sql.Bit, answer.isCorrect)
        .query(
            "UPDATE answer SET questionId = @questionId, text = @text, isCorrect = @isCorrect WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM answer WHERE id = @id");
    return result;
}

// get answers by questionId
async function getByQuestionId(questionId) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("questionId", sql.Int, questionId)
        .query("SELECT * FROM answer WHERE questionId = @questionId");
    const answers = result.recordset.map((record) => {
        return new Answer(record.id, record.questionId, record.text, record.isCorrect);
    });
    return answers;
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    getByQuestionId
};