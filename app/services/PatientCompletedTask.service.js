import PatientCompletedTaskRepository from '../repositories/PatientCompletedTask.repository.js';

async function getAll() {
    return await PatientCompletedTaskRepository.getAll();
}

async function getById(id) {
    return await PatientCompletedTaskRepository.getById(id);
}

async function create(patientCompletedTask) {
    return await PatientCompletedTaskRepository.create(patientCompletedTask);
}

async function update(id, patientCompletedTask) {
    return await PatientCompletedTaskRepository.update(id, patientCompletedTask);
}

async function remove(id) {
    return await PatientCompletedTaskRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};