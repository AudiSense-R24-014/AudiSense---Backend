import { sql } from "../../config/db.js";
import Person from "../models/Person.model.js";

async function getAll() {
    const pool = await sql.connect();
    const result = await pool.request().query("SELECT * FROM person");
    const persons = result.recordset.map((record) => {
        return new Person(record.id, record.name, record.age, record.email);
    });
    return persons;
}

async function getById(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("SELECT * FROM person WHERE id = @id");
    const record = result.recordset[0];
    return new Person(record.id, record.name, record.age, record.email);
}

async function create(person) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("name", sql.VarChar, person.name)
        .input("age", sql.Int, person.age)
        .input("email", sql.VarChar, person.email)
        .query(
            "INSERT INTO person (name, age, email) VALUES (@name, @age, @email)"
        );
    return result;
}

async function update(id, person) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .input("name", sql.VarChar, person.name)
        .input("age", sql.Int, person.age)
        .input("email", sql.VarChar, person.email)
        .query(
            "UPDATE person SET name = @name, age = @age, email = @email WHERE id = @id"
        );
    return result;
}

async function remove(id) {
    const pool = await sql.connect();
    const result = await pool
        .request()
        .input("id", sql.Int, id)
        .query("DELETE FROM person WHERE id = @id");
    return result;
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};