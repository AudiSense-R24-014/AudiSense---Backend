import PersonRepository from "../repositories/Person.repository.js";

async function getAll() {
    return await PersonRepository.getAll();
}

async function getById(id) {
    return await PersonRepository.getById(id);
}

async function create(person) {
    return await PersonRepository.create(person);
}

async function update(id, person) {
    return await PersonRepository.update(id, person);
}

async function remove(id) {
    return await PersonRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};