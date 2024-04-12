import ActivityRepository from "../repositories/Activity.repository.js";

async function getAll() {
    return await ActivityRepository.getAll();
}

async function getById(id) {
    return await ActivityRepository.getById(id);
}

async function create(activity) {
    return await ActivityRepository.create(activity);
}

async function update(id, activity) {
    return await ActivityRepository.update(id, activity);
}

async function remove(id) {
    return await ActivityRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};