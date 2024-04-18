import { sql } from "../../config/db.js";
import PatientCompletedTask from "../models/PatientCompletedTask.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM patientCompletedTask");
    const patientCompletedTasks = result.recordset.map((record) => {
        return new PatientCompletedTask(record.id, record.taskId, record.completedTask);
    });
    return patientCompletedTasks;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM patientCompletedTask WHERE id = @id");
    const record = result.recordset[0];
    return new PatientCompletedTask(record.id, record.taskId, record.completedTask);
}

async function create(patientCompletedTask) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("taskId", sql.Int, patientCompletedTask.taskId)
        .input("completedTask", sql.Bit, patientCompletedTask.completedTask)
        .query(
            "INSERT INTO patientCompletedTask (taskId, completedTask) VALUES (@taskId, @completedTask)"
        );
    return result;
}

async function update(id, patientCompletedTask) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("taskId", sql.Int, patientCompletedTask.taskId)
        .input("completedTask", sql.Bit, patientCompletedTask.completedTask)
        .query(
            "UPDATE patientCompletedTask SET taskId = @taskId, completedTask = @completedTask WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM patientCompletedTask WHERE id = @id");
    return result;
}

export default { getAll, getById, create, update, remove };
