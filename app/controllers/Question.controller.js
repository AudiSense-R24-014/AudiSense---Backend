import QuestionService from "../services/Question.service.js";

async function getAll(req, res) {
    try {
        const questions = await QuestionService.getAll();
        res.status(200).json(questions);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getById(req, res) {
    try {
        const id = req.params.id;
        const question = await QuestionService.getById(id);
        res.status(200).json(question);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function create(req, res) {
    try {
        const question = req.body;
        await QuestionService.create(question);
        res.status(201).send("Question created");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function update(req, res) {
    try {
        const id = req.params.id;
        const question = req.body;
        await QuestionService.update(id, question);
        res.status(200).send("Question updated");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req, res) {
    try {
        const id = req.params.id;
        await QuestionService.remove(id);
        res.status(200).send("Question deleted");
    }
    catch (err) {
        res.status(500).send(err.message);
    }
}

async function getByActivityId(req, res) {
    try {
        const activityId = req.params.activityId;
        const questions = await QuestionService.getByActivityId(activityId);
        res.status(200).json(questions);
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
    getByActivityId
};