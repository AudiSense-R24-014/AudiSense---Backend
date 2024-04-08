import TherapistPatientRepository from '../repositories/TherapistPatient.repository.js';

async function getAll() {
    return await TherapistPatientRepository.getAll();
}

async function getById(id) {
    return await TherapistPatientRepository.getById(id);
}

async function create(therapistPatient) {
    return await TherapistPatientRepository.create(therapistPatient);
}

async function update(id, therapistPatient) {
    return await TherapistPatientRepository.update(id, therapistPatient);
}

async function remove(id) {
    return await TherapistPatientRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};