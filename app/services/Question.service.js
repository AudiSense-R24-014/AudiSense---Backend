import QuestionRepository from "../repositories/Question.repository.js";

async function getAll() {
    return await QuestionRepository.getAll();
}

async function getById(id) {
    return await QuestionRepository.getById(id);
}

async function create(question) {
    return await QuestionRepository.create(question);
}

async function update(id, question) {
    return await QuestionRepository.update(id, question);
}

async function remove(id) {
    return await QuestionRepository.remove(id);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove
};