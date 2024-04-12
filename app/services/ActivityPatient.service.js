import ActivityPatientRepository from "../repositories/ActivityPatient.repository.js";

async function getAll() {
    return await ActivityPatientRepository.getAll();
}

async function getById(id) {
    return await ActivityPatientRepository.getById(id);
}

async function create(activityPatient) {
    return await ActivityPatientRepository.create(activityPatient);
}

async function update(id, activityPatient) {
    return await ActivityPatientRepository.update(id, activityPatient);
}

async function remove(id) {
    return await ActivityPatientRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
}