import ReponseToQnARepository from '../repositories/ReponseToQnA.repository.js';

async function getAll() {
    return await ReponseToQnARepository.getAll();
}

async function getById(id) {
    return await ReponseToQnARepository.getById(id);
}

async function create(reponseToQnA) {
    return await ReponseToQnARepository.create(reponseToQnA);
}

async function update(id, reponseToQnA) {
    return await ReponseToQnARepository.update(id, reponseToQnA);
}

async function remove(id) {
    return await ReponseToQnARepository.remove(id);
}

async function getByActivityId(activityId) {
    return await ReponseToQnARepository.getByActivityId(activityId);
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    getByActivityId
};
