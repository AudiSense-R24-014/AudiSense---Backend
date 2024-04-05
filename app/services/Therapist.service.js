import TherapistRepository from "../repositories/Therapist.repository.js";

async function getAll() {
    return await TherapistRepository.getAll();
}

async function getById(id) {
    return await TherapistRepository.getById(id);
}

async function create(therapist) {
    return await TherapistRepository.create(therapist);
}

async function update(id, therapist) {
    return await TherapistRepository.update(id, therapist);
}

async function remove(id) {
    return await TherapistRepository.remove(id);
}

async function login(email, password) {
    return await TherapistRepository.login(email, password);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    login
};
