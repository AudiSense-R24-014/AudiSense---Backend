import AnswerService from "../services/Answer.service.js";

async function getAll(req, res) {
    try {
        const answers = await AnswerService.getAll();
        res.status(200).json(answers);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const answer = await AnswerService.getById(id);
        res.status(200).json(answer);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const answer = req.body;
        await AnswerService.create(answer);
        res.status(201).send("Answer created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const answer = req.body;
        await AnswerService.update(id, answer);
        res.status(200).send("Answer updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await AnswerService.remove(id);
        res.status(200).send("Answer deleted");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getByQuestionId(req, res) {
    try {
        const questionId = req.params.questionId;
        const answers = await AnswerService.getByQuestionId(questionId);
        res.status(200).json(answers);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

export default {
    getAll,
    getById,
    create,
    update,
    remove,
    getByQuestionId
};