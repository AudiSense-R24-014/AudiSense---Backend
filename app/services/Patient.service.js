import PatientRepository from "../repositories/Patient.repository.js";

async function getAll() {
    return await PatientRepository.getAll();
}

async function getById(id) {
    return await PatientRepository.getById(id);
}

async function create(child) {
    return await PatientRepository.create(child);
}

async function update(id, child) {
    return await PatientRepository.update(id, child);
}

async function remove(id) {
    return await PatientRepository.remove(id);
}

async function login(email, password) {
    return await PatientRepository.login(email, password);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    login
};