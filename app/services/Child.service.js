import ChildRepository from "../repositories/Child.repository.js";

async function getAll() {
    return await ChildRepository.getAll();
}

async function getById(id) {
    return await ChildRepository.getById(id);
}

async function create(child) {
    return await ChildRepository.create(child);
}

async function update(id, child) {
    return await ChildRepository.update(id, child);
}

async function remove(id) {
    return await ChildRepository.remove(id);
}

async function login(email, password) {
    return await ChildRepository.login(email, password);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    login
};