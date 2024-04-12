import AnswerRepository from "../repositories/Answer.repository.js";

async function getAll() {
    return await AnswerRepository.getAll();
}

async function getById(id) {
    return await AnswerRepository.getById(id);
}

async function create(answer) {
    return await AnswerRepository.create(answer);
}

async function update(id, answer) {
    return await AnswerRepository.update(id, answer);
}

async function remove(id) {
    return await AnswerRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};