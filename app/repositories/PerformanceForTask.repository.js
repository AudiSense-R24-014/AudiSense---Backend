import { sql } from "../../config/db.js";
import PerformanceForTask from "../models/PerformanceForTask.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM performanceForTask");
    const performanceForTasks = result.recordset.map((record) => {
        return new PerformanceForTask(record.id, record.apId, record.noOfAttempts);
    });
    return performanceForTasks;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM performanceForTask WHERE id = @id");
    const record = result.recordset[0];
    return new PerformanceForTask(record.id, record.apId, record.noOfAttempts);
}

async function create(performanceForTask) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("apId", sql.Int, performanceForTask.apId)
        .input("noOfAttempts", sql.Int, performanceForTask.noOfAttempts)
        .query(
            "INSERT INTO performanceForTask (apId, noOfAttempts) VALUES (@apId, @noOfAttempts)"
        );
    return result;
}

async function update(id, performanceForTask) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("apId", sql.Int, performanceForTask.apId)
        .input("noOfAttempts", sql.Int, performanceForTask.noOfAttempts)
        .query(
            "UPDATE performanceForTask SET apId = @apId, noOfAttempts = @noOfAttempts WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM performanceForTask WHERE id = @id");
    return result;
}

export default { getAll, getById, create, update, remove };

