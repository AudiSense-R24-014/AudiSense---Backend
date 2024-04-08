import { sql } from "../../config/db.js";
import Activity from "../models/Activity.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM activity");
    const activities = result.recordset.map((record) => {
        return new Activity(record.id, record.name, record.description, record.AVTLevel, record.difficulty);
    });
    return activities;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM activity WHERE id = @id");
    const record = result.recordset[0];
    return new Activity(record.id, record.name, record.description, record.AVTLevel, record.difficulty);
}

async function create(activity) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("name", sql.NVarChar, activity.name)
        .input("description", sql.NVarChar, activity.description)
        .input("AVTLevel", sql.Int, activity.AVTLevel)
        .input("difficulty", sql.Int, activity.difficulty)
        .query(
            "INSERT INTO activity (name, description, AVTLevel, difficulty) VALUES (@name, @description, @AVTLevel, @difficulty)"
        );
    return result;
}

async function update(id, activity) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("name", sql.NVarChar, activity.name)
        .input("description", sql.NVarChar, activity.description)
        .input("AVTLevel", sql.Int, activity.AVTLevel)
        .input("difficulty", sql.Int, activity.difficulty)
        .query(
            "UPDATE activity SET name = @name, description = @description, AVTLevel = @AVTLevel, difficulty = @difficulty WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM activity WHERE id = @id");
    return result;
}

export default { getAll, getById, create, update, remove };