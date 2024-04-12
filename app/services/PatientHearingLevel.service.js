import PatientHearingLevelRepository from "../repositories/PatientHearingLevel.repository.js";

async function getAll() {
    return await PatientHearingLevelRepository.getAll();
}

async function getById(id) {
    return await PatientHearingLevelRepository.getById(id);
}

async function create(patientHearingLevel) {
    return await PatientHearingLevelRepository.create(patientHearingLevel);
}

async function update(id, patientHearingLevel) {
    return await PatientHearingLevelRepository.update(id, patientHearingLevel);
}

async function remove(id) {
    return await PatientHearingLevelRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};