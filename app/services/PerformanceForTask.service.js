import PerformanceForTaskRepository from "../repositories/PerformanceForTask.repository.js";

async function getAll() {
    return await PerformanceForTaskRepository.getAll();
}

async function getById(id) {
    return await PerformanceForTaskRepository.getById(id);
}

async function create(performanceForTask) {
    return await PerformanceForTaskRepository.create(performanceForTask);
}

async function update(id, performanceForTask) {
    return await PerformanceForTaskRepository.update(id, performanceForTask);
}

async function remove(id) {
    return await PerformanceForTaskRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};